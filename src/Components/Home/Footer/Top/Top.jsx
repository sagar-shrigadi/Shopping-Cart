import styles from "./Top.module.css";
export function Top() {
  return (
    <article className={styles.top}>
      <div data-testid="topFooterLinksContainer1">
        <a href="#">FAQ</a>
        <a href="#">Our Company</a>
        <a href="#">News</a>
        <a href="#">Legal Informations</a>
      </div>
      <div data-testid="topFooterLinksContainer2">
        <a href="#">Help Centre</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Contact Us</a>
      </div>
      <div data-testid="topFooterLinksContainer3">
        <a href="#">Reviews</a>
        <a href="#">Blog</a>
        <a href="#">Email Sign-up</a>
        <a href="#">Purchasing Guide</a>
      </div>
    </article>
  );
}
