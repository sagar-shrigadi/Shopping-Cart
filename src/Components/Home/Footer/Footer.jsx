import styles from "./Footer.module.css";
import { Bottom } from "./Bottom/Bottom";
import { Top } from "./Top/Top";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Top />
      <Bottom />
    </footer>
  );
}
