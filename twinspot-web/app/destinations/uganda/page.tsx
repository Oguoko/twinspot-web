import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./uganda.module.css";

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
    title: "Albertine Rift endemics",
    description:
      "Uganda’s montane forests shelter some of Africa’s rarest birds, from greenbuls to the prized African Green Broadbill.",
  },
  {
    title: "Forest birding with primates",
    description:
      "Bird-led walks in Kibale and Bwindi often overlap with chimpanzee and gorilla habitats, adding primate encounters to your bird list.",
  },
  {
    title: "Wetland wonders",
    description:
      "Mabamba Swamp and Lake Victoria’s edges deliver shoebills, papyrus specialists, and dense waterbird activity.",
  },
  {
    title: "River and savannah contrasts",
    description:
      "Kazinga Channel and Murchison Falls combine boat safaris with open plains, creating exceptional raptor and waterbird opportunities.",
  },
  {
    title: "Crater lakes and escarpments",
    description:
      "Western Uganda’s crater lakes and escarpments offer scenic birding, with colorful weavers, bee-eaters, and raptors in volcanic landscapes.",
  },
];

const keyRegions: Region[] = [
  {
    title: "Bwindi Impenetrable Forest",
    description:
      "Montane forest birding for Albertine Rift endemics, mixed flocks, and canopy skulkers found on patient guided walks.",
  },
  {
    title: "Kibale Forest & Bigodi Wetlands",
    description:
      "Primate-rich rainforest with greenbuls, turacos, and easy-access wetland birding on the Bigodi boardwalk.",
  },
  {
    title: "Queen Elizabeth National Park",
    description:
      "Savannah meets wetlands, with raptors, kingfishers, and boat safaris on the Kazinga Channel.",
  },
  {
    title: "Murchison Falls & Nile Delta",
    description:
      "Riverine birding, shoebill opportunities, and savannah species along the Nile and delta channels.",
  },
  {
    title: "Lake Mburo & Ankole plains",
    description:
      "Acacia savannah and lake margins provide easy, accessible birding with starlings, kingfishers, and plains game.",
  },
];

const parks: Park[] = [
  {
    name: "Bwindi Impenetrable National Park",
    description:
      "Flagship Albertine Rift endemics and dense forest birding with gorilla trekking options.",
    image: "/hero.jpg",
  },
  {
    name: "Kibale National Park",
    description:
      "Chimpanzee tracking paired with rich forest birding and accessible wetland extensions.",
    image: "/hero.jpg",
  },
  {
    name: "Queen Elizabeth National Park",
    description:
      "Kazinga Channel boat safaris for waterbirds and raptors alongside classic savannah wildlife.",
    image: "/hero.jpg",
  },
  {
    name: "Murchison Falls National Park",
    description:
      "Nile delta birding, shoebill targets, and dramatic river scenery with wildlife drives.",
    image: "/hero.jpg",
  },
  {
    name: "Mgahinga Gorilla National Park",
    description:
      "Volcanic slopes with Albertine endemics and golden monkey tracking.",
    image: "/hero.jpg",
  },
  {
    name: "Mabamba Swamp",
    description:
      "Legendary shoebill habitat with papyrus specialists and canoe-based birding.",
    image: "/hero.jpg",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Albertine Rift Focus",
    duration: "8 Days",
    description:
      "A compact, forest-driven itinerary designed for endemics and primate-rich habitats.",
    highlights: [
      "Bwindi mixed-flock tracking and endemics",
      "Kibale forest birding with chimp trekking",
      "Bigodi wetlands for turacos and papyrus birds",
    ],
  },
  {
    title: "Uganda Birding Classic",
    duration: "11 Days",
    description:
      "Blend western forests with savannah and river birding for a balanced species list.",
    highlights: [
      "Kazinga Channel boat safari for waterbirds",
      "Murchison Falls delta shoebill search",
      "Bwindi or Mgahinga for Albertine specials",
    ],
  },
  {
    title: "Uganda Grand Birding Safari",
    duration: "14 Days",
    description:
      "A deep dive across Uganda’s full habitat range, from swamp to savannah.",
    highlights: [
      "Mabamba canoe birding at sunrise",
      "Forest birding in Kibale and Bwindi",
      "Open savannah birding in Queen Elizabeth",
    ],
  },
];

const bestFor: string[] = [
  "Birders focused on Albertine Rift endemics and forest species.",
  "Travelers who want birding combined with gorilla and chimpanzee trekking.",
  "Naturalists seeking wetlands, savannah, and forest habitats in one trip.",
  "Photographers interested in intimate forest birding and primate encounters.",
  "Active travelers who enjoy walking trails and canoe-based birding.",
  "Listers who want rare forest birds without extreme altitude travel.",
];

const practicalInfo: Highlight[] = [
  {
    title: "Road travel",
    description:
      "Uganda is best explored by road, with scenic drives between parks. We schedule ample birding stops and flexible pacing.",
  },
  {
    title: "Permits and logistics",
    description:
      "Gorilla and chimp permits are limited, so we plan early. Birding guides coordinate park access and specialty site visits.",
  },
  {
    title: "Packing tips",
    description:
      "Waterproof layers, sturdy walking shoes, and leech socks for forest trails are essential, along with binoculars and a scope.",
  },
  {
    title: "Health considerations",
    description:
      "Malaria prophylaxis and yellow fever certificates are recommended. We provide pre-trip health briefings and packing lists.",
  },
  {
    title: "Birding rhythm",
    description:
      "Forest birding is best in the early morning, followed by slower midday travel and late-afternoon wetland sessions.",
  },
  {
    title: "Lodge selection",
    description:
      "We choose lodges positioned close to birding trails and community projects, reducing transfer time and supporting local guides.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What makes Uganda special for birding?",
    answer:
      "Uganda hosts the Albertine Rift endemics, diverse forest habitats, and wetlands like Mabamba Swamp that are prime for rare species such as shoebill.",
  },
  {
    question: "Can I combine birding and gorilla trekking?",
    answer:
      "Yes. We typically pair Bwindi or Mgahinga gorilla treks with forest birding days so that primates complement the bird list.",
  },
  {
    question: "Is Uganda suitable for beginner birders?",
    answer:
      "Absolutely. The range of habitats means beginner birders can enjoy accessible wetlands and savannah birding alongside specialist forest walks.",
  },
  {
    question: "When is the best time for forest birding?",
    answer:
      "December to February and June to August offer drier trails and consistent forest activity. Wet seasons can be lush but more challenging.",
  },
];

export const metadata: Metadata = {
  title: "Birding & Safaris in Uganda",
  description:
    "Explore Uganda birding safaris led by Albertine Rift endemics, forest birding with primates, and wetlands rich in rare species.",
};

export default function UgandaDestinationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* 1) Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding safari in Uganda"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>East Africa · Uganda</p>
          <h1 className={styles.heroTitle}>Birding &amp; Safaris in Uganda</h1>
          <p className={styles.heroSubtitle}>
            Uganda is a forest-birding powerhouse. The Albertine Rift delivers
            rare endemics, while wetlands and savannah parks round out the list
            with shoebills, waterbirds, and raptors. Birding takes the lead, and
            primate encounters provide unforgettable wildlife balance.
            Expect more time on foot, quiet observation, and richly layered
            forest soundscapes that reward patient birders.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Plan a Uganda itinerary
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore all destinations
            </Link>
          </div>
        </div>
      </section>

      {/* 2) Why Uganda for Birding */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHead}>
            <h2>Why Uganda for Birding</h2>
            <p>
              Uganda’s forest reserves sit at the heart of the Albertine Rift,
              home to some of the continent’s most sought-after birds. Add
              papyrus swamps, crater lakes, and savannah reserves, and you have
              a compact country with exceptional habitat diversity.
            </p>
          </div>
          <p className={styles.cardText}>
            Birding is complemented by primate tracking in Bwindi and Kibale,
            giving the trip a unique wildlife narrative. Uganda is ideal for
            birders who value forest species and want a slower, immersive pace
            with meaningful time on foot.
          </p>
          <p>
            With strong community conservation and knowledgeable local guides,
            Uganda offers deep interpretive experiences. This combination of
            rare birds, approachable logistics, and primate encounters makes it
            one of Africa’s most rewarding birding destinations.
          </p>
        </div>
      </section>

      {/* 3) Signature Wildlife Experiences */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHead}>
            <h2>Signature Wildlife Experiences</h2>
            <p>
              Forest birding dominates, but Uganda’s wildlife adds depth through
              primate encounters and river-based birding.
            </p>
          </div>
          <p className={styles.cardText}>
            We schedule forest walks when bird activity is highest and balance
            them with boat safaris for relaxed waterbird viewing. This blend
            keeps the itinerary immersive without being overly strenuous.
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
          <div className={styles.sectionHead}>
            <h2>Key Birding Regions &amp; Habitats</h2>
            <p>
              Uganda rewards patient exploration. We slow down for forest trails
              and canoe excursions, then balance with savannah drives and
              wetland boardwalks.
            </p>
          </div>
          <p className={styles.cardText}>
            Because forest birds can be elusive, we focus on vocalization
            patterns and mixed flocks, allowing extra time for listening and
            careful positioning. This approach consistently improves sightings.
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
          <div className={styles.sectionHead}>
            <h2>National Parks &amp; Conservancies</h2>
            <p>
              Uganda’s protected areas are compact but rich in biodiversity, with
              birding, primates, and classic safari scenes all within reach.
            </p>
          </div>
          <p className={styles.cardText}>
            We pair flagship parks with smaller community-run sites that deliver
            intimate birding opportunities and direct conservation benefits. This
            combination adds both depth and meaning to the route.
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
          <div className={styles.sectionHead}>
            <h2>Best Time to Visit</h2>
            <p>
              Uganda’s equatorial climate allows year-round travel, but drier
              periods make forest trails and primate tracking easier.
            </p>
          </div>
          <p className={styles.cardText}>
            The wetter months can be lush and productive for migrants, yet trails
            are more challenging. We balance forest days with savannah and
            wetland birding to keep the experience comfortable.
          </p>
          <div className={styles.split}>
            <div className={styles.infoCard}>
              <h3>Birding-focused window</h3>
              <p className={styles.cardText}>
                December to February is excellent for forest birding and
                endemics, with good light and manageable trail conditions.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Safari-balanced window</h3>
              <p className={styles.cardText}>
                June to August offers the driest conditions for primate tracking
                and savannah wildlife, while birding remains productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Sample Birding & Safari Itineraries */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHead}>
            <h2>Sample Birding &amp; Safari Itineraries</h2>
            <p>
              Our sample routes keep birding at the center while layering in
              primate encounters and river-based wildlife viewing.
            </p>
          </div>
          <p className={styles.cardText}>
            We frequently add buffer days for forest birding, as mixed flock
            activity can vary with weather. Extra mornings dramatically improve
            chances of seeing rare Albertine Rift species.
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
          <div className={styles.sectionHead}>
            <h2>Who This Destination Is Best For</h2>
            <p>
              Uganda suits travelers who want immersive forest birding paired
              with primates and wetlands.
            </p>
          </div>
          <p className={styles.cardText}>
            It is also a strong choice for travelers who enjoy traveling by road
            and appreciate the slower pace of walking birding and canoe
            excursions.
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
          <div className={styles.sectionHead}>
            <h2>Practical Travel Information</h2>
            <p>
              Ground travel and forest treks require preparation. We provide
              detailed packing lists and guide briefings to maximize comfort.
            </p>
          </div>
          <p className={styles.cardText}>
            Travel times between parks are part of the experience, with scenic
            crater lakes and tea plantations offering occasional birding stops.
            We set realistic drive days to keep the journey comfortable.
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
          <div className={styles.sectionHead}>
            <h2>Conservation &amp; Responsible Travel</h2>
            <p>
              Uganda’s forests are sensitive ecosystems. Responsible tourism
              supports community rangers, habitat protection, and primate
              conservation.
            </p>
          </div>
          <p className={styles.cardText}>
            We favor operators that limit group size and invest in habitat
            restoration near forest edges. This helps protect nesting sites and
            reduce human-wildlife conflict in key birding zones.
          </p>
          <p>
            We partner with local guides and community lodges that reinvest in
            forest stewardship. Birding sessions follow quiet, low-impact
            protocols, and we emphasize respectful distance during primate
            tracking to minimize stress on wildlife. Conservation contributions
            support trail maintenance, habitat restoration, and environmental
            education for nearby communities.
          </p>
        </div>
      </section>

      {/* 11) FAQ */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHead}>
            <h2>Uganda Birding FAQ</h2>
            <p>Answers to common questions about Uganda birding safaris.</p>
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
              <h2>Build your Uganda birding journey</h2>
              <p>
                Tell us your target species and desired primate experiences, and
                we will craft a tailored Uganda birding itinerary with expert
                guiding.
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
          <div className={styles.sectionHead}>
            <h2>Related Destinations</h2>
            <p>
              Explore additional East African destinations that complement your
              Uganda birding safari.
            </p>
          </div>
          <p className={styles.cardText}>
            Kenya and Tanzania add open savannah birding, while Rwanda offers a
            refined montane forest counterpoint to Uganda’s broader habitat
            range.
          </p>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h3>Kenya</h3>
              <p className={styles.cardText}>
                Rift Valley lakes and open savannah birding with Big Five
                wildlife.
              </p>
              <Link href="/destinations/kenya">Explore Kenya</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Tanzania</h3>
              <p className={styles.cardText}>
                Serengeti scale and southern circuit solitude for birding depth.
              </p>
              <Link href="/destinations/tanzania">Explore Tanzania</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Rwanda</h3>
              <p className={styles.cardText}>
                Montane forests, gorilla trekking, and low-volume birding.
              </p>
              <Link href="/destinations/rwanda">Explore Rwanda</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
