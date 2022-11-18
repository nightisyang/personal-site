import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import ContentPage from "../components/contentPage";
import NounScript from "../components/nounScript";
import Animation from "../components/Animation";

import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Banner() {
  const [bannerLogoStyle, setBannerLogoStyle] = useState(
    styles.bannerLogoLoading
  );
  const [bannerH2Style, setBannerH2Style] = useState(styles.bannerH2Loading);
  const [bannerPStyle, setBannerPStyle] = useState(styles.bannerPLoading);
  const [animation, setAnimation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("initiate animation");
    setBannerLogoStyle(styles.bannerLogo);
    setBannerH2Style(styles.bannerH2);
    setBannerPStyle(styles.bannerP);
    // setAnimation(true);
  });

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerInner}>
        <div className={bannerH2Style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Animation />
          </div>
        </div>
        <p className={bannerPStyle}>Sup nerds</p>
      </div>
    </section>
  );
}

Banner.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <ContentPage content={page} />
    </Layout>
  );
};
