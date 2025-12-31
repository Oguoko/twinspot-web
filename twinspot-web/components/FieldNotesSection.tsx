import Link from "next/link";
import Image from "next/image";
import styles from "./field-notes-section.module.css";

import { getFeaturedPosts } from "@/lib/data/homepage";

type Post = {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  heroImage?: {
    imageUrl?: string;
    alt?: string;
  };
};

export default async function FieldNotesSection() {
  const posts: Post[] = await getFeaturedPosts(5);

  if (!posts || posts.length === 0) return null;

  const heroPost = posts[0];
  const featurePost = posts[1];
  const listPosts = posts.slice(2);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Field Notes & Birding Insights</h2>
          <p>Observations from the wild, written along the way.</p>
        </header>

        {/* ===== HERO STORY WITH OVERLAY ===== */}
        {heroPost && (
          <Link
            href={`/blog/${heroPost.slug}`}
            className={styles.heroCard}
          >
            {heroPost.heroImage?.imageUrl && (
              <div className={styles.heroImage}>
                <Image
                  src={heroPost.heroImage.imageUrl}
                  alt={heroPost.heroImage.alt || heroPost.title}
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            <div className={styles.heroOverlay}>
              <h3>{heroPost.title}</h3>
              {heroPost.excerpt && <p>{heroPost.excerpt}</p>}
              <span className={styles.readMore}>
                Read more →
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* ===== SPLIT SECTION ===== */}
      {featurePost && (
        <div className={styles.split}>
          <Link
            href={`/blog/${featurePost.slug}`}
            className={styles.featureCard}
          >
            {featurePost.heroImage?.imageUrl && (
              <div className={styles.featureImage}>
                <Image
                  src={featurePost.heroImage.imageUrl}
                  alt={featurePost.heroImage.alt || featurePost.title}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            <div className={styles.featureOverlay}>
              <h4>{featurePost.title}</h4>
              <span>Read more →</span>
            </div>
          </Link>

          <div className={styles.list}>
            {listPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={styles.listItem}
              >
                <h5>{post.title}</h5>
                <span>Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
