import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data/publicPosts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) return {};

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) notFound();

  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article style={{ maxWidth: 800, margin: "auto", padding: "3rem 1.5rem" }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
