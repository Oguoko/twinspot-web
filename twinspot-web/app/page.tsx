import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

import Image from "next/image";
import Link from "next/link";

import HeroMotion from "@/components/HeroMotion";
import DestinationGrid from "@/components/DestinationGrid";

/* -----------------------------
   DATA (SERVER — SANITIZED)
----------------------------- */

async function getDestinations() {
  const q = query(
    collection(db, "destinations"),
    where("published", "==", true),
    limit(6)
  );

  const snap = await getDocs(q);

  // ✅ RETURN PLAIN JSON ONLY
  return snap.docs.map(doc => {
    const data = doc.data();

    return {
      slug: doc.id,
      title: data.title ?? "",
      summary: data.summary ?? "",
      region: data.region ?? "",
      country: data.country ?? "",
      heroImage: data.heroImage
        ? {
            imageUrl: data.heroImage.imageUrl ?? null,
            alt: data.heroImage.alt ?? "",
          }
        : null,
    };
  });
}

async function getPosts() {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
    limit(3)
  );

  const snap = await getDocs(q);

  // Posts are rendered directly here (server-safe)
  return snap.docs.map(doc => ({
    slug: doc.id,
    title: doc.data().title ?? "",
    excerpt: doc.data().excerpt ?? "",
  }));
}

/* -----------------------------
   PAGE
----------------------------- */

export default async function HomePage() {
  const [destinations, posts] = await Promise.all([
    getDestinations(),
    getPosts(),
  ]);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <Image
          src="/hero.jpg"
          alt="Birding safari in East Africa"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <HeroMotion>
            <h1>
              Birding Safaris <br />
              Across <span>East Africa</span>
            </h1>
            <p>
              Thoughtfully guided journeys into Africa’s richest bird habitats,
              designed for birders who value depth, ethics, and wild places.
            </p>
          </HeroMotion>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section">
        <header className="section-header">
          <h2>Destinations We Know Intimately</h2>
          <p>
            From montane forests to arid savannahs, each destination is chosen
            for habitat diversity and exceptional birdlife.
          </p>
        </header>

        {/* ✅ SAFE: PLAIN JSON ONLY */}
        <DestinationGrid destinations={destinations} />
      </section>

      {/* BLOG */}
      <section className="section alt">
        <header className="section-header">
          <h2>Field Notes & Birding Insights</h2>
          <p>
            Observations from the field, species notes, and seasonal guidance
            from across East Africa.
          </p>
        </header>

        <div className="posts">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="post"
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <Link href="/blog" className="cta">
          Explore the Blog →
        </Link>
      </section>

      {/* PHILOSOPHY */}
      <section className="section philosophy">
        <h2>Why Bird With Twinspot</h2>
        <p>
          We design birding journeys around habitat, season, and species
          behaviour — not rushed checklists. Our focus is slow travel,
          skilled guiding, and respect for ecosystems.
        </p>
      </section>

      <style>{`
        .hero {
          position: relative;
          height: 90vh;
          color: white;
        }

        .hero-image {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
        }

        .hero-inner {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .hero h1 {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          font-family: serif;
        }

        .hero h1 span {
          color: #c9a24d;
        }

        .hero p {
          max-width: 520px;
          font-size: 1.15rem;
          line-height: 1.75;
          margin-top: 1.5rem;
          opacity: 0.9;
        }

        .section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .section.alt {
          background: #f7f5f2;
        }

        .section-header {
          max-width: 640px;
          margin-bottom: 3.5rem;
        }

        .posts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .post {
          text-decoration: none;
          color: inherit;
        }

        .cta {
          display: inline-block;
          margin-top: 2.5rem;
          color: #8c6b2f;
          font-weight: 500;
        }

        .philosophy {
          max-width: 720px;
        }
      `}</style>
      <header className="sr-only">
  <h1>Birding Safaris Across East Africa</h1>
</header>


    </main>
  );
}
