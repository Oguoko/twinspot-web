import { adminDb } from "@/lib/firebase/admin";
import { Post } from "@/lib/types/post";
import { Timestamp } from "firebase-admin/firestore";

function serialize(ts?: Timestamp) {
  return ts ? ts.toDate().toISOString() : null;
}

export async function getPosts(): Promise<Post[]> {
  const snap = await adminDb
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: serialize(data.createdAt),
      updatedAt: serialize(data.updatedAt),
    } as Post;
  });
}

export async function getPost(id: string): Promise<Post | null> {
  const doc = await adminDb.collection("posts").doc(id).get();
  if (!doc.exists) return null;

  const data = doc.data()!;
  return {
    id: doc.id,
    ...data,
    createdAt: serialize(data.createdAt),
    updatedAt: serialize(data.updatedAt),
  } as Post;
}

export async function createPost(post: Post) {
  const now = Timestamp.now();
  const ref = await adminDb.collection("posts").add({
    ...post,
    createdAt: now,
    updatedAt: now,
  });
  return ref.id;
}

export async function updatePost(id: string, post: Post) {
  await adminDb.collection("posts").doc(id).update({
    ...post,
    updatedAt: Timestamp.now(),
  });
}

export async function deletePost(id: string) {
  await adminDb.collection("posts").doc(id).delete();
}
