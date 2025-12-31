"use client";

import { useState } from "react";
import QuizModal from "@/components/quiz/QuizModal";
import styles from "./quiz-cta.module.css";

export default function QuizCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <h2 className={styles.title}>What’s Your Birding Style?</h2>
          <p className={styles.text}>
            Answer a few quick questions and discover the kind of birding journey
            that suits you best across East Africa.
          </p>

          <button className={styles.button} onClick={() => setOpen(true)}>
            Take the Quiz →
          </button>
        </div>
      </div>

      {open && <QuizModal onClose={() => setOpen(false)} />}
    </>
  );
}
