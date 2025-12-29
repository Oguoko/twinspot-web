"use client";

import { useState } from "react";
import { Post } from "@/lib/types/post";
import { savePost } from "@/app/admin/posts/actions";
import { useRouter } from "next/navigation";

export default function AdminPostEditorClient({ post }: { post?: Post }) {
  const router = useRouter();

  const [form, setForm] = useState<Post>(
    post ?? {
      title: "",
      slug: "",
      content: "",
      published: false,
    }
  );

  function update<K extends keyof Post>(key: K, value: Post[K]) {
    setForm({ ...form, [key]: value });
  }

  async function onSave() {
    const id = await savePost(form);
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
          onChange={(e) => update("published", e.target.checked)}
        />
        Published
      </label>

      <br />

      <button onClick={onSave}>Save</button>
    </div>
  );
}
