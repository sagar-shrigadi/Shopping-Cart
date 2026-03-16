import styles from "./Category.module.css";
import { Card } from "./Card/Card";

export function Category() {
  return (
    <section className={styles.category}>
      <h2>Shop By Categories</h2>
      <div className={styles.cardWrapper}>
        <Card name="category 1" />
        <Card name="category 2" />
        <Card name="category 3" />
        <Card name="category 4" />
      </div>
    </section>
  );
}
