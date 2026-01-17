import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./whatToExpect.module.css";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

type Detail = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "What to Expect | Twinspot Tours & Travel",
  description:
    "Know what a Twinspot safari feels like day to day, from birding pace and guiding style to lodge comfort and field etiquette.",
};

const timeline: TimelineItem[] = [
  {
    time: "05:30 – 08:30",
    title: "First light field time",
    description:
      "We start early for peak bird song and wildlife movement. Expect calm drives, short walks, and long pauses for behavior.",
  },
  {
    time: "09:00 – 12:00",
    title: "Mid-morning exploration",
    description:
      "We shift into targeted habitats: forest edges, river crossings, or lake shores depending on the day’s goals.",
  },
  {
    time: "12:30 – 15:30",
    title: "Rest and reset",
    description:
      "Lunch, shade, and a slow afternoon break keep energy steady for the next session.",
  },
  {
    time: "15:30 – 18:30",
    title: "Golden-hour sightings",
    description:
      "Late light is ideal for photography and big game. We watch for raptors, evening choruses, and open-plain movement.",
  },
  {
    time: "Evening",
    title: "Dinner and debrief",
    description:
      "We review highlights, update checklists, and plan the next day’s focus with your guide.",
  },
];

const paceNotes: Detail[] = [
  {
    title: "Birding-forward pace",
    description:
      "Birding emphasizes patience: longer stops, quiet listening, and revisiting habitats for fleeting species.",
  },
  {
    title: "Classic safari pace",
    description:
      "Wildlife drives can be longer-distance and cover more ground, especially when searching for big cats or large herds.",
  },
  {
    title: "Blended rhythm",
    description:
      "We combine both by anchoring mornings for birds, then shifting to broader wildlife drives later in the day.",
  },
];

const vehicleDetails: Detail[] = [
  {
    title: "Field-ready vehicles",
    description:
      "4x4 safari vehicles include pop-up roofs, shaded seating, and clear sightlines for binocular use.",
  },
  {
    title: "Comfort touches",
    description:
      "We pack coolers for water, offer beanbags for photographers, and ensure charging points for optics and cameras.",
  },
  {
    title: "Flexible seating",
    description:
      "Small groups mean easy repositioning for light and viewing angles without disrupting sightings.",
  },
];

const lodgeNotes: Detail[] = [
  {
    title: "Power and connectivity",
    description:
      "Many camps use solar power and limit evening electricity. We recommend charging during day hours.",
  },
  {
    title: "Water and laundry",
    description:
      "Warm water is common but time-limited. Laundry services are often available for multi-day stays.",
  },
  {
    title: "Atmosphere",
    description:
      "Expect open-air dining, wildlife sounds at night, and a relaxed, intimate lodge culture.",
  },
];

const walkingOptions: Detail[] = [
  {
    title: "Guided walks",
    description:
      "Short walks highlight tracks, smaller birds, and plant ecology. Pace is slow and tailored to comfort levels.",
  },
  {
    title: "Boat excursions",
    description:
      "Lake or river sessions open up kingfishers, herons, and hippo viewing with a gentle pace and soft light.",
  },
  {
    title: "Hide time",
    description:
      "Quiet hides or viewing decks offer long-form observation with minimal movement—ideal for behavior notes.",
  },
];

const etiquetteTips: string[] = [
  "Keep voices low during sightings and let guides communicate quietly.",
  "Avoid sudden movements when birds are close to the vehicle.",
  "Share prime viewing angles in small groups and rotate seating as needed.",
  "Tipping is customary for guides and lodge staff; we provide recommended ranges.",
];

const faqs: FaqItem[] = [
  {
    question: "How much time is spent in the vehicle?",
    answer:
      "Most days include two main field sessions with a mid-day break. We keep drives purposeful rather than endless.",
  },
  {
    question: "Do we need to be expert birders?",
    answer:
      "No. Our guides adapt the experience to your level, from beginner-friendly identification to advanced listing.",
  },
  {
    question: "Can we request private guiding?",
    answer:
      "Yes. Private guiding offers the most flexibility for pace, photography, and target species.",
  },
  {
    question: "Will we have Wi-Fi at lodges?",
    answer:
      "Some lodges offer Wi-Fi in common areas, while remote camps may have limited connectivity.",
  },
  {
    question: "What about dietary requirements?",
    answer:
      "We communicate dietary needs in advance. Most lodges can accommodate vegetarian, vegan, or allergy-specific meals.",
  },
  {
    question: "Is travel insurance required?",
    answer:
      "We strongly recommend comprehensive travel insurance that covers medical care and trip disruptions.",
  },
  {
    question: "How active are the days?",
    answer:
      "Activity level is moderate, with options for gentle walks or more active hikes depending on your comfort.",
  },
];

export default function WhatToExpectPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Guests on safari watching birds at sunset"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Plan Your Trip</p>
          <h1>What to Expect</h1>
          <p className={styles.heroSubtitle}>
            A clear picture of your daily rhythm, guiding style, and the
            practical details that make Twinspot journeys feel smooth and
            well-paced.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Talk to Us
            </Link>
            <Link href="/plan-your-trip/how-we-plan" className={styles.secondaryButton}>
              How We Plan
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>A Typical Day</h2>
            <p>
              Our itineraries are designed to match wildlife activity patterns
              and give you time to absorb the landscape rather than rush through
              it.
            </p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div key={item.time} className={styles.timelineItem}>
                <p className={styles.timelineTime}>{item.time}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Birding vs. Safari Pace</h2>
            <p>
              Birding rewards patience, while classic safari experiences can be
              more mobile. We blend the two with intention.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {paceNotes.map((note) => (
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
            <h2>Guides & Group Size</h2>
            <p>
              We favor private or small-group travel so your guide can match
              your pace, communicate quietly, and pause for behavior without
              pressure. Our birding specialists combine local insight with clear
              communication to support both beginners and experienced birders.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Guiding style</h3>
            <ul>
              <li>Dedicated birding knowledge alongside wildlife expertise</li>
              <li>Clear pre-drive briefings and recap moments</li>
              <li>Flexible stops for photography and checklists</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Vehicles & Field Comfort</h2>
            <p>
              The vehicle is your viewing platform, so we keep it well prepared
              for optics, photography, and long but comfortable field sessions.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {vehicleDetails.map((detail) => (
              <article key={detail.title} className={styles.card}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Walking and Boat Options</h2>
            <p>
              Not every sighting happens from the vehicle. We add walking and
              water experiences when conditions are right for quiet observation.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {walkingOptions.map((detail) => (
              <article key={detail.title} className={styles.card}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Lodges and Camps</h2>
            <p>
              Camps and lodges range from classic to refined, but they all share
              an atmosphere of nature-first comfort.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {lodgeNotes.map((detail) => (
              <article key={detail.title} className={styles.card}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Food & Dietary Notes</h2>
            <p>
              Meals are hearty, fresh, and often locally inspired. We share
              dietary requirements with lodges ahead of time, and most are
              prepared to accommodate vegetarian, vegan, and allergy-sensitive
              requests.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Typical meals</h3>
            <ul>
              <li>Early breakfast or coffee before first drive</li>
              <li>Hearty brunch or lunch back at camp</li>
              <li>Evening dinner with local seasonal dishes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Health & Safety Basics</h2>
            <p>
              Your well-being is central to our planning. We work with reputable
              partners, maintain clear safety protocols, and encourage you to
              consult medical professionals for vaccinations and travel health
              advice.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>On-the-ground care</h3>
            <ul>
              <li>Filtered drinking water and hydration reminders</li>
              <li>Road-safety focused driving practices</li>
              <li>Emergency contacts and local support networks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Etiquette & Tipping</h2>
            <p>
              Respect for wildlife, communities, and fellow travelers makes the
              experience smoother for everyone.
            </p>
          </div>
          <ul className={styles.bulletList}>
            {etiquetteTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>First-Timer FAQs</h2>
            <p>
              Answers to common questions so you arrive feeling prepared and
              relaxed.
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
            <h2>Let’s craft your travel rhythm.</h2>
            <p>
              Share your priorities and we will set expectations, pacing, and
              comfort details tailored to your style.
            </p>
          </div>
          <Link href="/contact" className={styles.primaryButton}>
            Start Planning
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Related Links</h2>
            <p>
              Continue planning with seasonal advice and destination ideas.
            </p>
          </div>
          <div className={styles.relatedGrid}>
            <Link href="/plan-your-trip/best-time-to-travel" className={styles.relatedCard}>
              <h3>Best Time to Travel</h3>
              <p>Seasonal patterns for birding and wildlife viewing.</p>
            </Link>
            <Link href="/destinations" className={styles.relatedCard}>
              <h3>Destinations</h3>
              <p>Explore our East Africa destination portfolio.</p>
            </Link>
            <Link href="/plan-your-trip/how-we-plan" className={styles.relatedCard}>
              <h3>How We Plan</h3>
              <p>Learn how we craft each itinerary.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
