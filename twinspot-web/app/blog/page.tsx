import Link from "next/link";
import Image from "next/image";
import { listPublishedArticles } from "@/lib/articles";
import styles from "./blog.module.css";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await listPublishedArticles();

  return (
    <main className={styles.wrap}>
      <h1>Field Notes</h1>

      {posts.length === 0 ? (
        <p>No published articles yet. Please check back soon.</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className={styles.card}>
              {post.featuredImage && (
                <div className={styles.thumb}>
                  <Image src={post.featuredImage} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
              )}
              <div className={styles.cardBody}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.meta}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
