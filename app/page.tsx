import styles from "./page.module.scss";
import { GitHub, X } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Links } from "@/utils/constants";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function Home() {
  const t = useTranslations("home");

  return (
    <PageTransition className={`container ${styles.home}`}>
      <h1 className="heading--1">
        {t.rich("title", {
          span: (children) => (
            <span className="text--super" style={{ display: "inline-block" }}>
              &#123; {children} &#125;
            </span>
          ),
          div: (children) => <span className="text--super"> {children} </span>,
        })}
      </h1>
      <p className="text--content">{t("more")}</p>
      <div>
        <a href={Links.Github} target="_blak">
          <GitHub />
        </a>
        <a href={Links.X} target="_blank">
          <X />
        </a>
      </div>
    </PageTransition>
  );
}
