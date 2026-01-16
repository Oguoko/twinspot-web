import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./rwanda.module.css";

type Highlight = {
  title: string;
  description: string;
};

type Region = {
  title: string;
  description: string;
};

type Park = {
  name: string;
  description: string;
  image: string;
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

const signatureExperiences: Highlight[] = [
  {
    title: "Montane forest birding",
    description:
      "Nyungwe and Volcanoes National Park offer cool-climate forests packed with Albertine endemics, sunbirds, and canopy specialists.",
  },
  {
    title: "Gorilla and golden monkey encounters",
    description:
      "Low-volume trekking pairs perfectly with slow, bird-led forest walks, creating a refined wildlife experience.",
  },
  {
    title: "Akagera savannah contrast",
    description:
      "Eastern plains provide raptors, wetland birds, and classic game drives, balancing Rwanda’s forest focus.",
  },
  {
    title: "Boutique birding pace",
    description:
      "Rwanda’s low-volume positioning allows unhurried birding with time for canopy walks, hides, and close study of mixed flocks.",
  },
  {
    title: "Lake and wetland interludes",
    description:
      "Papyrus swamps and lake margins offer kingfishers, herons, and storks, giving a gentle contrast to intensive forest walks.",
  },
];

const keyRegions: Region[] = [
  {
    title: "Nyungwe Forest",
    description:
      "A top Albertine Rift site with mixed flocks, canopy walks, and rainforest endemics in a tranquil, misty setting.",
  },
  {
    title: "Volcanoes National Park",
    description:
      "Montane habitats with bamboo zones, endemic sunbirds, and renowned gorilla trekking.",
  },
  {
    title: "Akagera National Park",
    description:
      "Savannah grasslands, lakes, and papyrus swamps deliver raptors and waterbirds alongside classic safari sightings.",
  },
  {
    title: "Lake Kivu Corridor",
    description:
      "Lakeside habitats and agricultural mosaics provide relaxed birding and scenic downtime between forests.",
  },
  {
    title: "Kigali & Community Sites",
    description:
      "Urban wetlands and community reserves near Kigali are ideal for short birding sessions and cultural additions to the itinerary.",
  },
];

const parks: Park[] = [
  {
    name: "Nyungwe Forest National Park",
    description:
      "Premier montane forest birding, canopy walks, and rare Albertine specials.",
    image: "/hero.jpg",
  },
  {
    name: "Volcanoes National Park",
    description:
      "Gorilla trekking with highland birding and bamboo-zone endemics.",
    image: "/hero.jpg",
  },
  {
    name: "Akagera National Park",
    description:
      "Savannah birding with lakes, papyrus swamps, and classic wildlife drives.",
    image: "/hero.jpg",
  },
  {
    name: "Gishwati-Mukura",
    description:
      "Emerging forest reserve with intimate birding walks and community-led conservation.",
    image: "/hero.jpg",
  },
  {
    name: "Lake Kivu",
    description:
      "Scenic lakeside retreats with gentle birding and relaxed recovery time.",
    image: "/hero.jpg",
  },
  {
    name: "Rwanda Wetlands",
    description:
      "Papyrus swamps and lake margins with kingfishers, herons, and waterbirds.",
    image: "/hero.jpg",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Rwanda Forest Birding Escape",
    duration: "6 Days",
    description:
      "An intimate journey focused on Nyungwe and Volcanoes forests, ideal for endemics and canopy birding.",
    highlights: [
      "Nyungwe canopy walk and mixed-flock tracking",
      "Volcanoes bamboo-zone birding",
      "Lakeside rest on Lake Kivu",
    ],
  },
  {
    title: "Birding + Gorilla Trekking",
    duration: "8 Days",
    description:
      "Balanced wildlife adventure combining gorilla trekking with montane birding.",
    highlights: [
      "Volcanoes gorilla trek with golden monkey option",
      "Nyungwe endemics and forest trails",
      "Kigali cultural stopovers",
    ],
  },
  {
    title: "Rwanda Signature Safari",
    duration: "10 Days",
    description:
      "Comprehensive itinerary that includes forest birding, Akagera savannah, and boutique lodges.",
    highlights: [
      "Akagera boat safari and raptor drives",
      "Nyungwe forest birding with expert guides",
      "Luxury lodge stays in low-volume settings",
    ],
  },
];

const bestFor: string[] = [
  "Birders seeking Albertine endemics in refined, low-volume settings.",
  "Travelers who want gorilla trekking paired with forest birding.",
  "Couples and photographers looking for boutique lodges and soft adventure.",
  "Safari travelers who enjoy combining forest and savannah habitats.",
  "Travelers who value short travel times and high-touch guiding.",
  "Birders who want a premium, curated East Africa experience.",
];

const practicalInfo: Highlight[] = [
  {
    title: "Efficient transfers",
    description:
      "Rwanda’s compact size makes it easy to move between forests and savannah, keeping travel time short and birding time high.",
  },
  {
    title: "Permit planning",
    description:
      "Gorilla permits are limited and premium-priced. We secure permits early and align them with birding days.",
  },
  {
    title: "Luxury positioning",
    description:
      "Expect high-end lodges, attentive service, and curated experiences that prioritize comfort between birding sessions.",
  },
  {
    title: "Packing essentials",
    description:
      "Layered clothing is key for cool forest mornings. Bring waterproof gear, binoculars, and comfortable walking shoes.",
  },
  {
    title: "Guiding and permits",
    description:
      "Birding guides coordinate closely with park authorities so that permit schedules align with prime forest birding windows.",
  },
  {
    title: "Wellness and recovery",
    description:
      "Boutique lodges provide spa-style downtime, ideal after trekking days, while still keeping you close to bird-rich habitats.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is Rwanda suitable for serious birders?",
    answer:
      "Yes. Rwanda offers many Albertine Rift endemics within a compact footprint, making it efficient for birders who want depth with comfort.",
  },
  {
    question: "How does Rwanda compare to Uganda for birding?",
    answer:
      "Uganda offers broader habitat range, while Rwanda delivers concentrated montane birding and a refined, low-volume experience.",
  },
  {
    question: "Can I visit Akagera on a birding trip?",
    answer:
      "Absolutely. Akagera adds savannah birds, raptors, and lake species, giving a broader species list beyond the forests.",
  },
  {
    question: "What is the best season for Rwanda birding?",
    answer:
      "June to September is ideal for drier trails and clear sightings, while November to March brings migrant activity and lush forest color.",
  },
];

export const metadata: Metadata = {
  title: "Birding & Safaris in Rwanda",
  description:
    "Experience Rwanda birding safaris led by montane forests, Albertine endemics, and gorilla trekking in low-volume, high-end settings.",
};

export default function RwandaDestinationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* 1) Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding safari in Rwanda"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>East Africa · Rwanda</p>
          <h1 className={styles.heroTitle}>Birding &amp; Safaris in Rwanda</h1>
          <p className={styles.heroSubtitle}>
            Rwanda is a refined birding destination where montane forests lead
            the narrative. Albertine endemics, cool highland air, and attentive
            guiding create an intimate experience, while gorilla and golden
            monkey trekking add unforgettable wildlife balance.
            Expect personalized guiding, short transfer times, and thoughtful
            lodge positioning that elevates every birding session.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Plan a Rwanda itinerary
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore all destinations
            </Link>
          </div>
        </div>
      </section>

      {/* 2) Why Rwanda for Birding */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Why Rwanda for Birding</h2>
            <p>
              Rwanda concentrates Albertine Rift birding into a compact, polished
              itinerary. The cool forests of Nyungwe and Volcanoes host rare
              endemics, while Akagera provides open savannah contrast for a
              diverse bird list.
            </p>
          </div>
          <p>
            Rwanda is ideal for travelers who prefer low-volume, high-end
            logistics. The country’s strong conservation ethos and curated
            lodges make it possible to combine premium birding with gorilla
            trekking, scenic lakes, and cultural experiences.
          </p>
          <p>
            Rwanda’s compact footprint means more time in the field and less
            time in transit, making it an excellent choice for shorter
            itineraries that still deliver meaningful bird diversity.
          </p>
        </div>
      </section>

      {/* 3) Signature Wildlife Experiences */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Signature Wildlife Experiences</h2>
            <p>
              Rwanda’s wildlife experiences are intimate, with birding leading
              the pace and primate encounters enriching the journey.
            </p>
          </div>
          <p>
            We build in time for quiet observation at canopy levels, where
            mixed flocks move through mossy branches. This slow, intentional
            rhythm is a hallmark of Rwanda’s premium birding experience.
          </p>
          <div className={styles.gridThree}>
            {signatureExperiences.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Key Birding Regions & Habitats */}
      <section className={styles.section}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Key Birding Regions &amp; Habitats</h2>
            <p>
              Rwanda’s birding habitats range from misty rainforest to open
              savannah, allowing short travel hops between very different bird
              communities.
            </p>
          </div>
          <p>
            This compact geography makes it possible to dedicate extra time to
            birding without adding long transit days, ideal for travelers with
            limited time who still want a substantial species list.
          </p>
          <div className={styles.gridThree}>
            {keyRegions.map((region) => (
              <article key={region.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{region.title}</h3>
                <p className={styles.cardText}>{region.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5) National Parks & Conservancies */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>National Parks &amp; Conservancies</h2>
            <p>
              Rwanda’s protected areas are small but meticulously managed, with
              a focus on conservation and high-quality guiding.
            </p>
          </div>
          <p>
            We recommend pairing at least one forest park with Akagera to create
            a full spectrum birding journey that spans montane and savannah
            habitats in a single itinerary.
          </p>
          <div className={styles.gridThree}>
            {parks.map((park) => (
              <article key={park.name} className={styles.mediaCard}>
                <div className={styles.mediaImage}>
                  <Image
                    src={park.image}
                    alt={park.name}
                    fill
                    className={styles.heroImage}
                  />
                </div>
                <div className={styles.mediaBody}>
                  <h3 className={styles.cardTitle}>{park.name}</h3>
                  <p className={styles.cardText}>{park.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Best Time to Visit */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Best Time to Visit</h2>
            <p>
              Rwanda’s higher elevations keep temperatures cool year-round.
              Timing affects trail conditions and forest visibility.
            </p>
          </div>
          <p>
            Drier months favor trekking and clearer canopy views, while greener
            months bring a surge of forest activity and additional migratory
            species. We adjust the pace to match your comfort and target birds.
          </p>
          <div className={styles.split}>
            <div className={styles.infoCard}>
              <h3>Birding-focused window</h3>
              <p className={styles.cardText}>
                November to March adds migratory species and lush forest color,
                with rewarding birding in Nyungwe and Volcanoes.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Safari-balanced window</h3>
              <p className={styles.cardText}>
                June to September brings drier trails and clearer visibility for
                gorilla trekking, while Akagera’s wildlife is concentrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Sample Birding & Safari Itineraries */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Sample Birding &amp; Safari Itineraries</h2>
            <p>
              Rwanda itineraries are intentionally paced, allowing time for
              specialized birding and curated wildlife encounters.
            </p>
          </div>
          <p>
            We can add extra mornings in Nyungwe for endemics or build in a
            leisurely Lake Kivu stay for travelers who want restorative downtime
            between forest treks.
          </p>
          <div className={styles.gridThree}>
            {itineraries.map((itinerary) => (
              <article key={itinerary.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{itinerary.title}</h3>
                <p className={styles.cardText}>{itinerary.duration}</p>
                <p className={styles.cardText}>{itinerary.description}</p>
                <ul className={styles.list}>
                  {itinerary.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Who This Destination Is Best For */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Who This Destination Is Best For</h2>
            <p>
              Rwanda appeals to travelers who want rare birds, refined comfort,
              and meaningful primate encounters.
            </p>
          </div>
          <p>
            It is also a strong option for travelers seeking shorter, high-end
            escapes that still deliver targeted birding and iconic wildlife
            moments.
          </p>
          <ul className={styles.list}>
            {bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9) Practical Travel Information */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Practical Travel Information</h2>
            <p>
              Rwanda’s infrastructure and compact geography make planning
              efficient, especially for premium experiences.
            </p>
          </div>
          <p>
            We provide pre-trip briefings on altitude, trail difficulty, and
            permit timing so that your birding days stay aligned with the best
            forest conditions and guide availability.
          </p>
          <div className={styles.gridThree}>
            {practicalInfo.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <h3>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10) Conservation & Responsible Travel */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Conservation &amp; Responsible Travel</h2>
            <p>
              Rwanda is recognized for conservation leadership, and tourism
              directly supports protected areas, ranger programs, and community
              initiatives.
            </p>
          </div>
          <p>
            Sustainable tourism is central to Rwanda’s strategy, with visitor
            fees contributing directly to habitat protection and local
            livelihoods. We choose partners that demonstrate measurable
            conservation impact.
          </p>
          <p>
            We align with operators that reinvest in reforestation, primate
            protection, and local employment. Birding excursions follow quiet
            protocols to limit disturbance, and lodge partners actively monitor
            habitat health. Conservation revenue supports ranger patrols and
            community initiatives that protect the montane forest corridor.
          </p>
        </div>
      </section>

      {/* 11) FAQ */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Rwanda Birding FAQ</h2>
            <p>Key questions about planning a Rwanda birding safari.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.question} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p className={styles.cardText}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12) CTA band */}
      <section className={styles.section}>
        <div className={styles.containerWide}>
          <div className={styles.ctaBand}>
            <div>
              <h2>Design your Rwanda birding escape</h2>
              <p>
                Share your preferred travel style and target species, and we
                will tailor a Rwanda itinerary that blends premium lodges with
                outstanding birding.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryCta}>
                Start planning
              </Link>
              <Link href="/plan-your-trip" className={styles.secondaryCta}>
                Planning guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13) Related Destinations */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Related Destinations</h2>
            <p>
              Extend your East Africa birding journey with these neighboring
              destinations.
            </p>
          </div>
          <p>
            Kenya and Tanzania add open savannah birding, while Uganda offers a
            denser forest focus with more extensive Albertine Rift coverage.
          </p>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h3>Kenya</h3>
              <p className={styles.cardText}>
                Rift Valley lakes and savannah birding for a broader species
                list.
              </p>
              <Link href="/destinations/kenya">Explore Kenya</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Tanzania</h3>
              <p className={styles.cardText}>
                Serengeti scale and southern circuit birding with migration
                drama.
              </p>
              <Link href="/destinations/tanzania">Explore Tanzania</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Uganda</h3>
              <p className={styles.cardText}>
                Albertine Rift endemics and primate-rich forest reserves.
              </p>
              <Link href="/destinations/uganda">Explore Uganda</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
