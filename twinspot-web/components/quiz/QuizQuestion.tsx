import { QuizQuestion as Q } from "./quiz-data";
import { useQuiz } from "./QuizProvider";
import styles from "./quiz.module.css";

export default function QuizQuestion({ question }: { question: Q }) {
  const { selectOption } = useQuiz();

  return (
    <div className={styles.question}>
      <h2>{question.question}</h2>

      <div className={styles.grid}>
        {question.options.map((opt) => (
          <button
            key={opt.label}
            className={styles.option}
            onClick={() => selectOption(opt.personality)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
