import Image from "next/image";
import Link from "next/link";

import styles from "./RelatedDestinationsSlider.module.css";

type DestinationCard = {
  slug: string;
  title: string;
  heroImage?: {
    imageUrl: string;
    alt?: string;
  };
};

type Props = {
  title?: string;
  destinations: DestinationCard[];
};

export default function RelatedDestinationsSlider({
  title = "Explore Related Destinations",
  destinations,
}: Props) {
  if (!destinations || destinations.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.rail}>
        {destinations.map((dest) => {
          const img = dest.heroImage?.imageUrl;

          return (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className={styles.card}
            >
              {img && (
                <Image
                  src={img}
                  alt={dest.heroImage?.alt || dest.title}
                  width={360}
                  height={240}
                  className={styles.image}
                />
              )}

              <h4 className={styles.cardTitle}>{dest.title}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
