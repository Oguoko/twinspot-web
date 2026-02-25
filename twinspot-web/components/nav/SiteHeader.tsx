"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PHOTO_MANIFEST } from "@/lib/photoManifest";
import styles from "./siteHeader.module.css";

import {
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

const NAV_IMAGE_FOLDERS: Record<MenuKey, string[]> = {
  plan: ["landscapes", "destinations"],
  destinations: ["destinations", "landscapes"],
  themes: ["birding"],
  guides: ["birding", "landscapes"],
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

  function openNode(node: MobileNode) {
    if (node.children) setStack([...stack, node]);
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
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Twinspot
          </Link>

          <nav className={styles.nav}>
            {(Object.keys(NAV_MENUS) as MenuKey[]).map((key) => (
              <button
                key={key}
                className={styles.navItem}
                onClick={() => {
                  setActiveImage(0);
                  setOpenMenu(openMenu === key ? null : key);
                }}
              >
                {NAV_MENUS[key].title}
                <span className={styles.chevron}>▾</span>
              </button>
            ))}

            <Link href="/itineraries" className={styles.navLink}>
              Itineraries
            </Link>

            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconBtn}>🔍</button>
            <button className={styles.menuBtn} onClick={() => setMobileOpen(true)}>
              Menu
            </button>
          </div>
        </div>

        {menu && (
          <div className={styles.dropdown}>
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
                        onMouseEnter={() => setActiveImage(i % 2)}
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
            {stack.length > 0 ? <button onClick={goBack}>← Back</button> : <span />}
            <button onClick={closeMobile}>✕</button>
          </div>

          <div className={styles.mobileLinks}>
            {items.map((item) =>
              item.children ? (
                <button key={item.title} className={styles.mobilePrimary} onClick={() => openNode(item)}>
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
              )
            )}

            <Link href="/itineraries" className={styles.mobilePrimary} onClick={closeMobile}>
              Itineraries
            </Link>

            <Link href="/blog" className={styles.mobilePrimary} onClick={closeMobile}>
              Blog
            </Link>

            <div className={styles.mobileExtras}>
              <Link href="/sustainability">Sustainability</Link>
              <Link href="/charity">Charity</Link>
              <Link href="/partners">Sponsors</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
