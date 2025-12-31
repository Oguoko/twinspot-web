"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/types/post";
import { savePost } from "@/app/admin/posts/actions";

/* ===============================
   FORM TYPE (NO ID REQUIRED)
================================ */

type PostForm = {
  title: string;
  slug: string;
  content: string;
  published: boolean;
};

export default function AdminPostEditorClient({
  post,
}: {
  post?: Post;
}) {
  const router = useRouter();

  const [form, setForm] = useState<PostForm>({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    content: post?.content ?? "",
    published: post?.published ?? false,
  });

  function update<K extends keyof PostForm>(
    key: K,
    value: PostForm[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSave() {
    const id = await savePost({
      ...(post?.id ? { id: post.id } : {}),
      ...form,
    });

    router.push(`/admin/posts/${id}`);
  }

  return (
    <div>
      <h1>{post ? "Edit Post" : "New Post"}</h1>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => update("title", e.target.value)}
      />

      <input
        placeholder="Slug"
        value={form.slug}
        onChange={(e) => update("slug", e.target.value)}
      />

      <textarea
        placeholder="Content"
        rows={12}
        value={form.content}
        onChange={(e) => update("content", e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) =>
            update("published", e.target.checked)
          }
        />
        Published
      </label>

      <br />

      <button onClick={onSave}>Save</button>
    </div>
  );
}
