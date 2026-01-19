import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./guides.module.css";

type Pillar = {
  title: string;
  description: string;
};

type GuideCard = {
  name: string;
  focus: string;
  note: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "Our Guides | Twinspot Tours & Travel",
  description:
    "Meet Twinspot's guiding philosophy: birding-first knowledge, wildlife fluency, and respectful field ethics across East Africa.",
};

const birdingTraits = [
  "Deep knowledge of habitats, calls, and seasonal movements",
  "Calm communication that keeps sightings organized",
  "Patience with mixed experience levels, from listers to casual travelers",
  "Fieldcraft that prioritizes quiet positioning and ethical viewing",
];

const itineraryExamples: Pillar[] = [
  {
    title: "Lake mornings and forest afternoons",
    description:
      "Guides time wetland sessions for calm light, then pivot to forest edges when mixed flocks peak activity.",
  },
  {
    title: "Big game balance",
    description:
      "We weave a wildlife drive after prime birding sessions so you can enjoy iconic sightings without rushing.",
  },
  {
    title: "Photographer flow",
    description:
      "Guides plan longer stays at a single location when behavior is promising, returning later for improved light.",
  },
];

const teamCards: GuideCard[] = [
  {
    name: "Guide A (placeholder)",
    focus: "Rift Valley lakes & waterbirds",
    note: "Known for patient lake-edge sessions and clear ID guidance.",
  },
  {
    name: "Guide B (placeholder)",
    focus: "Forest specialists & endemic species",
    note: "Focuses on quiet positioning and mixed-flock behavior.",
  },
  {
    name: "Guide C (placeholder)",
    focus: "Savannah birds & big game",
    note: "Balances raptor spotting with classic wildlife viewing.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do we get a dedicated bird guide?",
    answer:
      "Yes. We assign a guide based on your goals, and for focused trips we keep guiding consistent throughout the route.",
  },
  {
    question: "Can guides help with photography positioning?",
    answer:
      "Absolutely. We plan vehicle angles and quiet approaches so you can work with light and behavior.",
  },
  {
    question: "How do guides handle mixed interests?",
    answer:
      "We balance birding sessions with wildlife drives or cultural stops so everyone stays engaged.",
  },
  {
    question: "What languages are supported?",
    answer:
      "English is standard, and we can arrange additional language support when requested early.",
  },
];

export default function OurGuidesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Twinspot guide with binoculars in a forest edge"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Our Guides</span>
          <h1>Birding-first expertise with wildlife fluency.</h1>
          <p className={styles.heroSubtitle}>
            Our guides are trained to read habitats, listen for subtle calls, and
            keep your day calm and focused. Expect gentle pacing, clear
            identification help, and respectful field ethics.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/contact">
              Meet your guide team
            </Link>
            <Link className={styles.secondaryButton} href="/birding-tours-kenya">
              View birding tours
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Our guiding philosophy</h2>
            <p>
              Birding leads the day, but wildlife and landscapes are part of the
              story. We keep the pace unhurried and the day flexible, so you can
              listen, watch, and learn without pressure.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>What makes a great bird guide</h3>
            <ul className={styles.list}>
              {birdingTraits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Field etiquette & ethics</h2>
            <p>
              We keep a respectful distance, limit playback, and protect nesting
              areas. The goal is meaningful observation without disturbance.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Quiet positioning</h3>
              <p>
                Guides keep the vehicle still and low-profile so birds return to
                natural behavior quickly.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Minimal impact</h3>
              <p>
                We stay on approved tracks, keep group sizes small, and follow
                park rules closely.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Respectful sharing</h3>
              <p>
                We coordinate with other guides to avoid crowding and to rotate
                access to key sightings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Languages and communication</h2>
            <p>
              Clear communication matters, especially when calling out a moving
              raptor or a quick forest glimpse. We use shared checklists and
              simple field briefings to keep everyone aligned.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Pre-trip briefings</h3>
              <p>
                We discuss goals, comfort levels, and mobility needs so that the
                daily rhythm works for your group.
              </p>
            </article>
            <article className={styles.card}>
              <h3>In-field updates</h3>
              <p>
                Guides explain habitat transitions and sightings, helping newer
                birders build confidence.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Post-drive recaps</h3>
              <p>
                We share quick notes and recommended reading to reinforce key
                species and behaviors.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>How guides shape itineraries</h2>
            <p>
              Routing is designed around habitat activity, not just distance.
              Guides adjust timing on the ground for light, weather, and new
              sightings.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {itineraryExamples.map((example) => (
              <article key={example.title} className={styles.card}>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet the team</h2>
            <p>
              Placeholder profiles show the kinds of specialisms we align to your
              journey. Ask us for real guide bios when you are ready to plan.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {teamCards.map((guide) => (
              <article key={guide.name} className={styles.card}>
                <h3>{guide.name}</h3>
                <p className={styles.cardMeta}>{guide.focus}</p>
                <p>{guide.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Guide FAQs</h2>
            <p>Short answers for common guiding questions.</p>
            <div className={styles.faqGrid}>
              {faqs.map((item) => (
                <article key={item.question} className={styles.faqCard}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.highlightCard}>
            <h3>Where to go next</h3>
            <p>
              Pair specialist guiding with our signature trips and destinations.
            </p>
            <div className={styles.linkStack}>
              <Link href="/bird-photography-tours">Bird photography tours</Link>
              <Link href="/wildlife-safaris-kenya">Wildlife safaris</Link>
              <Link href="/destinations/tanzania">Tanzania destinations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <h2>Ready to choose your guiding style?</h2>
            <p>
              Tell us your priorities and we will align a guide who fits your
              pace and interests.
            </p>
          </div>
          <Link className={styles.primaryButton} href="/contact">
            Plan with a guide
          </Link>
        </div>
      </section>
    </main>
  );
}
