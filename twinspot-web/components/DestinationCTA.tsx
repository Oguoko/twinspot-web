import Link from "next/link";
import styles from "./destination-cta.module.css";

type DestinationCTAProps = {
  destination: string;
};

export default function DestinationCTA({ destination }: DestinationCTAProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <h2>Plan Your Birding Trip to {destination}</h2>

        <p>
          From seasonal bird movements to ideal safari routes, our team helps
          you design a birding experience that fits your interests, pace, and
          travel style.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>
            Plan My Trip
          </Link>

          <Link href="/blog" className={styles.secondary}>
            Read Birding Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
