import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import styles from "../../styles/BlogPost.module.css";
import NounScript from "../../components/nounScript";

import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import ContentPage from "../../components/contentPage";

export default function PostPage(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div style={{ padding: "0.5rem" }}>
          <Link href="/blog">
            <button>Go Back</button>
          </Link>
        </div>

        <div
          style={{
            maxWidth: "800px",
            backgroundColor: "#fffffb",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            padding: "1rem",
            borderRadius: "1rem",
          }}
          dangerouslySetInnerHTML={{ __html: marked(props.content) }}
        ></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

PostPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
