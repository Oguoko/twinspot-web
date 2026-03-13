import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import DestinationSpotlight from "./DestinationSpotlight";
import TestimonialBlock from "./TestimonialBlock";
import NewsletterBlock from "./NewsletterBlock";
import { getLatestPosts } from "@/lib/data/homepage";
import { itineraries } from "@/lib/itineraries/itineraries";
import styles from "./editorialHome.module.css";

const destinationCards = [
  { name: "Maasai Mara", country: "Kenya", image: "/photos/destinations/maasai-mara-wildebeest-migration-kenya.jpeg" },
  { name: "Amboseli", country: "Kenya", image: "/photos/destinations/amboseli-elephants-kilimanjaro-view-kenya-safari.jpg" },
  { name: "Samburu", country: "Kenya", image: "/photos/destinations/samburu-national-reserve-reticulated-giraffes-kenya.jpeg" },
  { name: "Serengeti", country: "Tanzania", image: "/photos/wildlife/Elephants-Serengeti-Safari-timbuktu-1.jpg" },
  { name: "Ngorongoro", country: "Tanzania", image: "/photos/destinations/maasai-mara-lodge-panorama-viewpoint-kenya.jpg" },
  { name: "Kigali & Volcanoes", country: "Rwanda", image: "/photos/landscapes/eburru-forest-valley-hills-great-rift-kenya.webp" },
  { name: "Bwindi", country: "Uganda", image: "/photos/birding/forest-bird-branch-eastafrica.jpg" },
];

const featuredItineraries = [
  itineraries[1],
  itineraries[0],
  itineraries[2],
  {
    ...itineraries[0],
    id: "bird-photography-expedition",
    title: "East Africa Bird Photography Expedition",
    duration: "10 days",
    shortSummary: "Field hides, dawn marsh sessions, and specialist guidance for portfolio-grade bird imagery.",
  },
  itineraries[3],
  itineraries[4],
];

export default async function EditorialHome() {
  const blogPosts = await getLatestPosts(3).catch(() => []);

  return (
    <main className={styles.page}>
      <Navbar variant="overlay" />

      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/photos/wildlife/great-wildebeest-migration-river-crossing.webp"
        >
          <source src="https://cdn.coverr.co/videos/coverr-zebras-crossing-the-river-6755/1080p.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroShade} />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Twinspot Tours • East Africa</p>
          <h1>Jambo! Karibu - travel into the unexplored corners of East Africa Region for untold bird stories with us.</h1>
          <form className={styles.heroForm} action="/itineraries" method="get">
            <label>
              Destination or region
              <input type="text" name="destination" placeholder="Maasai Mara, Serengeti, Bwindi..." />
            </label>
            <label>
              Travel period
              <input type="text" name="period" placeholder="Jul - Oct 2026" />
            </label>
            <label>
              Experience type
              <select name="experience" defaultValue="">
                <option value="" disabled>Choose an experience</option>
                <option value="birding">Birding</option>
                <option value="wildlife">Wildlife safari</option>
                <option value="migration">Great migration</option>
                <option value="gorilla">Primate & gorilla</option>
              </select>
            </label>
            <button type="submit">Explore journeys</button>
          </form>
        </div>
      </section>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p>Destinations</p><h2>Our East Africa Destinations</h2></div>
          <div className={styles.destinationsTrack}>
            {destinationCards.map((card) => (
              <article key={card.name} className={styles.destinationCard}>
                <Image src={card.image} alt={card.name} fill className={styles.cardImage} />
                <div className={styles.cardOverlay}><span>{card.country}</span><h3>{card.name}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p>Curated routes</p><h2>Signature itineraries for deeper field stories</h2></div>
          <div className={styles.itineraryGrid}>
            {featuredItineraries.map((trip, idx) => (
              <article key={trip.id} className={styles.itineraryCard}>
                <div className={styles.itineraryMedia}>
                  <Image src={destinationCards[idx % destinationCards.length].image} alt={trip.title} fill className={styles.cardImage} />
                  <span>{trip.duration}</span>
                </div>
                <div className={styles.itineraryBody}>
                  <h3>{trip.title}</h3>
                  <p>{trip.shortSummary}</p>
                  <Link href={`/itineraries/${trip.id}`}>View itinerary</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.statement}>
        <div className={styles.narrow}>
          <h2>We guide bird-first journeys with local depth, patient pacing, and the route knowledge that turns sightings into stories.</h2>
          <p>
            Twinspot pairs serious field expertise with thoughtful travel craft across Kenya, Tanzania, Rwanda, and Uganda—so each day feels purposeful, calm, and deeply connected to place.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.splitSection}>
        <div className={styles.splitMedia}><Image src="/photos/birding/great-blue-turaco-pair-kakamega-forest-kenya.webp" alt="Birding in East Africa forest habitat" fill className={styles.cardImage} /></div>
        <div className={styles.splitText}>
          <p>Why Twinspot</p>
          <h3>Your gateway to East Africa's birding and wildlife richness.</h3>
          <p>From Rift Valley lakes to montane forests, we build custom journeys around behavior windows, habitat conditions, and your preferred field rhythm.</p>
          <Link href="/about">Discover our approach</Link>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={`${styles.splitSection} ${styles.reverse}`}>
        <div className={styles.splitMedia}><Image src="/photos/wildlife/elephants-evening-browse-tsavo-twinspot.jpg" alt="Curated safari pacing and planning" fill className={styles.cardImage} /></div>
        <div className={styles.splitText}>
          <p>Planning philosophy</p>
          <h3>Thoughtful planning over cookie-cutter tourism.</h3>
          <p>Every Twinspot departure is shaped by seasoned guides, realistic travel tempos, and flexible logistics that respect your priorities.</p>
          <Link href="/contact">Start planning</Link>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}>
          <div className={styles.promoBand}>
            <h3>Private departures, specialist guides, and elegant East Africa journeys.</h3>
            <Link href="/contact">Speak with a safari planner</Link>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}><p>Journal</p><h2>From the field</h2></div>
          <div className={styles.blogGrid}>
            {(blogPosts.length ? blogPosts : [
              { id: "fallback-a", title: "Birding windows across East Africa", excerpt: "How to align migration, rainfall, and light for memorable field days.", slug: "" },
              { id: "fallback-b", title: "Choosing your first Twinspot route", excerpt: "A practical guide to selecting regions, pace, and lodge style.", slug: "" },
              { id: "fallback-c", title: "Storytelling through safari photography", excerpt: "Editorial techniques for meaningful wildlife and bird imagery.", slug: "" },
            ]).map((post, idx) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogMedia}><Image src={destinationCards[(idx + 2) % destinationCards.length].image} alt={post.title} fill className={styles.cardImage} /></div>
                <div className={styles.blogBody}><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={post.slug ? `/blog/${post.slug}` : "/blog"}>Read article</Link></div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <DestinationSpotlight destinations={[
        { name: "Maasai Mara", summary: "Classic savannah drama with year-round predators and migration season intensity.", href: "/destinations", imageSrc: "/photos/destinations/maasai-mara-wildebeest-migration-kenya.jpeg" },
        { name: "Samburu", summary: "Arid north-country landscapes, rare species, and beautiful riverside lodges.", href: "/destinations", imageSrc: "/photos/destinations/samburu-national-reserve-reticulated-giraffes-kenya.jpeg" },
        { name: "Rift Valley Lakes", summary: "A layered birding landscape of escarpments, alkaline lakes, and dramatic horizons.", href: "/destinations", imageSrc: "/photos/birding/great-white-pelicans-and-reed-cormorants-lake-elementaita-kenya.webp" },
      ]} />
      <TestimonialBlock />
      <NewsletterBlock />
    </main>
  );
}
