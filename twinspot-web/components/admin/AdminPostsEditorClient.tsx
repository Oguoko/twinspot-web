"use client";

import { useState, useTransition } from "react";
import PostEditor from "./PostEditor";
import { savePost } from "@/app/admin/posts/actions";
import { Post } from "@/lib/types/post";

export default function AdminPostsEditorClient({
  post,
}: {
  post: Post;
}) {
  const [data, setData] = useState<Post>(post);
  const [isPending, startTransition] = useTransition();

  function handleSave(updated: Post) {
    startTransition(async () => {
      await savePost(updated);
      alert("Post saved");
    });
  }

  return (
    <PostEditor
      post={data}
      onChange={setData}
      onSave={handleSave}
      saving={isPending}
    />
  );
}
