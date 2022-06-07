import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Projects() {
  return <h1>Projects</h1>;
}

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
