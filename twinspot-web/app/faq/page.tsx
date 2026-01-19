import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import FaqContent from "./FaqContent";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ | Twinspot Tours & Travel",
  description:
    "Answers to common questions about booking, birding tours, wildlife safaris, and travel logistics across East Africa.",
};

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <FaqContent />
      </section>
    </main>
  );
}
