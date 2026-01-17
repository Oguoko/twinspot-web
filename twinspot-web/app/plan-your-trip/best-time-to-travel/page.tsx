import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./bestTimeToTravel.module.css";

type Highlight = {
  title: string;
  description: string;
};

type Season = {
  name: string;
  vibe: string;
  highlights: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "Best Time to Travel | Twinspot Tours & Travel",
  description:
    "Seasonal guidance for birding-forward safaris in East Africa, with practical notes for wildlife viewing, photography, and pacing.",
};

const quickTake: string[] = [
  "For peak bird song and breeding behavior, aim for the early green season when habitats are lush and active.",
  "If your priority is classic wildlife visibility, the heart of the dry season offers open sight lines and reliable water sources.",
  "For fewer crowds and softer light, shoulder months provide a quieter, more relaxed rhythm.",
  "If you love fresh landscapes and dramatic skies, late green season delivers color, newborn wildlife, and rich bird activity.",
];

const seasons: Season[] = [
  {
    name: "Dry Season",
    vibe: "Clear skies, concentrated wildlife, and efficient drives.",
    highlights: [
      "Open grasslands with easy visibility for big game",
      "Reliable water sources that draw birds and mammals",
      "Lower humidity and cooler evenings",
    ],
  },
  {
    name: "Green Season",
    vibe: "Lush habitats, vibrant birdlife, and fewer vehicles.",
    highlights: [
      "Breeding plumage and active nesting behavior",
      "Fresh landscapes and dramatic cloud textures",
      "Excellent value for travelers seeking depth",
    ],
  },
  {
    name: "Shoulder Season",
    vibe: "Balanced conditions with softer light and calmer lodges.",
    highlights: [
      "A blend of birding productivity and wildlife visibility",
      "Less crowded parks and relaxed driving pace",
      "Flexible lodging availability",
    ],
  },
];

const regions: Highlight[] = [
  {
    title: "Coast",
    description:
      "Sea breezes and tidal rhythms shape shorebird viewing. Early mornings and late afternoons are best for photography and comfortable walks.",
  },
  {
    title: "Highlands",
    description:
      "Cooler temperatures mean mid-morning bird activity and mellow hiking conditions. Misty mornings can add atmosphere to forest scenes.",
  },
  {
    title: "Rift Valley Lakes",
    description:
      "Water levels shift by season. Some years bring concentrated flamingos, while others favor pelicans, grebes, and raptors.",
  },
  {
    title: "Savannah",
    description:
      "Dry months concentrate wildlife around water, while green months bring richer grasses and more dispersed animal movement.",
  },
];

const photographyNotes: Highlight[] = [
  {
    title: "Light and contrast",
    description:
      "Dry season light is crisp and high-contrast, great for mammals. Green season light is softer, ideal for plumage detail and moody landscapes.",
  },
  {
    title: "Heat haze",
    description:
      "Midday haze can be more pronounced in dry months. We plan longer morning sessions and rest during the harshest light.",
  },
  {
    title: "Skies and texture",
    description:
      "Green season skies bring dramatic cloud layers and deeper color. Storm windows can create standout backdrops for flight shots.",
  },
];

const packingChecklist: string[] = [
  "Layered clothing for early starts and cooler evenings",
  "Light rain jacket for green-season showers",
  "Neutral colors, wide-brim hat, and sun protection",
  "Binoculars, spare batteries, and quick-dry cloths",
  "Water bottle and small daypack for field sessions",
];

const itineraryPairings: Highlight[] = [
  {
    title: "Dry Season: Savannah & Lakes",
    description:
      "Pair open plains drives with lake mornings to balance big game visibility and dense waterbird activity.",
  },
  {
    title: "Green Season: Forests & Highlands",
    description:
      "Lush canopy walks and montane birding shine when breeding activity is high and forests are alive with song.",
  },
  {
    title: "Shoulder Season: Coast & Conservancies",
    description:
      "Blend quiet coastal birding with private conservancies for flexible wildlife drives and intimate lodge stays.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is there a single best month for everything?",
    answer:
      "Not really. Birding, wildlife, and photography peak at different times, so we align your goals with the season that best supports them.",
  },
  {
    question: "Will rain ruin a green-season trip?",
    answer:
      "Rain tends to come in short bursts. We plan flexible schedules and focus on habitats that stay productive after showers.",
  },
  {
    question: "When are migratory birds most visible?",
    answer:
      "Migrant waves often appear during seasonal transitions. We focus on wetlands, coast, and forest edges when movement is highest.",
  },
  {
    question: "Is the dry season too hot?",
    answer:
      "Temperatures can climb, but early starts, shaded breaks, and thoughtful lodge selection keep the day comfortable.",
  },
  {
    question: "Do rates change by season?",
    answer:
      "Yes. Peak dry months are typically higher, while green and shoulder seasons can offer more value and availability.",
  },
  {
    question: "Can you combine seasons in one trip?",
    answer:
      "If you have a longer window, we can transition between regions to capture different seasonal conditions within one journey.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "For peak dry months, 6–9 months is ideal. For green season, shorter lead times are often possible.",
  },
];

export default function BestTimeToTravelPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Savannah sunrise with birds and wildlife"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Plan Your Trip</p>
          <h1>Best Time to Travel</h1>
          <p className={styles.heroSubtitle}>
            Seasonal guidance for birding-forward safaris, with clear notes on
            wildlife visibility, habitat rhythm, and photography conditions.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Talk to Us
            </Link>
            <Link href="/destinations" className={styles.secondaryButton}>
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Quick Take</h2>
            <p>
              Use these at-a-glance pointers to match your priorities with the
              right season.
            </p>
          </div>
          <ul className={styles.bulletList}>
            {quickTake.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Seasons Overview</h2>
            <p>
              East Africa’s calendar is best understood by habitat response rather
              than strict months. We choose the season that aligns with your
              species goals and preferred travel style.
            </p>
          </div>
          <div className={styles.seasonGrid}>
            {seasons.map((season) => (
              <article key={season.name} className={styles.seasonCard}>
                <h3>{season.name}</h3>
                <p className={styles.seasonVibe}>{season.vibe}</p>
                <ul>
                  {season.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Birding Calendar Logic</h2>
            <p>
              Bird activity shifts with rain, breeding cycles, and food supply.
              Green months often bring breeding plumage, nesting, and more vocal
              forests. Drier periods can concentrate waterbirds and raptors near
              shrinking water sources. We shape the itinerary around these
              movements rather than a fixed calendar.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Birding signals we track</h3>
            <ul>
              <li>Breeding song and courtship displays</li>
              <li>Wetland water levels and shorebird density</li>
              <li>Fruit and insect blooms that pull mixed flocks</li>
              <li>Raptor thermals and migration corridors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Wildlife Seasonality</h2>
            <p>
              Big game sightings depend on visibility and water availability.
              Dry months make animals easier to spot along rivers and waterholes.
              Green months bring more dispersed movement but richer behavior as
              grazing improves and young animals arrive.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Wildlife rhythms</h3>
            <ul>
              <li>Dry season = visibility and concentrated herds</li>
              <li>Green season = newborns and softer light</li>
              <li>Shoulder months = balanced viewing with fewer vehicles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Regional Differences</h2>
            <p>
              East Africa is not one climate. We tailor seasonality by region so
              your route stays productive across varied landscapes.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {regions.map((region) => (
              <article key={region.title} className={styles.card}>
                <h3>{region.title}</h3>
                <p>{region.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Photography Conditions</h2>
            <p>
              Light and atmosphere shift dramatically by season. We plan time in
              each habitat when the light supports your photographic goals.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {photographyNotes.map((note) => (
              <article key={note.title} className={styles.card}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Migration Notes</h2>
            <p>
              Seasonal movement shapes both birds and mammals. While timing can
              vary each year, we plan with historical patterns and on-the-ground
              reports to keep you close to the action. If you are focused on the
              iconic Great Migration, explore our dedicated resource.
            </p>
            <Link href="/great-migration" className={styles.inlineLink}>
              View the Great Migration guide
            </Link>
          </div>
          <div className={styles.highlightBox}>
            <h3>Migration lenses</h3>
            <ul>
              <li>Wetland and coastal migrant arrivals</li>
              <li>Raptor flyways tied to thermals</li>
              <li>Grassland flushes after early rains</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Packing by Season</h2>
            <p>
              Weather can swing in a single day. Packing with layers keeps you
              comfortable from early starts to sundowners.
            </p>
          </div>
          <ul className={styles.checklist}>
            {packingChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Sample Itinerary Pairings</h2>
            <p>
              These pairings show how we match habitats to season for well-rounded
              birding and wildlife experiences.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {itineraryPairings.map((pairing) => (
              <article key={pairing.title} className={styles.card}>
                <h3>{pairing.title}</h3>
                <p>{pairing.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Best Time FAQs</h2>
            <p>
              Practical answers to help you decide when to go based on your
              priorities.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <div>
            <h2>Need help matching your dates?</h2>
            <p>
              Share your travel window and we will recommend the season and
              regions that align with your birding and wildlife goals.
            </p>
          </div>
          <Link href="/contact" className={styles.primaryButton}>
            Plan My Dates
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Related Links</h2>
            <p>
              Dive deeper into destinations and tour styles that complement your
              chosen season.
            </p>
          </div>
          <div className={styles.relatedGrid}>
            <Link href="/destinations/kenya" className={styles.relatedCard}>
              <h3>Kenya Destinations</h3>
              <p>Classic savannah, lakes, and coastal habitats.</p>
            </Link>
            <Link href="/bird-photography-tours" className={styles.relatedCard}>
              <h3>Bird Photography Tours</h3>
              <p>Trips designed for light, hides, and patient field time.</p>
            </Link>
            <Link href="/plan-your-trip/how-we-plan" className={styles.relatedCard}>
              <h3>How We Plan</h3>
              <p>The planning process behind every Twinspot itinerary.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
