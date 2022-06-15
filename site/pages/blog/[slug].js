import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage(props) {
  return (
    <div>
      <Link href="/blog">
        <button>Go Back</button>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
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
      {page}
    </Layout>
  );
};
