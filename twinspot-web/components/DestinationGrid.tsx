"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function DestinationGrid({
  destinations,
}: {
  destinations: any[];
}) {
  return (
    <div className="dest-grid">
      {destinations.map((dest, i) => (
        <FadeIn key={dest.slug} delay={i * 0.05}>
          <Link href={`/destinations/${dest.slug}`} className="dest-card">
            {dest.heroImage?.imageUrl ? (
              <Image
                src={dest.heroImage.imageUrl}
                alt={dest.heroImage.alt || dest.title}
                fill
                className="dest-image"
              />
            ) : (
              <div className="dest-placeholder" />
            )}

            <div className="dest-meta">
              <h3>{dest.title}</h3>
              <span>{dest.region}</span>
            </div>
          </Link>
        </FadeIn>
      ))}

      <style jsx>{`
        .dest-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .dest-card {
          position: relative;
          height: 360px;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          color: white;
        }

        .dest-image {
          object-fit: cover;
        }

        .dest-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1f3d2b, #14261c);
        }

        .dest-meta {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65),
            transparent
          );
        }

        .dest-meta h3 {
          margin: 0;
          font-family: serif;
          font-size: 1.35rem;
        }

        .dest-meta span {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
