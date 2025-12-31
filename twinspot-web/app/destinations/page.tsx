import Link from "next/link";
import { getDestinations } from "@/lib/data/destinations";

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <main className="px-6 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif mb-12">Destinations</h1>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((d) => (
          <li key={d.slug} className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              {d.slug.replace(/-/g, " ")}
            </h2>

            <Link
              href={`/destinations/${d.slug}`}
              className="underline text-sm"
            >
              View destination →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
