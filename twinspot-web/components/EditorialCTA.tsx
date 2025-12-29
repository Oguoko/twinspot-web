import Link from "next/link";
import styles from "./editorial-cta.module.css";

type Props = {
  destinationTitle?: string;
};

export default function EditorialCTA({ destinationTitle }: Props) {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Plan Your Birding Trip
          {destinationTitle ? ` to ${destinationTitle}` : ""}
        </h2>

        <p className={styles.copy}>
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
