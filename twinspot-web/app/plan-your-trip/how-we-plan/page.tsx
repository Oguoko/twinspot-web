import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./howWePlan.module.css";

type Step = {
  title: string;
  description: string;
};

type Detail = {
  title: string;
  description: string;
};

type Persona = {
  title: string;
  focus: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = {
  title: "How We Plan | Twinspot Tours & Travel",
  description:
    "Discover Twinspot's custom trip planning approach for birding-forward safaris, built around species goals, comfort, and unhurried pacing.",
};

const steps: Step[] = [
  {
    title: "Inquiry",
    description:
      "We start with your travel window and the kind of experience you want to feel at the end of the trip. That big-picture intent guides everything that follows.",
  },
  {
    title: "Preferences",
    description:
      "We shape your profile: birding depth, wildlife priorities, comfort level, and pace. This helps us balance must-sees with breathing room.",
  },
  {
    title: "Route Design",
    description:
      "We draft a route by habitat, not just by map. Forests, lakes, savannah, coast, and altitude are sequenced for peak activity and short drives.",
  },
  {
    title: "Lodges & Camps",
    description:
      "We match lodges to your style and the journey’s rhythm, prioritizing location, guiding access, and consistent rest rather than flashy amenities.",
  },
  {
    title: "Confirm",
    description:
      "We refine the itinerary together, align logistics and permits, and confirm the details so the final plan is clear, calm, and ready.",
  },
  {
    title: "Support",
    description:
      "We stay with you from arrival to departure, adjusting for weather shifts, new sightings, and energy levels while keeping your goals in focus.",
  },
];

const questions: Detail[] = [
  {
    title: "Dates and flexibility",
    description:
      "Exact dates help, but even a general window lets us recommend optimal habitats and seasonal events.",
  },
  {
    title: "Budget range",
    description:
      "Knowing your comfort band lets us prioritize the right lodges and transport without sacrificing key sightings.",
  },
  {
    title: "Fitness and mobility",
    description:
      "We can shape walks, boat time, and drive lengths around your pace, from gentle to active.",
  },
  {
    title: "Birding level",
    description:
      "Whether you are a dedicated lister or a curious beginner, we tailor guide focus, pacing, and daily structure.",
  },
  {
    title: "Must-sees",
    description:
      "Species goals, habitats, or signature experiences help us anchor the route and protect the highlights.",
  },
];

const habitatLogic: Detail[] = [
  {
    title: "Forests",
    description:
      "Morning canopy walks for mixed flocks and shy specialists; afternoons for quieter forest edges.",
  },
  {
    title: "Lakes and wetlands",
    description:
      "Wind, light, and water levels dictate success. We time lake visits for calm conditions and active feeding windows.",
  },
  {
    title: "Savannah",
    description:
      "Early and late drives deliver both big game and open-country birds, while midday stays flexible.",
  },
  {
    title: "Coast",
    description:
      "Tidal rhythms and breezes define the best shorebird and raptor viewing hours.",
  },
  {
    title: "Altitude",
    description:
      "Highland zones are cooler and more active in mid-mornings; we plan acclimatization time to keep energy steady.",
  },
];

const accommodations: Detail[] = [
  {
    title: "Comfortable budget",
    description:
      "Well-located camps and guesthouses that keep you close to habitats, with clean rooms and reliable meals.",
  },
  {
    title: "Mid-range",
    description:
      "Boutique lodges with strong guiding access, private decks, and consistent service for multi-habitat travel.",
  },
  {
    title: "Luxury",
    description:
      "High-touch camps with polished service, prime locations, and extra flexibility for private vehicles and extended drives.",
  },
];

const personas: Persona[] = [
  {
    title: "The dedicated birder",
    focus: "Species-led routing",
    description:
      "We build dawn-to-midmorning field sessions with a specialist guide, add mid-day downtime, then return to key habitats for a second bite at dusk activity.",
  },
  {
    title: "The mixed safari family",
    focus: "Balance and variety",
    description:
      "We combine iconic wildlife drives with shorter birding walks, add lodge pools or cultural visits, and pace transfers so everyone stays energized.",
  },
  {
    title: "The photographer",
    focus: "Light and access",
    description:
      "We prioritize private vehicles, quiet hide sessions, and flexible timing so you can wait for the right behavior without feeling rushed.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How early should we start planning?",
    answer:
      "Six to nine months is ideal for prime seasonal travel, but we can often craft strong routes on shorter timelines depending on lodge availability.",
  },
  {
    question: "Can we add non-birding activities?",
    answer:
      "Absolutely. We often weave in cultural visits, conservation experiences, or beach rests without diluting the birding focus.",
  },
  {
    question: "Do we need a private guide?",
    answer:
      "Most birding-forward journeys benefit from private guiding for pace and flexibility, but we also offer small-group departures.",
  },
  {
    question: "What if we want to see the Big Five too?",
    answer:
      "We design routes that pair bird-rich habitats with classic wildlife areas, ensuring you get both without overly long drives.",
  },
  {
    question: "How do you handle weather changes?",
    answer:
      "We build in buffer time and alternative habitats so sudden rain or wind shifts still lead to rewarding sightings.",
  },
  {
    question: "Can we split the trip between countries?",
    answer:
      "Yes. We can create cross-border itineraries that respect flight timing and habitat transitions.",
  },
];

export default function HowWePlanPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding guides reviewing a custom safari route"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Plan Your Trip</p>
          <h1>How We Plan</h1>
          <p className={styles.heroSubtitle}>
            Custom journeys shaped by species goals, habitat logic, and a pace that
            lets both birds and wildlife reveal their stories.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Talk to Us
            </Link>
            <Link href="/destinations" className={styles.secondaryButton}>
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Planning Philosophy</h2>
            <p>
              We plan journeys the way experienced birders move through a
              landscape: slowly, thoughtfully, and with attention to where life
              concentrates. Our itineraries balance species goals with comfort and
              realistic pacing so that long travel days never overshadow the
              moments you came for.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Species goals first</h3>
              <p>
                We start with what matters most to you—target birds, mammals, or
                ecosystems—and design the route so those priorities anchor the
                experience.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Comfort is not an afterthought</h3>
              <p>
                Comfort shapes focus. When you are rested, you notice more. We
                plan lodging and transfers so energy stays high throughout the
                trip.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Pacing with purpose</h3>
              <p>
                We leave room for slow observation, weather flexibility, and
                meaningful stops rather than racing through long distances.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>The 6-Step Planning Process</h2>
            <p>
              A clear, collaborative path from your first message to your final
              day in the field.
            </p>
          </div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.title} className={styles.stepCard}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What We Ask You</h2>
            <p>
              The more detail you share, the more precise your route becomes. We
              keep the questions simple, but each one shapes the experience.
            </p>
          </div>
          <div className={styles.detailGrid}>
            {questions.map((item) => (
              <div key={item.title} className={styles.detailItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>How We Choose Routes</h2>
            <p>
              Habitat diversity creates depth. We sequence forests, lakes,
              savannah, coast, and altitude so that each day feels distinct and
              productive.
            </p>
          </div>
          <div className={styles.detailGrid}>
            {habitatLogic.map((item) => (
              <div key={item.title} className={styles.detailItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Guide Craft & Ethics</h2>
            <p>
              Twinspot guides blend fieldcraft with a calm, respectful approach.
              We prioritize natural behavior and ethical viewing—no chasing,
              no crowding, and always leaving wildlife with room to breathe.
            </p>
            <p>
              We encourage thoughtful photography etiquette: quiet shutters,
              patience for natural perches, and considerate positioning so every
              traveler has a clear view.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Our guiding principles</h3>
            <ul>
              <li>Respectful distance for wildlife comfort</li>
              <li>Quiet communication in sensitive habitats</li>
              <li>Community-first partnerships and local knowledge</li>
              <li>Prioritizing behavior over checklists</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Accommodation Styles</h2>
            <p>
              Lodging sets the rhythm for the whole safari. We align comfort,
              location, and service to your priorities so early starts feel easy
              and evenings feel restorative.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {accommodations.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerSplit}>
          <div>
            <h2>Transport & Pacing</h2>
            <p>
              We aim for an unhurried flow: early starts for peak activity,
              mid-day breaks for rest, and carefully timed transfers. Flights are
              used to reduce long road stretches when it improves the overall
              experience.
            </p>
            <p>
              Built-in buffers make room for unexpected sightings or weather
              shifts. That flexibility is what turns good itineraries into great
              ones.
            </p>
          </div>
          <div className={styles.highlightBox}>
            <h3>Pacing tools we use</h3>
            <ul>
              <li>Morning and afternoon field windows</li>
              <li>Recovery time between habitats</li>
              <li>Flexible driving times for photography</li>
              <li>Optional mid-trip rest days</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Customization Examples</h2>
            <p>
              Three sample traveler profiles show how we tailor the same region
              to different priorities.
            </p>
          </div>
          <div className={styles.personaGrid}>
            {personas.map((persona) => (
              <article key={persona.title} className={styles.personaCard}>
                <p className={styles.personaLabel}>{persona.focus}</p>
                <h3>{persona.title}</h3>
                <p>{persona.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Planning FAQs</h2>
            <p>
              Quick answers to the questions we hear most often from first-time
              and returning travelers.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <div>
            <h2>Ready to plan with intention?</h2>
            <p>
              Tell us your travel window and wildlife priorities, and we will
              craft a journey that balances depth, comfort, and discovery.
            </p>
          </div>
          <Link href="/contact" className={styles.primaryButton}>
            Request a Quote
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Related Reading</h2>
            <p>
              Keep exploring with seasonal guidance and practical expectations.
            </p>
          </div>
          <div className={styles.relatedGrid}>
            <Link href="/plan-your-trip/best-time-to-travel" className={styles.relatedCard}>
              <h3>Best Time to Travel</h3>
              <p>Seasonal clarity for birding, wildlife, and photography.</p>
            </Link>
            <Link href="/plan-your-trip/what-to-expect" className={styles.relatedCard}>
              <h3>What to Expect</h3>
              <p>Daily rhythms, lodge realities, and travel etiquette.</p>
            </Link>
            <Link href="/birding-tours-kenya" className={styles.relatedCard}>
              <h3>Signature Birding Tours</h3>
              <p>Explore curated itineraries across East Africa.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
