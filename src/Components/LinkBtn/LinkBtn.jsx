import styles from "./LinkBtn.module.css";
import { Link } from "react-router";

export function LinkBtn({ to, children }) {
  return (
    <Link to={to} className={styles.heroBtn}>
      {children}
    </Link>
  );
}
