import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./tanzania.module.css";

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
    title: "Serengeti scale birding",
    description:
      "Track raptors and bustards across open plains while the Great Migration delivers constant movement, predator drama, and aerial activity.",
  },
  {
    title: "Southern circuit solitude",
    description:
      "Ruaha and Nyerere offer quieter birding with riverine forests, miombo woodlands, and a strong mix of raptors and waterbirds.",
  },
  {
    title: "Rift Valley lakes and highlands",
    description:
      "Lake Manyara and the Ngorongoro highlands add forest edge birding, flamingo gatherings, and montane species.",
  },
  {
    title: "River safaris for waterbirds",
    description:
      "Boat-based birding on the Rufiji and Grumeti rivers reveals skimmers, herons, and kingfishers while hippos and crocodiles anchor the wildlife story.",
  },
  {
    title: "Miombo woodland specialties",
    description:
      "Miombo habitats in Ruaha deliver localized species and impressive raptor density, ideal for birders who enjoy searching for subtle woodland targets.",
  },
];

const keyRegions: Region[] = [
  {
    title: "Serengeti & Western Corridor",
    description:
      "Open plains with larks, raptors, and endemic bustards, plus the Grumeti and Mara rivers for kingfishers and bee-eaters.",
  },
  {
    title: "Ngorongoro Crater & Highlands",
    description:
      "Crater rims and forested slopes hold turacos and sunbirds; the crater floor mixes waterbirds with big game.",
  },
  {
    title: "Tarangire & Lake Manyara",
    description:
      "Baobab-studded savannah and groundwater forests are rich for hornbills, lovebirds, and seasonal migrants.",
  },
  {
    title: "Southern Circuit (Ruaha, Nyerere)",
    description:
      "Miombo woodland and broad rivers deliver high raptor diversity, endemic woodpeckers, and low-traffic birding.",
  },
  {
    title: "Coastal & Island Extensions",
    description:
      "Zanzibar and the mainland coast provide mangroves, coastal forest birds, and a restorative finale after intensive safari birding.",
  },
];

const parks: Park[] = [
  {
    name: "Serengeti National Park",
    description:
      "Legendary migration vistas with raptors, vultures, and open-country birding at scale.",
    image: "/hero.jpg",
  },
  {
    name: "Ngorongoro Conservation Area",
    description:
      "Crater floor waterbirds paired with highland forest specials around the rim.",
    image: "/hero.jpg",
  },
  {
    name: "Tarangire National Park",
    description:
      "Dry-season elephant concentrations with woodland birding and vibrant bee-eater colonies.",
    image: "/hero.jpg",
  },
  {
    name: "Lake Manyara National Park",
    description:
      "Groundwater forest, soda lake shorelines, and a strong mix of pelicans and storks.",
    image: "/hero.jpg",
  },
  {
    name: "Ruaha National Park",
    description:
      "Remote miombo landscapes with raptors, hornbills, and excellent mammal viewing.",
    image: "/hero.jpg",
  },
  {
    name: "Nyerere (Selous) Reserve",
    description:
      "Boat-based birding along the Rufiji River and rare species in vast wetlands.",
    image: "/hero.jpg",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Northern Circuit Birding",
    duration: "7 Days",
    description:
      "Classic northern parks with a birding-first lens, ideal for travelers new to Tanzania.",
    highlights: [
      "Lake Manyara groundwater forest birding",
      "Serengeti raptor drives during migration",
      "Ngorongoro crater floor for waterbirds",
    ],
  },
  {
    title: "Serengeti + Southern Circuit",
    duration: "11 Days",
    description:
      "Blend Serengeti scale with the quiet, bird-rich southern parks for a deeper species list.",
    highlights: [
      "Ruaha miombo woodland endemics",
      "Boat safari on the Rufiji River",
      "Tarangire elephant herds and hornbills",
    ],
  },
  {
    title: "Tanzania Grand Birding Safari",
    duration: "14 Days",
    description:
      "A comprehensive route through multiple habitats, emphasizing bird diversity and classic wildlife.",
    highlights: [
      "Serengeti plains and western corridor",
      "Ngorongoro highland forests and crater",
      "Southern circuit for low-volume birding",
    ],
  },
];

const bestFor: string[] = [
  "Birders who want ecosystem scale and long, open-country sight lines.",
  "Safari travelers seeking migration drama plus strong bird diversity.",
  "Photographers who want big landscapes, river scenes, and raptor action.",
  "Travelers eager to combine northern classics with quieter southern parks.",
  "Families who value flexible pacing and a mix of safari and coastal downtime.",
  "Listers aiming for a deep East African tally across multiple biomes.",
];

const practicalInfo: Highlight[] = [
  {
    title: "Domestic flights",
    description:
      "We use regional flights to connect the northern circuit with Ruaha or Nyerere, keeping overland travel manageable.",
  },
  {
    title: "Safari pacing",
    description:
      "Bird-led drives emphasize early starts, long morning blocks, and slower pace for behavior observation.",
  },
  {
    title: "Seasonal notes",
    description:
      "Short rains refresh habitats without closing access; the long dry season supports crisp visibility and concentrated wildlife.",
  },
  {
    title: "Essential gear",
    description:
      "Pack binoculars, a neutral sun hat, and a light jacket for crater mornings. A beanbag helps steady lenses on long drives.",
  },
  {
    title: "Guide specialization",
    description:
      "We pair you with birding specialists who know migration timing and seasonal species shifts, especially in the southern circuit.",
  },
  {
    title: "Camp positioning",
    description:
      "Staying inside or near park boundaries helps maximize early morning birding and reduces transit time between habitats.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is the Great Migration only about mammals?",
    answer:
      "Not at all. Migration herds attract raptors and scavengers, and the open terrain is ideal for observing bustards, larks, and coursers.",
  },
  {
    question: "Which park has the highest bird diversity?",
    answer:
      "The Serengeti leads for overall volume, while Ruaha and Nyerere deliver unique species and quieter birding conditions.",
  },
  {
    question: "Can I combine birding with beach time?",
    answer:
      "Yes. We can add Zanzibar or the mainland coast after your safari, balancing birding with a restorative Indian Ocean stay.",
  },
  {
    question: "Do I need a specialist bird guide?",
    answer:
      "For a birding-led trip, absolutely. Specialist guides are essential for identifying seasonal migrants and miombo woodland species.",
  },
];

export const metadata: Metadata = {
  title: "Birding & Safaris in Tanzania",
  description:
    "Plan Tanzania birding safaris that lead with Serengeti plains, southern circuit bird diversity, and migration-backed wildlife moments.",
};

export default function TanzaniaDestinationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* 1) Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding safari in Tanzania"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>East Africa · Tanzania</p>
          <h1 className={styles.heroTitle}>Birding &amp; Safaris in Tanzania</h1>
          <p className={styles.heroSubtitle}>
            Tanzania delivers birding at monumental scale: endless Serengeti
            plains, river valleys alive with bee-eaters, and a southern circuit
            that rewards patient exploration. Birding takes the lead, while the
            Great Migration and legendary wildlife add depth to every day.
            You will move between open plains, forest edge, and river habitat
            with carefully timed drives that prioritize birding light and
            behavior.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Plan a Tanzania itinerary
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore all destinations
            </Link>
          </div>
        </div>
      </section>

      {/* 2) Why Tanzania for Birding */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Why Tanzania for Birding</h2>
            <p>
              Tanzania sits at the crossroads of East Africa’s richest birding
              ecosystems. From soda lakes to miombo woodland, the country offers
              a sweeping list of species, dramatic landscapes, and high-quality
              guiding for dedicated birders.
            </p>
          </div>
          <p>
            The Serengeti and Ngorongoro circuits bring extraordinary wildlife
            density, yet birding remains the anchor. Tanzania is perfect for
            travelers who want to chase migration drama without losing the
            smaller stories of sunbirds, rollers, and raptors that unfold across
            the plains.
          </p>
          <p>
            The country’s guiding culture is strong, with specialist bird
            leaders who understand seasonal movements and habitat nuances. This
            makes Tanzania suitable for both first-time birders and seasoned
            listers seeking a higher species count.
          </p>
        </div>
      </section>

      {/* 3) Signature Wildlife Experiences */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Signature Wildlife Experiences</h2>
            <p>
              Birding-driven pacing reveals wildlife behavior and scale, from
              river crossings to southern circuit solitude.
            </p>
          </div>
          <p>
            We plan longer blocks at sightings when flocks are active, and we
            use flexible routing to follow weather patterns that influence raptor
            movement and migrant activity across the plains.
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
              Tanzania’s vastness rewards thoughtful routing. We layer open
              plains, forest edges, and wetlands to maximize species diversity.
            </p>
          </div>
          <p>
            Expect a mix of early-morning drives, mid-day river sessions, and
            golden-hour plains scanning. This rhythm helps capture both large
            mammals and the nuanced birding moments between them.
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
              We blend iconic northern parks with lower-volume southern reserves
              so you can experience both scale and solitude.
            </p>
          </div>
          <p>
            Staying inside park boundaries means earlier starts and later
            returns, which is vital for birders tracking activity windows. The
            mix of parks ensures both headline species and quieter birding
            sessions.
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
              Birding and safari timing overlap, but each season delivers a
              unique rhythm. We align your timing with migration windows and
              preferred habitats.
            </p>
          </div>
          <p>
            Long dry months favor open-country visibility and predator activity,
            while green seasons bring lush habitats and additional migrant
            variety. We adjust routes based on rainfall patterns and your
            desired balance of birds and wildlife.
          </p>
          <div className={styles.split}>
            <div className={styles.infoCard}>
              <h3>Birding-focused window</h3>
              <p className={styles.cardText}>
                November to March brings migratory influx and breeding activity.
                Lakes are vibrant, and forest edges are active after short
                rains.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Safari-balanced window</h3>
              <p className={styles.cardText}>
                June to October is dry and ideal for classic wildlife viewing.
                Resident birds remain active, and sight lines are excellent.
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
              These itineraries spotlight Tanzania’s birding strengths while
              reserving time for iconic wildlife moments.
            </p>
          </div>
          <p>
            We can extend Serengeti stays for raptor activity, add extra nights
            in Ruaha for woodland specialties, or include a short coastal break
            if you want time on the Indian Ocean.
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
              Tanzania suits travelers seeking landscape scale, migration
              movement, and birding variety across multiple circuits.
            </p>
          </div>
          <p>
            It is particularly well suited for travelers who enjoy long game
            drives, big-sky photography, and the dramatic contrast between open
            plains and river forests.
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
              We curate logistics that allow longer birding blocks and smooth
              transitions between circuits.
            </p>
          </div>
          <p>
            Many guests prefer a blend of light aircraft and private vehicles to
            reduce driving fatigue. We also schedule midday rests to ensure
            comfort during long, productive mornings.
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
              Tanzania’s protected areas span massive ecosystems and rely on
              responsible tourism for habitat protection. We focus on camps with
              strong anti-poaching and community partnerships.
            </p>
          </div>
          <p>
            By choosing smaller camps and longer stays, you reduce carbon-heavy
            transfers and support a model that keeps wildlife corridors
            protected. Birding guides also contribute data that supports
            conservation monitoring.
          </p>
          <p>
            Birding practices emphasize patient observation rather than
            disturbance. We avoid playback in sensitive habitats, prioritize
            river-safe boating protocols, and partner with lodges that invest in
            local guiding and conservation education. Your trip supports habitat
            protection across both high-volume northern parks and remote
            southern reserves.
          </p>
        </div>
      </section>

      {/* 11) FAQ */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Tanzania Birding FAQ</h2>
            <p>Answers to key planning questions for Tanzania birding safaris.</p>
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
              <h2>Craft your Tanzania birding safari</h2>
              <p>
                Share your target species and travel dates, and we will design a
                Tanzania itinerary that blends birding depth with migration
                highlights.
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
              Pair Tanzania with other East African birding destinations to
              broaden your species list.
            </p>
          </div>
          <p>
            Combining Tanzania with Kenya adds Rift Valley lakes, while Uganda
            and Rwanda bring forest endemics to your overall birding portfolio.
          </p>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h3>Kenya</h3>
              <p className={styles.cardText}>
                Rift Valley lakes, northern drylands, and classic safari plains.
              </p>
              <Link href="/destinations/kenya">Explore Kenya</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Uganda</h3>
              <p className={styles.cardText}>
                Albertine Rift endemics and primate-rich forests.
              </p>
              <Link href="/destinations/uganda">Explore Uganda</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Rwanda</h3>
              <p className={styles.cardText}>
                Montane forest birding with gorilla and golden monkey trekking.
              </p>
              <Link href="/destinations/rwanda">Explore Rwanda</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
