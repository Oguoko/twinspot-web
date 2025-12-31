import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data/posts";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post || !post.content) notFound();

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
          __html: post.content,
        }}
      />
    </article>
  );
}
