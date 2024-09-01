import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={styles.error}>
      Error loading images. Please try again later.
    </div>
  );
}
