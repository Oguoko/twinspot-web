import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getLatestPosts } from "@/lib/data/homepage";
import { itineraries as itineraryData } from "@/lib/itineraries/itineraries";
import { pickImageFromFolders } from "@/lib/photoPicker";
import EditorialHero from "./EditorialHero";
import HomeSlider from "./HomeSlider";
import DestinationSpotlight from "./DestinationSpotlight";
import TestimonialBlock from "./TestimonialBlock";
import NewsletterBlock from "./NewsletterBlock";
import styles from "./editorialHome.module.css";

export default async function EditorialHome() {
  const blogPosts = await getLatestPosts(3).catch(() => []);

  const itineraries = itineraryData.slice(0, 6).map((item, index) => ({
    title: item.title,
    location: item.start && item.end ? `${item.start} • ${item.end}` : item.duration,
    summary: item.shortSummary,
    href: `/itineraries/${item.id}`,
    imageSrc: pickImageFromFolders({ folders: item.suggestedPhotoCategories, seed: `itinerary-${item.id}-${index}` }),
  }));

  const tourOptions = [
    { title: "Great Migration", description: "Prime crossings and predator action timed to season windows.", href: "/great-migration" },
    { title: "Mountaineering", description: "Guided ascents and acclimatized highland adventure routes.", href: "/mountaineering-tours" },
    { title: "Birding", description: "Specialist guiding for endemics, wetlands, and Rift Valley circuits.", href: "/birding-tours-kenya" },
    { title: "Team Building", description: "Purposeful retreats with logistics designed for teams.", href: "/team-building-tours" },
    { title: "Camping Tours", description: "Light-footprint wilderness nights with comfort-focused camp flow.", href: "/camping-tours" },
  ];

  const reasons = [
    { title: "Expert Guides", description: "Seasoned naturalists and field leaders across East Africa.", href: "/about/guides", icon: "🧭" },
    { title: "Tailor-Made Journeys", description: "Every route and lodge aligned to your pace and priorities.", href: "/itineraries", icon: "✍️" },
    { title: "Conservation Forward", description: "Travel choices that support habitat and local communities.", href: "/sustainable-tourism", icon: "🌿" },
    { title: "Responsive Support", description: "Planning support before, during, and after your safari.", href: "/contact", icon: "🤝" },
    { title: "Premium Logistics", description: "Reliable transport, timing, and comfort at each stage.", href: "/about/transport", icon: "🚙" },
    { title: "Trusted Reputation", description: "A long-standing partner for discerning safari travelers.", href: "/about/why-us", icon: "⭐" },
  ];

  return (
    <main className={styles.page}>
      <Navbar />
      <EditorialHero imageSrc={pickImageFromFolders({ folders: ["wildlife", "landscapes"], seed: "homepage-hero" })} />

      <RevealOnScroll className={styles.section}>
        <div className={styles.container + " " + styles.whoGrid}>
          <div>
            <p className={styles.eyebrow}>Who we are</p>
            <h2>East Africa specialists crafting premium safaris with purpose.</h2>
            <p>
              Twinspot Safaris is a Kenyan-owned destination company focused on high-touch wildlife,
              birding and conservation-led journeys across East Africa.
            </p>
            <p>
              We blend expert guiding, elegant pacing and responsible travel partnerships so every journey
              feels personal, insightful and unforgettable.
            </p>
            <Link href="/about" className={styles.primaryButton}>Learn More</Link>
          </div>
          <div className={styles.visualCard}>
            <Image src={pickImageFromFolders({ folders: ["landscapes", "wildlife"], seed: "who-we-are" })} alt="Twinspot team in the field" fill className={styles.cardImage} />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container + " " + styles.profileGrid}>
          <div className={styles.visualCard}><Image src={pickImageFromFolders({ folders: ["birding", "wildlife"], seed: "profile-inclusion" })} alt="Birding and safari profile" fill className={styles.cardImage} /></div>
          <div>
            <p className={styles.eyebrow}>Profile inclusion</p>
            <h2>Precise planning for travelers with different safari styles.</h2>
            <p>Whether you are a dedicated birder, wildlife photographer, family group, or first-time explorer, we shape each itinerary around comfort, rhythm and field goals.</p>
            <div className={styles.statsRow}>
              <span>40+ curated routes</span><span>Year-round departures</span><span>Private & small-group</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionTopRow}><h2>Signature Itineraries</h2><Link href="/itineraries" className={styles.secondaryButton}>See all itineraries</Link></div>
          <div className={styles.itineraryGrid}>
            {itineraries.map((itinerary) => (
              <article className={styles.card} key={itinerary.title}>
                <div className={styles.cardImageWrap}><Image src={itinerary.imageSrc} alt={itinerary.title} fill className={styles.cardImage} /></div>
                <div className={styles.cardBody}><h3>{itinerary.title}</h3><p className={styles.metaLine}>{itinerary.location}</p><p>{itinerary.summary}</p><Link href={itinerary.href}>View itinerary</Link></div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}><div className={styles.sectionHeader}><h2>Tour options & packages</h2></div><HomeSlider slides={tourOptions.map((option) => ({ ...option, badge: "Packages" }))} /></div>
      </RevealOnScroll>

      <RevealOnScroll className={`${styles.section} ${styles.breaker}`}>
        <div className={styles.containerNarrow}>
          <h2>Twinspot as a birding doyen in East Africa</h2>
          <p>From montane forests to Rift Valley lakes, our birding programs are crafted by specialists who know seasonal movements, habitat nuance and field ethics.</p>
          <Link href="/contact" className={styles.primaryButton}>Inquire today</Link>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}><div className={styles.sectionHeader}><h2>Most Popular Tours</h2></div><div className={styles.popularGrid}>{itineraries.map((item) => <article key={`popular-${item.title}`} className={styles.card}><div className={styles.cardImageWrap}><Image src={item.imageSrc} alt={item.title} fill className={styles.cardImage} /></div><div className={styles.cardBody}><h3>{item.title}</h3><Link href={item.href} className={styles.primaryButton}>View Tour</Link></div></article>)}</div></div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}><div className={styles.sectionHeader}><h2>Why you should book with us</h2></div><HomeSlider slides={reasons.map((reason) => ({ ...reason, badge: "Why Twinspot" }))} /></div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}><div className={styles.sectionHeader}><h2>Memberships & Partnerships</h2></div><div className={styles.logoGrid}>{[
          "/photos/partners-and-association/IATAlogo.svg.png",
          "/photos/partners-and-association/kenya museum society.png",
          "/photos/partners-and-association/kenya-wildlife-service-logo-png_seeklogo-321792.png",
          "/photos/partners-and-association/ktb-logonew-1024x605.jpg",
          "/photos/partners-and-association/nature-kenya-logo.jpg",
          "/photos/partners-and-association/safari-bookings.jpeg",
        ].map((src) => <div key={src} className={styles.logoCell}><Image src={src} alt="Partner logo" width={220} height={90} className={styles.partnerLogo} /></div>)}</div></div>
      </RevealOnScroll>

      <RevealOnScroll className={styles.section}>
        <div className={styles.container}><div className={styles.sectionTopRow}><h2>From the Journal</h2><Link href="/blog" className={styles.secondaryButton}>Visit blog</Link></div><div className={styles.cardGrid}>{(blogPosts.length > 0 ? blogPosts : [{ id: "placeholder", title: "Field stories coming soon", excerpt: "Fresh dispatches, seasonal notes, and route insights from our team.", slug: "" }]).map((post) => (
          <article className={styles.card} key={post.id}><div className={styles.cardBody}><h3>{post.title}</h3><p>{post.excerpt ?? "Read our latest field stories and planning notes."}</p><Link href={post.slug ? `/blog/${post.slug}` : "/blog"}>Read article</Link></div></article>
        ))}</div></div>
      </RevealOnScroll>

      <DestinationSpotlight destinations={[
        { name: "Maasai Mara", summary: "Classic savannah drama with year-round predators and migration season intensity.", href: "/destinations", imageSrc: pickImageFromFolders({ folders: ["destinations", "wildlife"], seed: "destination-mara" }) },
        { name: "Samburu", summary: "Arid north-country landscapes, rare species, and beautiful riverside lodges.", href: "/destinations", imageSrc: pickImageFromFolders({ folders: ["destinations"], seed: "destination-samburu" }) },
        { name: "Rift Valley Lakes", summary: "A layered birding landscape of escarpments, alkaline lakes, and dramatic horizons.", href: "/destinations", imageSrc: pickImageFromFolders({ folders: ["birding", "landscapes"], seed: "destination-rift" }) },
      ]} />
      <TestimonialBlock />
      <NewsletterBlock />
    </main>
  );
}
