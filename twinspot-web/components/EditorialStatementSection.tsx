import Image from "next/image";
import ContentRail from "@/components/ContentRail";
import styles from "./editorial-statement-section.module.css";

export default function EditorialStatementSection() {
  return (
    <section className={styles.section}>
      <ContentRail>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <Image
              src="/hero.jpg"
              alt="Twinspot editorial landscape"
              fill
              className={styles.image}
              priority={false}
            />
          </div>

          <div className={styles.text}>
            <h2 className={styles.statement}>
              Not Just Seeing.
              <br />
              Understanding.
            </h2>

            <p>
              Travel, for us, is shaped by seasons and silence. By noticing
              patterns, behaviours, and moments that only appear when time is
              allowed to slow. Twinspot journeys are designed for people who find
              meaning in observation, not accumulation.
            </p>
          </div>
        </div>
      </ContentRail>
    </section>
  );
}
