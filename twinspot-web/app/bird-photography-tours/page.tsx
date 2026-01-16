import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./birdPhotographyTours.module.css";

type Highlight = {
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
  "Bird photographers building a Kenya portfolio",
  "Nature storytellers chasing behavior and light",
  "Birders transitioning into camera work",
  "Couples or friends who want private pacing",
  "Creators who need scouting and logistics support",
  "Safari travelers wanting a birding-first lens",
];

const skillTracks = [
  {
    title: "Beginner",
    description:
      "Foundational sessions on exposure, autofocus, and working with guides to track birds without pressure to chase rare targets.",
  },
  {
    title: "Enthusiast",
    description:
      "Longer hide sessions, vehicle positioning strategy, and target-species lists shaped around seasonal movement and habitats.",
  },
  {
    title: "Pro",
    description:
      "Pre-scouted locations, early access timings, and quiet windows to craft behavior-driven sequences and editorial sets.",
  },
];

const tripHighlights: Highlight[] = [
  {
    title: "Golden-hour positioning",
    description:
      "We plan for first and last light with guides who understand how wind and sun shape flight lines and feeding routines.",
  },
  {
    title: "Hide sessions and blinds",
    description:
      "Dedicated time in well-placed hides so you can work patiently with waterbirds, raptors, and shy forest species.",
  },
  {
    title: "Mixed habitat days",
    description:
      "Combine lakes, forest edge, and savannah in one itinerary for variety in backgrounds and subject behavior.",
  },
  {
    title: "Vehicle etiquette",
    description:
      "Small group or private vehicles for clean shooting angles, stable rests, and minimal distractions in the frame.",
  },
  {
    title: "Local bird knowledge",
    description:
      "Guides who know seasonal territories and can call targets while keeping a respectful distance.",
  },
  {
    title: "Flexible daily flow",
    description:
      "We leave space for late-morning edits, siestas, or returning to a location for a second pass.",
  },
];

const locations = [
  {
    title: "Lake Naivasha",
    description:
      "Acacia-lined shores, pelicans, and soft evening light ideal for waterbird portraits.",
  },
  {
    title: "Lake Nakuru",
    description:
      "Alkaline lake textures, flamingos, and raptors circling the escarpment.",
  },
  {
    title: "Aberdare Foothills",
    description:
      "Highland forest edges with turacos, barbet species, and moody mist.",
  },
  {
    title: "Samburu",
    description:
      "Dryland river corridors with bee-eaters, kingfishers, and dramatic light.",
  },
  {
    title: "Maasai Mara",
    description:
      "Open plains for raptors, bustards, and aerial action around grazing herds.",
  },
  {
    title: "Kenya Coast",
    description:
      "Mangroves, creeks, and shorebirds set against Indian Ocean palettes.",
  },
];

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "Share your skill level, target species, and preferred pace so we can match habitats to your goals.",
  },
  {
    title: "Design",
    description:
      "We map light windows, hide sessions, and drive lengths to balance photography time with comfort.",
  },
  {
    title: "Confirm",
    description:
      "Secure permits, guides, and accommodations while we align on gear, backups, and daily call times.",
  },
  {
    title: "Travel",
    description:
      "Shoot across Kenya’s richest habitats with on-the-ground support and flexible timing.",
  },
];

const inclusions = [
  "Specialist bird photography guide and local driver",
  "Private or small-group vehicle with beanbag-ready setup",
  "Park fees and relevant access permits",
  "Curated itinerary pacing for light and subject behavior",
  "Accommodation and meals tailored to shoot schedules",
  "Airport and inter-location transfers",
];

const itineraries: Itinerary[] = [
  {
    title: "Rift Valley Light Chase",
    duration: "6 Days",
    description:
      "Focus on lakes and wetlands with slow mornings, hide sessions, and repeat visits for changing light.",
    highlights: [
      "Naivasha dawn boat session",
      "Nakuru raptor lookout",
      "Lake Elementaita flamingo flats",
    ],
  },
  {
    title: "Savannah + Forest Blend",
    duration: "9 Days",
    description:
      "Blend forest edge birds with open plains for a diverse portfolio of color and behavior.",
    highlights: [
      "Aberdare forest tracking",
      "Samburu river corridor",
      "Mara grassland flight shots",
    ],
  },
  {
    title: "Kenya Photo Expedition",
    duration: "12 Days",
    description:
      "A longer route for photographers who want variety, slow pacing, and time to refine technique.",
    highlights: [
      "Coastal mangrove species",
      "Rift Valley highlands",
      "Private hides and mid-day editing",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Do you cater to mixed groups of birders and photographers?",
    answer:
      "Yes. We balance sightings and image-making by planning longer sessions at key sites, while keeping a flexible daily rhythm for both interests.",
  },
  {
    question: "What camera support can you provide in the field?",
    answer:
      "Guides can advise on positioning, subject behavior, and light. We can also help schedule editing time or add a photo mentor on request.",
  },
  {
    question: "Is there time for rest or lodge downtime?",
    answer:
      "Absolutely. We design itineraries with midday breaks and optional slow afternoons to keep energy levels high for the best light.",
  },
  {
    question: "Can you source specialty gear or rentals?",
    answer:
      "We can recommend reliable local rental partners for tripods or beanbags, and advise on battery and storage planning.",
  },
];

export const metadata: Metadata = {
  title: "Bird Photography Tours in Kenya & East Africa",
  description:
    "Bird photography tours in Kenya and East Africa with expert guides, photography-first pacing, and curated habitats for light, behavior, and ethical field craft.",
};

export default function BirdPhotographyToursPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Bird photography tours in Kenya at sunrise"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Kenya & East Africa</p>
          <h1 className={styles.heroTitle}>Bird Photography Tours</h1>
          <p className={styles.heroSubtitle}>
            Editorial-led bird photography tours designed around light, ethics,
            and patience. We build Kenya itineraries that let you slow down and
            capture behavior in the habitats that matter most.
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
              "Photography-first pacing",
              "Kenya specialist guides",
              "Ethical field practices",
              "Private vehicle options",
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
              These bird photography tours are designed for travelers who want
              the time, guidance, and access to work patiently with birds in
              Kenya’s most photogenic habitats.
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
            <h3>Skill level tracks</h3>
            <div className={styles.cardGrid}>
              {skillTracks.map((track) => (
                <article key={track.title} className={styles.card}>
                  <h4>{track.title}</h4>
                  <p>{track.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Trip highlights</h2>
            <p>
              We build the schedule around light, behavior, and the moments that
              make bird photography rewarding, not rushed.
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
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Where we go</h2>
            <p>
              Kenya’s lakes, forests, and savannahs give you a diverse portfolio
              of backgrounds, from misty highlands to golden grasslands.
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
              Every bird photography tour starts with your goals and ends with a
              well-paced field plan that protects the birds and your creative
              focus.
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
            <h3>Photography-first pacing</h3>
            <p>
              We plan extended dawn and dusk sessions, build in quiet hide time,
              and position vehicles to keep backgrounds clean and birds
              undisturbed. Expect fewer rushed stops and more meaningful hours
              with subjects you want to follow.
            </p>
            <ul className={styles.list}>
              <li>Golden-hour windows prioritized for direction and warmth.</li>
              <li>Vehicle positioning tuned for light angles and wind.</li>
              <li>Hide etiquette that keeps movements minimal and respectful.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>What’s included</h2>
            <p>
              We cover the essentials so you can focus on field craft, while
              keeping the itinerary flexible for light and movement.
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
              All schedules are tailored, but these examples show how we balance
              diverse habitats with time to shoot and review work.
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
              A smooth bird photography tour is built on preparation. We’ll help
              you plan for the light, the dust, and the long days in the field.
            </p>
          </header>

          <div className={styles.subsection}>
            <h3>Gear &amp; settings checklist</h3>
            <ul className={styles.list}>
              <li>Lens range: 300–600mm plus a short zoom for habitat shots.</li>
              <li>Rain and dust protection, plus a microfiber kit for lenses.</li>
              <li>Extra batteries, fast memory cards, and a daily backup drive.</li>
              <li>Beanbag or compact tripod for steady vehicle or hide work.</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Ethics for photographers</h3>
            <p>
              We prioritize respectful distance, avoid baiting, and plan for
              natural behavior. Flash use is kept minimal, and we follow guide
              advice on sensitive species or nesting zones.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>FAQ</h2>
            <p>
              Common questions about bird photography tours in Kenya and how we
              keep the experience smooth, safe, and productive.
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
            <h2>Let’s design a Kenya bird photography tour around your goals.</h2>
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
            <p>Continue planning with other Twinspot tours across Kenya.</p>
          </header>
          <div className={styles.relatedGrid}>
            {[
              {
                label: "Birding Tours in Kenya",
                href: "/birding-tours-kenya",
              },
              {
                label: "Wildlife Safaris in Kenya",
                href: "/wildlife-safaris-kenya",
              },
              { label: "Great Migration", href: "/great-migration" },
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
