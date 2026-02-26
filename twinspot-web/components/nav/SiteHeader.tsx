"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./siteHeader.module.css";

import {
  MOBILE_MENU,
  MobileNode,
  PRIMARY_NAV_ITEMS,
  TOURS_SUBMENU_ITEMS,
} from "./navMenu.config";

type Props = {
  variant?: "sticky" | "overlay";
};

const HAS_SEARCH_ROUTE = false;

export default function SiteHeader({ variant = "sticky" }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stack, setStack] = useState<MobileNode[]>([]);
  const [toursOpen, setToursOpen] = useState(false);
  const toursMenuRef = useRef<HTMLDivElement | null>(null);

  const current = stack[stack.length - 1];
  const items = current?.children ?? MOBILE_MENU;

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!toursMenuRef.current?.contains(event.target as Node)) {
        setToursOpen(false);
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
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Twinspot home">
            <img
              src="/photos/logos-and-icons/logo (1).png"
              alt="Twinspot logo"
              className={styles.logoMark}
            />
            <span className={styles.logoText}>Twinspot</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {PRIMARY_NAV_ITEMS.slice(0, 3).map((item) => (
              <Link key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}

            <div className={styles.toursWrap} ref={toursMenuRef}>
              <button
                type="button"
                className={styles.navButton}
                aria-expanded={toursOpen}
                aria-haspopup="menu"
                onClick={() => setToursOpen((isOpen) => !isOpen)}
              >
                Tours <span className={styles.chevron}>▾</span>
              </button>

              {toursOpen && (
                <div className={styles.dropdown} role="menu" aria-label="Tours submenu">
                  {TOURS_SUBMENU_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      className={styles.dropdownLink}
                      onClick={() => setToursOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {PRIMARY_NAV_ITEMS.slice(3).map((item) => (
              <Link key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
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
