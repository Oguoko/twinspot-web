"use client";

import Image from "next/image";
import Link from "next/link";

type Destination = {
  slug: string;
  title: string;
  summary: string;
  heroImage?: {
    imageUrl?: string;
    alt?: string;
  } | null;
};

export default function DestinationGrid({
  destinations,
}: {
  destinations: Destination[];
}) {
  return (
    <div className="grid">
      {destinations.map((d) => {
        const src =
          typeof d.heroImage?.imageUrl === "string" &&
          d.heroImage.imageUrl.length > 10
            ? d.heroImage.imageUrl
            : null;

        return (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="card"
          >
            <div className="image-wrap">
              {src ? (
                <Image
                  src={src}
                  alt={d.heroImage?.alt || d.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="image-fallback" />
              )}
            </div>

            <h3>{d.title}</h3>
            <p>{d.summary}</p>
          </Link>
        );
      })}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .card {
          text-decoration: none;
          color: inherit;
        }

        .image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 1rem;
          background: #eee;
        }

        .image-fallback {
          position: absolute;
          inset: 0;
          background: #ddd;
        }
      `}</style>
    </div>
  );
}
