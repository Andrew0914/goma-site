import { Copyright, GitHub, LinkedIn, X, YouTube } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { Links } from "@/utils/constants";
import { useTranslations } from "next-intl";

export default function TheFooter() {
  const t = useTranslations("thefooter");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.theFooter} text--sm text--muted`}>
      <div className={`${styles.theFooter_content} container`}>
        <div>
          {t("follow")}
          <a href={Links.Github} target="_blaak">
            <GitHub fontSize="small" />
          </a>
          <a href={Links.LinkedIn} target="_blaak">
            <LinkedIn fontSize="small" />
          </a>
          <a href={Links.YouTube} target="_blaak">
            <YouTube fontSize="small" />
          </a>
          <a href={Links.X} target="_blaak">
            <X fontSize="small" />
          </a>
        </div>
        <div>
          <span>
            <Copyright fontSize="small" /> {currentYear}
          </span>
          <span>
            {t("madeWith", { emoji: "💖" })}{" "}
            <a href={Links.Github}>@AndrewGM</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
