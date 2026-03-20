import { useNavigate } from "react-router";
import styles from "./BackBtn.module.css";

export function BackBtn() {
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };
  return (
    <button
      type="button"
      className={styles.back}
      onClick={backBtn}
      data-testid="backBtn"
    >
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
        class="lucide lucide-chevron-left-icon lucide-chevron-left"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Back
    </button>
  );
}
