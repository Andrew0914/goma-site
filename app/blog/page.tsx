import { posts } from "./data";
import PostItem from "@/components/PostItem/PostItem";
import styles from "./page.module.scss";
import PageTransition from "@/components/PageTransition/PageTransition";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");
  const dummyPosts = new Array(30).fill(posts[0]);
  return (
    <PageTransition className={`container`}>
      <header className="mb--3">
        <h1 className="heading--1">{t("title")}</h1>
        <p className="text--xl my--2">{t("description")}</p>
        <hr className="divider" />
      </header>

      <div className={styles.blog_posts}>
        {dummyPosts.map((post, index) => (
          <PostItem key={`${index}-${post.slug}`} post={post} />
        ))}
      </div>
    </PageTransition>
  );
}
