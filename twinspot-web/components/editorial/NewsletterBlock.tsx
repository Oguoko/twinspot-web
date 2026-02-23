import Link from "next/link";
import styles from "./editorialHome.module.css";

export default function NewsletterBlock() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.containerNarrow}>
        <p className={styles.eyebrow}>From the Field</p>
        <h2>Get Editorial Notes from East Africa</h2>
        <p className={styles.newsletterCopy}>
          Receive migration timing updates, destination dispatches, and seasonal
          trip ideas curated by our field team.
        </p>
        <Link href="/blog" className={styles.primaryButton}>
          Read the Journal
        </Link>
      </div>
    </section>
  );
}
