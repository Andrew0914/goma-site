import { Copyright, GitHub, LinkedIn, X, YouTube } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { Links } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function TheFooter() {
  const t = useTranslations("thefooter");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.theFooter} text--sm`}>
      <div className={`${styles.theFooter_content} container`}>
        <div>
          {t("follow")}
          <Link href={Links.Github} target="_blank" aria-label="Github">
            <GitHub fontSize="small" />
          </Link>
          <Link href={Links.LinkedIn} target="_blank" aria-label="LinkedIn">
            <LinkedIn fontSize="small" />
          </Link>
          <Link
            href={Links.YouTube}
            target="_blank"
            aria-label="Youtube channel"
          >
            <YouTube fontSize="small" />
          </Link>
          <Link href={Links.X} target="_blank" aria-label="Twitter">
            <X fontSize="small" />
          </Link>
        </div>
        <div>
          <span>
            <Copyright fontSize="small" /> {currentYear}
          </span>
          <span>
            {t("madeWith", { emoji: "💖" })}{" "}
            <Link href={Links.Github}>@AndrewGM</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
