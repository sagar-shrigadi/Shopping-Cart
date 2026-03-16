import styles from "./Card.module.css";
export function Card({ name }) {
  return (
    <a href="#" className={styles.card}>
      {name}
    </a>
  );
}
