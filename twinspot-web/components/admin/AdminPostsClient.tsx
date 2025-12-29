"use client";

import Link from "next/link";
import { Post } from "@/lib/types/post";
import { removePost } from "@/app/admin/posts/actions";

export default function AdminPostsClient({ posts }: { posts: Post[] }) {
  async function onDelete(id?: string) {
    if (!id) return;
    if (!confirm("Delete this post?")) return;
    await removePost(id);
    location.reload();
  }

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Posts</h1>
        <Link href="/admin/posts/new">+ New Post</Link>
      </header>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: "1rem 0" }}>
            <strong>{post.title}</strong>
            {" · "}
            {post.published ? "Published" : "Draft"}
            <div>
              <Link href={`/admin/posts/${post.id}`}>Edit</Link>
              {" | "}
              <button onClick={() => onDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
