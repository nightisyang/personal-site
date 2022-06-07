import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function AboutMe() {
  return <h1>About Me</h1>;
}

AboutMe.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
