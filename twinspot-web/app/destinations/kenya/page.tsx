import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import styles from "./kenya.module.css";

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
    title: "Rift Valley lake spectacles",
    description:
      "Scan soda lakes for flamingo ballet, pelicans, and migrant shorebirds, then pivot to nearby acacia fringes for raptors and sunbirds that thrive in the warm thermals.",
  },
  {
    title: "Mara plains with birding depth",
    description:
      "Pair classic safari icons with bustards, coursers, and raptors. Bird-led game drives keep the pace slow for behavior-rich sightings and close studies of nesting activity.",
  },
  {
    title: "Northern dryland specialties",
    description:
      "Explore Samburu and the arid north for Somali bee-eater, vulturine guineafowl, and other hardy species of riverine oases where water concentrates life.",
  },
  {
    title: "Forest canopy immersion",
    description:
      "Walk Kakamega and the Aberdare foothills with forest specialists who spotlight turacos, greenbuls, and mixed-species flocks moving through layered canopy.",
  },
  {
    title: "Conservancy-led wildlife",
    description:
      "Private conservancies in Laikipia and the Mara allow off-peak birding hours, guided walks, and community conservation stories that deepen the safari narrative.",
  },
];

const keyRegions: Region[] = [
  {
    title: "Rift Valley Lakes & Escarpment",
    description:
      "Lake Nakuru, Naivasha, and Elementaita deliver huge waterbird numbers, while adjacent escarpments host raptors and montane edge species.",
  },
  {
    title: "Kakamega Forest & Western Highlands",
    description:
      "Kenya’s only true rainforest shelters Great Blue Turaco, forest greenbuls, and mixed flocks best found with patient, slow forest walks.",
  },
  {
    title: "Laikipia & Northern Kenya",
    description:
      "Dry acacia woodland, rocky hills, and riverine strips combine for endemic hornbills, larks, and a strong chance at arid specialists.",
  },
  {
    title: "Coast & Arabuko-Sokoke",
    description:
      "A mosaic of mangroves and coastal forest gives you Sokoke Scops Owl, Amani Sunbird, and vibrant Indian Ocean flyway migrants.",
  },
  {
    title: "Aberdare & Mount Kenya Highlands",
    description:
      "Moorlands and bamboo zones hold high-altitude specialists, while forest edges provide a calmer rhythm for birders who enjoy walking trails.",
  },
];

const parks: Park[] = [
  {
    name: "Masai Mara National Reserve",
    description:
      "Big cat territory with open-country birds, raptor density, and vast sky lines for aerial displays.",
    image: "/hero.jpg",
  },
  {
    name: "Samburu & Buffalo Springs",
    description:
      "Palm-lined rivers draw dryland endemics, while elephants and Grevy’s zebra share riverbanks with bee-eaters.",
    image: "/hero.jpg",
  },
  {
    name: "Lake Nakuru National Park",
    description:
      "Rhino sanctuary with waterbirds, pelicans, and woodland species in close proximity for short, productive drives.",
    image: "/hero.jpg",
  },
  {
    name: "Lake Naivasha & Crescent Island",
    description:
      "Boat safaris for fish eagles and kingfishers, plus relaxed walking birding in acacia woodland.",
    image: "/hero.jpg",
  },
  {
    name: "Laikipia Conservancies",
    description:
      "Private concessions allow flexible birding, night drives, and conservation-led encounters with rare mammals.",
    image: "/hero.jpg",
  },
  {
    name: "Kakamega Forest Reserve",
    description:
      "Lush canopy walks and forest edge birding for Kenya’s most distinctive rainforest roster.",
    image: "/hero.jpg",
  },
];

const itineraries: Itinerary[] = [
  {
    title: "Rift Valley Birding Intro",
    duration: "6 Days",
    description:
      "A fast-paced route for first-time Kenya birding, focused on lakes, escarpments, and classic savannah add-ons.",
    highlights: [
      "Sunrise boat birding on Lake Naivasha",
      "Flamingo and pelican vantage points at Lake Nakuru",
      "Two bird-led drives in the Masai Mara",
    ],
  },
  {
    title: "Kenya Forest & North Circuit",
    duration: "10 Days",
    description:
      "A mix of montane forest, Kakamega rainforest, and arid north reserves for endemics and rarities.",
    highlights: [
      "Kakamega canopy walks and mixed-flock tracking",
      "Aberdare foothills and highland specials",
      "Samburu riverine birding with dryland endemics",
    ],
  },
  {
    title: "Kenya Grand Birding Safari",
    duration: "13 Days",
    description:
      "Comprehensive birding with safari icons, coastal habitats, and private conservancies for unhurried viewing.",
    highlights: [
      "Laikipia conservancy bird hides and night drives",
      "Arabuko-Sokoke forest endemics on the coast",
      "Mara plains for raptors, bustards, and predators",
    ],
  },
];

const bestFor: string[] = [
  "Birders wanting multiple habitats in one trip, from soda lakes to rainforest.",
  "Wildlife travelers who want Big Five sightings without losing birding depth.",
  "Photographers seeking open landscapes, clean sight lines, and golden light.",
  "Travelers who value private conservancies and conservation-led experiences.",
  "Families and couples who want shorter transfer times and easy habitat shifts.",
  "Listers aiming for a large East Africa species count within two weeks.",
];

const practicalInfo: Highlight[] = [
  {
    title: "Getting around",
    description:
      "Fly between regional hubs to minimize drive time, then switch to 4x4 vehicles for bird-led game drives and forest tracks.",
  },
  {
    title: "Guiding style",
    description:
      "Expect specialist bird guides with local spotters; private vehicles allow longer stops for behavior studies and photography.",
  },
  {
    title: "What to pack",
    description:
      "Bring binoculars, a light scope, neutral layers, and a windbreaker for early lake mornings and highland chill.",
  },
  {
    title: "Entry formalities",
    description:
      "Kenya’s e-visa is straightforward; we align your route with current park permits and conservancy fees.",
  },
  {
    title: "Birding pace",
    description:
      "We balance slow lake scanning with longer savannah drives, building in mid-day breaks so early mornings and late afternoons stay productive.",
  },
  {
    title: "Accommodation mix",
    description:
      "Expect a blend of boutique lodges, tented camps, and private conservancies that keep you close to sunrise birding zones.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How many bird species can I expect to see?",
    answer:
      "Kenya lists more than 1,100 species. On a well-paced 10–12 day itinerary, 300–400 species is realistic depending on habitats and season.",
  },
  {
    question: "Is the Great Migration relevant for birding?",
    answer:
      "Yes. The migration draws raptors, storks, and scavengers, and the open plains allow easy scanning for larks, bustards, and coursers.",
  },
  {
    question: "Do I need a dedicated birding guide?",
    answer:
      "We strongly recommend one, especially for Kakamega and coastal forests where vocalizations and micro-habitats are key to locating targets.",
  },
  {
    question: "When is the best time for Rift Valley lakes?",
    answer:
      "November to April offers peak migrant diversity, while July to October delivers classic safari weather with strong resident birding.",
  },
];

export const metadata: Metadata = {
  title: "Birding & Safaris in Kenya",
  description:
    "Discover Kenya birding safaris led by Rift Valley lakes, Kakamega forest, and the northern drylands, balanced with Big Five wildlife experiences.",
};

export default function KenyaDestinationPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* 1) Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Birding safari in Kenya"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>East Africa · Kenya</p>
          <h1 className={styles.heroTitle}>Birding &amp; Safaris in Kenya</h1>
          <p className={styles.heroSubtitle}>
            Kenya’s birding story begins at the Rift Valley lakes, winds through
            rainforest canopies, and stretches to arid northern rivers. Each day
            balances bird-led exploration with iconic wildlife, delivering a
            safari rhythm where binoculars and camera lenses stay up from dawn
            to dusk.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryCta}>
              Plan a Kenya itinerary
            </Link>
            <Link href="/destinations" className={styles.secondaryCta}>
              Explore all destinations
            </Link>
          </div>
        </div>
      </section>

      {/* 2) Why Kenya for Birding */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Why Kenya for Birding</h2>
            <p>
              Kenya is a masterclass in variety: alkaline lakes packed with
              flamingos, montane forests filled with turacos, and open plains
              alive with raptors. The country’s compact circuit means you can
              wake to pelicans on a lake, track forest specials after lunch, and
              finish the day with a predator-focused drive in classic savannah.
            </p>
          </div>
          <p>
            Birding here is never isolated from wildlife. Maasai Mara game
            drives, Samburu river corridors, and Laikipia conservancies add
            elephants, big cats, and rare antelope to your bird list. This blend
            makes Kenya ideal for travelers who want a birding-first journey
            without sacrificing the cinematic safari moments the country is
            known for. With strong guiding networks and year-round access, Kenya
            remains one of the most reliable birding destinations on the
            continent.
          </p>
          <p>
            The country also excels at logistical ease. Air routes, comfortable
            lodges, and experienced spotters help maintain a birding pace,
            making it possible to target endemics, migrants, and iconic wildlife
            in a single journey.
          </p>
        </div>
      </section>

      {/* 3) Signature Wildlife Experiences */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerWide}>
          <div className={styles.sectionHeader}>
            <h2>Signature Wildlife Experiences</h2>
            <p>
              Birding leads the agenda, but Kenya’s wildlife moments elevate the
              rhythm of every day. These signature experiences combine bird-led
              pacing with flagship mammals and landscapes.
            </p>
          </div>
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
              Kenya’s ecosystems change quickly, so we plan habitat-specific
              days. Expect early starts for lakes and wetlands, quieter forest
              walks for endemics, and long golden-hour drives for open-country
              species.
            </p>
          </div>
          <p>
            We recommend adding at least one forest-focused block and one arid
            savannah block to capture Kenya’s full spectrum. This approach
            delivers both high species counts and a range of photographic
            settings.
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
              Kenya’s protected areas are both classic and diverse. We combine
              public parks with private conservancies for flexible birding, low
              vehicle density, and richer wildlife encounters.
            </p>
          </div>
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
              Kenya is rewarding year-round, but timing helps you prioritize
              migrants, breeding displays, or peak safari conditions. We design
              a calendar that balances birding and wildlife goals.
            </p>
          </div>
          <p>
            Shoulder seasons can be ideal for photographers who want dramatic
            skies and fewer vehicles, while peak dry months are best for clear
            sight lines and predator-focused drives. We refine timing around
            target species and habitat access.
          </p>
          <div className={styles.split}>
            <div className={styles.infoCard}>
              <h3>Birding-focused window</h3>
              <p className={styles.cardText}>
                November to April delivers migratory diversity on the lakes and
                coast, plus lush forest activity. This is prime time for
                photographic color and mixed flocks.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Safari-balanced window</h3>
              <p className={styles.cardText}>
                July to October offers crisp visibility, dramatic Mara wildlife,
                and consistent resident birding. Shoulder seasons deliver fewer
                crowds with strong sightings.
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
              Each itinerary keeps birding as the lead theme while weaving in
              iconic wildlife settings. We adjust durations, lodges, and routes
              based on target species and travel pace.
            </p>
          </div>
          <p>
            Sample routes below are starting points. We often add extra mornings
            at key lakes or forest edges to improve chances of endemics and
            photographic encounters, especially for travelers focused on
            lifers.
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
              Kenya offers quick habitat shifts and reliable logistics, making
              it suitable for first-time birders, seasoned listers, and safari
              travelers who want deeper avian context.
            </p>
          </div>
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
              Smooth logistics keep the focus on sightings. We plan efficient
              transfers, reliable guiding, and comfortable camps with early
              starts and downtime built in.
            </p>
          </div>
          <p>
            Many birders prefer a mix of light aircraft hops and overland
            transfers to access multiple habitats without long days on the
            road. We adjust this balance based on your budget and time frame.
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
              Kenya’s conservancies and community lands are central to its
              wildlife success. Choosing responsible operators ensures birding
              revenue supports habitat protection, anti-poaching, and local
              livelihoods.
            </p>
          </div>
          <p>
            Our itineraries favor camps that employ local naturalists and
            contribute to scholarship programs, ensuring that tourism benefits
            stay within surrounding communities and keep critical bird habitats
            intact.
          </p>
          <p>
            We prioritize lodges with strong conservation partnerships, limit
            off-road driving to approved zones, and schedule low-impact birding
            walks to protect nesting sites. Guests receive guidance on respectful
            photography, sound playback etiquette, and waste reduction so that
            sensitive species remain undisturbed. Conservation fees also support
            community projects that protect wetlands and forest corridors
            essential for migratory birds.
          </p>
        </div>
      </section>

      {/* 11) FAQ */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionHeader}>
            <h2>Kenya Birding FAQ</h2>
            <p>
              Common questions from travelers planning a Kenya birding safari.
            </p>
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
              <h2>Design your Kenya birding safari</h2>
              <p>
                Tell us your target species, travel window, and preferred pace.
                We will craft a bespoke Kenya itinerary that balances birding
                depth with legendary wildlife encounters.
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
              Continue your East Africa birding journey with these complementary
              destinations.
            </p>
          </div>
          <p>
            Pairing Kenya with forest-heavy Uganda, migration-rich Tanzania, or
            refined Rwanda adds new habitats and a broader species list without
            repeating landscapes.
          </p>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h3>Uganda</h3>
              <p className={styles.cardText}>
                Forest birding in the Albertine Rift with primate encounters and
                canopy walks.
              </p>
              <Link href="/destinations/uganda">Explore Uganda</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Tanzania</h3>
              <p className={styles.cardText}>
                Serengeti scale safaris with lake and rift bird diversity.
              </p>
              <Link href="/destinations/tanzania">Explore Tanzania</Link>
            </div>
            <div className={styles.relatedCard}>
              <h3>Rwanda</h3>
              <p className={styles.cardText}>
                Montane forests, Albertine endemics, and high-end gorilla
                trekking.
              </p>
              <Link href="/destinations/rwanda">Explore Rwanda</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
