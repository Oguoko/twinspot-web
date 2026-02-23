import Link from "next/link";
import Image from "next/image";
import styles from "./editorialHome.module.css";

type Itinerary = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

type SignatureItinerariesProps = {
  itineraries: Itinerary[];
};

export default function SignatureItineraries({
  itineraries,
}: SignatureItinerariesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Signature Collection</p>
          <h2>Signature Itineraries</h2>
        </div>

        <div className={styles.cardGrid}>
          {itineraries.map((itinerary) => (
            <article key={itinerary.title} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={itinerary.imageSrc}
                  alt={itinerary.title}
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{itinerary.title}</h3>
                <p>{itinerary.description}</p>
                <Link href={itinerary.href}>View Journey</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
