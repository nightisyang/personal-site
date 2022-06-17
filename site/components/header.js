import Link from "next/link";
import styles from "../styles/Header.module.css";
import NounScript from "../components/nounScript";

export default function Header(props) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.item1NounScript}>
        <NounScript />
      </div>
    </div>
  );
}
