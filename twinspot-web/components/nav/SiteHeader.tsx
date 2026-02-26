"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PHOTO_MANIFEST } from "@/lib/photoManifest";
import styles from "./siteHeader.module.css";

import {
  CENTER_NAV_ITEMS,
  NAV_MENUS,
  MenuKey,
  MOBILE_MENU,
  MobileNode,
} from "./navMenu.config";

type Props = {
  variant?: "sticky" | "overlay";
};

type MenuLink = {
  label: string;
  href: string;
};

type MenuColumn = {
  heading: string;
  links: MenuLink[];
};

type NavImage = {
  caption: string;
  src: string;
};

const HAS_SEARCH_ROUTE = false;

const NAV_IMAGE_FOLDERS: Record<MenuKey, string[]> = {
  destinations: ["destinations", "landscapes"],
  tours: ["birding", "wildlife", "landscapes"],
  about: ["landscapes", "partners-and-association"],
};

const DEFAULT_FALLBACK = ["wildlife", "birding", "landscapes"];

function hashSeed(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function selectPhotoPath(folders: string[], seed: string): string {
  const pool: string[] = [];

  for (const folder of [...folders, ...DEFAULT_FALLBACK]) {
    const files = PHOTO_MANIFEST[folder as keyof typeof PHOTO_MANIFEST] ?? [];
    for (const file of files) {
      pool.push(`/photos/${folder}/${encodeURIComponent(file)}`);
    }
  }

  if (pool.length === 0) {
    return "/hero.jpg";
  }

  return pool[hashSeed(seed) % pool.length];
}

export default function SiteHeader({ variant = "sticky" }: Props) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [stack, setStack] = useState<MobileNode[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const menu = openMenu ? NAV_MENUS[openMenu] : null;

  const selectedImages = useMemo(() => {
    if (!openMenu) {
      return [] as NavImage[];
    }

    const captions = NAV_MENUS[openMenu].images.map((img) => img.caption).slice(0, 2);
    const safeCaptions = captions.length === 2 ? captions : ["Curated journeys", "Editorial moments"];
    const folders = NAV_IMAGE_FOLDERS[openMenu] ?? DEFAULT_FALLBACK;

    return safeCaptions.map((caption, i): NavImage => ({
      caption,
      src: selectPhotoPath(folders, `nav-${openMenu}-${i}`),
    }));
  }, [openMenu]);

  const current = stack[stack.length - 1];
  const items = current?.children ?? MOBILE_MENU;

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
    if (!HAS_SEARCH_ROUTE) {
      event.preventDefault();
      console.log("Search route is not configured yet.");
    }
  }

  function openNode(node: MobileNode) {
    if (node.children) {
      setStack([...stack, node]);
    }
  }

  function goBack() {
    setStack(stack.slice(0, -1));
  }

  function closeMobile() {
    setMobileOpen(false);
    setStack([]);
  }

  return (
    <>
      <header className={`${styles.header} ${variant === "overlay" ? styles.overlay : styles.sticky}`}>
        <div className={styles.inner} ref={menuRef}>
          <Link href="/" className={styles.logo} aria-label="Twinspot home">
            <img
              src="/photos/logos-and-icons/logo (1).png"
              alt="Twinspot logo"
              className={styles.logoMark}
            />
            <span className={styles.logoText}>Twinspot</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {CENTER_NAV_ITEMS.map((item) =>
              item.menuKey ? (
                <button
                  key={item.label}
                  type="button"
                  className={styles.navItem}
                  onMouseEnter={() => {
                    setActiveImage(0);
                    setOpenMenu(item.menuKey ?? null);
                  }}
                  onClick={() => {
                    setActiveImage(0);
                    setOpenMenu(openMenu === item.menuKey ? null : item.menuKey ?? null);
                  }}
                >
                  {item.label}
                  <span className={styles.chevron}>▾</span>
                </button>
              ) : (
                <Link key={item.label} href={item.href} className={styles.navLink} onMouseEnter={() => setOpenMenu(null)}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className={styles.actions}>
            <form className={styles.searchForm} action="/search" method="get" onSubmit={onSearchSubmit}>
              <button type="submit" className={styles.searchBtn} aria-label="Search">
                🔍
              </button>
              <input
                type="search"
                name="q"
                placeholder="Search trips…"
                aria-label="Search"
                className={styles.searchInput}
              />
            </form>

            <Link href="/contact" className={styles.bookNowBtn}>
              Book Now
            </Link>

            <button type="button" className={styles.menuBtn} onClick={() => setMobileOpen(true)}>
              Menu
            </button>
          </div>
        </div>

        {menu && (
          <div className={styles.dropdown} onMouseLeave={() => setOpenMenu(null)}>
            <div className={styles.dropdownInner}>
              <div className={styles.dropdownText}>
                {menu.columns.map((col: MenuColumn, cIdx: number) => (
                  <div className={styles.column} key={cIdx}>
                    <h4>{col.heading}</h4>

                    {col.links.map((link: MenuLink, i: number) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={styles.dropdownLink}
                        onMouseEnter={() => setActiveImage(i % menu.images.length)}
                      >
                        <span className={styles.highlight} />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}

                <div className={styles.miniLinks}>
                  <Link href="/sustainability">Sustainability</Link>
                  <Link href="/charity">Charity</Link>
                  <Link href="/partners">Sponsors</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div className={styles.imagePanel}>
                {selectedImages.map((img, i) => (
                  <div
                    key={`${openMenu}-${i}`}
                    className={`${styles.imageCard} ${activeImage === i ? styles.active : styles.inactive}`}
                  >
                    <img src={img.src} alt={img.caption} />
                    <span>{img.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            {stack.length > 0 ? (
              <button type="button" className={styles.mobileHeaderBtn} onClick={goBack}>
                ← Back
              </button>
            ) : (
              <span />
            )}
            <button type="button" className={styles.mobileHeaderBtn} onClick={closeMobile}>
              ✕
            </button>
          </div>

          <div className={styles.mobileLinks}>
            {items.map((item) =>
              item.children ? (
                <button
                  key={item.title}
                  type="button"
                  className={styles.mobilePrimary}
                  onClick={() => openNode(item)}
                >
                  {item.title}
                  <span>→</span>
                </button>
              ) : (
                <Link
                  key={item.title}
                  href={item.href!}
                  className={styles.mobilePrimary}
                  onClick={closeMobile}
                >
                  {item.title}
                </Link>
              ),
            )}

            <div className={styles.mobileActions}>
              <button type="button" className={styles.mobileSearchBtn} aria-label="Search">
                🔍 Search
              </button>
              <Link href="/contact" className={styles.mobileBookNowBtn} onClick={closeMobile}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
