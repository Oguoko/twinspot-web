/* ======================================================
   NAV MENU CONFIG
   Shared between desktop mega-nav and mobile drill-down
====================================================== */

export type MenuKey = "destinations" | "tours" | "about";

export type CenterNavItem = {
  label: string;
  href: string;
  menuKey?: MenuKey;
};

export const CENTER_NAV_ITEMS: CenterNavItem[] = [
  { label: "About Us", href: "/about", menuKey: "about" },
  { label: "Destinations", href: "/destinations", menuKey: "destinations" },
  { label: "Tours", href: "/itineraries", menuKey: "tours" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

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
      caption: string;
    }[];
  }
> = {
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
    images: [{ caption: "Wetlands and forests" }, { caption: "Savannah landscapes" }],
  },

  tours: {
    title: "Tours",
    columns: [
      {
        heading: "Experiences",
        links: [
          { label: "Itineraries", href: "/itineraries" },
          { label: "Birding Tours in Kenya", href: "/birding-tours-kenya" },
          { label: "Bird Photography Tours", href: "/bird-photography-tours" },
          { label: "Wildlife Safaris in Kenya", href: "/wildlife-safaris-kenya" },
          { label: "Great Migration", href: "/great-migration" },
          { label: "Camping Tours", href: "/camping-tours" },
          { label: "Mountaineering Tours", href: "/mountaineering-tours" },
          { label: "Team Building Tours", href: "/team-building-tours" },
        ],
      },
    ],
    images: [{ caption: "Purposeful journeys" }, { caption: "Adventure with intent" }],
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
    images: [{ caption: "People and purpose" }, { caption: "Travel done right" }],
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
  { title: "About Us", href: "/about" },
  { title: "Destinations", href: "/destinations" },
  {
    title: "Tours",
    children: [
      { title: "Itineraries", href: "/itineraries" },
      { title: "Birding Tours in Kenya", href: "/birding-tours-kenya" },
      { title: "Bird Photography Tours", href: "/bird-photography-tours" },
      { title: "Wildlife Safaris in Kenya", href: "/wildlife-safaris-kenya" },
      { title: "Great Migration", href: "/great-migration" },
      { title: "Camping Tours", href: "/camping-tours" },
      { title: "Mountaineering Tours", href: "/mountaineering-tours" },
      { title: "Team Building Tours", href: "/team-building-tours" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];
