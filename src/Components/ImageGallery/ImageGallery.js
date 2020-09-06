import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.scss";

import PropTypes from "prop-types";

const ImageGallery = ({ modal, images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((el) => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          modal={modal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  modal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
