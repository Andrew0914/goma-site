import { Post } from "@/app/blog/data";
import Image from "next/image";
import SuperImage from "../SuperImage/SuperImage";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useFormatter, useTranslations } from "next-intl";
import Code from "../Code/Code";
import VideoPreview from "../VideoPreview/VideoPreview";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  const formatter = useFormatter();
  const t = useTranslations("blog");

  const MainContent = () => {
    if (post.videoId) return <VideoPreview videoId={post.videoId} />;
    if (post.code)
      return (
        <Code
          children={post.code.code}
          language={post.code.language}
          className={`language-${post.code.language}`}
          customStyle={{ fontSize: "12px" }}
        />
      );
    if (post.thumbnail)
      return (
        <SuperImage
          className={styles.postItem_thumbnail}
          src={post.thumbnail.src}
          alt={post.thumbnail.alt}
          width={post.thumbnail.width}
          height={post.thumbnail.height}
        />
      );
  };

  return (
    <article className={styles.postItem}>
      <div className={styles.postItem_meta}>
        <time className="text--sm text--muted">
          {formatter.dateTime(new Date(post.date), {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span className={styles.postItem_author}>
          {post.author && (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className={`circle ${styles.postItem_avatar}`}
            />
          )}

          <Link href="/about" className="text--muted text--content">
            {post.author?.name}
          </Link>
        </span>
      </div>

      <h3 className="heading--3">{post.title}</h3>

      <MainContent />

      <p className="text--content">{post.excerpt}</p>

      <Link
        href={`blog/posts/${post.slug}?id=${post.slug}`}
        className={`${styles.postItem_more}`}
      >
        {t("readMore")} &rarr;
      </Link>
    </article>
  );
}
