import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Posts(props) {
  return (
    <div className={styles.card}>
      <img src={props.post.frontmatter.cover_image} width={400}></img>
      <div className={`styles.post-date`}>
        Posted on {props.post.frontmatter.date}
      </div>
      <h3>{props.post.frontmatter.title}</h3>

      <Link href={`blog/${props.post.slug}`}>
        <a className={styles.btn}>Read More</a>
      </Link>
    </div>
  );
}
