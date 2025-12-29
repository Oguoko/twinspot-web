import Link from "next/link";
import Image from "next/image";
import styles from "./related-posts.module.css";

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

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.related}>
      <h2>Related Stories</h2>

      <div className={styles.slider}>
        {posts.map((post) => {
          const imageSrc = post.heroImage?.imageUrl;

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              {imageSrc && (
                <div className={styles.imageWrap}>
                  <Image
                    src={imageSrc}
                    alt={post.heroImage?.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              <div className={styles.text}>
                <h3>{post.title}</h3>
                {post.excerpt && <p>{post.excerpt}</p>}
                <span className={styles.readMore}>Read more →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
