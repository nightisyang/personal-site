import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Contact() {
  return <h1>Contact</h1>;
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
