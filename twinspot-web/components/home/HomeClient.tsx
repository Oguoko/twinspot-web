"use client";

import Link from "next/link";
import { Post } from "@/lib/types/post";

export default function HomeClient({
  featured,
  latest,
}: {
  featured: Post[];
  latest: Post[];
}) {
  return (
    <main style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
      {/* HERO */}
      <section style={{ marginBottom: "4rem" }}>
        <h1>Twinspot Tours & Travel</h1>
        <p>Stories, destinations, and unforgettable journeys.</p>
      </section>

      {/* FEATURED */}
      <section style={{ marginBottom: "4rem" }}>
        <h2>Featured Stories</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {featured.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>Read more →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section>
        <h2>Latest Posts</h2>
        <ul>
          {latest.map((post) => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <Link href={`/blog/${post.slug}`}>
                <strong>{post.title}</strong>
              </Link>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                {post.createdAt?.slice(0, 10)}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
