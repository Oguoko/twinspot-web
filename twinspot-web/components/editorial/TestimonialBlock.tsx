import styles from "./editorialHome.module.css";

export default function TestimonialBlock() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.containerNarrow}>
        <p className={styles.testimonialQuote}>
          “Twinspot designed our East Africa journey with remarkable editorial
          care. Every day felt intentional: extraordinary sightings, deeply
          knowledgeable guides, and space to observe rather than rush.”
        </p>
        <p className={styles.testimonialAuthor}>
          — C. Martin, Private Departure Guest
        </p>
      </div>
    </section>
  );
}
