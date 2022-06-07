import Layout from "../components/layout";
import Sidebar from "../components/sidebar";


export default function Blog() {
  return <h1>blog</h1>;
}

Blog.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
