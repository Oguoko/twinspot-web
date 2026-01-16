/* ======================================================
   NAV MENU CONFIG
====================================================== */

export type MenuKey =
  | "plan"
  | "destinations"
  | "tours"
  | "about";

/* ===============================
   DESKTOP MEGA MENU
================================ */

export const NAV_MENUS: Record<
  MenuKey,
  {
    title: string;
    href?: string; // optional because main links are NOT clickable
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
          { label: "How We Plan", href: "/plan-your-trip" },
          { label: "Best Time to Travel", href: "/travel-guides" },
          { label: "What to Expect", href: "/travel-guides" },
        ],
      },
    ],
    images: [
      { src: "/nav/plan-1.jpg", caption: "Journeys shaped by season" },
      { src: "/nav/plan-2.jpg", caption: "Unhurried exploration" },
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
      { src: "/nav/destinations-1.jpg", caption: "Wetlands and forests" },
      { src: "/nav/destinations-2.jpg", caption: "Savannah landscapes" },
    ],
  },

  tours: {
    title: "Tours",
    columns: [
      {
        heading: "Experiences",
        links: [
          { label: "Birding Tours in Kenya", href: "/tours/birding-kenya" },
          { label: "Wildlife Safaris", href: "/tours/wildlife-safaris" },
          { label: "Bird Photography Tours", href: "/tours/bird-photography" },
          { label: "Camping Tours", href: "/tours/camping" },
          { label: "Mountaineering Tours", href: "/tours/mountaineering" },
          { label: "Great Migration", href: "/tours/great-migration" },
          { label: "Team Building Tours", href: "/tours/team-building" },
        ],
      },
    ],
    images: [
      { src: "/nav/themes-1.jpg", caption: "Purposeful journeys" },
      { src: "/nav/themes-2.jpg", caption: "Adventure with intent" },
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
      { src: "/nav/about-1.jpg", caption: "People and purpose" },
      { src: "/nav/about-2.jpg", caption: "Travel done right" },
    ],
  },
} as const;

/* ===============================
   MOBILE MENU
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
      { title: "Tanzania", href: "/destinations/tanzania" },
      { title: "Uganda", href: "/destinations/uganda" },
      { title: "Rwanda", href: "/destinations/rwanda" },
    ],
  },
  {
    title: "Tours",
    children: [
      { title: "Birding Tours in Kenya", href: "/tours/birding-kenya" },
      { title: "Wildlife Safaris", href: "/tours/wildlife-safaris" },
      { title: "Bird Photography Tours", href: "/tours/bird-photography" },
      { title: "Camping Tours", href: "/tours/camping" },
      { title: "Mountaineering Tours", href: "/tours/mountaineering" },
      { title: "Great Migration", href: "/tours/great-migration" },
      { title: "Team Building Tours", href: "/tours/team-building" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
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
