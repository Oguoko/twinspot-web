"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./birding-locations-section.module.css";

const SLIDES = [
  {
    title: "Highland Forests",
    subtitle: "Cool canopies, rare endemics, quiet altitude",
  },
  {
    title: "Rift Valley Lakes",
    subtitle: "Flamingo horizons and seasonal abundance",
  },
  {
    title: "Savanna & Grasslands",
    subtitle: "Open skies, raptors, and long sightlines",
  },
  {
    title: "Coastal Wetlands",
    subtitle: "Tides, migrants, and living estuaries",
  },
];

export default function BirdingLocationsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const value = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setProgress(value);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* HEADLINE */}
        <header className={styles.header}>
          <h2>
            Birding Beyond Borders
          </h2>
          <p>
            Where habitats, seasons, and species define the journey.
          </p>
        </header>

        {/* VISUAL + SLIDER */}
        <div className={styles.layout}>
          {/* ROTATING ICON */}
          <div className={styles.iconWrap}>
            <div
              className={styles.rotatingIcon}
              style={{
                transform: `rotate(${progress * 180}deg)`,
              }}
            >
              ⦿
            </div>
          </div>

          {/* SLIDER */}
          <div className={styles.slider}>
            <div className={styles.track} ref={trackRef}>
              {SLIDES.map((slide, i) => (
                <article className={styles.slide} key={i}>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </article>
              ))}
            </div>

            {/* CONTROLS */}
            <div className={styles.controls}>
              <button onClick={() => scrollByAmount("left")}>←</button>
              <button onClick={() => scrollByAmount("right")}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
