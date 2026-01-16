import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./campingTours.module.css";

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
  "Travelers who want nights under the stars",
  "Families seeking flexible safari days",
  "Photographers who like early starts",
  "Groups that value campfire evenings",
  "Adventurers on a comfortable budget",
  "Repeat safari guests wanting a fresh pace",
];

const tripHighlights: Highlight[] = [
  {
    title: "Stargazing and quiet nights",
    description:
      "Remote camps let you hear the wild and see the night sky without city glare.",
  },
  {
    title: "Closer to the landscape",
    description:
      "Wake to birdsong, coffee in hand, with wildlife sounds carrying across camp.",
  },
  {
    title: "Flexible game-drive timing",
    description:
      "We adjust drive times around light and animal movement without lodge schedules.",
  },
  {
    title: "Private camp setups",
    description:
      "Smaller groups mean calmer evenings, tailored meals, and privacy at camp.",
  },
  {
    title: "Kenya camp crew",
    description:
      "Experienced camp teams handle tents, meals, and logistics while you explore.",
  },
  {
    title: "Mix of safari and camp life",
    description:
      "Combine classic wildlife days with shared meals, stories, and downtime.",
  },
];

const campingStyles: Card[] = [
  {
    title: "Mobile camping",
    description:
      "Move with the wildlife or the seasons, setting camp in different regions over the route.",
  },
  {
    title: "Fixed camps",
    description:
      "Stay longer in one area for deeper wildlife viewing and a settled camp rhythm.",
  },
  {
    title: "Lodge + camp mix",
    description:
      "Blend comfort with canvas: two nights in a lodge, then camp where it’s wilder.",
  },
  {
    title: "Family camping",
    description:
      "Shorter drives, early dinners, and gentle schedules built for all ages.",
  },
];

const locations: Card[] = [
  {
    title: "Masai Mara",
    description:
      "Open plains, dramatic sunsets, and easy game-viewing close to camp.",
  },
  {
    title: "Laikipia",
    description:
      "Private conservancies with low crowd levels and varied terrain.",
  },
  {
    title: "Samburu",
    description:
      "Riverine habitats and arid landscapes for unique wildlife combinations.",
  },
  {
    title: "Amboseli",
    description:
      "Iconic elephant herds with Mount Kilimanjaro views at dawn.",
  },
  {
    title: "Tsavo",
    description:
      "Big-sky scenery, lava flows, and wide-open wildlife spaces.",
  },
  {
    title: "Lake Naivasha",
    description:
      "Gentle boat rides, walking options, and easy logistics from Nairobi.",
  },
];

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "Tell us how rugged or relaxed you want the trip, and we align your camp style.",
  },
  {
    title: "Design",
    description:
      "We map drive lengths, camp locations, and activity blocks to keep the flow easy.",
  },
  {
    title: "Confirm",
    description:
      "We reserve permits, camps, and vehicles, then finalize menus and gear.",
  },
  {
    title: "Travel",
    description:
      "Arrive to a ready camp, thoughtful guiding, and a rhythm that fits your pace.",
  },
];

const inclusions = [
  "Professional guide, driver, and dedicated camp crew",
  "Private vehicle, fuel, and inter-location transfers",
  "Park fees, conservancy permits, and camping fees",
  "Tents, bedding, and camp setup/pack-down",
  "Meals and non-alcoholic beverages",
  "Flexible daily schedule with optional activities",
];

const comfortLevels: Card[] = [
  {
    title: "Budget camping",
    description:
      "Simple dome tents, shared facilities, and lighter menus while keeping safety and comfort in mind.",
  },
  {
    title: "Mid-range comfort",
    description:
      "Spacious tents, comfortable bedding, and camp showers with warm water options.",
  },
  {
    title: "Comfort plus",
    description:
      "Larger tents, private camp spaces, upgraded meals, and extra staff support.",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Classic Mara Camp",
    duration: "5 Days",
    description:
      "A short and sweet camping safari with morning drives, relaxed afternoons, and evenings by the fire.",
    highlights: [
      "Morning game drives with flexible timing",
      "Sundowners by the Mara River",
      "Optional guided nature walk",
    ],
  },
  {
    title: "Kenya Camping Circuit",
    duration: "8 Days",
    description:
      "A varied route through the Rift Valley and savannahs with a blend of fixed and mobile camps.",
    highlights: [
      "Naivasha lake camp",
      "Samburu river corridor",
      "Private conservancy night",
    ],
  },
  {
    title: "Family Safari Camp",
    duration: "6 Days",
    description:
      "Gentle travel pace with shorter drives, early meals, and flexible activity blocks.",
    highlights: [
      "Kid-friendly game drives",
      "Campfire storytelling",
      "Optional boat or walking safari",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Is camping safe in Kenya?",
    answer:
      "Yes. We work with experienced camp teams, choose trusted locations, and follow safety protocols around wildlife and camp setup.",
  },
  {
    question: "Will I have a shower and bathroom?",
    answer:
      "Comfort depends on the camp style you choose. We can arrange en-suite tents or shared facilities based on your preferences.",
  },
  {
    question: "Can I mix camping with lodge stays?",
    answer:
      "Absolutely. Many guests enjoy a lodge night or two for variety, especially on longer itineraries.",
  },
  {
    question: "What is the food like?",
    answer:
      "Meals are prepared fresh on site, with menus tailored to dietary needs and the activity schedule.",
  },
];

export const metadata: Metadata = {
  title: "Camping Tours in Kenya",
  description:
    "Camping tours in Kenya with flexible safari pacing, trusted camp teams, and thoughtful itineraries across Kenya’s most scenic landscapes.",
};

export default function CampingToursPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Camping tours in Kenya with a sunset campfire"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Twinspot Camping Safaris</p>
          <h1 className={styles.heroTitle}>Camping Tours</h1>
          <p className={styles.heroSubtitle}>
            Canvas tents, open skies, and a flexible safari rhythm. Our Kenya
            camping tours blend comfort, authentic camp life, and the freedom to
            follow wildlife on your own schedule.
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
              "Seasoned camp crews",
              "Flexible safari timing",
              "Private camp options",
              "Kenya-wide routes",
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
              Camping safaris are ideal for travelers who value time in the
              landscape, a closer connection to nature, and the flexibility to
              explore at sunrise and dusk.
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
              Camp-based safaris give you both a structured wildlife experience
              and the small moments that make travel in Kenya feel grounded and
              relaxed.
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
            <h3>Camping styles</h3>
            <div className={styles.cardGrid}>
              {campingStyles.map((style) => (
                <article key={style.title} className={styles.card}>
                  <h4>{style.title}</h4>
                  <p>{style.description}</p>
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
              We place camps in Kenya’s most wildlife-rich regions, balancing
              travel time with access to diverse habitats.
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
              Camping tours are highly customizable. We shape the route around
              your comfort level, travel style, and interest in wildlife or
              photography.
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
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>What’s included</h2>
            <p>
              We handle the logistics of camp life so you can focus on the
              landscapes, wildlife sightings, and quiet evenings.
            </p>
          </header>
          <ul className={styles.listTwoColumn}>
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.subsection}>
            <h3>Comfort levels</h3>
            <div className={styles.cardGrid}>
              {comfortLevels.map((level) => (
                <article key={level.title} className={styles.card}>
                  <h4>{level.title}</h4>
                  <p>{level.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Sample itineraries</h2>
            <p>
              These examples show how we balance drive time, camp comfort, and
              wildlife viewing. Every itinerary is tailored to your priorities.
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
              Camping in Kenya is comfortable with the right preparation. We’ll
              advise on layers, simple gear, and the rhythm of camp life.
            </p>
          </header>

          <div className={styles.subsection}>
            <h3>What to pack</h3>
            <ul className={styles.list}>
              <li>Light layers for warm days and cooler evenings.</li>
              <li>Headlamp, charging cables, and a small power bank.</li>
              <li>Comfortable closed shoes and a light camp sandal.</li>
              <li>Personal toiletries, sunscreen, and insect protection.</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Camp life</h3>
            <p>
              Expect early coffee, game drives timed for the best light, and
              unhurried evenings. Meals are served under canvas or open sky, and
              quiet hours are respected so everyone rests well for the next day.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>FAQ</h2>
            <p>
              Answers to common questions about Kenya camping tours and what to
              expect on the ground.
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
            <h2>Ready to build a Kenya camping safari?</h2>
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
            <p>Pair camping with other Twinspot tour styles.</p>
          </header>
          <div className={styles.relatedGrid}>
            {[
              { label: "Birding Tours in Kenya", href: "/birding-tours-kenya" },
              { label: "Wildlife Safaris in Kenya", href: "/wildlife-safaris-kenya" },
              { label: "Great Migration", href: "/great-migration" },
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
