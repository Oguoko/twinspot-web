import styles from "./editorialHome.module.css";

const TRUST_POINTS = [
  "Conservation-led guiding",
  "Private tailor-made departures",
  "Expert birding and wildlife naturalists",
  "Trusted East Africa logistics",
];

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Trust highlights">
      <div className={styles.container}>
        <ul className={styles.trustList}>
          {TRUST_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
