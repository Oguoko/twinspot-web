import Link from "next/link";
import Image from "next/image";
import styles from "./editorialHome.module.css";

type EditorialHeroProps = {
  imageSrc: string;
};

export default function EditorialHero({ imageSrc }: EditorialHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={imageSrc}
        alt="Luxury safari travellers watching wildlife at golden hour"
        fill
        priority
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Editorial Adventure</p>
        <h1>Journeys Through East Africa, Curated Like a Story</h1>
        <p className={styles.heroSubhead}>
          Bespoke wildlife and birding itineraries crafted around seasonality,
          conservation depth, and unforgettable field moments.
        </p>

        <div className={styles.heroActions}>
          <Link href="/contact" className={styles.primaryButton}>
            Book Now
          </Link>
          <Link href="/itineraries" className={styles.secondaryButton}>
            Explore Itineraries
          </Link>
        </div>
      </div>
    </section>
  );
}
