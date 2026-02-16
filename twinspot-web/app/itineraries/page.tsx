import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ItineraryExplorer from "./ItineraryExplorer";
import styles from "./itineraries.module.css";
import { itineraries, itineraryCategoryLabels } from "@/lib/itineraries/itineraries";
import { pickDeterministicPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Itineraries | Twinspot Tours & Travel",
  description: "Browse Twinspot itinerary collections across day trips, safaris, gorilla expeditions, and multi-country wildlife journeys.",
};

const categoryBlocks = [
  { label: "Day Trips", key: "day-trips", description: "Short but rewarding hikes, birding, and nearby Nairobi outdoor adventures." },
  { label: "Safaris", key: "safari", description: "Classic Kenya game circuits with guide-led wildlife exploration." },
  { label: "Gorilla / Primates", key: "gorilla", description: "Focused Rwanda and Uganda primate itineraries with smooth logistics." },
  { label: "Multi-country", key: "multi-country", description: "Extended East Africa journeys that connect flagship parks across borders." },
] as const;

export default function ItinerariesPage() {
  const heroImage = pickDeterministicPhoto(["wildlife", "birding"], "itineraries-hero");
  const featured = itineraries.slice(0, 3);

  const explorerCards = itineraries.map((itinerary) => ({
    id: itinerary.id,
    title: itinerary.title,
    duration: itinerary.duration,
    category: itinerary.category,
    summary: itinerary.shortSummary,
    imageUrl: pickDeterministicPhoto(itinerary.suggestedPhotoCategories, itinerary.id),
    keyStops: itinerary.itineraryBreakdown.slice(0, 3).map((day) => day.location),
  }));

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image src={heroImage} alt="Twinspot featured itineraries" fill priority className={styles.heroImage} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Twinspot Itineraries</p>
            <h1>Find the right East Africa journey, beautifully organized.</h1>
            <p>
              Compare day trips, classic safaris, gorilla experiences, and cross-border wildlife expeditions in one place.
            </p>
            <a href="#all-itineraries" className={styles.heroCta}>Explore all itineraries</a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Travel categories</h2>
          <div className={styles.categoryGrid}>
            {categoryBlocks.map((item) => (
              <article key={item.key} className={styles.categoryCard}>
                <p className={styles.categoryLabel}>{item.label}</p>
                <p>{item.description}</p>
                <p className={styles.categoryCount}>
                  {itineraries.filter((itinerary) => itinerary.category === item.key).length} package(s)
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Featured packages</h2>
            <Link href="/contact" className={styles.linkAction}>Talk to a travel specialist</Link>
          </div>

          <div className={styles.featuredGrid}>
            {featured.map((itinerary) => {
              const image = pickDeterministicPhoto(itinerary.suggestedPhotoCategories, `${itinerary.id}-featured`);
              return (
                <article key={itinerary.id} className={styles.featuredCard}>
                  <div className={styles.featuredImageWrap}>
                    <Image src={image} alt={itinerary.title} fill className={styles.featuredImage} />
                  </div>
                  <div className={styles.featuredBody}>
                    <p>{itineraryCategoryLabels[itinerary.category]}</p>
                    <h3>{itinerary.title}</h3>
                    <p>{itinerary.shortSummary}</p>
                    <Link href={`/itineraries/${itinerary.id}`}>See details →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="all-itineraries" className={styles.section}>
          <h2>Full itinerary collection</h2>
          <ItineraryExplorer cards={explorerCards} />
        </section>
      </main>
      <Footer />
    </>
  );
}
