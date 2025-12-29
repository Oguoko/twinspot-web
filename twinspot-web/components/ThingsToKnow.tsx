import styles from "./things-to-know.module.css";

type Item = {
  label: string;
  value: string;
};

type ThingsToKnowProps = {
  title?: string;
  items: Item[];
};

export default function ThingsToKnow({
  title = "Things to Know Before You Go",
  items,
}: ThingsToKnowProps) {
  return (
    <section className={styles.wrapper}>
      <h2>{title}</h2>

      <dl className={styles.list}>
        {items.map((item, i) => (
          <div key={i} className={styles.row}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
