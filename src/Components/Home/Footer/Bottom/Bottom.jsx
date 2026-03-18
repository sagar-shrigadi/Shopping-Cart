import styles from "./Bottom.module.css";
// import copyright from "../../../../assets/copyright.svg";
export function Bottom() {
  return (
    <article className={styles.bottom}>
      <div className={styles.copy}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-copyright-icon lucide-copyright"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className={styles.links} data-testid="bottomFooterLinksContainer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Terms and Conditions</a>
      </div>
    </article>
  );
}
