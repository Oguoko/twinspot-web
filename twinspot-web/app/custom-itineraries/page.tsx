import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./customItineraries.module.css";

type Framework = {
  title: string;
  description: string;
  highlights: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const focusChips = [
  "Endemics and lifers",
  "Big 5 + birds",
  "Photography hides",
  "Coastal forests",
  "Great Migration timing",
  "Family-friendly pacing",
  "Rift Valley lakes",
  "Private guiding",
];

const frameworks: Framework[] = [
  {
    title: "Birding-Forward Expedition",
    description:
      "A specialist route prioritising key habitats, local guides, and long observation windows.",
    highlights: [
      "Rift Valley wetlands and escarpments",
      "Montane forest endemics",
      "Extended hide sessions",
    ],
  },
  {
    title: "Mixed Safari Balance",
    description:
      "Blend iconic wildlife viewing with dedicated birding mornings and evenings.",
    highlights: [
      "Maasai Mara or Serengeti crossover",
      "Savannah raptors and grassland species",
      "Flexible game drive pacing",
    ],
  },
  {
    title: "Photography-Centric Journey",
    description:
      "Slow travel with golden-hour drives, ethical positioning, and lodge options with hides.",
    highlights: [
      "Dedicated photo guide support",
      "Private vehicle guarantee",
      "Image review and coaching time",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "How far in advance should I book a custom trip?",
    answer:
      "We recommend 6–10 months for peak seasons, especially if you want private guiding or boutique lodges.",
  },
  {
    question: "Can you build multi-country routes?",
    answer:
      "Yes. We regularly plan Kenya and Tanzania circuits, and can add Uganda or Rwanda for primate extensions.",
  },
  {
    question: "Do you design trips for non-birders in the group?",
    answer:
      "Absolutely. We balance birding mornings with wildlife drives, cultural visits, and flexible rest time.",
  },
  {
    question: "What is the minimum trip length?",
    answer:
      "Most custom itineraries begin at five nights, but seven to twelve nights allows for richer habitat variety.",
  },
  {
    question: "Can I choose my guide?",
    answer:
      "We do our best to match you with preferred guides based on availability and specialist expertise.",
  },
  {
    question: "How do you handle internal flights?",
    answer:
      "We prioritise road travel where possible, but use regional flights to reduce long transfers when needed.",
  },
  {
    question: "Are lodges customisable?",
    answer:
      "Yes. We present a range of comfort levels from classic camps to premium lodges with private decks.",
  },
  {
    question: "What if I need a slower pace?",
    answer:
      "We can shorten drive times, add rest days, and select lodges with on-site birding so the schedule feels calm.",
  },
  {
    question: "Is travel insurance required?",
    answer:
      "We strongly recommend comprehensive coverage and can suggest providers familiar with East Africa travel.",
  },
];

export const metadata: Metadata = {
  title: "Custom Itineraries | Tailored East Africa Safaris",
  description:
    "Design a custom itinerary with Twinspot for birding, wildlife, and photography safaris across East Africa.",
};

export default function CustomItinerariesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Custom safari planning in East Africa"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Custom Itineraries</p>
          <h1>Safaris designed around your pace, priorities, and species goals.</h1>
          <p className={styles.heroSubtitle}>
            We craft bespoke birding and wildlife journeys with expert guides,
            thoughtful pacing, and the right balance of comfort and immersion.
          </p>
          <Link href="/contact" className={styles.primaryCta}>
            Start a Custom Plan
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Why custom?</h2>
          <p className={styles.lede}>
            Custom itineraries give you access to the habitats, timing, and guide
            expertise that match your goals, whether that means chasing lifers,
            photographing raptors, or travelling slowly with family.
          </p>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Flexible pacing</h3>
              <p>Stay longer in high-density habitats and shorten transfers.</p>
            </article>
            <article className={styles.card}>
              <h3>Specialist guiding</h3>
              <p>Match with birding or photography guides who know the region.</p>
            </article>
            <article className={styles.card}>
              <h3>Comfort tailored</h3>
              <p>Choose from classic camps to premium lodges with privacy.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our custom planning process</h2>
          <div className={styles.processGrid}>
            <div>
              <h3>Discovery call</h3>
              <p>We listen to your goals, timing, and comfort preferences.</p>
            </div>
            <div>
              <h3>Route shaping</h3>
              <p>We align habitats, travel times, and guide availability.</p>
            </div>
            <div>
              <h3>Itinerary refinement</h3>
              <p>We adjust lodge options, pacing, and seasonal details.</p>
            </div>
            <div>
              <h3>Final confirmation</h3>
              <p>We confirm bookings and deliver a detailed pre-trip guide.</p>
            </div>
          </div>
          <Link href="/plan-your-trip/how-we-plan" className={styles.textLink}>
            Learn how we plan journeys
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Choose your focus</h2>
          <div className={styles.chipGrid}>
            {focusChips.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Sample frameworks</h2>
          <div className={styles.frameworkGrid}>
            {frameworks.map((framework) => (
              <article key={framework.title} className={styles.frameworkCard}>
                <h3>{framework.title}</h3>
                <p>{framework.description}</p>
                <ul>
                  {framework.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Comfort levels</h2>
          <div className={styles.comfortGrid}>
            <div>
              <h3>Classic camps</h3>
              <p>Comfortable, well-situated camps with excellent guiding.</p>
            </div>
            <div>
              <h3>Premium lodges</h3>
              <p>Spacious rooms, private decks, and curated dining.</p>
            </div>
            <div>
              <h3>Exclusive-use villas</h3>
              <p>Private retreats ideal for families or photographers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Seasonal guidance</h2>
          <p>
            Our planners align your travel window with bird migration patterns,
            rainfall shifts, and wildlife movement.
          </p>
          <div className={styles.linkRow}>
            <Link href="/plan-your-trip/best-time-to-travel" className={styles.linkCard}>
              Best Time to Travel
            </Link>
            <Link href="/plan-your-trip/what-to-expect" className={styles.linkCard}>
              What to Expect
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Custom itinerary FAQs</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <div key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <h2>Ready for a tailored safari?</h2>
          <p>
            Share your wishlist and we will propose a route that fits your
            timing, comfort, and species priorities.
          </p>
          <Link href="/contact" className={styles.primaryCta}>
            Plan with Twinspot
          </Link>
        </div>
      </section>
    </main>
  );
}
