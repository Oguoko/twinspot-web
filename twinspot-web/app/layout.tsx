import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.twinspot.co.ke"),
  title: {
    default: "Twinspot Tours & Travel | Birding Safaris Across East Africa",
    template: "%s | Twinspot Tours & Travel",
  },
  description:
    "Thoughtfully guided birding safaris across East Africa, designed for birders who value depth, ethics, and wild places.",
  openGraph: {
    type: "website",
    siteName: "Twinspot Tours & Travel",
    title: "Twinspot Tours & Travel",
    description:
      "Birding safaris and field notes from East Africa’s richest habitats.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Twinspot Tours & Travel – Birding Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twinspot Tours & Travel",
    description:
      "Birding safaris and field notes from East Africa’s richest habitats.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
