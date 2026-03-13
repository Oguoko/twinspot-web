"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { itineraries } from "@/lib/itineraries/itineraries";
import { CENTER_NAV_ITEMS, NAV_MENUS, MenuKey } from "./navMenu.config";
import styles from "./siteHeader.module.css";

type Props = { variant?: "sticky" | "overlay" };

type SearchResult = {
  type: "itinerary" | "destination" | "blog";
  title: string;
  href: string;
  priority: number;
};

const destinationSearchPool: SearchResult[] = [
  "Nairobi", "Maasai Mara", "Amboseli", "Lake Nakuru", "Lake Naivasha", "Samburu", "Buffalo Springs", "Shaba", "Mount Kenya", "Kakamega", "Tsavo East", "Tsavo West", "Arabuko Sokoke", "Mida Creek", "Taita Hills", "Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Zanzibar", "Ruaha", "Nyerere", "Mafia Island", "Kigali", "Volcanoes National Park", "Akagera", "Nyungwe", "Lake Kivu", "Entebbe", "Murchison Falls", "Kibale", "Queen Elizabeth", "Bwindi", "Lake Mburo",
].map((name) => ({ type: "destination", title: name, href: "/destinations", priority: 2 }));

const blogSearchPool: SearchResult[] = [
  { type: "blog", title: "Field Notes from East Africa", href: "/blog", priority: 3 },
  { type: "blog", title: "Birding Seasons & Migration Windows", href: "/blog", priority: 3 },
  { type: "blog", title: "Planning Your Twinspot Safari", href: "/blog", priority: 3 },
];

export default function SiteHeader({ variant = "sticky" }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState<MenuKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const itineraryPool: SearchResult[] = useMemo(
    () =>
      itineraries.map((item) => ({
        type: "itinerary",
        title: item.title,
        href: `/itineraries/${item.id}`,
        priority: 1,
      })),
    [],
  );

  const quickResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return [...itineraryPool, ...destinationSearchPool, ...blogSearchPool]
      .filter((item) => item.title.toLowerCase().includes(q))
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 8);
  }, [query, itineraryPool]);

  function submitSearch(event?: FormEvent) {
    event?.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setSearchOpen(false);
    setMenuOpen(false);
  }

  function closeOverlays() {
    setMenuOpen(false);
    setSubmenu(null);
  }

  return (
    <>
      <header className={`${styles.header} ${variant === "overlay" ? styles.overlay : styles.sticky}`}>
        <div className={styles.shell}>
          <Link href="/" className={styles.brand} onClick={closeOverlays}>
            <Image src="/photos/logos-and-icons/logo (1).png" alt="Twinspot" className={styles.logoMark} width={46} height={46} />
            <span className={styles.brandText}>
              <strong>Twinspot</strong>
              <small>Tours</small>
            </span>
          </Link>

          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Open search" onClick={() => setSearchOpen(true)}>
              ⌕
            </button>
            <button
              className={styles.iconButton}
              aria-label="Open menu"
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setSubmenu(null);
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.overlayPanel} role="dialog" aria-modal="true">
          <div className={styles.overlayTop}>
            <button className={styles.backButton} onClick={() => setSubmenu(null)} disabled={!submenu}>
              ← Back
            </button>
            <button className={styles.closeButton} onClick={closeOverlays}>
              ✕
            </button>
          </div>

          <div className={styles.menuBody}>
            {!submenu ? (
              <nav className={styles.mainMenu}>
                {CENTER_NAV_ITEMS.map((item) =>
                  item.menuKey ? (
                    <button key={item.label} className={styles.menuItem} onClick={() => setSubmenu(item.menuKey!)}>
                      {item.label}
                      <span>→</span>
                    </button>
                  ) : (
                    <Link key={item.label} href={item.href} className={styles.menuItem} onClick={closeOverlays}>
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            ) : (
              <div className={styles.submenuWrap}>
                <h3>{NAV_MENUS[submenu].title}</h3>
                {NAV_MENUS[submenu].columns.map((column) => (
                  <div key={column.heading} className={styles.submenuColumn}>
                    <p>{column.heading}</p>
                    {column.links.map((link) => (
                      <Link key={link.href} href={link.href} className={styles.submenuLink} onClick={closeOverlays}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className={styles.searchPanel} role="dialog" aria-modal="true">
          <div className={styles.searchHeader}>
            <h2>Search Twinspot</h2>
            <button className={styles.closeButton} onClick={() => setSearchOpen(false)}>
              ✕
            </button>
          </div>
          <form onSubmit={submitSearch} className={styles.searchForm}>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search itineraries, destinations, and stories"
              autoFocus
            />
            <button type="submit">Search</button>
          </form>
          <div className={styles.results}>
            {quickResults.length > 0 ? (
              quickResults.map((item) => (
                <Link key={`${item.type}-${item.title}`} href={item.href} onClick={() => setSearchOpen(false)} className={styles.resultItem}>
                  <span>{item.title}</span>
                  <small>{item.type}</small>
                </Link>
              ))
            ) : (
              <p className={styles.empty}>Type to begin searching across journeys, destinations, and the journal.</p>
            )}
            {pathname !== "/search" && query.trim() && (
              <Link href={`/search?q=${encodeURIComponent(query.trim())}`} onClick={() => setSearchOpen(false)} className={styles.viewAll}>
                View all search results
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
