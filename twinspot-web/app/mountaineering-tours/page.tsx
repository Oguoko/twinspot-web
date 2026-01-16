import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./mountaineeringTours.module.css";

type Highlight = {
  title: string;
  description: string;
};

type Card = {
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

type Itinerary = {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const whoItsFor = [
  "Trekkers aiming for Mount Kenya summits",
  "Fit hikers ready for multi-day climbs",
  "Groups seeking private guiding",
  "Travelers pairing a trek with safari",
  "Teams who want well-paced acclimatization",
  "Climbers who value safety buffers",
];

const tripHighlights: Highlight[] = [
  {
    title: "Mount Kenya focus",
    description:
      "Kenya’s most iconic alpine climb with multiple route choices and dramatic scenery.",
  },
  {
    title: "Highland camps",
    description:
      "Sleep above the tree line with sunrise views and crisp mountain air.",
  },
  {
    title: "Guided summit attempts",
    description:
      "Experienced teams keep the pace steady and the plan flexible around weather.",
  },
  {
    title: "Cultural connections",
    description:
      "Meet local porters and guides who know the mountain intimately.",
  },
  {
    title: "Safari add-ons",
    description:
      "Pair your climb with a short wildlife extension in the savannah.",
  },
  {
    title: "Thoughtful logistics",
    description:
      "We handle permits, equipment coordination, and camp planning.",
  },
];

const locations: Card[] = [
  {
    title: "Mount Kenya National Park",
    description:
      "Alpine moorlands, jagged peaks, and varied trailheads to suit your route.",
  },
  {
    title: "Sirimon Approach",
    description:
      "A gradual ascent with sweeping views and reliable acclimatization pacing.",
  },
  {
    title: "Chogoria Approach",
    description:
      "Dramatic valleys and lakes with some of the most scenic viewpoints on the mountain.",
  },
  {
    title: "Naro Moru Approach",
    description:
      "Shorter access to high camps, suited for fit climbers on tighter timelines.",
  },
];

const routesAndPeaks: Card[] = [
  {
    title: "Point Lenana",
    description:
      "The classic trekking summit, achievable for fit hikers with a steady pace.",
  },
  {
    title: "Batian & Nelion (technical)",
    description:
      "For experienced climbers, we can advise on partners and technical logistics.",
  },
  {
    title: "Other East Africa climbs",
    description:
      "Options in the region can be added for multi-country trekking experiences.",
  },
  {
    title: "High-altitude day hikes",
    description:
      "Shorter acclimatization walks or pre-climb conditioning near Nairobi.",
  },
];

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "We review your trekking background, fitness level, and preferred summit goal.",
  },
  {
    title: "Design",
    description:
      "Route, acclimatization days, and camp sequence are mapped around your pace.",
  },
  {
    title: "Confirm",
    description:
      "Permits, guides, porters, and mountain gear are locked in early.",
  },
  {
    title: "Travel",
    description:
      "Climb with experienced guides and a schedule that prioritizes safety and success.",
  },
];

const inclusions = [
  "Certified mountain guides and support team",
  "Porters, cooks, and camp crew for multi-day climbs",
  "Park permits and conservation fees",
  "Private transport to trailheads and back to Nairobi",
  "Meals and lodging on the mountain",
  "Pre-trek briefing and gear checklist",
];

const itineraries: Itinerary[] = [
  {
    title: "Mount Kenya Classic",
    duration: "5 Days",
    description:
      "A balanced trek to Point Lenana with a gradual ascent and a comfortable summit window.",
    highlights: [
      "Sirimon to Chogoria traverse",
      "Acclimatization day at high camp",
      "Summit attempt at sunrise",
    ],
  },
  {
    title: "Lenana Express",
    duration: "4 Days",
    description:
      "A tighter timeline for fit hikers who have recent altitude experience.",
    highlights: [
      "Naro Moru approach",
      "Short but steep summit day",
      "Return to Nairobi same day",
    ],
  },
  {
    title: "Trek + Safari Extension",
    duration: "8 Days",
    description:
      "Combine a Mount Kenya climb with a wildlife safari in Laikipia or the Mara.",
    highlights: [
      "Two-day safari add-on",
      "Flexible accommodation levels",
      "Recovery day post-trek",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Do I need technical climbing experience?",
    answer:
      "Point Lenana is a trekking summit and does not require technical climbing skills. For technical peaks, we help assess experience and recommend partners.",
  },
  {
    question: "How cold does it get?",
    answer:
      "Nights at high camps can be chilly. We provide a detailed packing list with sleeping bag ratings and layering guidance.",
  },
  {
    question: "Can you arrange equipment rentals?",
    answer:
      "Yes, we can coordinate reliable gear rentals locally and advise on what to bring from home.",
  },
  {
    question: "Is altitude sickness common?",
    answer:
      "Some travelers feel mild symptoms. We plan acclimatization days and keep a steady pace, but always listen to your guide.",
  },
];

export const metadata: Metadata = {
  title: "Mountaineering Tours in Kenya | Mount Kenya Trekking",
  description:
    "Mountaineering tours in Kenya with expert guides, Mount Kenya trekking routes, and thoughtful acclimatization planning for a safe summit experience.",
};

export default function MountaineeringToursPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Mountaineering tours in Kenya with Mount Kenya sunrise"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Mount Kenya Trekking</p>
          <h1 className={styles.heroTitle}>Mountaineering Tours</h1>
          <p className={styles.heroSubtitle}>
            Summit-focused mountaineering tours built around Mount Kenya’s
            highlands, with careful acclimatization, reliable guides, and a
            supportive climb plan tailored to your fitness.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.valueStrip}>
        <div className={styles.containerWide}>
          <div className={styles.valueGrid}>
            {[
              "Certified mountain guides",
              "Balanced acclimatization",
              "Flexible routes",
              "Safety-first planning",
            ].map((item) => (
              <div key={item} className={styles.valueItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Who it’s for</h2>
            <p>
              Our Kenya mountaineering trips are ideal for hikers who want a
              well-paced climb, strong guide support, and a clear path to a
              memorable summit day.
            </p>
          </header>
          <div className={styles.chipGrid}>
            {whoItsFor.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Trip highlights</h2>
            <p>
              Mount Kenya is a rewarding climb for trekkers looking for alpine
              scenery, a gradual ascent, and expert support on the trail.
            </p>
          </header>
          <div className={styles.cardGrid}>
            {tripHighlights.map((highlight) => (
              <article key={highlight.title} className={styles.card}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Where we go</h2>
            <p>
              We focus on Mount Kenya routes that balance acclimatization and
              scenery, with optional extensions across East Africa.
            </p>
          </header>
          <div className={styles.locationGrid}>
            {locations.map((location) => (
              <article key={location.title} className={styles.locationCard}>
                <h3>{location.title}</h3>
                <p>{location.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>Routes &amp; peaks</h3>
            <div className={styles.cardGrid}>
              {routesAndPeaks.map((route) => (
                <article key={route.title} className={styles.card}>
                  <h4>{route.title}</h4>
                  <p>{route.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>How it works</h2>
            <p>
              We take a careful approach to mountaineering logistics so that your
              climb feels structured, supportive, and realistic for your fitness.
            </p>
          </header>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.title} className={styles.stepCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.subsection}>
            <h3>Fitness &amp; preparation</h3>
            <p>
              We recommend beginning a training plan 6–8 weeks out, focusing on
              steady cardio, hill walks, and carrying a light daypack. We’ll
              provide guidance on weekly elevation gains and pacing based on your
              chosen route.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Altitude &amp; acclimatization</h3>
            <p>
              Altitude affects everyone differently. We plan gradual ascent days,
              regular hydration breaks, and flexible turnaround times. Our guides
              monitor symptoms and adjust pace, but this is not medical advice
              and you should consult a clinician for personal concerns.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>What’s included</h2>
            <p>
              Our mountaineering packages cover essential logistics, guide
              support, and comfortable camps so you can focus on the climb.
            </p>
          </header>
          <ul className={styles.listTwoColumn}>
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.subsection}>
            <h3>Safety &amp; guides</h3>
            <p>
              We keep guide-to-guest ratios manageable, build in weather buffers,
              and run gear checks before the trek. Your guide will review daily
              plans and safety protocols at each camp.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Sample itineraries</h2>
            <p>
              These examples outline typical climb structures. We can adjust
              routes, add acclimatization days, or pair the trek with safari.
            </p>
          </header>
          <div className={styles.itineraryGrid}>
            {itineraries.map((itinerary) => (
              <article key={itinerary.title} className={styles.itineraryCard}>
                <div>
                  <p className={styles.itineraryDuration}>
                    {itinerary.duration}
                  </p>
                  <h3>{itinerary.title}</h3>
                  <p>{itinerary.description}</p>
                </div>
                <ul>
                  {itinerary.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>Practical tips</h2>
            <p>
              Packing smart and pacing well are key to a successful Mount Kenya
              trek. We’ll help fine-tune your kit list and daily routine.
            </p>
          </header>
          <ul className={styles.list}>
            <li>Layer clothing for warm afternoons and freezing summit hours.</li>
            <li>Break in hiking boots well before travel.</li>
            <li>Carry snacks and hydration for summit night.</li>
            <li>Plan a rest day after the trek before long travel.</li>
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <header className={styles.sectionHeader}>
            <h2>FAQ</h2>
            <p>
              Answers to common questions about Mount Kenya trekking and
              mountaineering logistics.
            </p>
          </header>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.containerWide}>
          <div className={styles.ctaContent}>
            <h2>Plan your Mount Kenya climb with Twinspot.</h2>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerWide}>
          <header className={styles.sectionHeader}>
            <h2>Related tours</h2>
            <p>Consider a safari or camping extension after your climb.</p>
          </header>
          <div className={styles.relatedGrid}>
            {[
              { label: "Camping Tours", href: "/camping-tours" },
              { label: "Great Migration", href: "/great-migration" },
              { label: "Bird Photography Tours", href: "/bird-photography-tours" },
              { label: "Wildlife Safaris in Kenya", href: "/wildlife-safaris-kenya" },
            ].map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className={styles.relatedCard}
              >
                {tour.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
