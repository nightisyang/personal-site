import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { useEffect, useState } from "react";

export default function ProjectCards(props) {
  const logo = {
    js: "/js_logo.png",
    next: "/next.png",
    node: "/Node.js_logo.svg",
    python: "/python_logo.png",
    react: "/react-logo.webp",
    reactNative: "/react-native-logo.webp",
    sql: "/sql_logo.png",
    mongo: "/MongoDB_Logo.png",
    html: "/HTML5_logo.png",
    css: "/CSS3_logo.png",
  };

  const generateLogo = function (logoType) {
    if (!logo[logoType]) {
      return;
    }
    let path = "";
    if (logo[logoType]) {
      path = logo[logoType];
    }

    return (
      <div className={styles.footerLogo}>
        <Image src={path} layout="fill" objectFit="contain" />
      </div>
    );
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className={styles.header}>
        <div className={styles.repoContainer}>
          <div className={styles.tooltiptext}>View on Github</div>
          <a href={props.link} target="_blank">
            <Image src="/GitHub-Mark-120px-plus.png" width={30} height={30} />
          </a>
        </div>
        <div className={styles.projectTitle}>{props.name}</div>
      </div>
      <div style={{ textAlign: "center" }}>{props.description}</div>
      <div className={styles.footerContainer}>
        {props.logo.map((val) => {
          return generateLogo(val);
        })}
      </div>
    </div>
  );
}
