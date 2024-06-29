// src/components/ImageModal.js
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="image-modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image.src} alt={image.alt} />
      <div className="caption">{image.alt}</div>
      <span className="prev" onClick={onPrev}>&#10094;</span>
      <span className="next" onClick={onNext}>&#10095;</span>
    </div>
  );
};

export default ImageModal;
