import React from 'react';

import Hero from '../components/Hero';
import HomeSlider from '../components/HomeSlider';
import NewsTicker from '../components/NewsTicker';
import Gallery from '../components/GalleryCarousel';
import Placement from '../components/Placement';
import Testimonials from '../components/Testimonials';
import WhatsAppIcon from '../components/WhatsAppIcon';


function Home() {
  return (
    <>
      <NewsTicker />
      <HomeSlider />      
      <Hero />
      <Gallery />
      <Placement />
      <Testimonials />
      <WhatsAppIcon />
    </>
  );
}

export default Home;
