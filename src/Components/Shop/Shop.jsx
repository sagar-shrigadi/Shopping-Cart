import { useEffect, useState } from "react";
import { BackBtn } from "../BackBtn/BackBtn";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";
export function Shop() {
  const { itemsToCart, setItemsToCart } = useOutletContext();
  const [produts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    setItemsToCart([...itemsToCart, { ...product, qty: 1 }]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (response.status >= 400) {
          throw Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <section className={styles.otherStates}>
        <h2>Loading...</h2>
      </section>
    );
  if (error)
    return (
      <section className={styles.otherStates}>
        <h2>
          Oops! Some Error occured while fetching! <br />
          Please Restart the Page!
        </h2>
      </section>
    );
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
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            Filter
          </button>
          <button type="button" className={styles.btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            Sort
          </button>
        </div>
      </article>

      <article className={styles.content} data-testid="productContainer">
        {produts.map((product) => (
          <div className={styles.card} key={product.id} data-testid="products">
            <img src={product.image} alt={product.title} />

            <div className={styles.productInfo}>
              <div className={styles.cartPrice}>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
                <p>{product.price} $</p>
              </div>
              <h3>{product.title}</h3>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
