import { meAsAuthor, posts } from "./data";
import PostItem from "@/components/PostItem/PostItem";
import styles from "./page.module.scss";
import PageTransition from "@/components/PageTransition/PageTransition";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");

  const orderedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({ ...post, author: meAsAuthor }));

  return (
    <PageTransition className={`container`}>
      <header className="mb--3">
        <h1 className="heading--1">{t("title")}</h1>
        <p className="text--xl my--2">{t("description")}</p>
        <hr className="divider" />
      </header>

      <div className={styles.blog_posts}>
        {orderedPosts.map((post, index) => (
          <PostItem key={`${index}-${post.slug}`} post={post} />
        ))}
      </div>
    </PageTransition>
  );
}
