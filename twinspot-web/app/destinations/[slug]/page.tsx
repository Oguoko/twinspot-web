import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* -----------------------------
   TYPES (local, authoritative)
-------------------------------- */

type ImageItem = {
  imageUrl: string;
  alt?: string;
};

type Destination = {
  slug: string;
  title: string;
  summary: string;
  region?: string;
  country?: string;
  heroImage?: ImageItem;
  gallery?: ImageItem[];
  createdAt: Date | null;
  updatedAt: Date | null;
};

/* -----------------------------
   DATA FETCHING
-------------------------------- */

async function getDestination(slug: string): Promise<Destination | null> {
  const ref = doc(db, "destinations", slug);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    slug,
    title: data.title,
    summary: data.summary,
    region: data.region,
    country: data.country,
    heroImage: data.heroImage,
    gallery: data.gallery,
    createdAt: data.createdAt?.toDate?.() || null,
    updatedAt: data.updatedAt?.toDate?.() || null,
  };
}

async function getRelatedPosts(slug: string) {
  const q = query(
    collection(db, "posts"),
    where("published", "==", true),
    where("destination", "==", slug)
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    slug: doc.id,
    ...doc.data(),
  }));
}

/* -----------------------------
   PAGE
-------------------------------- */

export default async function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = await getDestination(params.slug);
  if (!destination) notFound();

  const posts = await getRelatedPosts(params.slug);

  return (
    <main className="bg-[#F7F5F2] text-[#1A1A1A]">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-end">
        {destination.heroImage?.imageUrl && (
          <Image
            src={destination.heroImage.imageUrl}
            alt={destination.heroImage.alt || destination.title}
            fill
            priority
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative px-6 pb-24 max-w-5xl">
          <p className="text-sm uppercase tracking-wide text-white/70 mb-4">
            {destination.region} · {destination.country}
          </p>

          <h1 className="text-[2.6rem] md:text-[4.2rem] font-serif leading-tight text-white">
            {destination.title}
          </h1>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="max-w-[42rem] px-6 py-24">
        <p className="text-[1.05rem] leading-[1.75]">
          {destination.summary}
        </p>
      </section>

      {/* GALLERY */}
      {Array.isArray(destination.gallery) && (
        <section className="px-6 pb-28 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destination.gallery.map((img, index) => (
              <div key={index} className="relative h-64">
                <Image
                  src={img.imageUrl}
                  alt={img.alt || destination.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FIELD NOTES */}
      {posts.length > 0 && (
        <section className="px-6 py-24 bg-white">
          <h2 className="text-[1.8rem] font-serif mb-12">
            Field Notes from {destination.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <h3 className="font-serif text-lg hover:underline">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
