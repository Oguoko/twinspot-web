import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* =====================
            TOP ROW
        ====================== */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.brandName}>Twinspot</h2>
            <p className={styles.tagline}>
              Thoughtful birding safaris across East Africa.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* =====================
              LINK COLUMNS
          ====================== */}
          <div className={styles.columns}>
            <div>
              <h4>About</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Sustainable Tourism</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4>Safaris</h4>
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
                <li><Link href="/plan-your-trip">Plan Your Trip</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* =====================
            BOTTOM BAR
        ====================== */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Twinspot Tours & Travel</p>
          <p className={styles.location}>
            Based in Kenya • Serving East Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
