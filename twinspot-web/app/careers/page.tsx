import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./careers.module.css";

type Role = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const roles: Role[] = [
  {
    title: "Birding guide (seasonal)",
    description:
      "Lead small-group field sessions, identify regional species, and support guest education.",
  },
  {
    title: "Safari planner",
    description:
      "Design itineraries, liaise with lodges, and coordinate guide assignments.",
  },
  {
    title: "Guest experience coordinator",
    description:
      "Support logistics, pre-trip briefings, and guest care across the journey.",
  },
  {
    title: "Conservation partnership lead",
    description:
      "Build relationships with community conservancies and ensure ethical tourism practices.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do you hire internationally?",
    answer:
      "We are open to international applicants for specialist roles, but most positions are Kenya- or East Africa-based and require local knowledge.",
  },
  {
    question: "What experience level do guides need?",
    answer:
      "We look for strong field identification skills, a safety-first mindset, and experience with small-group guiding. Training support is available for emerging guides.",
  },
  {
    question: "Are roles full-time or seasonal?",
    answer:
      "Both. We hire seasonal guides and project-based roles alongside year-round planning and operations positions.",
  },
  {
    question: "Do you offer training?",
    answer:
      "Yes. We provide ongoing training in guest communication, ethics, and updated species knowledge.",
  },
  {
    question: "How do you support community careers?",
    answer:
      "We prioritise local hiring and partner with guiding schools and conservancies to build long-term career paths.",
  },
  {
    question: "Can I apply without a current opening?",
    answer:
      "Absolutely. We maintain a talent roster and reach out when roles open that match your experience.",
  },
  {
    question: "What languages are helpful?",
    answer:
      "English and Kiswahili are most common, and French or German can be helpful for certain guest groups.",
  },
];

export const metadata: Metadata = {
  title: "Careers at Twinspot | Join Our Safari Team",
  description:
    "Explore career opportunities with Twinspot and help craft thoughtful birding and wildlife safaris across East Africa.",
};

export default function CareersPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Twinspot guide team in the field"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Careers</p>
          <h1>Build meaningful careers in birding, guiding, and safari planning.</h1>
          <p className={styles.heroSubtitle}>
            We are a small team that values calm leadership, deep regional
            knowledge, and guest care. If that resonates, we would love to meet
            you.
          </p>
          <Link href="#apply" className={styles.primaryCta}>
            How to Apply
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our values</h2>
          <div className={styles.valueGrid}>
            <div>
              <h3>Conservation-first</h3>
              <p>
                We protect habitat through ethical guiding and intentional route
                design.
              </p>
            </div>
            <div>
              <h3>Community-led</h3>
              <p>
                We hire locally, invest in training, and listen to community
                partners.
              </p>
            </div>
            <div>
              <h3>Guest-centered</h3>
              <p>
                Every itinerary is shaped around the pace, comfort, and goals of
                the traveller.
              </p>
            </div>
            <div>
              <h3>Detail-driven</h3>
              <p>
                Small details create lasting memories, from lodge briefings to
                field notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Roles we commonly hire</h2>
          <div className={styles.roleGrid}>
            {roles.map((role) => (
              <article key={role.title} className={styles.roleCard}>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>How we work</h2>
          <p className={styles.lede}>
            We are a distributed team across East Africa with a shared planning
            rhythm. Each trip is collaborative, with planners, guides, and
            community partners working together.
          </p>
          <div className={styles.workGrid}>
            <div>
              <h3>Mentorship</h3>
              <p>
                Senior guides mentor new hires on local ecosystems and guest
                communication.
              </p>
            </div>
            <div>
              <h3>Seasonal balance</h3>
              <p>
                We plan schedules around peak seasons while protecting time for
                rest and training.
              </p>
            </div>
            <div>
              <h3>Shared field notes</h3>
              <p>
                We document sightings and seasonal patterns to refine planning
                for future guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} id="apply">
        <div className={styles.container}>
          <h2>How to apply</h2>
          <p>
            Send your CV, guiding certifications (if applicable), and a brief
            note about the kind of safaris you would like to lead or plan.
          </p>
          <div className={styles.applyCard}>
            <p>
              Email: <strong>careers@twinspotafrica.com</strong>
            </p>
            <p>Subject line: Role + Location</p>
            <Link href="/contact" className={styles.secondaryCta}>
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Equal opportunity</h2>
          <p>
            Twinspot is an equal opportunity employer. We welcome applicants of
            all backgrounds and are committed to a workplace that respects
            diversity and inclusion.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Career FAQs</h2>
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
          <h2>Shape the future of sustainable safaris</h2>
          <p>
            If you care about ethical wildlife travel and want to grow with a
            mission-led team, we would love to hear from you.
          </p>
          <Link href="/contact" className={styles.primaryCta}>
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
