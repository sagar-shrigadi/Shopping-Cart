import styles from "./Hero.module.css";
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi
          accusantium, pariatur quidem consequatur reprehenderit at molestias!
        </p>
        <button type="button" className={styles.btn}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
