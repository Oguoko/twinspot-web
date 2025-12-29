import { adminDb } from "@/lib/firebase/admin";
import { requireEditor } from "@/lib/auth/requireEditor";
import { notFound } from "next/navigation";

export default async function PreviewPostPage({
  params,
}: {
  params: { id: string };
}) {
  await requireEditor();

  const doc = await adminDb
    .collection("posts")
    .doc(params.id)
    .get();

  if (!doc.exists) return notFound();

  const post = doc.data() as any;

  return (
    <main style={{ maxWidth: 800, margin: "4rem auto" }}>
      <h1>{post.title}</h1>

      {post.heroImage && (
        <img
          src={post.heroImage}
          alt=""
          style={{ width: "100%", marginBottom: "2rem" }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
