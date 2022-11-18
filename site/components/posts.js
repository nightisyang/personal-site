import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Posts(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={props.post.frontmatter.cover_image} width={210}></img>
      </div>
      <div className="detailsContainer">
        <div className={`styles.post-date`}>
          Posted on {props.post.frontmatter.date}
        </div>
        <h3>{props.post.frontmatter.title}</h3>

        <Link href={`blog/${props.post.slug}`}>
          <a className={styles.btn}>Read More</a>
        </Link>
      </div>
    </div>
  );
}
