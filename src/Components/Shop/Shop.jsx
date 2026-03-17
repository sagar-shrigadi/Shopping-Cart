import { BackBtn } from "../BackBtn/BackBtn";
import styles from "./Shop.module.css";
export function Shop() {
  return (
    <section className={styles.shop}>
      <article className={styles.header}>
        <BackBtn />
        <div className={styles.main}>
          <h2>Shop Products</h2>
          <p>Browse our Curated Collections</p>
        </div>
        <div className={styles.controls}>
          <button type="button" className={styles.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-funnel-icon lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            Filter
          </button>
          <button type="button" className={styles.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            Sort
          </button>
        </div>
      </article>

      <article className={styles.content}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </article>
    </section>
  );
}
