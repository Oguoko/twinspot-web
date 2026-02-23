import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";
import { getDestination, getRelatedDestinations } from "@/lib/data/destinations";
import { getRelatedPosts } from "@/lib/data/relatedPosts";
import { pickImageFromFolders } from "@/lib/photoPicker";
import styles from "./destination.module.css";

const FALLBACK_TAGS = [
  "Rare Birds",
  "Iconic Wildlife",
  "Scenic Landscapes",
  "Photography",
  "Luxury Camping",
];

type DestinationPageProps = {
  params: { slug: string };
};

export default async function DestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestination(params.slug);
  if (!destination) notFound();

  const relatedPosts = await getRelatedPosts(destination.slug);
  const relatedDestinations = await getRelatedDestinations(destination.slug, destination.region);

  const heroImage =
    destination.heroImage?.imageUrl ||
    pickImageFromFolders({
      folders: ["destinations", "landscapes"],
      seed: `dest-${destination.slug}-hero`,
      fallbackFolders: ["wildlife", "birding"],
    });

  const bestFor = destination.highlights?.length ? destination.highlights : FALLBACK_TAGS;

  const topExperiences =
    destination.seasons && destination.seasons.length > 0
      ? destination.seasons.slice(0, 3).map((season, index) => ({
          title: season.months,
          description: season.notes,
          image: pickImageFromFolders({
            folders: ["wildlife", "birding", "landscapes"],
            seed: `dest-${destination.slug}-experience-${index}`,
          }),
        }))
      : [0, 1, 2].map((index) => ({
          title: `Signature ${destination.title} Experience ${index + 1}`,
          description:
            "Carefully paced wildlife viewing, expert guiding, and immersive moments designed around light and movement.",
          image: pickImageFromFolders({
            folders: ["wildlife", "birding", "landscapes"],
            seed: `dest-${destination.slug}-experience-${index}`,
          }),
        }));

  const itineraryCards =
    relatedDestinations.length > 0
      ? relatedDestinations.slice(0, 2).map((item, index) => ({
          title: `${destination.title} + ${item.title}`,
          description: "A balanced route blending flagship habitats with quieter specialist corners.",
          href: `/destinations/${item.slug}`,
          image:
            item.heroImage?.imageUrl ||
            pickImageFromFolders({
              folders: ["wildlife", "birding"],
              seed: `dest-${destination.slug}-itinerary-${index}`,
            }),
        }))
      : [0, 1].map((index) => ({
          title: `${destination.title} Curated Route ${index + 1}`,
          description:
            "A draft itinerary focused on seasonal highlights, comfortable logistics, and photographic opportunity.",
          href: `/contact?destination=${destination.slug}`,
          image: pickImageFromFolders({
            folders: ["wildlife", "birding"],
            seed: `dest-${destination.slug}-itinerary-${index}`,
          }),
        }));

  const bestTimeText = destination.seasons?.length
    ? destination.seasons
        .slice(0, 2)
        .map((season) => season.months)
        .join(" • ")
    : "Year-round, with strongest sightings around shoulder seasons and migration windows.";

  const practicalMapImage = pickImageFromFolders({
    folders: ["landscapes", "destinations"],
    seed: `dest-${destination.slug}-map`,
  });

  const ctaImage = pickImageFromFolders({
    folders: ["landscapes"],
    seed: `dest-${destination.slug}-cta`,
  });

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image src={heroImage} alt={destination.title} fill priority className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroPill}>{[destination.region, destination.country].filter(Boolean).join(" · ")}</p>
          <h1>{destination.title}</h1>
          <p>{destination.summary}</p>
        </div>
      </section>

      <section className={styles.introSection}>
        <article className={styles.introBody}>
          <h2>An editor’s introduction</h2>
          <p>{destination.summary}</p>
          <p>
            Designed for travelers who care about context as much as sightings, {destination.title} rewards a slower
            rhythm with richer encounters, nuanced guiding, and beautiful transitions between habitats.
          </p>
        </article>

        <aside className={styles.bestForCard}>
          <h3>Best For</h3>
          <div className={styles.tagList}>
            {bestFor.map((tag) => (
              <span key={tag} className={styles.tagPill}>
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Top Experiences</h2>
        </div>
        <div className={styles.cardGridThree}>
          {topExperiences.map((item) => (
            <article key={item.title} className={styles.experienceCard}>
              <div className={styles.cardImageWrap}>
                <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Recommended Itineraries</h2>
        </div>
        <div className={styles.cardGridTwo}>
          {itineraryCards.map((item) => (
            <Link key={item.title} href={item.href} className={styles.itineraryCard}>
              <div className={styles.cardImageWrap}>
                <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Field Notes from {destination.title}</h2>
          </div>
          <div className={styles.cardGridThree}>
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.fieldNoteCard}>
                {post.heroImage?.imageUrl && (
                  <div className={styles.cardImageWrap}>
                    <Image src={post.heroImage.imageUrl} alt={post.heroImage.alt || post.title} fill className={styles.cardImage} />
                  </div>
                )}
                <h3>{post.title}</h3>
                {post.excerpt && <p>{post.excerpt}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Practical Information</h2>
        </div>
        <div className={styles.practicalGrid}>
          <article className={styles.practicalCard}>
            <h3>Best time to visit</h3>
            <p>{bestTimeText}</p>
          </article>
          <article className={styles.practicalCard}>
            <h3>Logistics</h3>
            <p>Most itineraries combine light aircraft hops and scenic overland legs for smooth transitions.</p>
          </article>
          <article className={styles.practicalCard}>
            <h3>Health &amp; Safety</h3>
            <p>We provide pre-departure briefs covering vaccination guidance, medical access, and camp safety.</p>
          </article>
          <article className={styles.practicalCard}>
            <h3>Region map</h3>
            <div className={styles.mapPlaceholder}>
              <Image src={practicalMapImage} alt={`${destination.title} region overview`} fill className={styles.cardImage} />
            </div>
          </article>
        </div>
      </section>

      {relatedDestinations.length > 0 && (
        <section className={styles.sliderSection}>
          <RelatedDestinationsSlider destinations={relatedDestinations} />
        </section>
      )}

      <section className={styles.finalCta}>
        <Image src={ctaImage} alt="Landscape backdrop" fill className={styles.ctaImage} />
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2>Ready to shape your {destination.title} journey?</h2>
          <p>Tell us your timing, interests, and pace—we will design a route around what matters most to you.</p>
          <div className={styles.ctaButtons}>
            <Link href={`/contact?destination=${destination.slug}`} className={styles.primaryButton}>
              Start Designing
            </Link>
            <Link href={`/contact?brochure=1&destination=${destination.slug}`} className={styles.secondaryButton}>
              Request a Brochure
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
