"use server";

import { adminDb } from "@/lib/firebase/admin";
import type { Post } from "@/lib/types/post";

type PostInput = Omit<Post, "id"> & { id?: string };

export async function savePost(post: PostInput): Promise<string> {
  if (post.id) {
    await adminDb.collection("posts").doc(post.id).update({
      ...post,
      updatedAt: new Date(),
    });
    return post.id;
  }

  const ref = await adminDb.collection("posts").add({
    ...post,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return ref.id;
}

export async function removePost(id: string) {
  if (!id) return;
  await adminDb.collection("posts").doc(id).delete();
}
