import styles from "./Hero.module.css";
import { LinkBtn } from "../../LinkBtn/LinkBtn";
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi
          accusantium, pariatur quidem consequatur reprehenderit at molestias!
        </p>
        <LinkBtn to="shop">Shop Now</LinkBtn>
      </div>
    </section>
  );
}
