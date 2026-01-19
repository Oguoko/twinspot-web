import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Twinspot Tours & Travel",
  description:
    "Read Twinspot's booking terms, cancellation policies, and travel conditions for birding and wildlife safaris in East Africa.",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Terms & Conditions</p>
          <h1>Clear, traveler-friendly terms for every journey.</h1>
          <p className={styles.heroText}>
            These terms outline the basics of booking, payments, cancellations,
            and responsibilities for Twinspot trips. They are designed to be
            simple and easy to understand.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.legalBlock}>
            <h2>Bookings & payments</h2>
            <ul>
              <li>
                Reservations are confirmed once the deposit is received and the
                itinerary is agreed.
              </li>
              <li>
                Final balances are typically due ahead of travel; timing depends
                on lodge policies and permit requirements.
              </li>
              <li>
                Prices may adjust if park fees, flight costs, or taxes change
                before confirmation.
              </li>
            </ul>
          </div>

          <div className={styles.legalBlock}>
            <h2>Cancellations and changes</h2>
            <ul>
              <li>
                Cancellation fees reflect supplier policies and confirmed lodge
                commitments.
              </li>
              <li>
                Date changes are subject to availability and may incur revised
                rates.
              </li>
              <li>
                If weather, road conditions, or park closures affect plans, we
                will propose practical alternatives.
              </li>
            </ul>
          </div>

          <div className={styles.legalBlock}>
            <h2>Liability and insurance</h2>
            <ul>
              <li>
                Travelers are responsible for adequate travel insurance covering
                medical care, trip interruption, and personal belongings.
              </li>
              <li>
                We act as a booking agent for accommodations, transport, and
                activities provided by third parties.
              </li>
              <li>
                While safety is a priority, wildlife travel carries inherent
                risks and requires compliance with guide instructions.
              </li>
            </ul>
          </div>

          <div className={styles.legalBlock}>
            <h2>Child policy</h2>
            <ul>
              <li>
                Child age restrictions and pricing vary by lodge and activity.
              </li>
              <li>
                We will recommend the best fit based on child age, trip length,
                and activities planned.
              </li>
              <li>
                Parents or guardians are responsible for supervision throughout
                the trip.
              </li>
            </ul>
          </div>

          <div className={styles.legalBlock}>
            <h2>Privacy</h2>
            <p>
              We use your information solely to plan and deliver your journey.
              For questions about data handling, please contact us directly.
            </p>
          </div>

          <div className={styles.noticeCard}>
            <h3>Questions about these terms?</h3>
            <p>
              We are happy to walk you through any section before you confirm a
              booking.
            </p>
            <div className={styles.linkRow}>
              <Link href="/birding-tours-kenya">Birding tours</Link>
              <Link href="/wildlife-safaris-kenya">Wildlife safaris</Link>
              <Link href="/destinations/rwanda">Rwanda destinations</Link>
            </div>
            <Link href="/contact" className={styles.primaryButton}>
              Contact Twinspot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
