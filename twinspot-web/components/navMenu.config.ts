export type TopNavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV_ITEMS: TopNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export type ToursSubmenuItem = {
  label: string;
  href: string;
};

export const TOURS_SUBMENU_ITEMS: ToursSubmenuItem[] = [
  { label: "Itineraries", href: "/itineraries" },
];

export type MobileNode = {
  title: string;
  href?: string;
  children?: MobileNode[];
};

export const MOBILE_MENU: MobileNode[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Destinations", href: "/destinations" },
  {
    title: "Tours",
    children: [{ title: "Itineraries", href: "/itineraries" }],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];
