import styles from "./Header.module.css";
import { ShoppingCart, ShoppingBag, ToggleLeft } from "lucide-react";
import search from "../../../assets/search.svg";
import cart from "../../../assets/shopping-cart.svg";
import bag from "../../../assets/shopping-bag.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.logo}>Lorem Ipsum</button>

      <div className={styles.input}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="What are you looking for today ?"
        />
        <button type="button" className={styles.searchBtn} title="Search">
          <img src={search} alt="search" />
        </button>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li title="Shop">
            <img src={bag} alt="Shop" />
          </li>
          <li title="Cart">
            <img src={cart} alt="Cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
