import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./plan-your-trip.module.css";

export const metadata = {
  title: "Plan Your Trip | Twinspot Tours & Travel",
  description:
    "Thoughtful, unhurried planning for birding and nature-focused journeys across East Africa.",
};

export default function PlanYourTripPage() {
  return (
    <main className={styles.page}>
      {/* SAME NAVBAR AS HOMEPAGE */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/plan-hero.jpg"
            alt="Planning a birding journey in East Africa"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Plan Your <br />
            <span>Birding Journey</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Thoughtful planning shaped by season, landscape, and deep regional
            knowledge.
          </p>

          <Link href="/contact" className={styles.heroCta}>
            Talk to Our Team
          </Link>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className={styles.section}>
        <div className={styles.containerWide}>
          <p className={styles.intro}>
            Planning a birding journey is not a checklist exercise. It is an act
            of attention.
          </p>

          <p className={styles.body}>
            Season, light, landscape, and patience all shape what you will see
            and how deeply you will experience it. At Twinspot, we approach
            planning as the first part of the journey itself, thoughtful,
            unhurried, and guided by deep regional knowledge.
          </p>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <h2 className={styles.subheading}>How We Plan a Journey</h2>

          <div className={styles.process}>
            <div>
              <h3>We Listen First</h3>
              <p>
                Every journey begins with listening. Your interests, pace,
                experience level, and expectations shape everything that
                follows.
              </p>
            </div>

            <div>
              <h3>We Shape the Route</h3>
              <p>
                Routes are designed to balance ecological richness with
                realistic travel days, considering distance, transitions, and
                rest.
              </p>
            </div>

            <div>
              <h3>We Refine Through Seasons</h3>
              <p>
                Migration patterns, rainfall, and breeding cycles guide when
                and where journeys unfold.
              </p>
            </div>

            <div>
              <h3>We Travel With Intention</h3>
              <p>
                Small groups, ethical partnerships, and experienced guides
                ensure depth over volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className={styles.containerWide}>
          <h2>Begin the Conversation</h2>
          <p>
            Every meaningful journey starts with understanding. Tell us what
            draws you to East Africa, and we’ll help shape the path forward.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
