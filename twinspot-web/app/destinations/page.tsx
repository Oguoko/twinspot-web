import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Image from "next/image";
import Link from "next/link";

/* -----------------------------
   DATA FETCHING (SERVER)
-------------------------------- */

async function getDestination(slug: string) {
  const ref = doc(db, "destinations", slug);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    slug,
    ...data,
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

  if (!destination) {
    return (
      <main className="px-6 py-32">
        <h1 className="text-2xl font-serif">Destination not found</h1>
      </main>
    );
  }

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

          <h1 className="text-[2.6rem] md:text-[4.2rem] font-serif leading-tight tracking-tight text-white">
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
      <section className="px-6 pb-28 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destination.gallery?.map((img: any, index: number) => (
            <div key={index} className="relative h-64">
              <Image
                src={img.imageUrl}
                alt={img.alt || destination.title}
                fill
                className="object-cover rounded-xl shadow-sm"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FIELD NOTES */}
      {posts.length > 0 && (
        <section className="px-6 py-24 bg-white">
          <div className="max-w-6xl">
            <h2 className="text-[1.8rem] font-serif mb-12">
              Field Notes from {destination.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article>
                    {post.heroImage?.imageUrl && (
                      <div className="relative h-52 mb-4">
                        <Image
                          src={post.heroImage.imageUrl}
                          alt={post.heroImage.alt || post.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    )}

                    <h3 className="text-[1.35rem] font-serif leading-snug group-hover:underline">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-[0.95rem] text-[#5f6368] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY */}
      <section className="px-6 py-28 max-w-[42rem]">
        <h2 className="text-[1.8rem] font-serif mb-6">
          Why Bird in {destination.title}
        </h2>

        <p className="text-[1.05rem] leading-[1.8]">
          Birding in {destination.title} rewards patience and attentiveness.
          Habitat diversity, seasonal movements, and knowledgeable guiding
          make this a destination for birders who value depth over speed.
        </p>
      </section>

    </main>
  );
}
