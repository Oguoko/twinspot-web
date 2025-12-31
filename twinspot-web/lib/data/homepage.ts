import { adminDb } from "@/lib/firebase/admin";
import type { PostPreview } from "@/lib/types/post";
import { Timestamp } from "firebase-admin/firestore";

function serialize(ts?: Timestamp) {
  return ts ? ts.toDate().toISOString() : null;
}

function normalizePost(
  doc: FirebaseFirestore.QueryDocumentSnapshot
): PostPreview {
  const data = doc.data();

  return {
    id: doc.id,
    title: data.title ?? "",
    slug: data.slug ?? doc.id,
    excerpt: data.excerpt,
    published: Boolean(data.published),
    heroImage: data.heroImage
      ? {
          imageUrl: data.heroImage.imageUrl ?? "",
          alt: data.heroImage.alt ?? "",
        }
      : undefined,
    createdAt: serialize(data.createdAt),
  };
}

export async function getFeaturedPosts(
  limit = 5
): Promise<PostPreview[]> {
  const snap = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snap.docs.map(normalizePost);
}

export async function getLatestPosts(
  limit = 6
): Promise<PostPreview[]> {
  const snap = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snap.docs.map(normalizePost);
}
