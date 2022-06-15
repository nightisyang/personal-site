import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Posts(props) {
  return (
    <div className={styles.card}>
      <img src={props.post.frontmatter.cover_image} width={500}></img>
      <h3>{props.post.frontmatter.title}</h3>
      <div>{props.post.frontmatter.date}</div>

      <Link href={`blog/${props.post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
