import Modal from "react-modal";
import styles from "./ImageModale.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "white",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.modalContent}>
          <h2>{image.alt_description || "Image"}</h2>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={styles.modalImage}
          />
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
