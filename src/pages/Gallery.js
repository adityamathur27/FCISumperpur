

import React from 'react';
import './Gallery.css';
import GalleryCarousel from '../components/GalleryCarousel';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Photo Gallery</h2>
      <GalleryCarousel />
    </section>
  );
}

export default Gallery;
