import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getDestinations, type Destination } from "@/lib/data/destinations";

import styles from "./birdingToursKenya.module.css";

type TourType = {
  title: string;
  description: string;
  href: string;
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

const tourTypes: TourType[] = [
  {
    title: "Rift Valley Lakes",
    description:
      "Flamingo-rich shores, pelicans, and migrant hotspots across soda and freshwater lakes.",
    href: "#",
  },
  {
    title: "Forest Birding",
    description:
      "Target highland specials in misty montane forests and bamboo zones.",
    href: "#",
  },
  {
    title: "Coastal Endemics",
    description:
      "Indian Ocean breeze, creek forests, and rare coastal residents.",
    href: "#",
  },
  {
    title: "Big 5 + Birds Combo",
    description:
      "Blend classic safari icons with woodland and savannah birding.",
    href: "#",
  },
  {
    title: "Photography-Focused",
    description:
      "Slow-paced hides, golden-hour drives, and ethical positioning.",
    href: "#",
  },
  {
    title: "Family-Friendly",
    description:
      "Short travel hops, engaging guides, and flexible activity blocks.",
    href: "#",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Rift Valley Primer",
    duration: "5 Days",
    description:
      "A fast-paced introduction to Kenya birding safaris with easy access habitats.",
    highlights: [
      "Lake Naivasha boat and woodland birding",
      "Lake Nakuru waterbirds and raptor lookouts",
      "Rift Valley escarpment viewpoints",
    ],
  },
  {
    title: "Kenya Birding Classic",
    duration: "8 Days",
    description:
      "Balanced itinerary combining wetlands, savannah, and forest edge specialties.",
    highlights: [
      "Nairobi National Park for open-country species",
      "Aberdare foothills for forest birding",
      "Maasai Mara with Big 5 + birds",
    ],
  },
  {
    title: "East Africa Deep Dive",
    duration: "12 Days",
    description:
      "A slow-travel route for photographers and listers chasing Kenya’s endemic mix.",
    highlights: [
      "Arabuko-Sokoke forest endemics",
      "Coastal creek forests and shorebirds",
      "Highland moorlands and montane specials",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a local guide?",
    answer:
      "Yes. Local expertise is essential for locating target species, understanding habitats, and navigating access permits. We pair you with specialist birding guides who know the seasonal patterns intimately.",
  },
  {
    question: "What gear should I bring?",
    answer:
      "Bring binoculars, a lightweight scope if you enjoy scanning wetlands, neutral clothing, a brimmed hat, and layered rain protection. We can advise on specific lenses based on your itinerary.",
  },
  {
    question: "Are tours suitable for beginners?",
    answer:
      "Absolutely. We design relaxed pacing and flexible sighting goals for new birders, while still delivering standout species and comfortable lodges.",
  },
  {
    question: "Bird photography tips?",
    answer:
      "Prioritise early light, keep shutter speeds high, and work with your guide to position ethically. We also schedule hide sessions and quiet observation windows for better behavior shots.",
  },
];

export const metadata: Metadata = {
  title: "Birding Tours in Kenya",
  description:
    "Curated birding tours in Kenya with expert guides, flexible itineraries, and photography-focused experiences across East Africa’s richest habitats.",
};

const fallbackDestinations: Destination[] = [
  {
    slug: "lake-nakuru",
    title: "Lake Nakuru",
    summary: "Rift Valley wetlands with pelicans, flamingos, and raptor lookouts.",
    region: "rift-valley",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding on Lake Nakuru",
    },
    published: true,
  },
  {
    slug: "maasai-mara",
    title: "Maasai Mara",
    summary: "Savannah birding with raptors, bustards, and iconic safari moments.",
    region: "savannah",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding on the Mara plains",
    },
    published: true,
  },
  {
    slug: "naivasha",
    title: "Lake Naivasha",
    summary: "Acacia woodlands, freshwater lakes, and prolific waterbirds.",
    region: "rift-valley",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding at Lake Naivasha",
    },
    published: true,
  },
  {
    slug: "aberdares",
    title: "Aberdare Highlands",
    summary: "Montane forests for highland specials and mixed-species flocks.",
    region: "highlands",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding in the Aberdares",
    },
    published: true,
  },
  {
    slug: "samburu",
    title: "Samburu",
    summary: "Arid river valleys with dryland specialties and striking landscapes.",
    region: "north",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding in Samburu",
    },
    published: true,
  },
  {
    slug: "coast",
    title: "Kenya Coast",
    summary: "Coastal endemics, mangroves, and Indian Ocean flyways.",
    region: "coast",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Birding along the Kenya Coast",
    },
    published: true,
  },
];

export default async function BirdingToursKenyaPage() {
  const destinations = await getDestinations();
  const featuredDestinations = destinations.length
    ? destinations.slice(0, 8)
    : fallbackDestinations;

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding tours in Kenya at sunrise"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Kenya Birding Safari</p>
          <h1 className={styles.heroTitle}>Birding Tours in Kenya</h1>
          <p className={styles.heroSubtitle}>
            Kenya’s lakes, forests, and savannahs deliver an East Africa birding
            experience shaped by expert guides, seasonal timing, and thoughtful
            itineraries.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Talk to Us
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              See Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.valueStrip}>
        <div className={styles.containerWide}>
          <div className={styles.valueGrid}>
            {[
              "Expert guides",
              "Private/custom itineraries",
              "Peak season tips",
              "Ethical birding",
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
            <h2>Tour Types</h2>
            <p>
              Choose a Kenya birding safari that matches your habitats, pace,
              and target species list.
            </p>
          </header>

          <div className={styles.cardGrid}>
            {tourTypes.map((tour) => (
              <article key={tour.title} className={styles.card}>
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <Link href={tour.href} className={styles.cardLink}>
                  View details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Featured Destinations</h2>
            <p>
              Landscapes we return to season after season for bird photography,
              endemic species, and classic safari moments.
            </p>
          </header>

          <div className={styles.destinationGrid}>
            {featuredDestinations.map((destination) => (
              <article
                key={destination.slug}
                className={styles.destinationCard}
              >
                <div className={styles.destinationImage}>
                  <Image
                    src={destination.heroImage?.imageUrl || "/hero.jpg"}
                    alt={destination.heroImage?.alt || destination.title}
                    fill
                    className={styles.destinationImageAsset}
                  />
                </div>
                <div className={styles.destinationBody}>
                  <h3>{destination.title}</h3>
                  <p>{destination.summary}</p>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className={styles.cardLink}
                  >
                    Explore destination
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>Best Time to Go</h2>
            <p>
              The most productive birding tours in Kenya align with rains,
              breeding cycles, and migration windows rather than fixed calendars.
            </p>
          </header>
          <div className={styles.seasonGrid}>
            <div className={styles.seasonCard}>
              <h3>January–March</h3>
              <p>
                Dry-season visibility and excellent raptor activity across the
                Rift Valley and savannahs.
              </p>
            </div>
            <div className={styles.seasonCard}>
              <h3>April–June</h3>
              <p>
                Lush landscapes, breeding displays, and forest birding at its
                richest after the long rains.
              </p>
            </div>
            <div className={styles.seasonCard}>
              <h3>July–October</h3>
              <p>
                Peak season for Kenya birding safaris, with migrants, clear
                light, and classic Big 5 + birds combinations.
              </p>
            </div>
            <div className={styles.seasonCard}>
              <h3>November–December</h3>
              <p>
                Short rains refresh wetlands and bring in Palearctic migrants
                for East Africa birding itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Sample Itineraries</h2>
            <p>
              Each itinerary is fully customizable, with pacing designed for
              ethical bird photography and immersive habitat time.
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
                  {itinerary.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
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
            <h2>FAQ</h2>
            <p>
              Planning a Kenya birding safari? These are the questions we answer
              most often.
            </p>
          </header>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.containerWide}>
          <div className={styles.ctaContent}>
            <h2>
              Tell us your dates and target species, we’ll design your route.
            </h2>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
