import Link from "next/link";

import { getDestinations } from "@/lib/data/destinations";
import { getFeaturedPosts, getLatestPosts } from "@/lib/data/homepage";

import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";
import RelatedPosts from "@/components/RelatedPosts";
import EditorialCTA from "@/components/EditorialCTA";

import styles from "./home.module.css";

export default async function HomePage() {
  const [featured, latest, destinations] = await Promise.all([
    getFeaturedPosts(),
    getLatestPosts(),
    getDestinations(),
  ]);

  // 🔎 DEBUG — REMOVE AFTER CONFIRMATION
  console.log("DESTINATIONS:", destinations);
  console.log("FEATURED POSTS:", featured);
  console.log("LATEST POSTS:", latest);

  return (
    <main className={styles.page}>
{/* ===============================
   HERO (BOXED IMAGE + TEXT)
=============================== */}
<section className={styles.hero}>
  <div className={styles.heroGrid}>
    <div className={styles.heroMedia}>
      <img
        src="/hero.jpg"
        alt="Birding safari in East Africa"
      />
    </div>

    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        Birding Safaris <br />
        Across <span>East Africa</span>
      </h1>

      <p className={styles.heroSubtitle}>
        Thoughtfully guided journeys into Africa’s richest bird habitats,
        designed for birders who value depth, ethics, and wild places.
      </p>

      <Link href="/contact" className={styles.heroCta}>
        Plan Your Journey
      </Link>
    </div>
  </div>
</section>


      {/* DESTINATIONS */}
      <section className={styles.section}>
        <div className={styles.containerWide}>
          <h2>Destinations We Know Intimately</h2>

          <RelatedDestinationsSlider
            destinations={destinations.slice(0, 8)}
          />
        </div>
      </section>

      {/* BLOG */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Field Notes & Birding Insights</h2>
          <RelatedPosts posts={featured} />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why Bird With Twinspot</h2>
          <p>
            We design birding journeys around habitat, season, and species
            behaviour — not rushed checklists. Our focus is slow travel,
            skilled guiding, and respect for ecosystems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaWrap}>
        <EditorialCTA />
      </section>

      <div className={styles.pageEnd} />
    </main>
  );
}
