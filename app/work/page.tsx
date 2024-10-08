import WorkItem, { JobItemProps } from "@/components/WorkItem/WorkItem";
import PageTransition from "@/components/PageTransition/PageTransition";
import { Job, jobs } from "./data";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export const metadata = {
  title:
    "My work | Mis proyectos | Andrew Gonzalez | andrewgm | software developer",
  description:
    "My blog where I share my thoughts, software development, creativity, and web development and my lived experiences.",
};

export default function Work() {
  const worksColum1: Job[] = jobs.slice(0, Math.ceil(jobs.length / 2));
  const worksColum2: Job[] = jobs.slice(Math.ceil(jobs.length / 2));
  const t = useTranslations("work");

  return (
    <PageTransition className={`container`}>
      <header className="mb--3">
        <h1 className="heading--1"> {t("title")}</h1>
        <p className="text--xl my--2">{t("description")}</p>
        <hr className="divider" />
      </header>

      <div></div>

      <div className={styles.work_items}>
        <div className={styles.work_items_column}>
          {worksColum1.map((job, index) => (
            <WorkItem key={`${index}-${job.slug}`} job={job} />
          ))}
        </div>
        <div className={styles.work_items_column}>
          {worksColum2.map((job, index) => (
            <WorkItem key={`${index}-${job.slug}`} job={job} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
