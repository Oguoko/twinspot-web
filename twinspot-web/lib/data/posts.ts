import { adminDb } from "@/lib/firebase/admin";
import type { Post } from "@/lib/types/post";
import { Timestamp } from "firebase-admin/firestore";

function serialize(ts?: Timestamp) {
  return ts ? ts.toDate().toISOString() : null;
}

function normalizePost(
  doc: FirebaseFirestore.DocumentSnapshot
): Post {
  const data = doc.data();

  if (!data) {
    throw new Error("Post document has no data");
  }

  return {
    id: doc.id,
    title: data.title ?? "",
    slug: data.slug ?? doc.id,
    content: data.content ?? "",            // ✅ GUARANTEED STRING
    excerpt: data.excerpt,
    published: Boolean(data.published),
    tags: Array.isArray(data.tags) ? data.tags : [],
    heroImage: data.heroImage
      ? {
          imageUrl: data.heroImage.imageUrl ?? "",
          alt: data.heroImage.alt ?? "",
        }
      : undefined,
    createdAt: serialize(data.createdAt),
    updatedAt: serialize(data.updatedAt),
  };
}

/* ===============================
   GET ALL POSTS
================================ */

export async function getPosts(): Promise<Post[]> {
  const snap = await adminDb
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get();

  return snap.docs.map((doc) => normalizePost(doc));
}

/* ===============================
   GET POST BY ID
================================ */

export async function getPost(id: string): Promise<Post | null> {
  const doc = await adminDb.collection("posts").doc(id).get();
  if (!doc.exists) return null;

  return normalizePost(doc);
}

/* ===============================
   GET POST BY SLUG (BLOG PAGE)
================================ */

export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const snap = await adminDb
    .collection("posts")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snap.empty) return null;

  return normalizePost(snap.docs[0]);
}

/* ===============================
   MUTATIONS
================================ */

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
