export default function ArticleSchema({ post }: { post: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "Twinspot Tours & Travel",
    },
    publisher: {
      "@type": "Organization",
      name: "Twinspot Tours & Travel",
      logo: {
        "@type": "ImageObject",
        url: "https://twinspottoursandtravel.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://twinspottoursandtravel.com/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
