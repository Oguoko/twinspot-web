import Link from "next/link";
import Image from "next/image";
import styles from "./RelatedDestinationsSlider.module.css";

import type { Destination } from "@/lib/data/destinations";

export default function RelatedDestinationsSlider({
  destinations,
}: {
  destinations: Destination[];
}) {
  return (
    <div className={styles.grid}>
      {destinations.map((dest) => {
        const imageUrl = dest.heroImage?.imageUrl;

        return (
          <Link
            key={dest.slug}
            href={`/destinations/${dest.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={dest.heroImage?.alt || dest.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.imageFallback} />
              )}
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.title}>{dest.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
