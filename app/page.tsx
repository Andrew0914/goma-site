import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <span className={`text--content ${styles.main}`}>
      <Button variant="contained" color="primary">Andrew</Button>
    </span>
  );
}
