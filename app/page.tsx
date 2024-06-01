
import styles from "./page.module.scss"
import { Fade } from "@mui/material"
import { GitHub, X } from "@mui/icons-material"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations('home')

  return (
    <Fade in={true} timeout={300} appear={true}>
      <section className={styles.home}>
        <h1 className="heading--1">
          {t.rich("title", { span: (children) => <span className="text--super">{children}</span> })}
        </h1>

        <p className="text--content">
          {t("more")}
        </p>
        <div>
          <a href="https://github.com/Andrew0914" target="_blak"> <GitHub /></a>
          <a href="https://x.com/Andrew_GMx" target="_blank"> <X /></a>
        </div>
      </section>
    </Fade>
  );
}
