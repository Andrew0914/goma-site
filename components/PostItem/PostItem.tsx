import { Post } from "@/app/blog/data";
import Image from "next/image";
import SuperImage from "../SuperImage/SuperImage";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <article className={styles.postItem}>
      <div className={styles.postItem_meta}>
        <time className="text--sm text--muted">{post.date.toDateString()}</time>
        <span className={styles.postItem_author}>
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={24}
            height={24}
            className={`circle ${styles.postItem_avatar}`}
          />
          <Link href="/about" className="text--muted text--content">
            {post.author.name}
          </Link>
        </span>
      </div>

      <h3 className="heading--3">{post.title}</h3>

      <SuperImage
        className={styles.postItem_thumbnail}
        src={post.thumbnail.src}
        alt={post.thumbnail.alt}
        width={post.thumbnail.width}
        height={post.thumbnail.height}
      />

      <p className="text--content">{post.excerpt}</p>

      <Link href={`blog/posts/${post.slug}?id=${post.slug}`}>
        Read more &rarr;
      </Link>
    </article>
  );
}
