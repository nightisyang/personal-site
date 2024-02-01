import Link from "next/link";
import styles from "../styles/ContentPage.module.css";
import NounScript from "../components/nounScript";
import Animation from "./Animation";
import { useEffect, useState } from "react";

export default function ContentPage(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <div className={styles.flexContainer}>{isLoaded && <Animation />}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{props.content}</div>
      </div>
      <div className={styles.footer}>Last Updated 31-12-2023</div>
    </div>
  );
}
