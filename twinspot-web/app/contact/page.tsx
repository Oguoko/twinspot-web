import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import InquiryForm from "./InquiryForm";

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

      <section className={styles.heroSection}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Twinspot safari landscape"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1>Start Your Adventure</h1>
          <p className={styles.heroSubtitle}>
            Inquire today to begin your bespoke safari and birding journey.
          </p>
        </div>
      </section>

      <section className={styles.inquirySection}>
        <div className={styles.inquiryCard}>
          <InquiryForm />

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Need instant help?</h3>
              <a href="#" className={styles.whatsappCard}>
                <span className={styles.whatsappLabel}>WhatsApp Concierge</span>
                <span className={styles.whatsappText}>
                  Chat with our team for quick planning guidance.
                </span>
              </a>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.trustRow}>
                <h4>Expert Curation</h4>
                <p>
                  Every itinerary is shaped by destination specialists and field
                  guides.
                </p>
              </div>

              <div className={styles.trustRow}>
                <h4>Bespoke Routes</h4>
                <p>
                  Built around your pace, priorities, and target wildlife
                  experiences.
                </p>
              </div>
            </div>

            <div className={styles.hoursCard}>
              <h4>Office Hours</h4>
              <p>Mon - Fri: 08:00 - 18:00 (EAT)</p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqWrap}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqGrid}>
            <article className={styles.faqItem}>
              <h3>How long does it take to get a quote?</h3>
              <p>
                We aim to respond to all inquiries within 24–48 hours with an
                initial draft itinerary and ballpark pricing.
              </p>
            </article>

            <article className={styles.faqItem}>
              <h3>Can I customize a listed tour?</h3>
              <p>
                Absolutely. All our tours serve as templates that can be fully
                tailored to your pace and specific interests.
              </p>
            </article>

            <article className={styles.faqItem}>
              <h3>Do you handle international flights?</h3>
              <p>
                We specialize in on-the-ground arrangements. While we don’t
                book international airfare, we handle all regional flights and
                transfers.
              </p>
            </article>

            <article className={styles.faqItem}>
              <h3>What is the best time for birding?</h3>
              <p>
                This varies by region. Migratory seasons (Oct–Mar) are often
                peak, but resident birding is exceptional year-round.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
