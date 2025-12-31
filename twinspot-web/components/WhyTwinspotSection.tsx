import Image from "next/image";
import ContentRail from "@/components/ContentRail";
import styles from "./why-twinspot-section.module.css";

export default function WhyTwinspotSection() {
  return (
    <section className={styles.section}>
      <ContentRail>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>What Makes Twinspot Different</h2>

            <p>
              Twinspot was created from the belief that East Africa is not a list
              of destinations, but a set of lived landscapes. Places shaped by
              seasons, light, weather, and the quiet knowledge of people who know
              them intimately.
            </p>

            <p>
              We approach birding as a practice of attention. It rewards patience,
              respect, and the willingness to stay still long enough for meaning
              to emerge.
            </p>

            <p>
              Our journeys are built around habitats rather than checklists,
              guided by local experts. We travel in small groups, choose fewer
              places, and allow time to notice what others rush past.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/hero.jpg"
              alt="East African landscape"
              fill
              className={styles.image}
              priority={false}
            />
          </div>
        </div>
      </ContentRail>
    </section>
  );
}
