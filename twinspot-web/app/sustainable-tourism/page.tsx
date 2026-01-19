import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./sustainableTourism.module.css";

type ChecklistItem = {
  title: string;
  detail: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const checklist: ChecklistItem[] = [
  {
    title: "Small-group planning",
    detail: "Limit vehicle numbers, reduce noise, and allow wildlife to settle naturally.",
  },
  {
    title: "Low-impact camps",
    detail: "Prioritise lodges with water stewardship, solar power, and waste systems.",
  },
  {
    title: "Slow travel routes",
    detail: "Fewer long transfers, more time in each habitat for deeper observation.",
  },
  {
    title: "Local guiding talent",
    detail: "Hire locally trained guides and invest in continuous naturalist education.",
  },
  {
    title: "Wildlife-first viewing",
    detail: "Follow distance guidelines and never pressure birds to move for photos.",
  },
  {
    title: "Paper-light operations",
    detail: "Digital briefings, refillable water stations, and minimal printed material.",
  },
];

const guestActions: ChecklistItem[] = [
  {
    title: "Pack with intention",
    detail:
      "Choose layered, reusable gear and avoid single-use plastics when possible.",
  },
  {
    title: "Respect habitat edges",
    detail:
      "Stay on designated tracks and avoid trampling sensitive nesting zones.",
  },
  {
    title: "Support local economy",
    detail:
      "Purchase crafts directly from cooperatives and tip guides fairly.",
  },
  {
    title: "Observe quietly",
    detail:
      "Lower your voice in hides and leave phones on silent to reduce disturbance.",
  },
  {
    title: "Share data responsibly",
    detail:
      "Avoid broadcasting exact nesting locations for threatened species.",
  },
];

const commitments: ChecklistItem[] = [
  {
    title: "Wildlife welfare protocols",
    detail:
      "We follow regional distance guidelines and avoid crowding feeding or nesting sites.",
  },
  {
    title: "Quiet observation windows",
    detail:
      "Guides schedule slow, silent sessions in hides and hideouts for better behaviour viewing.",
  },
  {
    title: "Adaptive routing",
    detail:
      "If habitats are under pressure, we reroute to reduce stress on wildlife and communities.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How does Twinspot choose lodges and camps?",
    answer:
      "We review each partner for conservation practices, waste management, community hiring, and transparency on fees. If a property cannot demonstrate these practices, we do not place guests there.",
  },
  {
    question: "Do you offset carbon footprints?",
    answer:
      "We prioritise route design and ground transport first, then support vetted conservation and habitat projects to balance unavoidable emissions.",
  },
  {
    question: "Is ethical birding compatible with photography?",
    answer:
      "Yes. Our guides focus on positioning and patience rather than baiting or pressure. Ethical photography produces better behaviour shots while keeping wildlife safe.",
  },
  {
    question: "How are community contributions handled?",
    answer:
      "Community fees are included in trip pricing and paid directly to local conservancies or cooperatives. We summarise where contributions go in your pre-trip brief.",
  },
  {
    question: "Can I add a conservation visit to my itinerary?",
    answer:
      "Absolutely. We can arrange visits to community birding initiatives, raptor rehabilitation centres, or habitat restoration projects when timing allows.",
  },
  {
    question: "What if I want to travel during a sensitive season?",
    answer:
      "We can recommend alternatives or adjust pacing to avoid breeding sites and peak nesting windows while still delivering meaningful sightings.",
  },
  {
    question: "Do you work with specialist birding guides?",
    answer:
      "Yes. We match guides with regional expertise so your sightings are both ethical and informed by local ecology.",
  },
];

export const metadata: Metadata = {
  title: "Sustainable Tourism | Twinspot Tours & Travel",
  description:
    "Our approach to sustainable tourism prioritises ethical birding, community partnerships, and low-impact travel across East Africa.",
};

export default function SustainableTourismPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding and conservation landscapes in East Africa"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Sustainable Tourism</p>
          <h1>Conservation-led journeys that respect habitat and community.</h1>
          <p className={styles.heroSubtitle}>
            Twinspot plans birding and safari travel with a light footprint,
            prioritising wildlife welfare, local stewardship, and long-term
            habitat resilience.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Talk to Us
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Ethical birding and responsible wildlife viewing</h2>
          <p className={styles.lede}>
            We believe exceptional sightings come from patience, local knowledge,
            and a commitment to let wildlife lead the encounter. Every itinerary
            is structured around quiet observation and ethical positioning.
          </p>
          <div className={styles.twoColumn}>
            <div>
              <h3>Species-first guiding</h3>
              <p>
                Our guides prioritise distance, light, and habitat sensitivity
                to avoid stressing birds or disrupting feeding patterns.
              </p>
            </div>
            <div>
              <h3>Balanced safari pacing</h3>
              <p>
                We limit drive hours and group sizes so wildlife can be observed
                in natural behaviour rather than pressured movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our field commitments</h2>
          <p>
            The way we behave in the field matters as much as where we travel.
            These commitments guide every Twinspot-led day on safari.
          </p>
          <div className={styles.cardGrid}>
            {commitments.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Community partnerships and conservancies</h2>
          <p>
            Conservation works when local communities benefit directly from
            protecting wildlife. We prioritise conservancies, community-owned
            lodges, and guiding teams that keep tourism revenue in the regions
            we visit.
          </p>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Local employment</h3>
              <p>
                We partner with properties that hire locally and invest in
                training, guiding apprenticeships, and ranger programmes.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Shared stewardship</h3>
              <p>
                Conservancies protect migration corridors, and guest fees help
                fund rangers, community projects, and habitat restoration.
              </p>
            </article>
            <article className={styles.card}>
              <h3>Culture-forward travel</h3>
              <p>
                We include culturally respectful visits that highlight local
                heritage without turning communities into attractions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Low-impact travel checklist</h2>
          <div className={styles.checklist}>
            {checklist.map((item) => (
              <div key={item.title} className={styles.checklistItem}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>What guests can do</h2>
          <p className={styles.lede}>
            Sustainable travel is a shared responsibility. These small actions
            help protect the places we love to visit.
          </p>
          <div className={styles.checklist}>
            {guestActions.map((item) => (
              <div key={item.title} className={styles.checklistItem}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Transparency and contribution flow</h2>
          <p>
            Conservation contributions, park fees, and community levies are
            listed clearly in your trip quote. We share how these funds are
            distributed and highlight the conservancies and community projects
            supported along your route.
          </p>
          <div className={styles.highlightBox}>
            <h3>How we handle contributions</h3>
            <ul>
              <li>Community fees are paid directly to conservancy boards.</li>
              <li>Park fees are remitted through official park authorities.</li>
              <li>Trip donations are itemised in your final itinerary.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Measuring impact, not just volume</h2>
          <p>
            We track partner practices, guest feedback, and habitat outcomes so
            we can refine the way we travel. This keeps our safaris aligned with
            wildlife welfare and long-term habitat health.
          </p>
          <div className={styles.metrics}>
            <div>
              <h3>Guide feedback</h3>
              <p>
                Post-trip debriefs focus on wildlife pressure points and changes
                needed in routing.
              </p>
            </div>
            <div>
              <h3>Partner audits</h3>
              <p>
                Annual check-ins review waste systems, energy use, and community
                hiring commitments.
              </p>
            </div>
            <div>
              <h3>Guest insights</h3>
              <p>
                Traveller feedback informs future training and habitat-sensitive
                viewing protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Frequently asked questions</h2>
          <div className={styles.faqs}>
            {faqs.map((faq) => (
              <div key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <h2>Travel with intention</h2>
          <p>
            Tell us about your goals, species interests, and comfort level. We
            will craft a route that protects the places you want to experience.
          </p>
          <Link href="/contact" className={styles.primaryCta}>
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
