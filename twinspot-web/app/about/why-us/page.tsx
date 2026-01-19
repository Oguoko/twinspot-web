import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./whyUs.module.css";

type Pillar = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

export const metadata: Metadata = {
  title: "Why Us | Twinspot Tours & Travel",
  description:
    "Discover why Twinspot travelers choose us for birding-forward safaris, responsible travel practices, and thoughtful trip planning across East Africa.",
};

const pillars: Pillar[] = [
  {
    title: "Birding-forward, wildlife-inclusive",
    description:
      "We start with bird habitats and weave in the classic wildlife moments so every day feels layered and rewarding.",
  },
  {
    title: "Comfortable pacing",
    description:
      "We design routes with breathing room, balancing early starts with rest and flexible stops.",
  },
  {
    title: "Local partnerships",
    description:
      "We work with trusted lodge teams, community guides, and conservation partners across East Africa.",
  },
  {
    title: "Specialist logistics",
    description:
      "Permits, regional flights, and habitat timing are coordinated so the journey stays smooth and predictable.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder: The pacing felt effortless, and the birding sessions were exactly the depth we wanted.",
    author: "Traveler testimonial (placeholder)",
  },
  {
    quote:
      "Placeholder: Our guide balanced wildlife drives with quiet bird hides beautifully.",
    author: "Traveler testimonial (placeholder)",
  },
  {
    quote:
      "Placeholder: The planning support and local insights made the trip feel seamless.",
    author: "Traveler testimonial (placeholder)",
  },
];

export default function WhyUsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Travelers with a guide watching birds at sunrise"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Why Us</span>
          <h1>Thoughtful journeys for birders and wildlife travelers.</h1>
          <p className={styles.heroSubtitle}>
            We plan with precision, guide with care, and keep travel respectful
            to the landscapes and communities that make East Africa exceptional.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/contact">
              Start planning
            </Link>
            <Link className={styles.secondaryButton} href="/plan-your-trip/how-we-plan">
              See our planning process
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Value pillars</h2>
            <p>
              A clear approach to guiding, logistics, and habitat-driven
              itineraries.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.card}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Birding credibility without snobbery</h2>
            <p>
              We welcome dedicated listers and curious newcomers alike. Guides
              share knowledge generously, and itineraries leave space for
              discovery rather than pressure.
            </p>
            <p className={styles.subtleText}>
              Explore focused routes like our <Link href="/birding-tours-kenya">Kenya birding tours</Link> or
              add wildlife highlights from <Link href="/wildlife-safaris-kenya">classic safari regions</Link>.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Responsible travel & community</h3>
            <p>
              We prioritize local staffing, fair partnerships, and low-impact
              practices. Community visits are optional, respectful, and designed
              to support local initiatives.
            </p>
            <Link className={styles.textLink} href="/destinations/kenya">
              Learn about Kenya destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div className={styles.highlightCardLight}>
            <h3>Planning quality</h3>
            <p>
              We build trips around habitat timing, not just distance. The
              result: fewer rushed drives, better light, and meaningful field
              time.
            </p>
            <Link className={styles.textLink} href="/plan-your-trip/how-we-plan">
              Walk through the planning steps
            </Link>
          </div>
          <div>
            <h2>What planning feels like</h2>
            <p>
              Expect clear communication, realistic timings, and flexibility on
              the ground. We keep logistics smooth so you can focus on the
              experience.
            </p>
            <ul className={styles.list}>
              <li>Habitat-first routing for birding productivity.</li>
              <li>Balanced days with room for rest and exploration.</li>
              <li>Transparent updates before and during travel.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Traveler notes</h2>
            <p>
              Sample feedback placeholders show the tone of journeys we aim to
              deliver.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.quote} className={styles.quoteCard}>
                <p className={styles.quoteMark}>“</p>
                <p>{testimonial.quote}</p>
                <p className={styles.quoteAuthor}>{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <h2>Ready to plan a journey with purpose?</h2>
            <p>
              We will align your birding goals, wildlife highlights, and travel
              rhythm into one cohesive itinerary.
            </p>
          </div>
          <Link className={styles.primaryButton} href="/contact">
            Plan with Twinspot
          </Link>
        </div>
      </section>
    </main>
  );
}
