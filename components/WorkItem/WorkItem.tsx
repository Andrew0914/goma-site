import { Job } from "@/app/work/data";
import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Link from "next/link";

export interface JobItemProps {
  job: Job;
}

export default function WorkItem(props: JobItemProps) {
  const thumbnailClasses = classNames(styles.jobItem_image);
  const jobClasses = classNames(
    styles.jobItem,
    styles["work" + props.job.color]
  );
  return (
    <Link className={jobClasses} href={`/work/items/${props.job.slug}`}>
      <div className={thumbnailClasses}>
        <Image
          src={props.job.image}
          alt={props.job.title}
          width={400}
          height={280}
        />
      </div>
      <div className={styles.jobItem_info}>
        <h5 className="heading--5 text--base">{props.job.title}</h5>
        <p className="text--content text--base">{props.job.description}</p>
        <p className={`text--sm ${styles.jobItem_meta}`}>
          {props.job.type} · {props.job.mainTech} · {props.job.date}
        </p>
      </div>
    </Link>
  );
}
