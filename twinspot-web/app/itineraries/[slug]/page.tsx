import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getItineraryBySlug,
  itineraries,
  itineraryCategoryLabels,
  type Itinerary,
} from "@/lib/itineraries/itineraries";
import { pickImageFromFolders } from "@/lib/photoPicker";
import styles from "../itineraryDetailStitch.module.css";

const DEFAULT_FOLDERS = ["wildlife", "birding", "landscapes"];

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

function resolvePhotoFolders(itinerary: Itinerary): string[] {
  return itinerary.suggestedPhotoCategories.length > 0
    ? itinerary.suggestedPhotoCategories
    : DEFAULT_FOLDERS;
}

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.id }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    return { title: "Itinerary not found" };
  }

  return {
    title: `${itinerary.title} | Twinspot Itineraries`,
    description: itinerary.shortSummary,
  };
}

export default async function ItineraryDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    notFound();
  }

  const photoFolders = resolvePhotoFolders(itinerary);
  const heroImage = pickImageFromFolders({
    folders: photoFolders,
    seed: `${itinerary.id}-hero`,
    fallbackFolders: DEFAULT_FOLDERS,
  });

  const galleryImages = [1, 2, 3].map((index) =>
    pickImageFromFolders({
      folders: photoFolders,
      seed: `${itinerary.id}-gallery-${index}`,
      fallbackFolders: ["wildlife", "birding", "landscapes"],
    })
  );

  const relatedJourneys = itineraries
    .filter((candidate) => candidate.id !== itinerary.id)
    .slice(0, 3)
    .map((candidate) => ({
      ...candidate,
      image: pickImageFromFolders({
        folders: ["wildlife", "birding"],
        seed: `${candidate.id}-more-explore`,
        fallbackFolders: ["landscapes"],
      }),
    }));

  const bestMonths = itinerary.start && itinerary.end
    ? `${itinerary.start} – ${itinerary.end}`
    : "Year-round / seasonal advice";

  const showDetailTags = ["safari", "birding", "gorilla"].includes(itinerary.category);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image src={heroImage} alt={itinerary.title} fill priority className={styles.heroImage} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroPill}>{itineraryCategoryLabels[itinerary.category]}</p>
            <h1>{itinerary.title}</h1>
            <p className={styles.heroSummary}>{itinerary.shortSummary}</p>

            <div className={styles.metaRow}>
              <div>
                <span>Duration</span>
                <p>{itinerary.duration}</p>
              </div>
              <div>
                <span>Start</span>
                <p>{itinerary.start ?? "Flexible"}</p>
              </div>
              <div>
                <span>Best months</span>
                <p>{bestMonths}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <div className={styles.sectionHead}>
            <p>Journey Highlights</p>
            <h2>What makes this expedition special</h2>
          </div>

          <ul className={styles.highlightsGrid}>
            {itinerary.highlights.map((highlight) => (
              <li key={highlight}>
                <span className={styles.highlightIcon} aria-hidden="true">
                  ✦
                </span>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.contentWrap}>
          <div className={styles.mainColumn}>
            <section className={styles.sectionCard}>
              <div className={styles.sectionHead}>
                <p>Daily Expedition Plan</p>
                <h2>Day-by-day itinerary</h2>
              </div>

              <div className={styles.planList}>
                {itinerary.itineraryBreakdown.map((day, index) => (
                  <details
                    key={`${day.dayLabel}-${day.location}`}
                    className={styles.dayCard}
                    open={index === 0}
                  >
                    <summary>
                      <span>{day.dayLabel}</span>
                      <h3>{day.location}</h3>
                    </summary>
                    <div className={styles.dayBody}>
                      <p>{day.details}</p>
                      {index === 0 && showDetailTags && (
                        <div className={styles.tagRow}>
                          <span>Accommodation: curated</span>
                          <span>Meals: full-board</span>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className={styles.sectionCard}>
              <div className={styles.sectionHead}>
                <p>Journey Gallery</p>
                <h2>Moments from this route</h2>
              </div>

              <div className={styles.galleryGrid}>
                {galleryImages.map((image, index) => (
                  <article key={image + index} className={styles.galleryCard}>
                    <Image
                      src={image}
                      alt={`${itinerary.title} gallery image ${index + 1}`}
                      fill
                      className={styles.galleryImage}
                    />
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.sectionCard}>
              <div className={styles.sectionHead}>
                <p>Planning Essentials</p>
                <h2>What&apos;s included / excluded</h2>
              </div>

              <div className={styles.inclusionGrid}>
                <article className={styles.inclusionCard}>
                  <h3>Included</h3>
                  <ul>
                    <li>Private 4x4 safari vehicle and expert guide</li>
                    <li>Park / conservancy fees (where applicable)</li>
                    <li>Tailored itinerary planning and briefing</li>
                    <li>Accommodations as specified</li>
                    <li>Bottled water on game drives</li>
                  </ul>
                </article>

                <article className={styles.inclusionCard}>
                  <h3>Excluded</h3>
                  <ul>
                    <li>International flights</li>
                    <li>Entry visas and travel insurance</li>
                    <li>Tips / gratuities</li>
                    <li>Personal expenses</li>
                  </ul>
                </article>
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.reserveCard}>
              <p>Reserve Your Spot</p>
              <h2>Request this journey plan</h2>
              <form action="/contact" method="get" className={styles.reserveForm}>
                <input type="hidden" name="itinerary" value={itinerary.id} />
                <input type="hidden" name="channel" value="itinerary-request" />

                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="name" type="text" required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={`I would like the full itinerary details for ${itinerary.title}.`}
                />

                <button type="submit" className={styles.primaryCta}>
                  Request Full Itinerary PDF
                </button>
              </form>

              <div className={styles.secondaryCtas}>
                <Link href={`/contact?itinerary=${itinerary.id}&channel=whatsapp`}>
                  WhatsApp Expert
                </Link>
                <Link href={`/contact?itinerary=${itinerary.id}&channel=email`}>
                  Email Concierge
                </Link>
              </div>
            </section>
          </aside>
        </section>

        <section className={styles.moreSection}>
          <div className={styles.sectionHead}>
            <p>More to explore</p>
            <h2>Continue your East Africa journey</h2>
          </div>

          <div className={styles.moreGrid}>
            {relatedJourneys.map((item) => (
              <article key={item.id} className={styles.moreCard}>
                <div className={styles.moreImageWrap}>
                  <Image src={item.image} alt={item.title} fill className={styles.moreImage} />
                </div>
                <div className={styles.moreBody}>
                  <h3>{item.title}</h3>
                  <p>{item.duration}</p>
                  <Link href={`/itineraries/${item.id}`}>Explore Journey</Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.moreAllLinkWrap}>
            <Link href="/itineraries" className={styles.moreAllLink}>
              View All Itineraries
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
