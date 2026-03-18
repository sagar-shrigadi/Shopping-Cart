import styles from "./Cart.module.css";
import { BackBtn } from "../BackBtn/BackBtn";
import { LinkBtn } from "../LinkBtn/LinkBtn";

export function Cart() {
  return (
    <section className={styles.cart}>
      <article className={styles.header}>
        <BackBtn />
        <div className={styles.main}>
          <h2>Your Cart</h2>
        </div>
      </article>
      <article className={styles.content}>
        <div className={styles.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <h3>Your cart is empty</h3>
        <p>Start adding Products to your cart and they will appear here.</p>
        <LinkBtn to="/shop">Shop Now</LinkBtn>
      </article>
    </section>
  );
}
