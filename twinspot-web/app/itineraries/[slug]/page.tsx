import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getItineraryBySlug, itineraries, itineraryCategoryLabels } from "@/lib/itineraries/itineraries";
import { pickDeterministicPhoto } from "@/lib/photos";
import styles from "../itineraryDetail.module.css";

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    notFound();
  }

  const heroImage = pickDeterministicPhoto(itinerary.suggestedPhotoCategories, `${itinerary.id}-hero`);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image src={heroImage} alt={itinerary.title} fill priority className={styles.heroImage} />
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <p>{itineraryCategoryLabels[itinerary.category]}</p>
            <h1>{itinerary.title}</h1>
            <p>{itinerary.shortSummary}</p>
          </div>
        </section>

        <section className={styles.contentWrap}>
          <div className={styles.mainContent}>
            <div className={styles.factRow}>
              <div>
                <span>Duration</span>
                <p>{itinerary.duration}</p>
              </div>
              {itinerary.start && (
                <div>
                  <span>Starts</span>
                  <p>{itinerary.start}</p>
                </div>
              )}
              {itinerary.end && (
                <div>
                  <span>Ends</span>
                  <p>{itinerary.end}</p>
                </div>
              )}
            </div>

            <section className={styles.section}>
              <h2>Highlights</h2>
              <ul>
                {itinerary.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Day-by-day itinerary</h2>
              <div className={styles.timeline}>
                {itinerary.itineraryBreakdown.map((day) => (
                  <details key={`${day.dayLabel}-${day.location}`} className={styles.dayCard} open>
                    <summary>
                      <span>{day.dayLabel}</span>
                      <h3>{day.location}</h3>
                    </summary>
                    <p>{day.details}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className={styles.stickyCta}>
            <p>Ready to travel this route?</p>
            <h3>Request this itinerary</h3>
            <p>We can tailor dates, pacing, accommodation style, and specialist guiding.</p>
            <Link href={`/contact?itinerary=${itinerary.id}`} className={styles.ctaButton}>
              Request this itinerary
            </Link>
            <Link href="/itineraries" className={styles.secondaryLink}>
              Browse more itineraries
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
