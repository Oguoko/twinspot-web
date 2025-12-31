import { notFound } from "next/navigation";
import Image from "next/image";

import { getDestination } from "@/lib/data/destinations";
import { getRelatedPosts } from "@/lib/data/relatedPosts";
import { getRelatedDestinations } from "@/lib/data/destinations";

import EditorialIntro from "@/components/EditorialIntro";
import ThingsToKnow from "@/components/ThingsToKnow";
import EditorialCTA from "@/components/EditorialCTA";
import RelatedPosts from "@/components/RelatedPosts";
import FaqSection from "@/components/FaqSection";
import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";

import styles from "./destination.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const destination = await getDestination(slug);
  if (!destination) notFound();

  const relatedPosts = await getRelatedPosts(slug);

  const relatedDestinations = await getRelatedDestinations(
    destination.slug,
    destination.region
  );

  /**
   * FIX:
   * heroImage only supports `imageUrl`
   * `url` does NOT exist on the type
   */
  const heroSrc = destination.heroImage?.imageUrl ?? null;

  return (
    <main className={styles.page}>
      {/* ===============================
         HERO (BOXED IMAGE)
      =============================== */}
      <section className={`${styles.hero} ${styles.containerWide}`}>
        {heroSrc && (
          <div className={styles.heroImage}>
            <Image
              src={heroSrc}
              alt={destination.heroImage?.alt || destination.title}
              width={1280}
              height={480}
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        )}

        <h1 className={styles.heroTitle}>{destination.title}</h1>

        {(destination.region || destination.country) && (
          <p className={styles.heroMeta}>
            {[destination.region, destination.country]
              .filter(Boolean)
              .join(" • ")}
          </p>
        )}
      </section>

      {/* ===============================
         EDITORIAL INTRO
      =============================== */}
      <section className={`${styles.section} ${styles.container}`}>
        <div className={styles.editorialIntro}>
          <EditorialIntro
            title={`Discover ${destination.title}`}
            intro={destination.summary}
            body="This destination rewards slow travel and careful exploration, offering some of East Africa’s most consistent birding and wildlife experiences."
          />
        </div>
      </section>

      {/* ===============================
         THINGS TO KNOW
      =============================== */}
      {Array.isArray(destination.thingsToKnow) &&
        destination.thingsToKnow.length > 0 && (
          <section className={`${styles.sectionTight} ${styles.container}`}>
            <ThingsToKnow items={destination.thingsToKnow} />
          </section>
        )}

      {/* ===============================
         FAQ
      =============================== */}
      {Array.isArray(destination.faq) && destination.faq.length > 0 && (
        <section className={`${styles.sectionTight} ${styles.container}`}>
          <FaqSection items={destination.faq} />
        </section>
      )}

      {/* ===============================
         RELATED DESTINATIONS
      =============================== */}
      {relatedDestinations.length > 0 && (
        <section className={`${styles.section} ${styles.containerWide}`}>
          <RelatedDestinationsSlider destinations={relatedDestinations} />
        </section>
      )}

      {/* ===============================
         RELATED STORIES
      =============================== */}
      {relatedPosts.length > 0 && (
        <section className={`${styles.section} ${styles.container}`}>
          <div className={styles.relatedWrap}>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}

      {/* ===============================
         CTA
      =============================== */}
      <section className={styles.ctaWrap}>
        <EditorialCTA destinationTitle={destination.title} />
      </section>

      {/* ===============================
         PAGE END (FOOTER HANDOFF)
      =============================== */}
      <div className={styles.pageEnd} />
    </main>
  );
}
