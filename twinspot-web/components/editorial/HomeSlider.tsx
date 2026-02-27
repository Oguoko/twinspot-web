"use client";

import Link from "next/link";
import { useRef } from "react";
import styles from "./editorialHome.module.css";

type Slide = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon?: string;
};

export default function HomeSlider({ slides }: { slides: Slide[] }) {
  const railRef = useRef<HTMLDivElement | null>(null);

  function slide(direction: 1 | -1) {
    if (!railRef.current) return;
    const card = railRef.current.querySelector<HTMLElement>("[data-slide]");
    const offset = card ? card.offsetWidth + 16 : 320;
    railRef.current.scrollBy({ left: direction * offset, behavior: "smooth" });
  }

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderActions}>
        <button type="button" onClick={() => slide(-1)} aria-label="Previous items">
          ←
        </button>
        <button type="button" onClick={() => slide(1)} aria-label="Next items">
          →
        </button>
      </div>
      <div className={styles.sliderRail} ref={railRef}>
        {slides.map((slide) => (
          <article key={slide.title} data-slide className={styles.sliderCard}>
            {slide.badge && <p className={styles.sliderBadge}>{slide.badge}</p>}
            <h3>
              {slide.icon ? <span aria-hidden>{slide.icon} </span> : null}
              {slide.title}
            </h3>
            <p>{slide.description}</p>
            <Link href={slide.href}>Explore</Link>
          </article>
        ))}
      </div>
      <div className={styles.sliderDots}>
        {slides.map((slide) => (
          <span key={`${slide.title}-dot`} />
        ))}
      </div>
    </div>
  );
}
