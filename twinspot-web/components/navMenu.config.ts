/* ======================================================
   NAV MENU CONFIG
   Source of truth for Navbar dropdowns & mobile menu
====================================================== */

export type MenuKey =
  | "plan"
  | "destinations"
  | "themes"
  | "guides"
  | "about";

/* ===============================
   DESKTOP MEGA MENU
================================ */

export const NAV_MENUS: Record<
  MenuKey,
  {
    title: string;
    href: string; // ✅ ADDED (SAFE)
    columns: {
      heading: string;
      links: {
        label: string;
        href: string;
      }[];
    }[];
    images: {
      src: string;
      caption: string;
    }[];
  }
> = {
  plan: {
    title: "Plan Your Trip",
    href: "/plan-your-trip",
    columns: [
      {
        heading: "Planning",
        links: [
          { label: "How We Plan", href: "/plan-your-trip" },
          { label: "Best Time to Travel", href: "/travel-guides" },
          { label: "What to Expect", href: "/travel-guides" },
        ],
      },
    ],
    images: [
      {
        src: "/nav/plan-1.jpg",
        caption: "Journeys shaped by season",
      },
      {
        src: "/nav/plan-2.jpg",
        caption: "Unhurried exploration",
      },
    ],
  },

  destinations: {
    title: "Destinations",
    href: "/destinations",
    columns: [
      {
        heading: "East Africa",
        links: [
          { label: "Kenya", href: "/destinations/kenya" },
          { label: "Uganda", href: "/destinations/uganda" },
          { label: "Tanzania", href: "/destinations/tanzania" },
        ],
      },
    ],
    images: [
      {
        src: "/nav/destinations-1.jpg",
        caption: "Wetlands and forests",
      },
      {
        src: "/nav/destinations-2.jpg",
        caption: "Savannah landscapes",
      },
    ],
  },

  themes: {
    title: "Birding Themes",
    href: "/themes",
    columns: [
      {
        heading: "Focus",
        links: [
          { label: "Endemics", href: "/themes/endemics" },
          { label: "Photography", href: "/themes/photography" },
          { label: "Migration", href: "/themes/migration" },
        ],
      },
    ],
    images: [
      {
        src: "/nav/themes-1.jpg",
        caption: "Rare species",
      },
      {
        src: "/nav/themes-2.jpg",
        caption: "Moments of stillness",
      },
    ],
  },

  guides: {
    title: "Travel Guides",
    href: "/travel-guides",
    columns: [
      {
        heading: "Resources",
        links: [
          { label: "Field Notes", href: "/blog" },
          { label: "Planning Advice", href: "/travel-guides" },
        ],
      },
    ],
    images: [
      {
        src: "/nav/guides-1.jpg",
        caption: "Field insights",
      },
      {
        src: "/nav/guides-2.jpg",
        caption: "Preparation matters",
      },
    ],
  },

  about: {
    title: "About",
    href: "/about",
    columns: [
      {
        heading: "Twinspot",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    images: [
      {
        src: "/nav/about-1.jpg",
        caption: "Our story",
      },
      {
        src: "/nav/about-2.jpg",
        caption: "People and purpose",
      },
    ],
  },
} as const;

/* ===============================
   MOBILE MENU STRUCTURE
   (UNCHANGED)
================================ */

export type MobileNode = {
  title: string;
  href?: string;
  children?: MobileNode[];
};

export const MOBILE_MENU: MobileNode[] = [
  {
    title: "Plan Your Trip",
    children: [
      { title: "How We Plan", href: "/plan-your-trip" },
      { title: "Best Time to Travel", href: "/travel-guides" },
      { title: "What to Expect", href: "/travel-guides" },
    ],
  },
  {
    title: "Destinations",
    children: [
      { title: "Kenya", href: "/destinations/kenya" },
      { title: "Uganda", href: "/destinations/uganda" },
      { title: "Tanzania", href: "/destinations/tanzania" },
    ],
  },
  {
    title: "Birding Themes",
    children: [
      { title: "Endemics", href: "/themes/endemics" },
      { title: "Photography", href: "/themes/photography" },
      { title: "Migration", href: "/themes/migration" },
    ],
  },
  {
    title: "Travel Guides",
    children: [
      { title: "Field Notes", href: "/blog" },
      { title: "Planning Advice", href: "/travel-guides" },
    ],
  },
  {
    title: "About",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
];
