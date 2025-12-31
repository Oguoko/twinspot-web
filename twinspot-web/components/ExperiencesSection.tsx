"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./experiences-section.module.css";

type ExperienceItem = {
  id: string;
  title: string;
  image: string;
};

const PLACEHOLDER_IMAGE = "/hero.jpg";

const THINGS_TO_DO: ExperienceItem[] = [
  { id: "birding", title: "Birding Safaris", image: PLACEHOLDER_IMAGE },
  { id: "wildlife", title: "Wildlife Encounters", image: PLACEHOLDER_IMAGE },
  { id: "culture", title: "Cultural Trails", image: PLACEHOLDER_IMAGE },
  { id: "photography", title: "Photography Tours", image: PLACEHOLDER_IMAGE },
];

const TRIP_IDEAS: ExperienceItem[] = [
  { id: "weekend", title: "Weekend Escapes", image: PLACEHOLDER_IMAGE },
  { id: "migration", title: "Migration Routes", image: PLACEHOLDER_IMAGE },
  { id: "lakes", title: "Great Lakes Circuit", image: PLACEHOLDER_IMAGE },
  { id: "forests", title: "Forest Immersions", image: PLACEHOLDER_IMAGE },
];

const CARD_WIDTH = 300;
const GAP = 28;

export default function ExperiencesSection() {
  const [activeTab, setActiveTab] = useState<"things" | "ideas">("things");
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const items = activeTab === "things" ? THINGS_TO_DO : TRIP_IDEAS;
  const total = items.length;

  const scrollToIndex = (i: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: i * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
    setIndex(i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <h2 className={styles.heading}>
            Experience Birding & Safari <br />
            in East Africa
          </h2>

          <p className={styles.subheading}>
            Curated encounters shaped by landscapes, seasons, and the rhythm of
            wild places.
          </p>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "things" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("things");
                scrollToIndex(0);
              }}
            >
              Things to do
            </button>

            <button
              className={`${styles.tab} ${
                activeTab === "ideas" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("ideas");
                scrollToIndex(0);
              }}
            >
              Trip ideas
            </button>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.arrows}>
            <button onClick={() => scrollToIndex(Math.max(index - 1, 0))}>
              ←
            </button>
            <span>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() =>
                scrollToIndex(Math.min(index + 1, total - 1))
              }
            >
              →
            </button>
          </div>

          <Link href="/itineraries" className={styles.viewAllBtn}>
            View all →
          </Link>
        </div>
      </div>

      <div ref={sliderRef} className={styles.slider}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                sizes="300px"
              />
              <div className={styles.overlay}>
                <div className={styles.circle}>Read more</div>
              </div>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
