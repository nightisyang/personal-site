import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import styles from "../styles/Contact.module.css";
import ContentPage from "../components/contentPage";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        ✉️ Email:
        <p>contact@thisyoung.rocks</p>
        <h1>
          {/* Labore velit tempor deserunt enim nostrud et labore mollit. Commodo
        mollit magna incididunt non cillum sit eu reprehenderit. Minim fugiat
        proident commodo pariatur nostrud. Ipsum aliqua duis enim nisi. Non aute
        excepteur amet cillum occaecat nisi est consectetur irure. */}
        </h1>
      </div>
      <div className={styles.card}>
        ✉️ Email:
        <p>contact@thisyoung.rocks</p>
        <h1>
          {/* Labore velit tempor deserunt enim nostrud et labore mollit. Commodo
        mollit magna incididunt non cillum sit eu reprehenderit. Minim fugiat
        proident commodo pariatur nostrud. Ipsum aliqua duis enim nisi. Non aute
        excepteur amet cillum occaecat nisi est consectetur irure. */}
        </h1>
      </div>
      <div className={styles.card}>
        ✉️ Email:
        <p>contact@thisyoung.rocks</p>
        <h1></h1>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
