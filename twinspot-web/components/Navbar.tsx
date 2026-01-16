"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  NAV_MENUS,
  MenuKey,
  MOBILE_MENU,
  MobileNode,
} from "./navMenu.config";

/* ===============================
   TYPES
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

const CLOSE_DELAY = 90; // ms (buttery zone)

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [stack, setStack] = useState<MobileNode[]>([]);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const current = stack[stack.length - 1];
  const items = current?.children ?? MOBILE_MENU;

  /* ===============================
     HOVER / INTENT HANDLING
  ================================ */

  function open(key: MenuKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
    setActiveImage(0);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, CLOSE_DELAY);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  /* ===============================
     KEYBOARD HANDLING
  ================================ */

  function onKeyDown(
    e: React.KeyboardEvent,
    key: MenuKey
  ) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu === key ? setOpenMenu(null) : open(key);
    }

    if (e.key === "Escape") {
      setOpenMenu(null);
    }
  }

  /* ===============================
     MOBILE
  ================================ */

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

          {/* ================= DESKTOP NAV ================= */}
          <nav className={styles.nav}>
            {(Object.keys(NAV_MENUS) as MenuKey[]).map((key) => {
              const menu = NAV_MENUS[key];
              const isOpen = openMenu === key;

              return (
                <div
                  key={key}
                  className={styles.navItemWrap}
                  onPointerEnter={() => open(key)}
                  onPointerLeave={scheduleClose}
                >
                  {/* NON-CLICKABLE LABEL */}
                  <span
                    className={styles.navLabel}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isOpen}
                    onKeyDown={(e) => onKeyDown(e, key)}
                  >
                    {menu.title}
                    <span className={styles.chevron}>▾</span>
                  </span>

                  {/* DROPDOWN */}
                  {isOpen && (
                    <div
                      className={styles.dropdown}
                      onPointerEnter={cancelClose}
                      onPointerLeave={scheduleClose}
                    >
                      <div className={styles.dropdownInner}>
                        <div className={styles.dropdownText}>
                          {menu.columns.map(
                            (col: MenuColumn, cIdx: number) => (
                              <div
                                className={styles.column}
                                key={cIdx}
                              >
                                <h4>{col.heading}</h4>

                                {col.links.map(
                                  (link: MenuLink, idx: number) => (
                                    <Link
                                      key={`${link.href}-${idx}`}
                                      href={link.href}
                                      className={
                                        styles.dropdownLink
                                      }
                                      onMouseEnter={() =>
                                        setActiveImage(
                                          idx %
                                            menu.images.length
                                        )
                                      }
                                    >
                                      <span
                                        className={styles.highlight}
                                      />
                                      {link.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            )
                          )}
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
                </div>
              );
            })}

            {/* BLOG — ONLY CLICKABLE TOP LEVEL */}
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <button
              className={styles.menuBtn}
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
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
          </div>
        </div>
      )}
    </>
  );
}
