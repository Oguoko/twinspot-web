import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./transport.module.css";

type FleetItem = {
  name: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "Our Transport | Twinspot Tours & Travel",
  description:
    "Explore Twinspot's safari transport options, built for comfort, safety, and birding-friendly viewing across East Africa.",
};

const fleet: FleetItem[] = [
  {
    name: "4x4 safari van",
    description:
      "Pop-up roofs, wide windows, and balanced seating make vans a practical choice for mixed birding and wildlife drives.",
  },
  {
    name: "Land Cruiser",
    description:
      "Higher clearance and smoother suspension for rugged tracks, with generous storage for optics and camera gear.",
  },
  {
    name: "Extended-range birding vehicle",
    description:
      "Configured for longer days in the field with extra power outlets, cool storage, and room to move quietly.",
  },
  {
    name: "Boat and lake access",
    description:
      "We arrange low-wake boats and shoreline transfers for lake and wetland birding sessions when needed.",
  },
];

const comfortFeatures = [
  "Seat belts for every guest and clear emergency briefing before departure",
  "Air-conditioned cabins with adjustable vents and shaded glass",
  "Reliable communication between driver-guide, lodges, and support team",
  "Daily vehicle checks focused on tires, fluids, and safety equipment",
];

const photoConsiderations = [
  "Roof hatches and stabilized rests for clean sight lines",
  "Charging ports for cameras, phones, and GPS devices",
  "Beanbag-friendly ledges and space for monopods",
  "Quiet approach protocols to reduce disturbance",
];

const pacingNotes = [
  "Early starts to reach habitats during peak bird activity",
  "Planned breaks at viewpoints, hides, or lakeside picnic spots",
  "Realistic drive times with scenic pauses and comfort stops",
  "Flexible end-of-day returns based on light and sightings",
];

const shareOptions: FleetItem[] = [
  {
    name: "Private departures",
    description:
      "Ideal for photographers and focused birders who want full control of pace, stops, and observation time.",
  },
  {
    name: "Small shared trips",
    description:
      "A social option with like-minded travelers, still kept compact to protect viewing angles and comfort.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Can we request a specific vehicle type?",
    answer:
      "Yes. Let us know your priorities—photography space, shorter steps, or smoother suspension—and we will recommend the best fit.",
  },
  {
    question: "Do vehicles have seat rotations or open seating?",
    answer:
      "We prioritize clear lines of sight and rotate seating on longer drives so everyone gets window access.",
  },
  {
    question: "How do you handle long transfers?",
    answer:
      "We break up longer days with habitat stops, scenic viewpoints, and a steady pace that keeps fatigue low.",
  },
  {
    question: "Are vehicles suitable for family travel?",
    answer:
      "Yes. We can adjust seating layouts, add cushions, and plan extra breaks for younger or older travelers.",
  },
];

export default function OurTransportPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Twinspot safari transport overlooking East African landscapes"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Our Transport</span>
          <h1>Comfortable, field-ready vehicles for unhurried days.</h1>
          <p className={styles.heroSubtitle}>
            Our fleet is selected for stability, visibility, and long hours in
            the field. From Rift Valley lakes to savannah tracks, we keep you
            close to the action without sacrificing comfort or safety.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/contact">
              Talk to a planner
            </Link>
            <Link className={styles.secondaryButton} href="/birding-tours-kenya">
              Explore birding tours
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Fleet overview</h2>
            <p>
              We match transport to your route, group size, and viewing needs so
              that every drive feels smooth and productive.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {fleet.map((item) => (
              <article key={item.name} className={styles.card}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Comfort and safety essentials</h2>
            <p>
              The best sightings come when everyone feels secure and well cared
              for. We keep safety checks consistent and travel days calm.
            </p>
            <ul className={styles.list}>
              {comfortFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Photography-friendly details</h2>
            <p>
              We design the vehicle experience around quiet observation, clean
              sight lines, and practical gear support.
            </p>
            <ul className={styles.list}>
              {photoConsiderations.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Pacing and logistics</h2>
            <p>
              Drives are built around bird activity and your energy levels. We
              keep the day fluid while still reaching key habitats on time.
            </p>
            <ul className={styles.list}>
              {pacingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div className={styles.highlightCard}>
            <h3>Pair transport with the right trips</h3>
            <p>
              Want long marshland mornings or a classic savannah loop? We align
              vehicles and routes so you travel well and see more.
            </p>
            <div className={styles.linkStack}>
              <Link href="/wildlife-safaris-kenya">Wildlife safaris</Link>
              <Link href="/bird-photography-tours">Bird photography tours</Link>
              <Link href="/destinations/kenya">Kenya destinations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Private vs shared options</h2>
            <p>
              Choose the right travel style for your goals, whether you want
              complete control or a small-group rhythm.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {shareOptions.map((option) => (
              <article key={option.name} className={styles.card}>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Transport FAQs</h2>
            <p>Quick answers to common logistics questions.</p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <article key={item.question} className={styles.faqCard}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <h2>Need help matching transport to your itinerary?</h2>
            <p>
              Share your travel window and priorities, and we will suggest the
              right vehicle setup.
            </p>
          </div>
          <Link className={styles.primaryButton} href="/contact">
            Plan with us
          </Link>
        </div>
      </section>
    </main>
  );
}
