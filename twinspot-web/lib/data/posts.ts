import { db } from "@/lib/firebase/admin";
import { Post } from "@/lib/types/post";
import { Timestamp } from "firebase-admin/firestore";

export async function createPost(post: Post) {
  const ref = await db.collection("posts").add({
    ...post,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });

  return ref.id;
}
