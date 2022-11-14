import Image from "next/image";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import styles from "../styles/Contact.module.css";
import ContentPage from "../components/contentPage";
import { useRef, useState } from "react";

export default function Contact() {
  const refEmail = useRef("contact@thisyoung.rocks");
  const [copyPrompt, setCopyPrompt] = useState("Copy to clipboard");
  const refCopy = useRef("Copy to clipboard");

  function copyEmail() {
    navigator.clipboard.writeText(refEmail.current);

    setCopyPrompt("Copied email to clipboard!");
  }

  return (
    <>
      <h1>Contact Me</h1>

      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <Image
              src="/../public/GitHub-Mark-120px-plus.png"
              width={80}
              height={80}
            />
            <div className={styles.textCenter}>
              <p>
                <a href="https://github.com/nightisyang" target="_blank">
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/../public/email-100px.png" width={80} height={80} />
          <div className={styles.textCenter}>
            <div className={styles.tooltip}>
              <p
                onClick={copyEmail}
                onMouseOut={() => {
                  setCopyPrompt("Copy to clipboard");
                }}
              >
                <span className={styles.tooltiptext}>{copyPrompt}</span>
                <u>Email</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
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
