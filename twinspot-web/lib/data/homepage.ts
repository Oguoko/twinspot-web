import { adminDb } from "@/lib/firebase/admin";
import { Post } from "@/lib/types/post";
import { Timestamp } from "firebase-admin/firestore";

function serialize(ts?: Timestamp) {
  return ts ? ts.toDate().toISOString() : null;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const snap = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(3)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: serialize(data.createdAt),
    } as Post;
  });
}

export async function getLatestPosts(): Promise<Post[]> {
  const snap = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(6)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: serialize(data.createdAt),
    } as Post;
  });
}
