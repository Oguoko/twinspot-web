"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./editorialHome.module.css";

type Slide = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type HomeSliderVariant = "why" | "packages";

export default function HomeSlider({
  slides,
  variant = "why",
}: {
  slides: Slide[];
  variant?: HomeSliderVariant;
}) {
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
          <article
            key={slide.title}
            data-slide
            className={`${styles.sliderCard} ${variant === "packages" ? styles.sliderCardPackages : styles.sliderCardWhy}`}
          >
            <div
              className={`${styles.sliderImageWrap} ${variant === "packages" ? styles.sliderImageWrapPackages : styles.sliderImageWrapWhy}`}
            >
              <Image
                src={slide.imageSrc ?? "/hero.jpg"}
                alt={slide.imageAlt ?? slide.title}
                fill
                sizes={variant === "packages" ? "(max-width: 700px) 88vw, 320px" : "(max-width: 700px) 88vw, 300px"}
                className={styles.sliderImage}
              />
              {variant === "packages" ? <div className={styles.sliderImageOverlay} /> : null}
            </div>

            <div className={variant === "packages" ? styles.sliderCardContentOverlay : styles.sliderCardContent}>
              {slide.badge && <p className={styles.sliderBadge}>{slide.badge}</p>}
              <h3>
                {slide.icon ? <span aria-hidden>{slide.icon} </span> : null}
                {slide.title}
              </h3>
              <p>{slide.description}</p>
              <Link href={slide.href}>Explore</Link>
            </div>
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
