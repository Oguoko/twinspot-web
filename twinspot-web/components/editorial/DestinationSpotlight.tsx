import Link from "next/link";
import Image from "next/image";
import styles from "./editorialHome.module.css";

type Destination = {
  name: string;
  summary: string;
  href: string;
  imageSrc: string;
};

type DestinationSpotlightProps = {
  destinations: Destination[];
};

export default function DestinationSpotlight({
  destinations,
}: DestinationSpotlightProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Where to Go Next</p>
          <h2>Destination Spotlight</h2>
        </div>

        <div className={styles.spotlightGrid}>
          {destinations.map((destination) => (
            <article key={destination.name} className={styles.spotlightCard}>
              <div className={styles.spotlightImageWrap}>
                <Image
                  src={destination.imageSrc}
                  alt={destination.name}
                  fill
                  className={styles.spotlightImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{destination.name}</h3>
                <p>{destination.summary}</p>
                <Link href={destination.href}>Learn More</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
