"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  itineraryCategoryLabels,
  ItineraryCategory,
} from "@/lib/itineraries/itineraries";
import styles from "./itineraries.module.css";

type ExplorerCard = {
  id: string;
  title: string;
  duration: string;
  category: ItineraryCategory;
  summary: string;
  imageUrl: string;
  keyStops: string[];
};

const CATEGORIES: (ItineraryCategory | "all")[] = [
  "all",
  "day-trips",
  "safari",
  "gorilla",
  "multi-country",
];

export default function ItineraryExplorer({
  cards,
}: {
  cards: ExplorerCard[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<ItineraryCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return cards.filter((card) => {
      const categoryMatch = selectedCategory === "all" || card.category === selectedCategory;
      if (!categoryMatch) {
        return false;
      }

      if (!normalized) {
        return true;
      }

      return (
        card.title.toLowerCase().includes(normalized) ||
        card.summary.toLowerCase().includes(normalized) ||
        card.keyStops.some((stop) => stop.toLowerCase().includes(normalized))
      );
    });
  }, [cards, query, selectedCategory]);

  return (
    <>
      <div className={styles.filtersRow}>
        <div className={styles.pillWrap}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.pill} ${selectedCategory === category ? styles.pillActive : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all" ? "All" : itineraryCategoryLabels[category]}
            </button>
          ))}
        </div>

        <input
          aria-label="Search itineraries"
          placeholder="Search itinerary, park, or destination"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.cardGrid}>
        {filtered.map((card) => (
          <article key={card.id} className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image src={card.imageUrl} alt={card.title} fill className={styles.cardImage} />
              <span className={styles.cardDuration}>{card.duration}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardCategory}>{itineraryCategoryLabels[card.category]}</p>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <p className={styles.cardStops}>
                <strong>Key stops:</strong> {card.keyStops.join(" • ")}
              </p>
              <Link href={`/itineraries/${card.id}`} className={styles.cardCta}>
                View itinerary
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.emptyState}>No itineraries match your current filters. Try a broader search.</p>
      )}
    </>
  );
}
