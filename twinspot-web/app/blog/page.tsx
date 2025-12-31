import Link from "next/link";
import Image from "next/image";
import { getLatestPosts } from "@/lib/data/homepage";

export default async function BlogIndexPage() {
  const posts = await getLatestPosts(10);

  return (
    <main style={{ maxWidth: 1100, margin: "auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        Field Notes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {post.heroImage?.imageUrl && (
                <div style={{ position: "relative", height: 200 }}>
                  <Image
                    src={post.heroImage.imageUrl}
                    alt={post.heroImage.alt || post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontSize: "1.2rem" }}>{post.title}</h2>

                {post.excerpt && (
                  <p style={{ fontSize: "0.95rem", marginTop: 8 }}>
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
