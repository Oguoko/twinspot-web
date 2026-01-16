import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./teamBuildingTours.module.css";

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
  "Corporate teams planning strategy offsites",
  "Startups seeking alignment and clarity",
  "Sales teams celebrating milestones",
  "Leadership groups focused on culture",
  "NGOs and mission-driven organizations",
  "Remote teams meeting in person",
];

const tripHighlights: Highlight[] = [
  {
    title: "Nature-led reset",
    description:
      "Kenya landscapes provide space for reflection, new ideas, and shared energy.",
  },
  {
    title: "Facilitated sessions",
    description:
      "Optional professional facilitation to guide strategy and team alignment.",
  },
  {
    title: "Balanced agendas",
    description:
      "Blend work sessions with wildlife experiences and downtime.",
  },
  {
    title: "Private venues",
    description:
      "Select camps or lodges that support privacy and group focus.",
  },
  {
    title: "Tailored group sizes",
    description:
      "We adapt for small leadership groups or larger company retreats.",
  },
  {
    title: "Seamless logistics",
    description:
      "Transport, scheduling, and on-site coordination handled by Twinspot.",
  },
];

const activityMenu: Card[] = [
  {
    title: "Light adventure",
    description:
      "Guided nature walks, canoeing, or gentle hikes that spark conversation.",
  },
  {
    title: "Culture & community",
    description:
      "Local visits and storytelling sessions that connect teams to place.",
  },
  {
    title: "Conservation CSR day",
    description:
      "Hands-on conservation or community support activities aligned to your mission.",
  },
];

const locations: Card[] = [
  {
    title: "Nairobi area retreats",
    description:
      "Short travel times for single-day or overnight team offsites.",
  },
  {
    title: "Naivasha",
    description:
      "Lakeside venues with space for workshops and optional safari activities.",
  },
  {
    title: "Laikipia",
    description:
      "Private conservancies with exclusive-use options and curated experiences.",
  },
  {
    title: "Masai Mara",
    description:
      "High-impact wildlife settings for multi-day leadership retreats.",
  },
  {
    title: "Amboseli",
    description:
      "Wide-open vistas and strong safari days for re-energizing teams.",
  },
  {
    title: "Coastal escapes",
    description:
      "Beachside venues for reflection, strategy, and cultural immersion.",
  },
];

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "Share goals, group size, and preferred travel windows so we can shape the retreat.",
  },
  {
    title: "Design",
    description:
      "We build a schedule that balances workshops, downtime, and shared experiences.",
  },
  {
    title: "Confirm",
    description:
      "Venue, transport, and facilitation details are locked in with clear budgets.",
  },
  {
    title: "Travel",
    description:
      "Twinspot coordinates the retreat so your team can focus on connection.",
  },
];

const inclusions = [
  "Private transport and on-the-ground coordination",
  "Accommodation and full board meals",
  "Tailored team activity scheduling",
  "Facilitation partners on request",
  "Park or venue fees where applicable",
  "Flexible add-ons such as CSR or wellness",
];

const itineraries: Itinerary[] = [
  {
    title: "One-Day Reset",
    duration: "1 Day",
    description:
      "Ideal for Nairobi-based teams needing a focused day of alignment and reflection.",
    highlights: [
      "Morning strategy session",
      "Afternoon activity block",
      "Wrap-up and action planning",
    ],
  },
  {
    title: "Two-Day Retreat",
    duration: "2 Days",
    description:
      "A balanced retreat with time for collaboration, team bonding, and a safari window.",
    highlights: [
      "Facilitated workshop",
      "Evening campfire discussion",
      "Morning safari or nature walk",
    ],
  },
  {
    title: "Three-Day Offsite",
    duration: "3 Days",
    description:
      "A deeper reset with space for leadership planning, team building, and rest.",
    highlights: [
      "Leadership strategy block",
      "Dedicated CSR or culture session",
      "Full-day safari or adventure option",
    ],
  },
];

const agendaBlocks = [
  {
    title: "1-Day agenda",
    items: [
      "Arrival + welcome coffee",
      "90-minute planning session",
      "Team activity + lunch",
      "Closing reflection + commitments",
    ],
  },
  {
    title: "2-Day agenda",
    items: [
      "Day 1: strategy workshop + sunset activity",
      "Evening: facilitated reflection",
      "Day 2: safari or CSR block + action planning",
      "Departure after lunch",
    ],
  },
  {
    title: "3-Day agenda",
    items: [
      "Day 1: alignment session + fireside conversation",
      "Day 2: adventure or safari + leadership meeting",
      "Day 3: culture session + next-quarter roadmap",
      "Optional wellness wrap-up",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Can you work with our internal facilitator?",
    answer:
      "Yes. We can integrate your facilitator or recommend partners who fit your objectives.",
  },
  {
    question: "Do you handle dietary requirements?",
    answer:
      "Absolutely. We collect dietary needs early and coordinate with venues for tailored menus.",
  },
  {
    question: "What group sizes can you support?",
    answer:
      "We typically support groups from 8 to 60+, with private venues for smaller leadership teams.",
  },
  {
    question: "Is this suitable for hybrid teams?",
    answer:
      "Yes. We can include hybrid-friendly session timings and wellness breaks to accommodate different energy levels.",
  },
];

export const metadata: Metadata = {
  title: "Team Building Retreats in Kenya",
  description:
    "Team building retreats in Kenya with outcomes-first planning, curated venues, and flexible formats for corporate teams and leadership offsites.",
};

export default function TeamBuildingToursPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Team building retreats in Kenya with a group gathering"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Corporate Retreats</p>
          <h1 className={styles.heroTitle}>Team Building Tours</h1>
          <p className={styles.heroSubtitle}>
            Purposeful team retreats across Kenya that balance outcomes, shared
            experience, and the space to reset. We design formats that help your
            team align, reconnect, and move forward together.
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
              "Outcomes-first planning",
              "Flexible formats",
              "Trusted venue partners",
              "Full logistics support",
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
              These retreats are built for teams who need clarity, connection,
              and a setting that supports honest conversation and renewed focus.
            </p>
          </header>
          <div className={styles.chipGrid}>
            {whoItsFor.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Trip highlights</h2>
            <p>
              We create team building experiences that are structured enough to
              deliver outcomes while leaving space for informal connection.
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
            <h3>Activity menu</h3>
            <div className={styles.cardGrid}>
              {activityMenu.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Where we go</h2>
            <p>
              Retreat venues are selected for privacy, access, and the right mix
              of meeting spaces and outdoor experiences.
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
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>How it works</h2>
            <p>
              We guide you through a clear planning process that aligns the
              retreat with your goals and operational realities.
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
            <h3>Outcomes-first planning</h3>
            <p>
              We start with the outcomes you need, whether that’s alignment on
              strategy, team morale, or a reset after a busy quarter. From there
              we design the schedule, facilitation, and activities to support
              those goals.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>What’s included</h2>
            <p>
              Our team building tours are fully managed so your team can focus on
              connection and productivity.
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
              Choose the format that fits your time and goals, then we tailor the
              content and activities to your team.
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

          <div className={styles.subsection}>
            <h3>Sample agendas</h3>
            <div className={styles.cardGrid}>
              {agendaBlocks.map((agenda) => (
                <article key={agenda.title} className={styles.card}>
                  <h4>{agenda.title}</h4>
                  <ul className={styles.list}>
                    {agenda.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>Practical tips</h2>
            <p>
              We keep the retreat logistics clear and transparent, with budgets
              shaped by group size, venue tier, and travel distance.
            </p>
          </header>
          <div className={styles.subsection}>
            <h3>Logistics &amp; budgeting</h3>
            <ul className={styles.list}>
              <li>Group sizes typically range from 8 to 60+ participants.</li>
              <li>Budget tiers vary by accommodation level and transport needs.</li>
              <li>We can add facilitation, CSR activities, or wellness sessions.</li>
              <li>Clear timelines and payment schedules are shared upfront.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>FAQ</h2>
            <p>
              Common questions about team retreats in Kenya and how Twinspot
              supports planning.
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
            <h2>Start planning your Kenya team building retreat.</h2>
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
            <p>Explore other Twinspot experiences.</p>
          </header>
          <div className={styles.relatedGrid}>
            {[
              { label: "Camping Tours", href: "/camping-tours" },
              { label: "Great Migration", href: "/great-migration" },
              { label: "Bird Photography Tours", href: "/bird-photography-tours" },
              { label: "Mountaineering Tours", href: "/mountaineering-tours" },
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
