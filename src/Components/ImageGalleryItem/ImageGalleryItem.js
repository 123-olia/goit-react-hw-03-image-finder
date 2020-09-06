import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ webformatURL, largeImageURL, modal }) => {
  return (
    <li
      onClick={() => {
        modal(largeImageURL);
      }}
      className={styles.ImageGalleryItem}
    >
      <img
        src={webformatURL}
        alt="One of the images"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  modal: PropTypes.func,
};

export default ImageGalleryItem;
