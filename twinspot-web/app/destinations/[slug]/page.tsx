import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  getDestination,
  getRelatedDestinations,
} from "@/lib/data/destinations";
import { getRelatedPosts } from "@/lib/data/relatedPosts";

import EditorialCTA from "@/components/EditorialCTA";
import RelatedDestinationsSlider from "@/components/RelatedDestinationsSlider";

export default async function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = await getDestination(params.slug);
  if (!destination) notFound();

  const relatedPosts = await getRelatedPosts(destination.slug);
  const relatedDestinations = await getRelatedDestinations(
    destination.slug,
    destination.region
  );

  return (
    <main className="bg-[#F7F5F2] text-[#1A1A1A]">
      {/* ================= HERO ================= */}
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
          {(destination.region || destination.country) && (
            <p className="text-sm uppercase tracking-wide text-white/70 mb-4">
              {[destination.region, destination.country]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          <h1 className="text-[2.6rem] md:text-[4.2rem] font-serif leading-tight text-white">
            {destination.title}
          </h1>
        </div>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className="max-w-[42rem] px-6 py-24">
        <p className="text-[1.05rem] leading-[1.75]">
          {destination.summary}
        </p>
      </section>

      {/* ================= GALLERY ================= */}
      {Array.isArray(destination.gallery) && destination.gallery.length > 0 && (
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

      {/* ================= FIELD NOTES ================= */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-24 bg-white">
          <h2 className="text-[1.8rem] font-serif mb-12">
            Field Notes from {destination.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
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

                  <h3 className="font-serif text-lg hover:underline">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-2 text-sm text-[#5f6368]">
                      {post.excerpt}
                    </p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ================= RELATED DESTINATIONS ================= */}
      {relatedDestinations.length > 0 && (
        <section className="px-6 py-28">
          <RelatedDestinationsSlider destinations={relatedDestinations} />
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="px-6 py-32">
        <EditorialCTA />
      </section>
    </main>
  );
}
