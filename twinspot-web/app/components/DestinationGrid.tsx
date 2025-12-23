"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DestinationGrid({ destinations }: any) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {destinations.map((dest: any) => (
        <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="cursor-pointer"
          >
            <div className="relative h-64 rounded-lg overflow-hidden bg-[#1f3d2b]">
              {dest.heroImage?.imageUrl ? (
                <Image
                  src={dest.heroImage.imageUrl}
                  alt={dest.heroImage.alt || dest.title}
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>

            <h3 className="mt-4 text-xl font-serif">
              {dest.title}
            </h3>

            {dest.region && (
              <p className="text-sm text-gray-600">
                {dest.region.replace("-", " ")}
              </p>
            )}
          </motion.article>
        </Link>
      ))}
    </div>
  );
}
