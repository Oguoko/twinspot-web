import { useQuiz } from "./QuizProvider";
import styles from "./quiz.module.css";

const copy = {
  lister: "You live for lifers, endemics, and migrations.",
  photographer: "Light, patience, and perfect moments guide you.",
  explorer: "Remote landscapes and rare ecosystems inspire you.",
  naturalist: "Understanding nature is your greatest reward.",
};

export default function QuizResult() {
  const { result, reset } = useQuiz();

  if (!result) return null;

  return (
    <div className={styles.result}>
      <h2>Your Birding Style Is</h2>
      <h1>{result.toUpperCase()}</h1>
      <p>{copy[result]}</p>

      <a href={`/experiences/${result}`} className={styles.cta}>
        View Recommended Trips
      </a>

      <button onClick={reset} className={styles.reset}>
        Retake Quiz
      </button>
    </div>
  );
}
