import styles from "./Cart.module.css";
import { BackBtn } from "../BackBtn/BackBtn";
import { LinkBtn } from "../LinkBtn/LinkBtn";
import { useOutletContext } from "react-router";

export function Cart() {
  const { itemsToCart, setItemsToCart } = useOutletContext();

  const increaseItemQty = (id) => {
    setItemsToCart(
      itemsToCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseItemQty = (id) => {
    setItemsToCart(
      itemsToCart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setItemsToCart(itemsToCart.filter((item) => item.id !== id));
  };

  return (
    <section className={styles.cart}>
      <article className={styles.header}>
        <BackBtn />
        <div className={styles.main}>
          <h2>Your Cart</h2>
          {itemsToCart.length > 0 ? (
            <strong>
              <p>{itemsToCart.length} items</p>
            </strong>
          ) : (
            ""
          )}
        </div>
      </article>
      {itemsToCart.length === 0 ? (
        <section className={styles.content}>
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
        </section>
      ) : (
        <section className={styles.products}>
          {itemsToCart.map((item) => (
            <article key={item.id} className={styles.product}>
              <img src={item.image} alt={item.title} />
              <div className={styles.productInfo}>
                <div className={styles.titlePrice}>
                  <h3>{item.title}</h3>
                  <strong>
                    <p>{item.price * item.qty} $</p>
                  </strong>
                </div>
                <div className={styles.qtyControls}>
                  <input type="tel" name="qty" id="qty" value={item.qty} />
                  <button onClick={() => increaseItemQty(item.id)}>+</button>
                  <button onClick={() => decreaseItemQty(item.id)}>-</button>
                  <button
                    className={styles.remove}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </section>
  );
}
