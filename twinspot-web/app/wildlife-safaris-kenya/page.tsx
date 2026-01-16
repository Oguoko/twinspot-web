import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getDestinations, type Destination } from "@/lib/data/destinations";

import styles from "./wildlifeSafarisKenya.module.css";

type SafariStyle = {
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

const safariStyles: SafariStyle[] = [
  {
    title: "Classic Big Five",
    description:
      "Game drives focused on lion, leopard, elephant, buffalo, and rhino with unhurried sighting time.",
    href: "#",
  },
  {
    title: "Family Safari",
    description:
      "Shorter drive blocks, flexible pacing, and lodges with spacious family suites.",
    href: "#",
  },
  {
    title: "Luxury Lodges",
    description:
      "Private concessions, elevated dining, and spa-style downtime between drives.",
    href: "#",
  },
  {
    title: "Mid-Range Road Safari",
    description:
      "Comfortable camps, experienced guides, and outstanding value for a Kenya safari.",
    href: "#",
  },
  {
    title: "Photography Safari",
    description:
      "Golden-hour positioning, longer sightings, and vehicle setups for clean sight lines.",
    href: "#",
  },
  {
    title: "Safari + Beach Combo",
    description:
      "Pair Masai Mara safari days with a quiet Indian Ocean coastline reset.",
    href: "#",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Short & Sweet Mara Focus",
    duration: "3–5 Days",
    description:
      "A compact Kenya safari itinerary built around prime game drives and iconic savannah scenery.",
    highlights: [
      "Two full days of Masai Mara game drives",
      "Optional balloon flight or sunrise drive",
      "Private guide for flexible wildlife pacing",
    ],
  },
  {
    title: "Kenya Safari Classic",
    duration: "7–9 Days",
    description:
      "Balance predator sightings with varied landscapes across Kenya’s best-known parks.",
    highlights: [
      "Amboseli elephants with Kilimanjaro views",
      "Masai Mara safari with big cat focus",
      "Lake Nakuru for rhino and flamingo shorelines",
    ],
  },
  {
    title: "Grand Circuit + Coast",
    duration: "10–14 Days",
    description:
      "A deeper safari itinerary with northern reserves and relaxed beach time built in.",
    highlights: [
      "Samburu’s unique northern species",
      "Tsavo for rugged landscapes and red elephants",
      "Diani or Watamu wind-down by the sea",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is a Kenya safari safe?",
    answer:
      "Yes. We work with vetted guides, carefully selected lodges, and clear travel briefings. Your guide handles daily logistics so you can focus on wildlife, not navigation.",
  },
  {
    question: "What should I pack?",
    answer:
      "Light layers, neutral colors, a wide-brim hat, and a warm layer for early drives. Binoculars, sunscreen, and a soft daypack are essential for wildlife safaris in Kenya.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For peak season and a Masai Mara safari, we recommend 4–8 months out. Shoulder seasons can often be arranged with shorter notice.",
  },
  {
    question: "What vehicle types do you use?",
    answer:
      "We primarily use 4x4 safari vehicles with pop-up roofs for viewing and photography. Private departures are available for flexible pacing.",
  },
  {
    question: "How do Kenya’s parks differ?",
    answer:
      "Masai Mara leads for big cat density, Amboseli for elephant herds, Tsavo for dramatic landscapes, and Samburu for unique northern species.",
  },
];

export const metadata: Metadata = {
  title: "Wildlife Safaris in Kenya",
  description:
    "Plan wildlife safaris in Kenya with expert guides, thoughtful pacing, and tailored Kenya safari itineraries across Masai Mara, Amboseli, and beyond.",
};

const fallbackDestinations: Destination[] = [
  {
    slug: "masai-mara",
    title: "Masai Mara",
    summary: "Kenya’s premier big cat territory and the heart of the Big Five.",
    region: "savannah",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Masai Mara safari plains",
    },
    published: true,
  },
  {
    slug: "amboseli",
    title: "Amboseli",
    summary: "Elephants, open plains, and views of Kilimanjaro at sunrise.",
    region: "savannah",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Amboseli elephants on safari",
    },
    published: true,
  },
  {
    slug: "tsavo",
    title: "Tsavo",
    summary: "Vast landscapes with red elephants and classic safari solitude.",
    region: "south",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Tsavo National Park landscapes",
    },
    published: true,
  },
  {
    slug: "samburu",
    title: "Samburu",
    summary: "Rugged northern reserve with rare species and riverine wildlife.",
    region: "north",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Samburu safari scenery",
    },
    published: true,
  },
  {
    slug: "lake-nakuru",
    title: "Lake Nakuru",
    summary: "Rhino sanctuary, alkaline lakes, and prolific birdlife.",
    region: "rift-valley",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Lake Nakuru wildlife and shoreline",
    },
    published: true,
  },
  {
    slug: "laikipia",
    title: "Laikipia",
    summary: "Private conservancies with walking safaris and conservation focus.",
    region: "highlands",
    country: "Kenya",
    heroImage: {
      imageUrl: "/hero.jpg",
      alt: "Laikipia conservancy safari",
    },
    published: true,
  },
];

export default async function WildlifeSafarisKenyaPage() {
  const destinations = await getDestinations();
  const destinationsBySlug = new Map(
    destinations.map((destination) => [
      destination.slug.toLowerCase(),
      destination,
    ])
  );

  const featuredDestinations = fallbackDestinations.map((fallback) => {
    const slugMatch = destinationsBySlug.get(fallback.slug.toLowerCase());
    const titleMatch = destinations.find(
      (destination) =>
        destination.title.toLowerCase() === fallback.title.toLowerCase()
    );

    return slugMatch ?? titleMatch ?? fallback;
  });

  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Wildlife safaris in Kenya at golden hour"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Kenya Safari Planning</p>
          <h1 className={styles.heroTitle}>Wildlife Safaris in Kenya</h1>
          <p className={styles.heroSubtitle}>
            Plan wildlife safaris in Kenya with expert guides, calm pacing, and
            an itinerary built around Kenya’s signature sightings—Big Five
            moments, Masai Mara safari drives, and iconic landscapes.
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
              "Private guides",
              "Ethical wildlife viewing",
              "Flexible budgets",
              "Photographer-friendly pacing",
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
            <h2>Safari Styles</h2>
            <p>
              Choose a safari itinerary that fits your travel rhythm, lodge
              style, and wildlife priorities.
            </p>
          </header>

          <div className={styles.cardGrid}>
            {safariStyles.map((style) => (
              <article key={style.title} className={styles.card}>
                <h3>{style.title}</h3>
                <p>{style.description}</p>
                <Link href={style.href} className={styles.cardLink}>
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
            <h2>Featured Parks & Reserves</h2>
            <p>
              These are the landscapes that shape our Kenya safari planning,
              from classic Masai Mara safari territory to quieter conservancies.
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
              Wildlife safaris in Kenya are strong year-round, with clear dry
              season viewing and lush green season photography.
            </p>
          </header>
          <div className={styles.seasonGrid}>
            <div className={styles.seasonCard}>
              <h3>June–October</h3>
              <p>
                Dry season visibility, peak wildlife density, and prime Masai
                Mara safari conditions.
              </p>
            </div>
            <div className={styles.seasonCard}>
              <h3>January–March</h3>
              <p>
                Warm weather, newborn wildlife, and excellent Big Five game
                drives with lighter crowds.
              </p>
            </div>
            <div className={styles.seasonCard}>
              <h3>April–May & November</h3>
              <p>
                Green season colors, fewer vehicles, and rewarding safari
                photography in softer light.
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
              Each Kenya safari itinerary is tailored to your priorities, with
              pacing that keeps drives comfortable and wildlife time unrushed.
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
              Answers to the most common Kenya safari questions, from timing to
              vehicles.
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
              Tell us your dates, budget range, and must-see wildlife. We’ll
              design the route.
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
