import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ContentPage from "../components/contentPage";

export default function Projects() {
  return <h1>Projects</h1>;
}

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
