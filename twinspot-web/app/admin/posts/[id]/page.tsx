import { getPost } from "@/lib/data/posts";
import { notFound } from "next/navigation";
import AdminPostEditorClient from "@/components/admin/AdminPostEditorClient";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);
  if (!post) notFound();

  return <AdminPostEditorClient post={post} />;
}
