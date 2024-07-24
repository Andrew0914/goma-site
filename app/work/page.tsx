import JobItem, { JobItemProps } from "@/components/JobItem/JobItem";
import PageTransition from "@/components/PageTransition/PageTransition";
import { Job, jobs } from "./data";
import styles from "./page.module.scss";

export default function Work() {
  const colors = ["blue", "yellow", "red", "green"] as (
    | "blue"
    | "yellow"
    | "red"
    | "green"
  )[];

  const reversedColors = [...colors].reverse();

  const worksColum1: Job[] = [];
  const worksColum2: Job[] = [];

  return (
    <PageTransition className={`container`}>
      <header className="mb--3">
        <h1 className="heading--1">My work</h1>
        <p className="text--xl my--2">
          I like to create things, take a look at my work and let's do something
          together.
        </p>
        <hr className="divider" />
      </header>

      <div></div>

      <div className={styles.work_items}>
        <div className={styles.work_items_column}>
          {[jobs[0]].map((job, index) => (
            <JobItem
              key={`${index}-${job.slug}`}
              job={job}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
        <div className={styles.work_items_column}>
          {[jobs[0]].map((job, index) => (
            <JobItem
              key={`${index}-${job.slug}`}
              job={job}
              color={reversedColors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
