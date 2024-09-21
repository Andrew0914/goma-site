import styles from "./page.module.scss";
import { GitHub, LinkedIn, X } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Links } from "@/utils/constants";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import { posts } from "./blog/data";
import PostItem from "@/components/PostItem/PostItem";
import Link from "next/link";
import WorkItem from "@/components/WorkItem/WorkItem";
import { jobs } from "./work/data";
import { Button } from "@mui/material";
import photoOfMe from "../public/images/yo_2.png";

export default function Home() {
  const t = useTranslations("home");
  const featuredPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const featuredWorks = jobs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

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

      <Link href="/about" className={styles.home_photo}>
        <Image
          alt="Andrew Gonzalez"
          src={photoOfMe}
          placeholder="blur"
          width={150}
          height={150}
          className={styles.photo}
          priority
        />
      </Link>

      <Button
        variant="contained"
        color="error"
        href="mailto:andrewalangm@gmail.com"
        className={styles.home_callToAction}
      >
        {t("contactme")}
      </Button>

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

      <div className={styles.home_latestWork}>
        <h3 className="heading--3 text--muted text--center">
          {t("latestWork")}
        </h3>
        <div className={styles.home_featuredContent}>
          {featuredWorks.map((work) => (
            <WorkItem key={work.title} job={work} />
          ))}
        </div>
      </div>

      <span className={styles.verticalLine} />

      <div className={styles.home_latestPost}>
        <h3 className="heading--3 text--muted text--center">
          {t("latestPost")}
        </h3>
        <div className={styles.home_featuredContent}>
          {featuredPosts.map((post) => (
            <PostItem key={post.title} post={post} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
