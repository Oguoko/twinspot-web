export type ItineraryCategory = "day-trips" | "safari" | "birding" | "gorilla" | "multi-country";

export type ItineraryDay = {
  dayLabel: string;
  location: string;
  details: string;
};

export type Itinerary = {
  id: string;
  title: string;
  category: ItineraryCategory;
  duration: string;
  start?: string;
  end?: string;
  shortSummary: string;
  highlights: string[];
  itineraryBreakdown: ItineraryDay[];
  suggestedPhotoCategories: string[];
};

export const itineraries: Itinerary[] = [
  {
    id: "day-trips-nairobi-nearby",
    title: "Day Trips (Nairobi & nearby)",
    category: "day-trips",
    duration: "Flexible day excursions",
    shortSummary:
      "Day trips around Nairobi and its vicinity, typically 2–3 hours driving for hiking or birding; includes popular Nairobi attractions and nearby hikes.",
    highlights: [
      "Gatamaiyu Forest",
      "Karura Forest",
      "Ngong Hills",
      "Lukenya Hills",
      "Mt. Longonot",
      "Ol Donyo Orok",
      "Mt. Suswa",
      "Otutu Hills (Elementaita)",
      "Ol Donyo Sabuk",
      "Oloroka Mountains",
      "Elephant Hills (Aberdares)",
      "Olorgesaille Mountains",
      "Table Mountain",
      "Kinale Hills",
      "Eburru Forest",
      "Irangi Forest",
      "Menengai Crater",
    ],
    itineraryBreakdown: [
      {
        dayLabel: "Option 1",
        location: "Nairobi forest and hill circuits",
        details:
          "Pick a curated hiking or birding day route around Nairobi with 2–3 hours transfer time, balancing trail effort, bird activity windows, and scenic rest points.",
      },
      {
        dayLabel: "Option 2",
        location: "Great Rift viewpoints and crater trails",
        details:
          "Explore selected routes such as Mt. Longonot, Menengai Crater, or Eburru Forest for panoramic views, guided nature interpretation, and flexible pacing.",
      },
      {
        dayLabel: "Option 3",
        location: "Custom private day plan",
        details:
          "Combine popular Nairobi attractions and nearby hikes into a private day experience focused on hiking, birding, photography, or family-friendly outdoor discovery.",
      },
    ],
    suggestedPhotoCategories: ["birding", "landscapes", "destinations"],
  },
  {
    id: "7-days-amboseli-lake-nakuru-maasai-mara-safari",
    title: "7 Days Amboseli – Lake Nakuru – Maasai Mara Safari",
    category: "safari",
    duration: "6 nights / 7 days",
    start: "Nairobi",
    end: "Nairobi",
    shortSummary:
      "A classic Kenya circuit linking elephant-rich Amboseli, urban wildlife encounters in Nairobi National Park, and iconic game viewing in Maasai Mara.",
    highlights: [
      "Amboseli views with Mt. Kilimanjaro backdrop",
      "Optional/planned Maasai village cultural visit",
      "Nairobi National Park game drive",
      "Big cat and plains game experiences in Maasai Mara",
    ],
    itineraryBreakdown: [
      {
        dayLabel: "Day 1",
        location: "Nairobi → Amboseli National Park",
        details:
          "Depart Nairobi and transfer to Amboseli for check-in, followed by an introductory game drive depending on arrival time.",
      },
      {
        dayLabel: "Day 2",
        location: "Explore Amboseli National Park",
        details:
          "Spend the day tracking elephants and other plains wildlife with optional/planned Maasai village visit as part of the experience.",
      },
      {
        dayLabel: "Day 3",
        location: "Amboseli → Nairobi",
        details:
          "Morning activity and scenic transfer back to Nairobi for overnight and preparation for the next safari segment.",
      },
      {
        dayLabel: "Day 4",
        location: "Explore Nairobi National Park",
        details:
          "Enjoy a dedicated game-viewing day in Nairobi National Park with city skyline contrasts and accessible wildlife photography.",
      },
      {
        dayLabel: "Day 5",
        location: "Nairobi → Maasai Mara National Reserve",
        details:
          "Travel to Maasai Mara and settle in before an afternoon game drive in one of East Africa’s most productive safari ecosystems.",
      },
      {
        dayLabel: "Day 6",
        location: "Discover Maasai Mara Game Reserve",
        details:
          "Full-day exploration of Mara habitats with chances for big cats, herbivore herds, and birdlife in open savannah landscapes.",
      },
      {
        dayLabel: "Day 7",
        location: "Maasai Mara → Nairobi",
        details:
          "Final early activity and return transfer to Nairobi for trip wrap-up or onward arrangements.",
      },
    ],
    suggestedPhotoCategories: ["wildlife", "landscapes", "vehicles", "accommodation"],
  },
  {
    id: "kenya-tanzania-wildlife-safari-12-days-birds-beasts",
    title: "Kenya – Tanzania Wildlife Safari (12 Days Birds & Beasts Tour)",
    category: "multi-country",
    duration: "12 days",
    start: "Nairobi",
    end: "Nairobi (JKIA)",
    shortSummary:
      "An immersive cross-border expedition through Kenya and Tanzania, combining premier wildlife reserves, crater ecosystems, and major migration landscapes.",
    highlights: [
      "Lake Nakuru and Maasai Mara wildlife",
      "Serengeti via Isebania border crossing",
      "Olduvai Gorge transit to Ngorongoro",
      "Tarangire and Amboseli finale before Nairobi return",
    ],
    itineraryBreakdown: [
      { dayLabel: "Day 1", location: "Nairobi → Lake Nakuru", details: "Depart Nairobi for Lake Nakuru with afternoon orientation and game viewing in the park area." },
      { dayLabel: "Day 2", location: "Nakuru → Maasai Mara", details: "Continue overland to Maasai Mara and settle into camp/lodge for your first Mara wildlife session." },
      { dayLabel: "Day 3", location: "Maasai Mara", details: "Full-day Maasai Mara game drives focused on birds, predators, and large herbivore movements." },
      { dayLabel: "Day 4", location: "Maasai Mara", details: "Second dedicated Mara day allowing broader sector coverage and photography at peak wildlife times." },
      { dayLabel: "Day 5", location: "Maasai Mara → Serengeti (via Isebania border)", details: "Cross into Tanzania through Isebania and proceed into the Serengeti ecosystem." },
      { dayLabel: "Day 6", location: "Serengeti National Park", details: "Full Serengeti exploration day with varied habitats and classic East African plains wildlife." },
      { dayLabel: "Day 7", location: "Serengeti → Ngorongoro (via Olduvai Gorge)", details: "Transfer toward Ngorongoro with a route passing through/near the Olduvai Gorge area." },
      { dayLabel: "Day 8", location: "Ngorongoro Crater", details: "Descend into Ngorongoro Crater for concentrated game viewing and highland scenery." },
      { dayLabel: "Day 9", location: "Ngorongoro → Tarangire", details: "Drive to Tarangire and begin exploring riverine and baobab-rich landscapes." },
      { dayLabel: "Day 10", location: "Tarangire National Park", details: "Dedicated Tarangire game drives focusing on elephants, predators, and birdlife." },
      { dayLabel: "Day 11", location: "Tarangire → Amboseli (Kenya)", details: "Cross back toward Kenya and continue to Amboseli for overnight and evening relaxation." },
      { dayLabel: "Day 12", location: "Amboseli → Nairobi (JKIA)", details: "Final transfer to Nairobi with drop-off at JKIA or arranged city endpoint." },
    ],
    suggestedPhotoCategories: ["wildlife", "birding", "landscapes", "destinations"],
  },
  {
    id: "gorilla-trekking-3-nights-4-days-rwanda",
    title: "Gorilla Trekking (3 Nights / 4 Days Rwanda)",
    category: "gorilla",
    duration: "3 nights / 4 days",
    start: "Kigali",
    end: "Kigali",
    shortSummary:
      "A focused Rwanda gorilla program pairing Kigali heritage experiences with Volcanoes National Park trekking logistics.",
    highlights: [
      "Arrival and city-based orientation in Kigali",
      "Genocide museum and Kigali city tour",
      "Volcanoes National Park gorilla trekking day",
      "Convenient return/departure via Kigali",
    ],
    itineraryBreakdown: [
      {
        dayLabel: "Day 1",
        location: "Kigali (arrival, transfer to hotel)",
        details: "Arrive in Kigali, meet the team, and transfer to your hotel for rest and pre-trek briefing.",
      },
      {
        dayLabel: "Day 2",
        location: "Kigali → Volcanoes National Park",
        details:
          "City touring including genocide museum visit, then drive onward to Volcanoes National Park area for overnight.",
      },
      {
        dayLabel: "Day 3",
        location: "Volcanoes National Park (Gorilla Trek)",
        details:
          "Early transfer for permit allocation and guided gorilla trek with post-trek return to lodge.",
      },
      {
        dayLabel: "Day 4",
        location: "Depart",
        details: "Transfer out for onward travel or international departure.",
      },
    ],
    suggestedPhotoCategories: ["wildlife", "landscapes", "destinations"],
  },
  {
    id: "10-days-uganda-highlights-safari",
    title: "10 Days Uganda Highlights Safari",
    category: "gorilla",
    duration: "10 days",
    start: "Entebbe",
    end: "Entebbe",
    shortSummary:
      "A Uganda primates-and-wildlife circuit spanning major parks, chimp habitats, mountain gorillas, and a Lake Mburo finale.",
    highlights: [
      "Destinations: Murchison Falls, Kibale Forest, Queen Elizabeth, Ishasha, Bwindi, Lake Mburo",
      "Activities: Game drives, boat rides, chimpanzee tracking, Gorilla trekking, Bigodi swamp, nature walk, crater visits",
      "Scenic transitions across savannah, wetlands, and forested highlands",
      "Balanced adventure with guided interpretation and flexible pacing",
    ],
    itineraryBreakdown: [
      { dayLabel: "Day 1", location: "Entebbe → Murchison Falls", details: "Begin the overland journey north with en-route stops and arrival in the Murchison Falls region." },
      { dayLabel: "Day 2", location: "Murchison Falls National Park", details: "Morning game drive and boat ride segment for wildlife and river-edge birding experiences." },
      { dayLabel: "Day 3", location: "Murchison Falls → Kibale Forest", details: "Transfer south-west toward Kibale with scenic community and countryside transitions." },
      { dayLabel: "Day 4", location: "Kibale Forest & Bigodi", details: "Chimpanzee tracking in Kibale followed by Bigodi swamp walk and optional nature walk." },
      { dayLabel: "Day 5", location: "Kibale → Queen Elizabeth", details: "Travel to Queen Elizabeth area with crater visits and evening wildlife viewing opportunities." },
      { dayLabel: "Day 6", location: "Queen Elizabeth → Ishasha → Bwindi", details: "Game drive and transfer through Ishasha sector before continuing toward Bwindi." },
      { dayLabel: "Day 7", location: "Bwindi Impenetrable Forest", details: "Gorilla trekking day in Bwindi with guided forest briefing and post-trek relaxation." },
      { dayLabel: "Day 8", location: "Bwindi → Lake Mburo", details: "Proceed to Lake Mburo for a lighter-paced segment with optional sunset activity." },
      { dayLabel: "Day 9", location: "Lake Mburo", details: "Morning game viewing, boat option, and guided nature walk before departure preparations." },
      { dayLabel: "Day 10", location: "Lake Mburo → Entebbe (departure)", details: "Return to Entebbe for trip close-out and onward international departure." },
    ],
    suggestedPhotoCategories: ["wildlife", "birding", "landscapes", "destinations"],
  },
];

export const itineraryCategoryLabels: Record<ItineraryCategory, string> = {
  "day-trips": "Day Trips",
  safari: "Safaris",
  birding: "Birding",
  gorilla: "Gorilla / Primates",
  "multi-country": "Multi-country",
};

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.id === slug);
}
