import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ArticleSchema from "@/components/Seo/ArticleSchema";

/* -----------------------------
   DATA
----------------------------- */

async function getPost(slug: string) {
  const ref = doc(db, "posts", slug);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    slug,
    ...snap.data(),
  };
}

/* -----------------------------
   METADATA (SINGLE, CANONICAL)
----------------------------- */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};

  const title =
    post.seo?.title || `${post.title} | Twinspot Field Notes`;

  const description =
    post.seo?.description ||
    post.excerpt ||
    "Field notes and birding insights from East Africa.";

  const image =
    post.heroImage?.imageUrl || "/og-default.jpg";

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.heroImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* -----------------------------
   PAGE
----------------------------- */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <main className="post">
      <article className="inner">

        {/* BREADCRUMB */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/blog">Field Notes</Link>
          <span>›</span>
          <span>{post.title}</span>
        </nav>

        {/* TITLE */}
        <h1>{post.title}</h1>

        {/* DESTINATION CONTEXT */}
        {post.destination && (
          <p className="post-meta">
            From our field work in{" "}
            <Link href={`/destinations/${post.destination}`}>
              {post.destination.replace(/-/g, " ")}
            </Link>
          </p>
        )}

        {/* LEDE */}
        <p className="lede">{post.excerpt}</p>

        {/* BODY */}
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* TAGS */}
        {post.tags?.length > 0 && (
          <div className="tags">
            {post.tags.map((tag: string) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

      </article>

      {/* STRUCTURED DATA */}
      <ArticleSchema post={post} />

      <style>{`
        /* LAYOUT */
        .inner {
          max-width: 680px;
          margin: 0 auto;
          padding: 6rem 1.5rem 7rem;
        }

        /* BREADCRUMB */
        .breadcrumb {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #888;
          margin-bottom: 2rem;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .breadcrumb a {
          color: #8c6b2f;
          text-decoration: none;
        }

        /* TITLE */
        h1 {
          font-family: serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        /* META */
        .post-meta {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #777;
          margin-bottom: 3rem;
        }

        .post-meta a {
          color: #8c6b2f;
          text-decoration: none;
        }

        /* LEDE */
        .lede {
          font-size: 1.35rem;
          line-height: 1.75;
          color: #2a2a2a;
          margin-bottom: 3.75rem;
        }

        /* BODY */
        .body p {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #333;
          margin-bottom: 1.8rem;
        }

        .body h2 {
          font-family: serif;
          font-size: 1.6rem;
          margin-top: 4rem;
          margin-bottom: 1.25rem;
        }

        .body h3 {
          font-family: serif;
          font-size: 1.3rem;
          margin-top: 3rem;
          margin-bottom: 1rem;
        }

        /* TAGS */
        .tags {
          margin-top: 4.5rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.7rem;
          padding: 0.35rem 0.8rem;
          border: 1px solid #ddd;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #555;
        }
      `}</style>
    </main>
  );
}
