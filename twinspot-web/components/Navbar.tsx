"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  NAV_MENUS,
  MenuKey,
  MOBILE_MENU,
  MobileNode,
} from "./navMenu.config";

/* ===============================
   LOCAL TYPES
================================ */

type MenuLink = {
  label: string;
  href: string;
};

type MenuColumn = {
  heading: string;
  links: MenuLink[];
};

type MenuImage = {
  src: string;
  caption: string;
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [stack, setStack] = useState<MobileNode[]>([]);

  const menu = openMenu ? NAV_MENUS[openMenu] : null;
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
      <header className={styles.navbar}>
        <div className={styles.inner}>
          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            Twinspot
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.nav}>
            {(Object.keys(NAV_MENUS) as MenuKey[]).map((key) => {
              const menuItem = NAV_MENUS[key];

              return (
                <div key={key} className={styles.navItemWrap}>
                  {/* MAIN CLICKABLE LINK */}
                  <Link
                    href={menuItem.href}
                    className={styles.navLink}
                  >
                    {menuItem.title}
                  </Link>

                  {/* DROPDOWN TOGGLE */}
                  <button
                    className={styles.chevronBtn}
                    onClick={() =>
                      setOpenMenu(openMenu === key ? null : key)
                    }
                    aria-label={`Open ${menuItem.title} menu`}
                  >
                    <span className={styles.chevron}>▾</span>
                  </button>
                </div>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <button className={styles.iconBtn}>🔍</button>
            <button
              className={styles.menuBtn}
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>

        {/* DESKTOP DROPDOWN */}
        {menu && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownInner}>
              <div className={styles.dropdownText}>
                {menu.columns.map(
                  (col: MenuColumn, cIdx: number) => (
                    <div className={styles.column} key={cIdx}>
                      <h4>{col.heading}</h4>

                      {col.links.map(
                        (link: MenuLink, i: number) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={styles.dropdownLink}
                            onMouseEnter={() =>
                              setActiveImage(i % menu.images.length)
                            }
                          >
                            <span className={styles.highlight} />
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  )
                )}

                <div className={styles.miniLinks}>
                  <Link href="/sustainability">Sustainability</Link>
                  <Link href="/charity">Charity</Link>
                  <Link href="/partners">Sponsors</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div className={styles.imagePanel}>
                {menu.images.map(
                  (img: MenuImage, i: number) => (
                    <div
                      key={img.src}
                      className={`${styles.imageCard} ${
                        activeImage === i
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      <img src={img.src} alt="" />
                      <span>{img.caption}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU (UNCHANGED) */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            {stack.length > 0 ? (
              <button onClick={goBack}>← Back</button>
            ) : (
              <span />
            )}
            <button onClick={closeMobile}>✕</button>
          </div>

          <div className={styles.mobileLinks}>
            {items.map((item) =>
              item.children ? (
                <button
                  key={item.title}
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
              )
            )}

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
