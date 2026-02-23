import Navbar from "@/components/Navbar";
import { pickImageFromFolders } from "@/lib/photoPicker";
import EditorialHero from "./EditorialHero";
import TrustStrip from "./TrustStrip";
import SignatureItineraries from "./SignatureItineraries";
import BrowseByInterest from "./BrowseByInterest";
import DestinationSpotlight from "./DestinationSpotlight";
import TestimonialBlock from "./TestimonialBlock";
import NewsletterBlock from "./NewsletterBlock";
import styles from "./editorialHome.module.css";

export default function EditorialHome() {
  const itineraries = [
    {
      title: "Great Migration in Context",
      description:
        "Witness the migration with patient positioning, expert interpretation, and premium camp transitions.",
      href: "/itineraries",
      imageSrc: pickImageFromFolders({
        folders: ["wildlife"],
        seed: "itinerary-migration",
      }),
    },
    {
      title: "Highland Birding Circuit",
      description:
        "Follow endemic-rich forests and escarpments with specialist birding guides and slow-paced mornings.",
      href: "/birding",
      imageSrc: pickImageFromFolders({
        folders: ["birding"],
        seed: "itinerary-birding",
      }),
    },
    {
      title: "Family Safari Chronicle",
      description:
        "A multi-generational safari story balancing comfort, learning, and cinematic wildlife encounters.",
      href: "/custom-itineraries",
      imageSrc: pickImageFromFolders({
        folders: ["wildlife", "landscapes"],
        seed: "itinerary-family",
      }),
    },
  ];

  const interests = [
    {
      title: "Birding Expeditions",
      subtitle: "Endemics, raptors, and wetlands",
      href: "/birding",
      imageSrc: pickImageFromFolders({
        folders: ["birding"],
        seed: "interest-birding",
      }),
    },
    {
      title: "Photographic Safaris",
      subtitle: "Golden light and private game drives",
      href: "/itineraries",
      imageSrc: pickImageFromFolders({
        folders: ["wildlife"],
        seed: "interest-photo",
      }),
    },
    {
      title: "Conservation Journeys",
      subtitle: "Meaningful field access and partnerships",
      href: "/about",
      imageSrc: pickImageFromFolders({
        folders: ["landscapes", "wildlife"],
        seed: "interest-conservation",
      }),
    },
  ];

  const destinations = [
    {
      name: "Maasai Mara",
      summary:
        "Classic savannah drama with year-round predators and migration season intensity.",
      href: "/destinations",
      imageSrc: pickImageFromFolders({
        folders: ["destinations", "wildlife"],
        seed: "destination-mara",
      }),
    },
    {
      name: "Samburu",
      summary:
        "Arid north-country landscapes, rare species, and beautiful riverside lodges.",
      href: "/destinations",
      imageSrc: pickImageFromFolders({
        folders: ["destinations"],
        seed: "destination-samburu",
      }),
    },
    {
      name: "Rift Valley Lakes",
      summary:
        "A layered birding landscape of escarpments, alkaline lakes, and dramatic horizons.",
      href: "/destinations",
      imageSrc: pickImageFromFolders({
        folders: ["birding", "landscapes"],
        seed: "destination-rift",
      }),
    },
  ];

  return (
    <main className={styles.page}>
      <Navbar />
      <EditorialHero
        imageSrc={pickImageFromFolders({
          folders: ["wildlife", "landscapes"],
          seed: "homepage-hero",
        })}
      />
      <TrustStrip />
      <SignatureItineraries itineraries={itineraries} />
      <BrowseByInterest interests={interests} />
      <DestinationSpotlight destinations={destinations} />
      <TestimonialBlock />
      <NewsletterBlock />
    </main>
  );
}
