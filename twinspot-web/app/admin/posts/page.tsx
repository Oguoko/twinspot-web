import { getPosts } from "@/lib/data/posts";
import AdminPostsClient from "@/components/admin/AdminPostsClient";

export default async function AdminPostsPage() {
  const posts = await getPosts();
  return <AdminPostsClient posts={posts} />;
}
