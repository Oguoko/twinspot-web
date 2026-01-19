import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "./ContactForm";

import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Twinspot | Talk to a Safari Planner",
  description:
    "Start planning your East Africa birding or wildlife safari with the Twinspot team. Share your travel goals and we will respond within two business days.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Twinspot safari planning consultation"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Contact</p>
          <h1>Tell us what you want to see, and we will shape the journey.</h1>
          <p className={styles.heroSubtitle}>
            Share your dates, pace, and priorities. Our planners respond within
            two business days with next steps and early route ideas.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Start the conversation</h2>
            <p className={styles.lede}>
              Whether you are chasing endemics, planning a photography safari,
              or mixing birding with classic wildlife, we will tailor your trip
              to your pace and priorities.
            </p>
            <div className={styles.infoCard}>
              <h3>Preferred contact options</h3>
              <p>
                Share a phone number if you would like a call. Otherwise, we
                will respond via email with a proposed planning session.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>What happens next</h2>
          <div className={styles.steps}>
            <div>
              <span className={styles.stepNumber}>1</span>
              <h3>We review your request</h3>
              <p>
                Our team checks seasonal timing, guide availability, and the
                habitats best aligned with your goals.
              </p>
            </div>
            <div>
              <span className={styles.stepNumber}>2</span>
              <h3>We schedule a planning call</h3>
              <p>
                We clarify priorities, preferred comfort level, and must-see
                regions to shape the initial route.
              </p>
            </div>
            <div>
              <span className={styles.stepNumber}>3</span>
              <h3>We send a draft itinerary</h3>
              <p>
                Expect a thoughtfully paced outline with lodge options, pricing
                ranges, and the reasoning behind each stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Planning resources</h2>
          <p>
            These guides answer common questions and help you prepare before we
            speak.
          </p>
          <div className={styles.linkGrid}>
            <Link href="/plan-your-trip/how-we-plan" className={styles.linkCard}>
              <h3>How We Plan</h3>
              <p>Understand our pacing, guide matching, and route design.</p>
            </Link>
            <Link
              href="/plan-your-trip/best-time-to-travel"
              className={styles.linkCard}
            >
              <h3>Best Time to Travel</h3>
              <p>Seasonal guidance for birding highlights and wildlife moments.</p>
            </Link>
            <Link
              href="/plan-your-trip/what-to-expect"
              className={styles.linkCard}
            >
              <h3>What to Expect</h3>
              <p>Know what a Twinspot-led safari feels like day to day.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <h2>Thoughtful planning, no pressure</h2>
          <p>
            We never rush itineraries. Expect calm guidance, transparent pricing,
            and a trip that reflects your priorities.
          </p>
          <Link href="/plan-your-trip" className={styles.secondaryCta}>
            Learn about planning
          </Link>
        </div>
      </section>
    </main>
  );
}
