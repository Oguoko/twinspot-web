import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import FadeIn from "@/components/FadeIn";
import SeasonalityTable from "@/components/SeasonalityTable";

/* -----------------------------
   TYPES
----------------------------- */

type Destination = {
  slug: string;
  title: string;
  summary?: string;
  region?: string;
  country?: string;
  heroImage?: {
    imageUrl?: string;
    alt?: string;
  };
  seasons?: any[];
};

/* -----------------------------
   DATA
----------------------------- */

async function fetchDestination(slug: string): Promise<Destination | null> {
  if (!slug) return null;

  const ref = doc(db, "destinations", slug);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    slug,
    title: data.title,
    summary: data.summary,
    region: data.region,
    country: data.country,
    heroImage: data.heroImage,
    seasons: data.seasons,
  };
}

async function fetchGalleryImages(slug: string) {
  const q = query(
    collection(db, "images"),
    where("destination", "==", slug)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

/* -----------------------------
   METADATA
----------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const destination = await fetchDestination(slug);
  if (!destination) return {};

  const title = `${destination.title} | Twinspot Birding Destinations`;
  const description =
    destination.summary ||
    "Birding destinations and guided safaris across East Africa.";

  const image =
    destination.heroImage?.imageUrl || "/og-default.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: destination.heroImage?.alt || destination.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* -----------------------------
   PAGE (DEFAULT EXPORT)
----------------------------- */

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  const destination = await fetchDestination(slug);
  if (!destination) notFound();

  const images = await fetchGalleryImages(slug);

  const seasons =
    destination.seasons ?? [
      {
        months: "Jan – Mar",
        conditions: "Dry season",
        highlights: "Resident species, raptors",
      },
      {
        months: "Apr – Jun",
        conditions: "Long rains",
        highlights: "Breeding plumage",
      },
      {
        months: "Jul – Oct",
        conditions: "Cooler, dry",
        highlights: "Migrants",
      },
      {
        months: "Nov – Dec",
        conditions: "Short rains",
        highlights: "Palearctic arrivals",
      },
    ];

  return (
    <main className="destination">
      {/* HERO */}
      <section className="hero">
        {destination.heroImage?.imageUrl && (
          <Image
            src={destination.heroImage.imageUrl}
            alt={destination.heroImage.alt || destination.title}
            fill
            priority
            className="hero-image"
          />
        )}
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{destination.title}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content">
        <div className="inner">
          <div className="meta">
            <span>{destination.region}</span>
            <span>•</span>
            <span>{destination.country}</span>
          </div>

          <FadeIn>
            <p className="lede">{destination.summary}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SeasonalityTable seasons={seasons} />
          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      {images.length > 0 && (
        <section className="gallery">
          <div className="gallery-grid">
            {images
  .filter(img => typeof img.imageUrl === "string" && img.imageUrl.startsWith("http"))
  .slice(0, 6)
  .map((img, i) => (
    <figure key={i} className="gallery-item">
      <Image
        src={img.imageUrl}
        alt={img.alt || destination.title}
        fill
        className="gallery-image"
      />
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
))}

           
          </div>
        </section>
      )}
    </main>
  );
}
