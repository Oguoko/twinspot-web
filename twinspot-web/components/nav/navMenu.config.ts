/* ======================================================
   NAV MENU CONFIG
   Shared between desktop mega-nav and mobile drill-down
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
    columns: [
      {
        heading: "Planning",
        links: [
          { label: "How We Plan", href: "/plan-your-trip/how-we-plan" },
          { label: "Best Time to Travel", href: "/plan-your-trip/best-time-to-travel" },
          { label: "What to Expect", href: "/plan-your-trip/what-to-expect" },
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
    columns: [
      {
        heading: "East Africa",
        links: [
          { label: "Kenya", href: "/destinations/kenya" },
          { label: "Tanzania", href: "/destinations/tanzania" },
          { label: "Uganda", href: "/destinations/uganda" },
          { label: "Rwanda", href: "/destinations/rwanda" },
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
    columns: [
      {
        heading: "Twinspot",
        links: [
          { label: "Our Transport", href: "/about/transport" },
          { label: "Our Guides", href: "/about/guides" },
          { label: "Travel Tips", href: "/about/travel-tips" },
          { label: "Why Us", href: "/about/why-us" },
          { label: "Terms & Conditions", href: "/terms" },
          { label: "FAQ", href: "/faq" },
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
};

/* ===============================
   MOBILE MENU STRUCTURE
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
      { title: "How We Plan", href: "/plan-your-trip/how-we-plan" },
      { title: "Best Time to Travel", href: "/plan-your-trip/best-time-to-travel" },
      { title: "What to Expect", href: "/plan-your-trip/what-to-expect" },
    ],
  },
  {
    title: "Destinations",
    children: [
      { title: "Kenya", href: "/destinations/kenya" },
      { title: "Tanzania", href: "/destinations/tanzania" },
      { title: "Uganda", href: "/destinations/uganda" },
      { title: "Rwanda", href: "/destinations/rwanda" },
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
      { title: "Our Transport", href: "/about/transport" },
      { title: "Our Guides", href: "/about/guides" },
      { title: "Travel Tips", href: "/about/travel-tips" },
      { title: "Why Us", href: "/about/why-us" },
      { title: "Terms & Conditions", href: "/terms" },
      { title: "FAQ", href: "/faq" },
    ],
  },
];
