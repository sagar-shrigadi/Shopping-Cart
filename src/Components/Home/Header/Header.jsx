import styles from "./Header.module.css";
import search from "../../../assets/search.svg";
import cart from "../../../assets/shopping-cart.svg";
import bag from "../../../assets/shopping-bag.svg";
import { NavLink } from "react-router";

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
          <NavLink to="shop">
            <img src={bag} alt="Shop" />
          </NavLink>
          <NavLink to="cart">
            <img src={cart} alt="Cart" />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
