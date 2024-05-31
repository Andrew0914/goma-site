import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import { GitHub, X } from "@mui/icons-material";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1 className="heading--1">
        Hi! I'm <span className="text--super">Andrew Gonzalez</span>, a dedicated IT engineer, <span className="text--super">passionated developer</span>, and the Front-End Lead at work.
      </h1>

      <p className="text--content">
        I am passionate about crafting experiences through code and unleashing my creativity. I also enjoy video games and food.
      </p>
      <div><GitHub /> <X /></div>
    </section>
  );
}
