import PostEditor from "@/components/admin/PostEditor";
import { getImages } from "@/lib/data/images";

export default async function AdminPostsPage() {
  const images = await getImages(); // server-only work

  return (
    <main>
      <PostEditor images={images} />
    </main>
  );
}
