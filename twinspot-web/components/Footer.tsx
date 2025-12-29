import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* =====================
            BRAND + SOCIALS
        ====================== */}
        <div className={styles.brand}>
          <h3>Twinspot Tours & Travel</h3>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>

        {/* =====================
            LINK COLUMNS
        ====================== */}
        <div className={styles.columns}>
          <div>
            <h4>About Twinspot</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Sustainable Tourism</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4>Travel Planning</h4>
            <ul>
              <li><Link href="/birding-safaris">Birding Safaris</Link></li>
              <li><Link href="/wildlife-safaris">Wildlife Safaris</Link></li>
              <li><Link href="/photography-tours">Photography Tours</Link></li>
              <li><Link href="/contact">Custom Itineraries</Link></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/travel-guides">Travel Guides</Link></li>
              <li><Link href="/media">Media</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
              <li><Link href="/plan-your-trip">Plan Your Trip</Link></li>
            </ul>
          </div>
        </div>

        {/* =====================
            BOTTOM BAR
        ====================== */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Twinspot Tours & Travel. All rights reserved.
          </p>
          <p className={styles.location}>
            Based in Kenya • Serving East Africa
          </p>
        </div>

        {/* =====================
            FOOTER WORDMARK
        ====================== */}
        <p className={styles.wordmark}>Twinspot Tours</p>
      </div>
    </footer>
  );
}
