import Image from "next/image";
import styles from "./404.module.scss";
import classNames from "classnames";
import { Button } from "@mui/material";

export default function NotFound() {
  const classes = classNames("container--sm flex--center", styles.container404);

  return (
    <div className={classes}>
      <h1 className="heading--1">404</h1>
      <Image
        src={"/404.gif"}
        alt="404"
        width={480}
        height={260}
        className={styles.image404}
      />
      <Button href="/" color="primary" variant="outlined">
        Go back to home
      </Button>
    </div>
  );
}
