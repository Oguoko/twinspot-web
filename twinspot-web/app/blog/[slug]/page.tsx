import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data/posts";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  // ✅ HARD GUARARD: content must exist
  const html = post.content ?? "";

  return (
    <article
      style={{
        maxWidth: 800,
        margin: "auto",
        padding: "3rem 1.5rem",
      }}
    >
      <h1>{post.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </article>
  );
}
