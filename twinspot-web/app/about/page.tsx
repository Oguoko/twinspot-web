import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./aboutUs.module.css";

export const metadata: Metadata = {
  title: "About Us | Twinspot Tours & Travel",
  description:
    "Discover Twinspot's heritage, values, and expert guiding philosophy across East Africa.",
};

type ValueCard = {
  icon: string;
  title: string;
  description: string;
};

type GuideCard = {
  role: string;
  name: string;
  subtitle: string;
};

const values: ValueCard[] = [
  {
    icon: "✦",
    title: "Responsible Travel",
    description:
      "Every route is shaped to minimize footprint, support local teams, and respect sensitive habitats.",
  },
  {
    icon: "❖",
    title: "Conservation First",
    description:
      "We partner with camps, communities, and researchers who protect biodiversity for the long term.",
  },
  {
    icon: "◉",
    title: "Deep Immersion",
    description:
      "Our pacing favors meaningful field time, expert interpretation, and unhurried moments in the wild.",
  },
];

const guides: GuideCard[] = [
  {
    role: "Master Tracker",
    name: "Samuel Njoroge",
    subtitle: "Savannah movement & mammal behavior",
  },
  {
    role: "Ornithologist",
    name: "Amina Wekesa",
    subtitle: "Endemics, migration corridors & habitats",
  },
  {
    role: "Visual Lead",
    name: "Daniel Kibet",
    subtitle: "Field photography & storytelling",
  },
  {
    role: "Conservationist",
    name: "Neema Mollel",
    subtitle: "Community partnerships & ecology",
  },
];

const associations = [
  "National Wildlife",
  "Birding Assoc",
  "Safari Alliance",
  "Eco-Trust",
  "World Travelers",
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Navbar variant="overlay" />

      <section className={styles.hero}>
        <Image
          src="/hero.jpg"
          alt="Golden light across an East African landscape"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Our Heritage</p>
          <h1>The Heart of the Wild</h1>
          <p className={styles.heroSubtitle}>
            We craft high-end safari and birding journeys that pair elegant logistics with
            deeply local guiding across East Africa.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Inquire Now
            </Link>
            <Link href="/plan-your-trip/how-we-plan" className={styles.secondaryButton}>
              View Sample Itineraries
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.legacyGrid}>
            <div>
              <h2>A Legacy of Discovery</h2>
              <p>
                For decades, Twinspot has designed immersive journeys that blend rare birding,
                remarkable wildlife encounters, and the quiet elegance of slow travel.
              </p>
              <p>
                Our team works closely with local communities, conservation partners, and camp
                hosts to ensure each itinerary feels deeply rooted in place.
              </p>

              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>25+</span>
                  <span className={styles.statLabel}>Years of expertise</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>150+</span>
                  <span className={styles.statLabel}>Unique species tracked</span>
                </div>
              </div>
            </div>

            <div className={styles.imageCard}>
              <Image
                src="/hero.jpg"
                alt="Guide and guests observing wildlife in open grassland"
                fill
                className={styles.legacyImage}
              />
              <div className={styles.quoteBadge}>
                “We don&apos;t just see the wild; we witness its stories.”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <h2>Our Core Values</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.guidesHeader}>
            <div>
              <h2>Meet Your Expert Guides</h2>
              <p>
                Field specialists, naturalists, and storytellers who bring depth and context to
                every sighting.
              </p>
            </div>
            <Link href="/about/guides" className={styles.textLink}>
              View All Experts →
            </Link>
          </div>

          <div className={styles.guidesGrid}>
            {guides.map((guide) => (
              <article key={guide.name} className={styles.guideCard}>
                <div className={styles.avatarPlaceholder} aria-hidden="true">
                  <svg viewBox="0 0 80 80" role="img" focusable="false">
                    <circle cx="40" cy="30" r="14" />
                    <rect x="18" y="48" width="44" height="20" rx="10" />
                  </svg>
                </div>
                <span className={styles.roleTag}>{guide.role}</span>
                <h3>{guide.name}</h3>
                <p>{guide.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.associationsSection}>
        <div className={styles.container}>
          <p className={styles.associationsTitle}>Trusted by Global Associations</p>
          <div className={styles.logoRow}>
            {associations.map((association) => (
              <span key={association}>{association}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Write Your Own Wild Story?</h2>
              <p>
                Tell us your travel goals and we will shape a personalized safari or birding
                journey with expert care.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Inquire Now
              </Link>
              <Link href="/plan-your-trip" className={styles.secondaryButtonDark}>
                View Sample Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
