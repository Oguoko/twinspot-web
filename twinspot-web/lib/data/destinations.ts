import { adminDb } from "@/lib/firebase/admin";

/* ===============================
   TYPES
================================ */

export type DestinationFaqItem = {
  question: string;
  answer: string;
};

export type Destination = {
  slug: string;
  title: string;
  summary: string;
  region?: string;
  country?: string;

  heroImage?: {
    imageUrl: string;
    alt?: string;
    width?: number;
    height?: number;
  };

  seasons?: {
    months: string;
    notes: string;
  }[];

  highlights?: string[];

  gallery?: {
    imageUrl: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];

  /** ✅ NEW */
  faq?: DestinationFaqItem[];

  published: boolean;
};

/* ===============================
   GET ALL DESTINATIONS (HOMEPAGE)
   (NO FAQ – keep payload light)
================================ */

export async function getDestinations(): Promise<Destination[]> {
  const snapshot = await adminDb
    .collection("destinations")
    .where("published", "==", true)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      slug: doc.id,
      title: data.title ?? "",
      summary: data.summary ?? "",
      region: data.region ?? "",
      country: data.country ?? "",
      heroImage: data.heroImage
        ? {
            imageUrl: data.heroImage.imageUrl ?? "",
            alt: data.heroImage.alt ?? "",
            width: data.heroImage.width,
            height: data.heroImage.height,
          }
        : undefined,
      published: Boolean(data.published),
    };
  });
}

/* ===============================
   GET SINGLE DESTINATION (PAGE)
   (FULL DATA INCLUDING FAQ)
================================ */

export async function getDestination(
  slug: string
): Promise<Destination | null> {
  if (!slug) return null;

  const doc = await adminDb
    .collection("destinations")
    .doc(slug)
    .get();

  if (!doc.exists) return null;

  const data = doc.data()!;

  return {
    slug: doc.id,
    title: data.title ?? "",
    summary: data.summary ?? "",
    region: data.region ?? "",
    country: data.country ?? "",

    heroImage: data.heroImage
      ? {
          imageUrl: data.heroImage.imageUrl ?? "",
          alt: data.heroImage.alt ?? "",
          width: data.heroImage.width,
          height: data.heroImage.height,
        }
      : undefined,

    seasons: Array.isArray(data.seasons) ? data.seasons : [],
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    gallery: Array.isArray(data.gallery) ? data.gallery : [],

    /** ✅ FAQ FIX */
    faq: Array.isArray(data.faq)
      ? data.faq.map((item: any) => ({
          question: item.question ?? "",
          answer: item.answer ?? "",
        }))
      : [],

    published: Boolean(data.published),
  };
}


export async function getRelatedDestinations(
  currentSlug: string,
  region?: string,
  limit = 6
) {
  let query = adminDb
    .collection("destinations")
    .where("published", "==", true);

  if (region) {
    query = query.where("region", "==", region);
  }

  const snapshot = await query.limit(limit + 1).get();

  return snapshot.docs
    .map((doc) => {
      const data = doc.data();
      return {
        slug: doc.id,
        title: data.title ?? "",
        heroImage: data.heroImage
          ? {
              imageUrl: data.heroImage.imageUrl ?? "",
              alt: data.heroImage.alt ?? "",
            }
          : undefined,
      };
    })
    .filter((d) => d.slug !== currentSlug)
    .slice(0, limit);
}
