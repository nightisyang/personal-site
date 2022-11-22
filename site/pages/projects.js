import Link from "next/link";
import Image from "next/image";

import ProjectCards from "../components/ProjectCards";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import ContentPage from "../components/contentPage";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <ProjectCards
            name="Poker"
            link="https://github.com/nightisyang/basic-poker"
            description={
              <p>
                Fancy a game of Texas Hold'em Poker with yourself as 2-11
                players?{" "}
                <a
                  href="https://nightisyang.github.io/basic-poker/"
                  target="_blank"
                >
                  Play here!
                </a>
              </p>
            }
            logo={["js", "html", "css"]}
            backgroundColor="#f2849e"
          />

          <ProjectCards
            name="splish"
            link="https://github.com/nightisyang/splish"
            description={
              <p>
                An outdoor focused mobile application, available on both{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.splish14092022&pli=1"
                  target="_blank"
                >
                  Android
                </a>{" "}
                and{" "}
                <a
                  href="https://apps.apple.com/us/app/splishmy/id6443442595"
                  target="_blank"
                >
                  iOS
                </a>
                . Fullstack self-hosted application, developed on React Native,
                Node.js and MongoDB.
              </p>
            }
            logo={["js", "reactNative", "node", "mongo"]}
            backgroundColor="#7ecaf6"
          />

          <ProjectCards
            name="Poker Discord Bot"
            link="https://github.com/nightisyang/discord-poker-bot"
            description="Implementing Poker as a Discord Bot for a multiplayer experience."
            logo={["js", "node"]}
            backgroundColor="#c75b9b"
          />

          <ProjectCards
            name="thisyoung.rocks"
            link="https://github.com/nightisyang/personal-site"
            description={
              <p>
                Hello and welcome to my self-hosted site! Also check out the{" "}
                <Link href="/blog">blog</Link> page made using Markdown!
              </p>
            }
            logo={["js", "node", "next"]}
            backgroundColor="#7bd0c1"
          />

          <ProjectCards
            name="Python for Everybody"
            link="https://github.com/nightisyang/py4e-course-assignments"
            description="Picking up a secondary programming language. Course taught by  Dr. Chuck Severance (Univeristy of Michigan)."
            logo={["python", "sql"]}
            backgroundColor="#f2849e"
          />

          <ProjectCards
            name="Datastructures and Algorithm, Leetcode"
            link="https://github.com/nightisyang/leetcode-grind-75"
            description={
              <>
                <p>
                  Learning DSA and attempting{" "}
                  <a
                    href="https://www.techinterviewhandbook.org/grind75"
                    target="_blank"
                  >
                    leetcode
                  </a>{" "}
                  questions.
                </p>
              </>
            }
            logo={["js"]}
            backgroundColor="#ae85ca"
          />

          <ProjectCards
            name="Gitbook"
            link="https://github.com/nightisyang/gitbook-grind75"
            description={
              <p>
                Personal notes for Leetcode Grind75. Available as a{" "}
                <a
                  href="https://grind75-notes.gitbook.io/notes/"
                  target="_blank"
                >
                  {" "}
                  gitbook
                </a>
                .
              </p>
            }
            logo={["js"]}
            backgroundColor="#8499e7"
          />
        </div>
      </div>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
