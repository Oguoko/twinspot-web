"use client";

import { createContext, useContext, useState } from "react";
import { quizQuestions, Personality } from "./quiz-data";

type QuizContextType = {
  step: number;
  selectOption: (p: Personality) => void;
  result: Personality | null;
  reset: () => void;
};

const QuizContext = createContext<QuizContextType | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Personality, number>>({
    lister: 0,
    photographer: 0,
    explorer: 0,
    naturalist: 0,
  });
  const [result, setResult] = useState<Personality | null>(null);

  function selectOption(p: Personality) {
    setScores((prev) => ({ ...prev, [p]: prev[p] + 1 }));

    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    } else {
      const winner = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])[0][0] as Personality;
      setResult(winner);
    }
  }

  function reset() {
    setStep(0);
    setResult(null);
    setScores({
      lister: 0,
      photographer: 0,
      explorer: 0,
      naturalist: 0,
    });
  }

  return (
    <QuizContext.Provider value={{ step, selectOption, result, reset }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("Quiz must be used inside QuizProvider");
  return ctx;
}
