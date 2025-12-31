import Link from "next/link";
import styles from "./editorial-cta.module.css";

export default function EditorialCTA() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>What’s Your Travel Personality?</h2>

        <p className={styles.text}>
          Answer a few quick questions and discover the kind of journey that best
          matches your pace, curiosity, and travel style.
        </p>

        <Link href="/experiences" className={styles.button}>
          Take the Quiz
        </Link>
      </div>
    </div>
  );
}
