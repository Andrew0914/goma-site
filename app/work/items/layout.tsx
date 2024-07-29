"use client";
import { useSearchParams, usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import styles from "../page.module.scss";
import workStyles from "@/components/JobItem/styles.module.scss";
import classNames from "classnames";
import { Job, jobs } from "../data";
import { Button } from "@mui/material";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";

export default function RootLayout(props: { children: React.ReactNode }) {
  const params = useSearchParams();
  const name = usePathname();

  const color = params.get("color") || "blue";

  const headerClasses = classNames(
    styles.work_header,
    workStyles[`work${color}`]
  );

  const job: Job | undefined = jobs.find(
    (job) => job.slug === name.split("/").pop()
  );

  return (
    <PageTransition>
      <header className={headerClasses}>
        <div className={`container ${styles.work_headerContent}`}>
          <Image
            src={job?.graphic.src ?? ""}
            width={job?.graphic.width ?? 300}
            height={job?.graphic.height ?? 200}
            alt={job?.graphic.alt ?? ""}
            className={styles.work_headerImage}
          />
        </div>
      </header>

      <div className={`container ${styles.work_actions}`}>
        <span className="text--content text--base"> {job?.date} </span>

        <Button
          variant="contained"
          endIcon={<CallMissedOutgoingRoundedIcon />}
          color="error"
          className={styles.work_liveButton}
          href={job?.url}
        >
          Go to Live
        </Button>
      </div>

      <div className="container post--content">{props.children}</div>
    </PageTransition>
  );
}
