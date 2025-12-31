export type MenuKey = "plan" | "things" | "places" | "events";

/* ================= DESKTOP MENUS ================= */

export const NAV_MENUS: Record<MenuKey, any> = {
  plan: {
    title: "Plan Your Trip",
    columns: [
      {
        heading: "Birding & Photography",
        links: [
          { label: "Birding Tours", href: "/tours/birding" },
          { label: "Photography Tours", href: "/tours/photography" },
          { label: "Small Group Expeditions", href: "/tours/small-group" },
          { label: "Private Guided Trips", href: "/tours/private" },
          { label: "Migration Safaris", href: "/tours/migration" },
        ],
      },
      {
        heading: "Destinations",
        links: [
          { label: "Uganda", href: "/destinations/uganda" },
          { label: "Kenya", href: "/destinations/kenya" },
          { label: "Tanzania", href: "/destinations/tanzania" },
          { label: "Rwanda (Gorillas)", href: "/destinations/rwanda" },
        ],
      },
    ],
    images: [
      { src: "/menu/birding-1.jpg", caption: "Walking in a Winter Wonderland" },
      { src: "/menu/birding-2.jpg", caption: "No Hibernation Necessary" },
    ],
  },

  things: {
    title: "Things To Do",
    columns: [
      {
        heading: "Birding Calendar",
        links: [
          { label: "Migration Seasons", href: "/calendar/migration" },
          { label: "Birding Festivals", href: "/calendar/festivals" },
          { label: "Peak Sightings", href: "/calendar/sightings" },
        ],
      },
      {
        heading: "Learning",
        links: [
          { label: "Guided Workshops", href: "/learning/workshops" },
          { label: "Photography Clinics", href: "/learning/photography" },
        ],
      },
    ],
    images: [
      { src: "/menu/things-1.jpg", caption: "Your Guide to Snowshoeing Trails" },
      { src: "/menu/things-2.jpg", caption: "Shop and Explore Dickerson Road" },
    ],
  },

  places: {
    title: "Places To Stay",
    columns: [
      {
        heading: "Safari Lodges",
        links: [
          { label: "Birding Lodges", href: "/lodges/birding" },
          { label: "Eco Camps", href: "/lodges/eco" },
          { label: "Mobile Camps", href: "/lodges/mobile" },
        ],
      },
      {
        heading: "Regions",
        links: [
          { label: "Albertine Rift", href: "/regions/albertine-rift" },
          { label: "Serengeti", href: "/regions/serengeti" },
          { label: "Masai Mara", href: "/regions/masai-mara" },
        ],
      },
    ],
    images: [
      { src: "/menu/stay-1.jpg", caption: "Lodges Deep in Nature" },
      { src: "/menu/stay-2.jpg", caption: "Remote & Intimate Camps" },
    ],
  },

  events: {
    title: "Events",
    columns: [
      {
        heading: "Seasonal Highlights",
        links: [
          { label: "Birding Events", href: "/events/birding" },
          { label: "Photography Meetups", href: "/events/photography" },
        ],
      },
    ],
    images: [
      { src: "/menu/events-1.jpg", caption: "Birding Festivals" },
      { src: "/menu/events-2.jpg", caption: "Conservation Talks" },
    ],
  },
};

/* ================= MOBILE DRILL-DOWN ================= */

export type MobileNode = {
  title: string;
  href?: string;
  children?: MobileNode[];
};

export const MOBILE_MENU: MobileNode[] = [
  {
    title: "Plan Your Trip",
    children: [
      {
        title: "Destinations",
        children: [
          { title: "Uganda", href: "/destinations/uganda" },
          { title: "Kenya", href: "/destinations/kenya" },
          { title: "Tanzania", href: "/destinations/tanzania" },
          { title: "Rwanda (Gorillas)", href: "/destinations/rwanda" },
        ],
      },
      {
        title: "Birding & Photography",
        children: [
          { title: "Birding Tours", href: "/tours/birding" },
          { title: "Photography Tours", href: "/tours/photography" },
          { title: "Small Group Expeditions", href: "/tours/small-group" },
          { title: "Migration Safaris", href: "/tours/migration" },
        ],
      },
    ],
  },

  {
    title: "Things To Do",
    children: [
      { title: "Migration Seasons", href: "/calendar/migration" },
      { title: "Birding Festivals", href: "/calendar/festivals" },
      { title: "Workshops", href: "/learning/workshops" },
    ],
  },

  {
    title: "Places To Stay",
    children: [
      { title: "Birding Lodges", href: "/lodges/birding" },
      { title: "Eco Camps", href: "/lodges/eco" },
      { title: "Mobile Camps", href: "/lodges/mobile" },
    ],
  },

  {
    title: "Events",
    children: [
      { title: "Birding Events", href: "/events/birding" },
      { title: "Photography Meetups", href: "/events/photography" },
    ],
  },
];