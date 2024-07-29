import { Job } from "@/app/work/data";
import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Link from "next/link";

export interface JobItemProps {
  job: Job;
  color: "blue" | "green" | "red" | "yellow";
}

export default function JobItem(props: JobItemProps) {
  const thumbnailClasses = classNames(
    styles.jobItem_image,
    styles["work" + props.color]
  );

  return (
    <Link
      className={styles.jobItem}
      href={`/work/items/${props.job.slug}?color=${props.color}`}
    >
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
        <p className={`text--muted text--sm ${styles.jobItem_meta}`}>
          {props.job.type} · {props.job.mainTech} · {props.job.date}
        </p>
      </div>
    </Link>
  );
}
