"use server";

import { createPost } from "@/lib/data/posts";
import { Post } from "@/lib/types/post";

export async function savePost(post: Post) {
  if (!post.title || !post.slug) {
    throw new Error("Title and slug are required");
  }

  return await createPost(post);
}
