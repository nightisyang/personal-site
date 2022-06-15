import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import Posts from "../../components/posts";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Blog(props) {
  return (
    <div>
      <h1>blog</h1>

      <div className="posts">
        {props.posts.map((post, index) => {
          return <Posts post={post}></Posts>;
        })}
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

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
