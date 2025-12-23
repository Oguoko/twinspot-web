export default function DestinationSchema({ destination }: { destination: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.title,
    description: destination.summary,
    touristType: "Birdwatching",
    geo: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: destination.country,
        addressRegion: destination.region,
      },
    },
    url: `https://twinspottoursandtravel.com/destinations/${destination.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
