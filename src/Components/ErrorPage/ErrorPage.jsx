import styles from "./ErrorPage.module.css";
import { Link } from "react-router";

export function ErrorPage() {
  return (
    <section className={styles.section}>
      <h2>404</h2>
      <h3>Oops!</h3>
      <p>
        The Page you are looking for doesn't exist. Please go to back to
        homepage.
      </p>

      <Link to="/" className={styles.btn}>
        Go Home
      </Link>
    </section>
  );
}
