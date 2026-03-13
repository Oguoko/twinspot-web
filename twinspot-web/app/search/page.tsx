import Link from "next/link";
import { itineraries } from "@/lib/itineraries/itineraries";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

type ResultItem = {
  type: "itinerary" | "destination" | "blog";
  title: string;
  description: string;
  href: string;
  priority: number;
};

const destinations = [
  "Nairobi", "Maasai Mara", "Amboseli", "Lake Nakuru", "Lake Naivasha", "Samburu", "Buffalo Springs", "Shaba", "Mt Kenya", "Kakamega", "Tsavo West", "Tsavo East", "Lake Jipe", "Taita Hills", "Arabuko Sokoke", "Mida Creek", "Menengai", "Karura", "Gatamaiyu", "Eburru", "Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Zanzibar", "Ruaha", "Nyerere", "Mafia Island", "Kigali", "Volcanoes National Park", "Akagera", "Nyungwe", "Lake Kivu", "Entebbe", "Murchison Falls", "Kibale", "Queen Elizabeth", "Ishasha", "Bwindi", "Lake Mburo",
];

const blogs = [
  "Field Notes from East Africa",
  "Birding Seasons and Migration Windows",
  "How to Plan a Twinspot Journey",
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().toLowerCase();

  const itineraryResults: ResultItem[] = itineraries.map((item) => ({
    type: "itinerary",
    title: item.title,
    description: item.shortSummary,
    href: `/itineraries/${item.id}`,
    priority: 1,
  }));

  const destinationResults: ResultItem[] = destinations.map((name) => ({
    type: "destination",
    title: name,
    description: "Explore this East Africa destination with Twinspot.",
    href: "/destinations",
    priority: 2,
  }));

  const blogResults: ResultItem[] = blogs.map((title) => ({
    type: "blog",
    title,
    description: "Read the latest Twinspot story and planning notes.",
    href: "/blog",
    priority: 3,
  }));

  const results = query
    ? [...itineraryResults, ...destinationResults, ...blogResults]
        .filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query))
        .sort((a, b) => a.priority - b.priority)
    : [];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 1.5rem 5rem" }}>
      <p style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.75rem", color: "#8f734b" }}>Search</p>
      <h1 style={{ marginBottom: "0.5rem", fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>Find your East Africa journey</h1>
      <p style={{ color: "#5e5549" }}>Showing results for: <strong>{query || "…"}</strong></p>

      {query && results.length > 0 ? (
        <div style={{ display: "grid", gap: "1rem", marginTop: "1.6rem" }}>
          {results.map((item) => (
            <article key={`${item.type}-${item.title}`} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e6dece", padding: "1rem 1.1rem" }}>
              <small style={{ textTransform: "uppercase", color: "#8f734b", letterSpacing: "0.08em" }}>{item.type}</small>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.4rem", marginTop: "0.2rem" }}>{item.title}</h2>
              <p style={{ marginBottom: "0.7rem" }}>{item.description}</p>
              <Link href={item.href}>Open</Link>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "1.6rem", background: "#fff", border: "1px solid #e6dece", borderRadius: 14, padding: "1.2rem" }}>
          <p style={{ marginBottom: "0.6rem" }}>No results found. Try broader terms like:</p>
          <ul>
            <li>Great Migration</li>
            <li>Maasai Mara</li>
            <li>Gorilla trekking</li>
          </ul>
          <Link href="/itineraries">Browse all itineraries</Link>
        </div>
      )}
    </main>
  );
}
