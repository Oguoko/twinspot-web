import { adminDb } from "@/lib/firebase/admin";
import { Timestamp } from "firebase-admin/firestore";
import { Post } from "@/lib/types/post";

export async function getPublishedPosts(): Promise<Post[]> {
  const now = Timestamp.now();

  const snapshot = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .where("publishedAt", "<=", now)
    .orderBy("publishedAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Post),
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const now = Timestamp.now();

  const snapshot = await adminDb
    .collection("posts")
    .where("slug", "==", slug)
    .where("published", "==", true)
    .where("publishedAt", "<=", now)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...(doc.data() as Post),
  };
}
