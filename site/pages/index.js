import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NounScript from "../components/nounScript";
import Link from "next/link";
import Sidebar from "../components/sidebar";
import Banner from "./banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>this.you rocks!</title>
      </Head>
      <Sidebar />
      <Banner />

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Link href="/aboutme">
                <div>
                  <h2>About Me &rarr;</h2>
                  <p>
                    Brief description of myself and my previous experiences.
                  </p>
                </div>
              </Link>
            </div>

            <div className={styles.card}>
              <Link href="/blog">
                <div>
                  <h2>Blog &rarr;</h2>
                  <p>Follow my journey on learning to program from scratch!</p>
                </div>
              </Link>
            </div>

            <div className={styles.card}>
              <Link href="/projects">
                <div>
                  <h2>Projects &rarr;</h2>
                  <p>Take a look at my current and previous projects.</p>
                </div>
              </Link>
            </div>

            <div className={styles.card}>
              <Link href="/contact">
                <div>
                  <h2>Contact me &rarr;</h2>
                  <p>Ways to get in touch with me.</p>
                </div>
              </Link>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/next.png" alt="Vercel Logo" width={45} height={20} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
