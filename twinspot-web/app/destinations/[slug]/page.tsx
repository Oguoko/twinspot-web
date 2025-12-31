import { notFound } from "next/navigation";
import Image from "next/image";

import { getDestination, getRelatedDestinations } from "@/lib/data/destinations";
import { getRelatedPosts } from "@/lib/data/relatedPosts";

import EditorialIntro from "@/components/EditorialIntro";
import ThingsToKnow from "@/components/ThingsToKnow";
import EditorialCTA from "@/components/EditorialCTA";
import RelatedPosts from "@/components/RelatedPosts";
import FaqSection from "@/components/FaqSection";
import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";

import styles from "./destination.module.css";

type PageProps = {
  params: { slug: string };
};

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = params;
  if (!slug) notFound();

  const destination = await getDestination(slug);
  if (!destination) notFound();

  const relatedPosts = await getRelatedPosts(slug);

  const relatedDestinations = await getRelatedDestinations(
    destination.slug,
    destination.region
  );

  const heroSrc = destination.heroImage?.imageUrl ?? null;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`${styles.hero} ${styles.containerWide}`}>
        {heroSrc && (
          <div className={styles.heroImage}>
            <Image
              src={heroSrc}
              alt={destination.heroImage?.alt || destination.title}
              width={1280}
              height={480}
              priority
            />
          </div>
        )}

        <h1 className={styles.heroTitle}>{destination.title}</h1>
      </section>

      {/* INTRO */}
      <section className={`${styles.section} ${styles.container}`}>
        <EditorialIntro
          title={`Discover ${destination.title}`}
          intro={destination.summary}
          body="This destination rewards slow travel and careful exploration, offering some of East Africa’s most consistent birding and wildlife experiences."
        />
      </section>

      {/* THINGS TO KNOW */}
      {"thingsToKnow" in destination &&
        Array.isArray((destination as any).thingsToKnow) &&
        (destination as any).thingsToKnow.length > 0 && (
          <section className={`${styles.sectionTight} ${styles.container}`}>
            <ThingsToKnow items={(destination as any).thingsToKnow} />
          </section>
        )}

      {/* FAQ */}
      {Array.isArray(destination.faq) && destination.faq.length > 0 && (
        <section className={`${styles.sectionTight} ${styles.container}`}>
          <FaqSection items={destination.faq} />
        </section>
      )}

      {/* RELATED DESTINATIONS */}
      {relatedDestinations.length > 0 && (
        <section className={`${styles.section} ${styles.containerWide}`}>
          <RelatedDestinationsSlider destinations={relatedDestinations} />
        </section>
      )}

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className={`${styles.section} ${styles.container}`}>
          <RelatedPosts posts={relatedPosts} />
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaWrap}>
        <EditorialCTA destinationTitle={destination.title} />
      </section>

      <div className={styles.pageEnd} />
    </main>
  );
}
