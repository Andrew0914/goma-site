import PageTransition from "@/components/PageTransition/PageTransition";
import { posts } from "./data";
import PostItem from "@/components/PostItem/PostItem";
import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <PageTransition className="container--sm">
      <header className="mb--2">
        <h1 className="heading--1">The blog</h1>
        <p className="text--xl my--2">
          My sharing about programming, technology, my life and thoughts as a
          developer.
        </p>
        <hr className="divider" />
      </header>

      <div className={styles.blog_posts}>
        {posts.map((post, index) => (
          <PostItem key={`${index}-${post.slug}`} post={post} />
        ))}
      </div>
    </PageTransition>
  );
}
