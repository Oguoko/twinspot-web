import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./greatMigration.module.css";

type Highlight = {
  title: string;
  description: string;
};

type Card = {
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

type Itinerary = {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const whoItsFor = [
  "Safari travelers planning a first Kenya migration",
  "Families seeking high-density wildlife viewing",
  "Photographers wanting open plains and action",
  "Couples looking for a private guide",
  "Birders adding migration drama to their list",
  "Repeat safari guests wanting different regions",
];

const tripHighlights: Highlight[] = [
  {
    title: "Mara River crossings",
    description:
      "When conditions align, river crossings provide dramatic wildlife moments with strong guide positioning.",
  },
  {
    title: "Open plains tracking",
    description:
      "Large herds move across the savannah, offering wide-angle scenes and shifting light.",
  },
  {
    title: "Predator activity",
    description:
      "Lions, cheetahs, and hyenas follow the herds, creating natural wildlife interactions.",
  },
  {
    title: "Low-impact viewing",
    description:
      "We prioritize calm, patient observation without crowding key areas.",
  },
  {
    title: "Flexible safari days",
    description:
      "We adjust drive lengths based on where the herds are moving.",
  },
  {
    title: "Guide-led tracking",
    description:
      "Local trackers and guides share real-time insights on herd positions.",
  },
];

const locations: Card[] = [
  {
    title: "Northern Mara",
    description:
      "Broad plains and river access with a mix of migration routes and predator territories.",
  },
  {
    title: "Central Mara",
    description:
      "Accessible game-viewing areas with varied landscapes and reliable sightings.",
  },
  {
    title: "Eastern Mara",
    description:
      "Quieter zones for patient viewing and private guiding opportunities.",
  },
  {
    title: "Loita Plains",
    description:
      "Open grasslands that can host herds outside peak travel windows.",
  },
  {
    title: "Naboisho Conservancy",
    description:
      "Conservancy access offers lower crowd levels and flexible drive timing.",
  },
  {
    title: "Olare Motorogi",
    description:
      "High wildlife density with carefully managed visitor numbers.",
  },
];

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "We match your travel window to the broader migration cycle and your preferred pace.",
  },
  {
    title: "Design",
    description:
      "We select a base area and design day plans that prioritize patient observation.",
  },
  {
    title: "Confirm",
    description:
      "Permits, vehicles, and guiding are secured early to align with peak season.",
  },
  {
    title: "Travel",
    description:
      "Explore the Mara with a private guide, adjusting daily routes to herd movement.",
  },
];

const inclusions = [
  "Professional safari guide and private vehicle",
  "Park or conservancy fees",
  "Tailored itinerary planning and daily briefing",
  "Accommodations and meals aligned to your schedule",
  "Transfers between Nairobi and the Mara",
  "On-the-ground tracking updates",
];

const itineraries: Itinerary[] = [
  {
    title: "Mara Migration Focus",
    duration: "5 Days",
    description:
      "A concentrated migration safari with long game-drive windows and flexible timing.",
    highlights: [
      "Two full-day drives",
      "Mara River positioning",
      "Optional sunrise balloon add-on",
    ],
  },
  {
    title: "Migration + Birding",
    duration: "7 Days",
    description:
      "Blend migration drama with bird-rich wetlands and raptor hotspots.",
    highlights: [
      "Mara grasslands",
      "Rift Valley lake stop",
      "Dedicated birding guide session",
    ],
  },
  {
    title: "Kenya Migration Circuit",
    duration: "9 Days",
    description:
      "Combine the Mara with other Kenya highlights for a well-rounded safari.",
    highlights: [
      "Mara conservancy stay",
      "Lake Naivasha visit",
      "Private photographic drives",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "When is the best time to see the migration?",
    answer:
      "The migration is seasonal and moves across the ecosystem. We recommend broad windows rather than exact dates and will advise based on current patterns.",
  },
  {
    question: "Do you guarantee river crossings?",
    answer:
      "Crossings are wildlife behavior and can’t be guaranteed. We focus on positioning, patience, and the overall richness of the migration experience.",
  },
  {
    question: "Is the Mara crowded in peak season?",
    answer:
      "Some areas are busy. We plan for quieter regions or conservancies to keep the experience calm and respectful.",
  },
  {
    question: "Can we combine the migration with other parks?",
    answer:
      "Yes, we often add a second Kenya region to balance migration days with variety.",
  },
];

export const metadata: Metadata = {
  title: "Great Migration Kenya | Masai Mara Migration Safari",
  description:
    "Great Migration Kenya tours with expert guides, flexible itineraries, and thoughtful viewing across the Masai Mara ecosystem.",
};

export default function GreatMigrationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Great Migration safari in the Masai Mara"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Masai Mara Migration</p>
          <h1 className={styles.heroTitle}>Great Migration</h1>
          <p className={styles.heroSubtitle}>
            A Kenya migration safari built around flexible days, patient viewing,
            and the guidance you need to experience one of East Africa’s most
            powerful wildlife cycles.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.valueStrip}>
        <div className={styles.containerWide}>
          <div className={styles.valueGrid}>
            {[
              "Migration-savvy guides",
              "Flexible daily routes",
              "Conservancy options",
              "Ethical viewing",
            ].map((item) => (
              <div key={item} className={styles.valueItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Who it’s for</h2>
            <p>
              The Great Migration draws travelers who want high wildlife density
              and a safari with movement, energy, and wide-open landscapes.
            </p>
          </header>
          <div className={styles.chipGrid}>
            {whoItsFor.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>What the migration is</h3>
            <p>
              The migration is a year-round cycle of wildebeest, zebra, and
              antelope moving across the greater Mara-Serengeti ecosystem in
              search of grazing and water. In Kenya, this means sweeping herds
              on the plains and, at times, dramatic river crossings.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Trip highlights</h2>
            <p>
              Each day is guided by herd movement and light, giving you varied
              scenes and the chance to follow the action where it unfolds.
            </p>
          </header>
          <div className={styles.cardGrid}>
            {tripHighlights.map((highlight) => (
              <article key={highlight.title} className={styles.card}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>Migration + birds</h3>
            <p>
              The migration also draws raptors and scavengers, while marshes and
              seasonal pools host storks, herons, and waterbirds. We can add
              dedicated birding stops without losing migration focus.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Where we go</h2>
            <p>
              We choose base areas in the Mara that align with the broader
              movement of the herds and help you avoid the busiest zones.
            </p>
          </header>
          <div className={styles.locationGrid}>
            {locations.map((location) => (
              <article key={location.title} className={styles.locationCard}>
                <h3>{location.title}</h3>
                <p>{location.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>Where to base</h3>
            <p>
              We recommend basing in a mix of reserve and conservancy areas to
              balance access to core migration corridors with quieter game-drive
              windows. Your chosen base also influences drive times and crowd
              levels.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>How it works</h2>
            <p>
              Migration planning is about timing and flexibility. We keep the
              plan adaptable and prioritize respectful viewing practices.
            </p>
          </header>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.title} className={styles.stepCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>Ethical viewing</h3>
            <p>
              We avoid crowding crossings, keep respectful distances, and work
              with guides who prioritize wildlife welfare. Patience and good
              positioning often deliver the best sightings without pressure.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>What’s included</h2>
            <p>
              We cover the essentials so you can focus on the migration while we
              manage logistics across the Mara.
            </p>
          </header>
          <ul className={styles.listTwoColumn}>
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Sample itineraries</h2>
            <p>
              Sample itineraries highlight how we blend migration viewing with
              other Kenya highlights or special interests.
            </p>
          </header>
          <div className={styles.itineraryGrid}>
            {itineraries.map((itinerary) => (
              <article key={itinerary.title} className={styles.itineraryCard}>
                <div>
                  <p className={styles.itineraryDuration}>
                    {itinerary.duration}
                  </p>
                  <h3>{itinerary.title}</h3>
                  <p>{itinerary.description}</p>
                </div>
                <ul>
                  {itinerary.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>Practical tips</h2>
            <p>
              Migration planning is seasonal and weather-dependent. We’ll keep
              you informed on broad windows and realistic expectations.
            </p>
          </header>
          <div className={styles.subsection}>
            <h3>Seasonality overview</h3>
            <ul className={styles.list}>
              <li>June–August: herds begin entering Kenya with early crossings.</li>
              <li>September–October: dense herds across the Mara plains.</li>
              <li>November: movement starts shifting south with short rains.</li>
              <li>December–May: focus shifts to other regions or birding.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>FAQ</h2>
            <p>
              Planning a Great Migration safari? Here are the answers to the
              questions we hear most.
            </p>
          </header>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.containerWide}>
          <div className={styles.ctaContent}>
            <h2>Plan a Kenya Great Migration safari with Twinspot.</h2>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Related tours</h2>
            <p>Explore more Twinspot safari themes.</p>
          </header>
          <div className={styles.relatedGrid}>
            {[
              { label: "Birding Tours in Kenya", href: "/birding-tours-kenya" },
              { label: "Wildlife Safaris in Kenya", href: "/wildlife-safaris-kenya" },
              { label: "Bird Photography Tours", href: "/bird-photography-tours" },
              { label: "Camping Tours", href: "/camping-tours" },
            ].map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className={styles.relatedCard}
              >
                {tour.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
