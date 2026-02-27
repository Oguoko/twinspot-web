import Link from "next/link";
import { itineraries } from "@/lib/itineraries/itineraries";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().toLowerCase();

  const results = query
    ? itineraries.filter((item) =>
        [item.title, item.shortSummary, item.category, item.highlights.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
    : [];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
      <p style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem", color: "#6a6357" }}>Search</p>
      <h1 style={{ marginBottom: "0.5rem" }}>Find your trip</h1>
      <p style={{ color: "#5e5549" }}>Showing results for: <strong>{query || "…"}</strong></p>

      {query && results.length > 0 ? (
        <div style={{ display: "grid", gap: "1rem", marginTop: "1.6rem" }}>
          {results.map((item) => (
            <article key={item.id} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e6dece", padding: "1rem 1.1rem" }}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>{item.title}</h2>
              <p style={{ marginBottom: "0.7rem" }}>{item.shortSummary}</p>
              <Link href={`/itineraries/${item.id}`}>View itinerary</Link>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "1.6rem", background: "#fff", border: "1px solid #e6dece", borderRadius: 14, padding: "1.2rem" }}>
          <p style={{ marginBottom: "0.6rem" }}>No results found. Try broader terms like:</p>
          <ul>
            <li>Great Migration</li>
            <li>Birding Kenya</li>
            <li>Camping Tours</li>
          </ul>
          <Link href="/itineraries">Browse all itineraries</Link>
        </div>
      )}
    </main>
  );
}
