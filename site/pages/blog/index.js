import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import Posts from "../../components/posts";
import Header from "../../components/header";
import ContentPage from "../../components/contentPage";
import styles from "../../styles/Blog.module.css";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Blog(props) {
  return (
    <div>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {props.posts.map((post, index) => {
            return <Posts post={post}></Posts>;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  console.log(files);

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      posts,
    },
  };
}

Blog.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
