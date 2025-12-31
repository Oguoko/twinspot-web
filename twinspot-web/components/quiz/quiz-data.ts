export type Personality =
  | "lister"
  | "photographer"
  | "explorer"
  | "naturalist";

export type QuizOption = {
  label: string;
  personality: Personality;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What excites you most in the field?",
    options: [
      { label: "Finding rare species", personality: "lister" },
      { label: "Capturing the perfect photo", personality: "photographer" },
      { label: "Exploring wild landscapes", personality: "explorer" },
      { label: "Learning bird behavior", personality: "naturalist" },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to travel?",
    options: [
      { label: "Early starts, long days", personality: "lister" },
      { label: "Slow and patient", personality: "photographer" },
      { label: "Off the beaten path", personality: "explorer" },
      { label: "With expert guides", personality: "naturalist" },
    ],
  },
  {
    id: 3,
    question: "What makes a trip unforgettable?",
    options: [
      { label: "New lifers", personality: "lister" },
      { label: "Iconic shots", personality: "photographer" },
      { label: "Unique habitats", personality: "explorer" },
      { label: "Deep understanding", personality: "naturalist" },
    ],
  },
];
