import Link from "next/link";
import styles from "../styles/ContentPage.module.css";
import NounScript from "../components/nounScript";

export default function ContentPage(props) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.item1}>
        <div className={styles.flexContainer}>
          <div className={styles.item1NounScript}>
            <NounScript />
          </div>
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.content}>{props.content}</div>
      </div>
      <div className={styles.item3}>Last Updated 30-09-2022</div>
    </div>
  );
}
