import styles from "./page.module.scss";
import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Links } from "@/utils/constants";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import { posts } from "./blog/data";
import PostItem from "@/components/PostItem/PostItem";

export default function Home() {
  const t = useTranslations("home");
  const lastPost = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return (
    <PageTransition className={`container ${styles.home}`}>
      <h1 className={`heading--1 ${styles.home_title}`}>
        {t.rich("title", {
          span: (children) => (
            <span className="text--super" style={{ display: "inline-block" }}>
              &#123; {children} &#125;
            </span>
          ),
          div: (children) => <span className="text--super"> {children} </span>,
        })}
      </h1>

      <p className="text--content text--center">{t("more")}</p>

      <Image
        src="/images/yo_2.png"
        alt="Andrew Gonzalez"
        width={175}
        height={175}
        className={`circle ${styles.home_photo}`}
      />
      <p className="text--center">Mira mi trabajo o contactame en:</p>
      <div className={styles.home_social}>
        <a href={Links.Github} target="_blak">
          <GitHub />
        </a>
        <a href={Links.X} target="_blank">
          <X />
        </a>
        <a href={Links.LinkedIn} target="_blank">
          <LinkedIn />
        </a>
      </div>
      <span className={styles.verticalLine} />
      <div className={styles.home_latestPost}>
        <h3 className="heading--3 text--muted text--center">
          {t("latestPost")}
        </h3>
        <PostItem post={lastPost} />
      </div>
    </PageTransition>
  );
}
