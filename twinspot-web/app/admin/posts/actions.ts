"use server";

import { createPost, updatePost, deletePost } from "@/lib/data/posts";
import { Post } from "@/lib/types/post";

export async function savePost(post: Post) {
  if (post.id) {
    await updatePost(post.id, post);
    return post.id;
  }
  return await createPost(post);
}

export async function removePost(id: string) {
  await deletePost(id);
}
