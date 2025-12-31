"use client";

import { QuizProvider, useQuiz } from "./QuizProvider";
import { quizQuestions } from "./quiz-data";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import styles from "./quiz.module.css";

export default function QuizModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <button className={styles.close} onClick={onClose}>Close ✕</button>

      <QuizProvider>
        <QuizContent />
      </QuizProvider>
    </div>
  );
}

function QuizContent() {
  const { step, result } = useQuiz();

  if (result) return <QuizResult />;

  return <QuizQuestion question={quizQuestions[step]} />;
}
