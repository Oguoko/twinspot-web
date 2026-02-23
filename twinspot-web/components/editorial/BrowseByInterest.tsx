import Link from "next/link";
import Image from "next/image";
import styles from "./editorialHome.module.css";

type InterestTile = {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
};

type BrowseByInterestProps = {
  interests: InterestTile[];
};

export default function BrowseByInterest({ interests }: BrowseByInterestProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Discover by Theme</p>
          <h2>Browse by Interest</h2>
        </div>

        <div className={styles.tileGrid}>
          {interests.map((interest) => (
            <Link key={interest.title} href={interest.href} className={styles.tile}>
              <Image
                src={interest.imageSrc}
                alt={interest.title}
                fill
                className={styles.tileImage}
              />
              <span className={styles.tileOverlay} />
              <div className={styles.tileContent}>
                <h3>{interest.title}</h3>
                <p>{interest.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
