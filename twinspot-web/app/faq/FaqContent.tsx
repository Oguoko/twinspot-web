"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import styles from "./faq.module.css";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
  searchText: string;
};

type FaqCategory = {
  title: string;
  description: string;
  items: FaqItem[];
};

const categories: FaqCategory[] = [
  {
    title: "Booking & Payments",
    description: "Timelines, deposits, and what to expect when you confirm.",
    items: [
      {
        question: "How do I reserve dates?",
        answer:
          "We start with a planning call, confirm the itinerary, and secure dates once the deposit is received.",
        searchText: "reserve dates deposit confirm itinerary",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. Deposits secure lodges, guides, and transport. We outline the amount in your proposal.",
        searchText: "deposit secure lodges guides transport",
      },
      {
        question: "When is the final balance due?",
        answer:
          "Final payment timing depends on lodge and permit deadlines, typically several weeks before travel.",
        searchText: "final balance due lodge permit deadlines",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "We can schedule staged payments as long as all balances are cleared before supplier deadlines.",
        searchText: "installments staged payments supplier deadlines",
      },
      {
        question: "What currency do you accept?",
        answer:
          "We can quote in USD or local currency equivalents based on your preference and banking method.",
        searchText: "currency usd local equivalents",
      },
      {
        question: "Are park fees included?",
        answer:
          "Yes, your itinerary will clarify what is included so you have a full view of costs up front.",
        searchText: "park fees included itinerary costs",
      },
    ],
  },
  {
    title: "Itineraries & Customization",
    description: "How we shape routes, timing, and daily pacing.",
    items: [
      {
        question: "Can you tailor a trip around birding goals?",
        answer:
          "Absolutely. We plan routes by habitat and seasonal activity, then layer in wildlife highlights.",
        searchText: "tailor trip birding goals habitat seasonal",
      },
      {
        question: "Do you offer fixed departures?",
        answer:
          "Yes, we offer a mix of private and small-group departures depending on the season.",
        searchText: "fixed departures private small group",
      },
      {
        question: "How much driving is typical per day?",
        answer:
          "We aim for manageable transfers and include scenic breaks. Longer drives are balanced with rest.",
        searchText: "driving per day transfers scenic breaks",
      },
      {
        question: "Can we include beach or cultural days?",
        answer:
          "Yes, we can include coastal days or community visits without reducing core birding time.",
        searchText: "beach cultural days community visits",
      },
      {
        question: "Where can I learn about your planning style?",
        answer: (
          <>
            Visit our <Link href="/plan-your-trip/how-we-plan">How We Plan</Link> page for a step-by-step overview.
          </>
        ),
        searchText: "planning style how we plan overview",
      },
      {
        question: "Can we combine multiple countries?",
        answer:
          "Yes, cross-border itineraries are possible with careful timing for flights and permits.",
        searchText: "combine countries cross-border flights permits",
      },
    ],
  },
  {
    title: "Birding & Photography",
    description: "Optics, spotting, and photography support in the field.",
    items: [
      {
        question: "Do guides help with bird identification?",
        answer:
          "Yes. Guides share calls, behaviors, and habitat context to help you learn and confirm sightings.",
        searchText: "guides bird identification calls behaviors",
      },
      {
        question: "Is the pace suitable for photographers?",
        answer:
          "We include longer sessions in promising locations so you can wait for behavior and light.",
        searchText: "pace suitable photographers longer sessions",
      },
      {
        question: "Can I bring a large lens?",
        answer:
          "Yes. We recommend beanbags or monopods in vehicles, and we plan seating to keep space clear.",
        searchText: "large lens beanbag monopod seating",
      },
      {
        question: "Do you cover bird photography tours?",
        answer: (
          <>
            We offer dedicated <Link href="/bird-photography-tours">bird photography tours</Link> with flexible timing and private positioning.
          </>
        ),
        searchText: "bird photography tours flexible timing",
      },
      {
        question: "What if I am new to birding?",
        answer:
          "Beginners are welcome. Guides keep a calm pace and explain key IDs without pressure.",
        searchText: "new to birding beginners welcome",
      },
      {
        question: "Do you use playback?",
        answer:
          "We minimize playback and follow ethical practices that protect nesting and sensitive species.",
        searchText: "playback ethical practices nesting",
      },
    ],
  },
  {
    title: "Wildlife Safaris",
    description: "Balancing birding with classic safari experiences.",
    items: [
      {
        question: "Can we include the Big Five?",
        answer:
          "Yes, we often pair bird-rich habitats with iconic wildlife areas for a balanced experience.",
        searchText: "big five pair birding habitats",
      },
      {
        question: "Do you run wildlife-only safaris?",
        answer:
          "We focus on birding-forward trips, but can tailor wildlife-heavy routes on request.",
        searchText: "wildlife-only safaris tailor routes",
      },
      {
        question: "What about family-friendly wildlife drives?",
        answer:
          "We plan shorter drives and add relaxed viewing points for families and multi-generation groups.",
        searchText: "family friendly wildlife drives",
      },
      {
        question: "Are there seasonal wildlife highlights?",
        answer:
          "Yes. We time trips for calving, migration, or predator activity when possible.",
        searchText: "seasonal wildlife highlights migration",
      },
      {
        question: "Where can I see your wildlife routes?",
        answer: (
          <>
            Explore <Link href="/wildlife-safaris-kenya">wildlife safaris in Kenya</Link> for route ideas and seasonal notes.
          </>
        ),
        searchText: "wildlife safaris kenya routes",
      },
      {
        question: "Can we add a great migration experience?",
        answer: (
          <>
            Yes, we can include the <Link href="/great-migration">Great Migration</Link> during peak crossings.
          </>
        ),
        searchText: "great migration peak crossings",
      },
    ],
  },
  {
    title: "Accommodation & Meals",
    description: "Lodge styles, dietary needs, and comfort considerations.",
    items: [
      {
        question: "What lodge styles do you use?",
        answer:
          "We work with comfortable camps, boutique lodges, and premium properties based on your preferences.",
        searchText: "lodge styles camps boutique premium",
      },
      {
        question: "Can you accommodate dietary requests?",
        answer:
          "Yes. We communicate dietary needs to lodges in advance and confirm options before arrival.",
        searchText: "dietary requests lodges",
      },
      {
        question: "Are meals included?",
        answer:
          "Most safari accommodations include full-board meals. Your itinerary will clarify what is covered.",
        searchText: "meals included full board",
      },
      {
        question: "Do lodges have laundry service?",
        answer:
          "Many mid-range and luxury lodges offer laundry service; we will confirm per stop.",
        searchText: "laundry service lodges",
      },
      {
        question: "Can we choose eco-focused properties?",
        answer:
          "Yes, we can prioritize lodges with strong sustainability practices where possible.",
        searchText: "eco focused properties sustainability",
      },
      {
        question: "Are family rooms available?",
        answer:
          "Family-friendly rooms depend on lodge inventory, so we recommend early planning for peak months.",
        searchText: "family rooms available planning",
      },
    ],
  },
  {
    title: "Travel Logistics",
    description: "Visas, transport, and timing basics for East Africa.",
    items: [
      {
        question: "Do you help with visas?",
        answer:
          "We provide guidance and reminders, but travelers are responsible for obtaining visas.",
        searchText: "visas guidance reminders",
      },
      {
        question: "What airports do you use?",
        answer:
          "We typically use Nairobi, Entebbe, Kigali, or Arusha depending on your route.",
        searchText: "airports nairobi entebbe kigali arusha",
      },
      {
        question: "How are internal flights handled?",
        answer:
          "We arrange regional flights and share luggage guidelines ahead of time.",
        searchText: "internal flights luggage guidelines",
      },
      {
        question: "Do I need special gear for transfers?",
        answer:
          "Soft-sided bags are often best for smaller aircraft and vehicle storage.",
        searchText: "soft-sided bags transfer",
      },
      {
        question: "When is the best time to travel?",
        answer: (
          <>
            Our <Link href="/plan-your-trip/best-time-to-travel">Best Time to Travel</Link> page outlines seasonal highlights.
          </>
        ),
        searchText: "best time to travel seasonal highlights",
      },
      {
        question: "How do you plan transport days?",
        answer: (
          <>
            We explain expectations in <Link href="/plan-your-trip/what-to-expect">What to Expect</Link>, including early starts and scenic breaks.
          </>
        ),
        searchText: "transport days early starts scenic breaks",
      },
    ],
  },
  {
    title: "Health & Safety",
    description: "General guidance for staying comfortable and safe.",
    items: [
      {
        question: "Is the travel physically demanding?",
        answer:
          "Most days involve gentle walking and vehicle-based viewing; we adjust activity levels to suit your group.",
        searchText: "physically demanding gentle walking",
      },
      {
        question: "Do we need vaccinations?",
        answer:
          "Requirements vary by country and traveler. Consult a travel clinic for medical advice.",
        searchText: "vaccinations requirements travel clinic",
      },
      {
        question: "How do you handle emergencies?",
        answer:
          "Guides carry communication tools and coordinate with lodges and local support for quick response.",
        searchText: "emergencies communication tools",
      },
      {
        question: "Is drinking water provided?",
        answer:
          "We provide or recommend safe drinking water options at lodges and during drives.",
        searchText: "drinking water provided",
      },
      {
        question: "What about insect protection?",
        answer:
          "We recommend repellent and long sleeves during dusk and in wetland areas.",
        searchText: "insect protection repellent",
      },
      {
        question: "Can you accommodate mobility needs?",
        answer:
          "Yes. Share your needs early and we will suggest accessible lodges and gentler routing.",
        searchText: "mobility needs accessible lodges",
      },
    ],
  },
];

export default function FaqContent() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return categories;
    }

    return categories
      .map((category) => {
        const items = category.items.filter((item) =>
          [item.question, item.searchText]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery)
        );

        return {
          ...category,
          items,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [query]);

  return (
    <div className={styles.faqContent}>
      <div className={styles.heroContent}>
        <div>
          <p className={styles.eyebrow}>FAQ</p>
          <h1>Find quick answers before you travel.</h1>
          <p className={styles.heroText}>
            Browse by category or search for a specific topic. If you need
            tailored advice, our planners are happy to help.
          </p>
        </div>
        <div className={styles.searchCard}>
          <label className={styles.searchLabel} htmlFor="faq-search">
            Search the FAQ
          </label>
          <input
            id="faq-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “deposit”, “migration”, or “photography”"
            className={styles.searchInput}
          />
          <p className={styles.searchHint}>
            {filteredCategories.length === 0
              ? "No results found. Try a different keyword."
              : "Filtering within categories below."}
          </p>
        </div>
      </div>

      <div className={styles.categoryList}>
        {filteredCategories.map((category) => (
          <section key={category.title} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <div className={styles.accordion}>
              {category.items.map((item) => (
                <details key={item.question} className={styles.detailsItem}>
                  <summary className={styles.summary}>{item.question}</summary>
                  <div className={styles.detailsBody}>{item.answer}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className={styles.ctaBand}>
        <div>
          <h2>Still have a question?</h2>
          <p>
            Send us your goals and we will share a thoughtful, tailored response.
          </p>
        </div>
        <Link href="/contact" className={styles.primaryButton}>
          Contact Twinspot
        </Link>
      </div>
    </div>
  );
}
