import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import QuizCTA from "@/components/QuizCTA";
import ExperiencesSection from "@/components/ExperiencesSection";
import FieldNotesSection from "@/components/FieldNotesSection";
import ContentRail from "@/components/ContentRail";
import WhyTwinspotSection from "@/components/WhyTwinspotSection";
import EditorialStatementSection from "@/components/EditorialStatementSection";

import { getDestinations } from "@/lib/data/destinations";
import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";
import EditorialCTA from "@/components/EditorialCTA";

import styles from "./home.module.css";

export default async function HomePage() {
  const destinations = await getDestinations();

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding safari in East Africa"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
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
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Destinations We Know Intimately</h2>
            <p className={styles.sectionIntro}>
              Landscapes and habitats we return to season after season, guided by
              deep ecological knowledge and trusted local expertise.
            </p>
          </header>

          <RelatedDestinationsSlider
            destinations={destinations.slice(0, 8)}
          />
        </div>
      </section>

      {/* ================= QUIZ CTA ================= */}
      <section className={styles.section}>
        <QuizCTA />
      </section>

      {/* ================= EXPERIENCES ================= */}
      <ContentRail>
        <ExperiencesSection />
      </ContentRail>

      {/* ================= FIELD NOTES ================= */}
      <ContentRail>
        <FieldNotesSection />
      </ContentRail>

      <WhyTwinspotSection />
      <EditorialStatementSection />

      {/* ================= BLACK AUTHORITY CARD ================= */}
      <section className={styles.authorityWrap}>
        <div className={styles.authorityCard}>
          <h2>
            Journeys shaped by field experience,
            local knowledge, and long-standing conservation partnerships.
          </h2>

          <p>
            Twinspot journeys are guided by seasoned birders with decades of time spent in East Africa’s key habitats.
We work closely with trusted local guides and conservation partners to design itineraries that prioritise
seasonality, ethics, and meaningful observation.

Our approach favours smaller groups, fewer locations, and the patience required to notice what others pass by.

          </p>

          <div className={styles.authorityActions}>
            <Link href="/contact">Email Our Team</Link>
            <span />
            <Link href="/contact">Speak with Us</Link>
          </div>
        </div>
      </section>

      {/* ================= EDITORIAL CTA ================= */}
      <section className={styles.ctaWrap}>
        <EditorialCTA />
      </section>

      <div className={styles.pageEnd} />
    </main>
  );
}
