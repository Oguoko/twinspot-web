"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

type FaqItem = {
  question?: string;
  answer?: string;
};

type Props = {
  items: FaqItem[];
};

export default function FaqSection({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.list}>
        {items.map((item, i) => (
          <FaqItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className={styles.icon}>{open ? "–" : "+"}</span>
      </button>

      <div className={styles.answer}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
