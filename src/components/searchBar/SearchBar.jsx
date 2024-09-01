import { Toaster, toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchForm({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <header className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="topic"
            type="text"
            className={styles.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </header>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
