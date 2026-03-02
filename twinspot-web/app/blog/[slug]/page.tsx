import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";
import { markdownToHtml } from "@/lib/markdown";
import styles from "../blog.module.css";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticleBySlug(slug);

  if (!post) notFound();

  return (
    <article className={styles.post}>
      {post.featuredImage && (
        <div className={styles.hero}>
          <Image src={post.featuredImage} alt={post.title} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <h1>{post.title}</h1>
      <p className={styles.meta}>
        {post.author || "Twinspot Editorial"}
        {post.publishedAt ? ` · ${new Date(post.publishedAt).toLocaleDateString()}` : ""}
      </p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content ?? "") }} />
    </article>
  );
}
