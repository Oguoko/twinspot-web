import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./travelTips.module.css";

type TipSection = {
  title: string;
  description: string;
  items: string[];
};

type ChecklistItem = {
  label: string;
  detail: string;
};

export const metadata: Metadata = {
  title: "Travel Tips | Twinspot Tours & Travel",
  description:
    "Practical travel tips for East African birding and wildlife safaris, from packing lists to camera guidance and cultural etiquette.",
};

const packingEssentials: TipSection = {
  title: "Packing essentials",
  description:
    "Balance birding gear with safari basics so your day stays light, comfortable, and ready for quick habitat shifts.",
  items: [
    "Binoculars with a comfortable harness and lens cloths",
    "Neutral clothing layers for early starts and warm afternoons",
    "Lightweight rain jacket and a compact dry bag",
    "Field notebook, checklist app, or printed guide",
    "Refillable water bottle and sun protection",
  ],
};

const cameraTips: TipSection = {
  title: "Camera and optics tips",
  description:
    "Think in ranges rather than extremes—versatility is the most useful tool in mixed habitats.",
  items: [
    "Lens range around 100–400mm for birds and behavior",
    "Fast autofocus settings for quick flight shots",
    "Beanbag or monopod for vehicle stability",
    "Keep dust covers handy for dry-season tracks",
  ],
};

const healthSafety: TipSection = {
  title: "Health and safety basics",
  description:
    "We keep guidance practical and non-medical. Check with your travel clinic for personal recommendations.",
  items: [
    "Stay hydrated and pace yourself during long drives",
    "Carry personal medications in day bags",
    "Use insect protection in forest and wetland habitats",
    "Follow guide instructions around wildlife",
  ],
};

const moneyConnectivity: TipSection = {
  title: "Money, connectivity, and power",
  description:
    "Prepare for a mix of city connectivity and remote lodge settings.",
  items: [
    "Bring some local currency for tips and small purchases",
    "SIM cards are available in major towns",
    "Pack a universal adapter and power bank",
    "Expect occasional signal gaps in remote parks",
  ],
};

const culturalEtiquette: TipSection = {
  title: "Cultural etiquette and local context",
  description:
    "Respectful travel deepens the experience and supports local communities.",
  items: [
    "Ask before photographing people or private spaces",
    "Dress modestly in towns and community visits",
    "Learn simple greetings in Swahili to connect warmly",
    "Support local artisans and community-run initiatives",
  ],
};

const accessibilityTips: TipSection = {
  title: "Traveling with kids or seniors",
  description:
    "We can design the day around shorter drives and more rest without losing key sightings.",
  items: [
    "Prioritize lodges with easy access and shaded areas",
    "Plan shorter game drives with flexible breaks",
    "Bring familiar snacks and entertainment for downtime",
    "Choose quieter routes with fewer bumpy transfers",
  ],
};

const checklist: ChecklistItem[] = [
  {
    label: "Documents",
    detail: "Passport, visa details, travel insurance, and copy of itinerary.",
  },
  {
    label: "Field kit",
    detail: "Binoculars, notebook, headlamp, and quick-dry towel.",
  },
  {
    label: "Electronics",
    detail: "Camera batteries, chargers, spare memory cards, power bank.",
  },
  {
    label: "Clothing",
    detail: "Light layers, a warm fleece, sun hat, and sturdy shoes.",
  },
  {
    label: "Comfort",
    detail: "Eye mask, ear plugs, refillable bottle, and gentle snacks.",
  },
  {
    label: "Responsible travel",
    detail: "Reusable bottle, reef-safe sunscreen, and minimal plastic.",
  },
];

const tipSections = [
  packingEssentials,
  cameraTips,
  healthSafety,
  moneyConnectivity,
  culturalEtiquette,
  accessibilityTips,
];

export default function TravelTipsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding kit laid out for safari travel"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Travel Tips</span>
          <h1>Practical guidance for confident, calm travel.</h1>
          <p className={styles.heroSubtitle}>
            From binoculars to cultural etiquette, these tips help you arrive
            prepared, comfortable, and ready for the best birding and wildlife
            moments.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/contact">
              Ask a planner
            </Link>
            <Link className={styles.secondaryButton} href="/birding-tours-kenya">
              Explore birding tours
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Field-ready essentials</h2>
            <p>
              Build your kit around comfort, mobility, and fast access to optics.
            </p>
          </div>
          <div className={styles.tipGrid}>
            {tipSections.map((section) => (
              <article key={section.title} className={styles.tipCard}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Quick checklist</h2>
            <p>
              A fast, downloadable-style reminder you can review the night
              before travel.
            </p>
          </div>
          <div className={styles.checklistGrid}>
            {checklist.map((item) => (
              <div key={item.label} className={styles.checklistItem}>
                <div className={styles.checklistHeader}>
                  <span className={styles.checkmark} aria-hidden="true">
                    ✓
                  </span>
                  <h3>{item.label}</h3>
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Plan trips around your priorities</h2>
            <p>
              Ready to put these tips into action? Explore tours that match your
              pace and a destination that fits your interests.
            </p>
          </div>
          <div className={styles.linkCard}>
            <h3>Recommended next steps</h3>
            <div className={styles.linkStack}>
              <Link href="/bird-photography-tours">Bird photography tours</Link>
              <Link href="/wildlife-safaris-kenya">Wildlife safari routes</Link>
              <Link href="/destinations/uganda">Uganda destinations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <h2>Still planning your ideal journey?</h2>
            <p>
              We can recommend timing, gear, and pacing based on your travel
              window and goals.
            </p>
          </div>
          <div className={styles.ctaLinks}>
            <Link className={styles.secondaryButton} href="/destinations/kenya">
              View Kenya
            </Link>
            <Link className={styles.primaryButton} href="/contact">
              Start planning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
