// src/App.js
import React from 'react';
import ImageGallery from './components/ImageGallery';
import './App.css';

const images = [
  { id: 1, src: 'image1.jpg', alt: 'Image 1' },
  { id: 2, src: 'image2.jpg', alt: 'Image 2' },
  { id: 3, src: 'image3.jpg', alt: 'Image 3' },
  { id: 4, src: 'image4.jpg', alt: 'Image 4' },
  // Add more images here
];

const App = () => {
  return (
    <div className="app">
      <h1>My Image Gallery:</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
