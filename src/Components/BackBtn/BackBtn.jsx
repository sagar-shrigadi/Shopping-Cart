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
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Back
    </button>
  );
}
