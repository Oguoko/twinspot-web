import { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/data/publicPosts";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main style={{ maxWidth: 900, margin: "4rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        Twinspot Journal
      </h1>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            marginBottom: "3rem",
            borderBottom: "1px solid #eee",
            paddingBottom: "2rem",
          }}
        >
          {post.heroImage && (
            <img
              src={post.heroImage}
              alt={post.title}
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                borderRadius: 12,
                marginBottom: "1rem",
              }}
            />
          )}

          <h2 style={{ fontSize: "1.8rem" }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
        </article>
      ))}
    </main>
  );
}
