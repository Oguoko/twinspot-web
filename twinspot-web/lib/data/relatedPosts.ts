import { adminDb } from "@/lib/firebase/admin";

type RelatedPost = {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  heroImage?: {
    imageUrl?: string;
    alt?: string;
  };
};

export async function getRelatedPosts(
  destinationSlug: string,
  limit = 6
): Promise<RelatedPost[]> {
  // 1. Fetch recent published posts ONLY
  const snapshot = await adminDb
    .collection("posts")
    .where("published", "==", true)
    .limit(20) // small, safe editorial window
    .get();

  if (snapshot.empty) return [];

  // 2. Filter in memory by relatedDestinations
  const matches = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((post: any) =>
      Array.isArray(post.relatedDestinations) &&
      post.relatedDestinations.includes(destinationSlug)
    )
    .slice(0, limit);

  // 3. Normalize output
  return matches.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug || post.id,
    heroImage: post.heroImage,
  }));
}
