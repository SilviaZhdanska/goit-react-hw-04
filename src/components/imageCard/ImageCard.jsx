import React from "react";
import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  return (
    <div style={{ cursor: "pointer" }} className={styles.card}>
      <img
        onClick={onImageClick}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        style={{ width: "100%", height: "auto" }}
        className={styles.image}
      />
    </div>
  );
}
