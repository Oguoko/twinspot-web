// components/nav/SiteHeader.tsx
import Link from "next/link";
import styles from "./siteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Link href="/">Twinspot</Link>
        </div>

        {/* PRIMARY NAV */}
        <nav className={styles.nav}>
          <button className={styles.navItem}>Plan Your Trip</button>
          <button className={styles.navItem}>Destinations</button>
          <button className={styles.navItem}>Birding Themes</button>
          <button className={styles.navItem}>Travel Guides</button>
          <button className={styles.navItem}>About</button>
        </nav>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            🔍
          </button>
          <button className={styles.menuBtn}>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
