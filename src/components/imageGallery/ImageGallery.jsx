import React from "react";
import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {items.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <div
            className={styles.imageContainer}
            onClick={() => onImageClick(image)}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description || "Image"}
              className={styles.image}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
