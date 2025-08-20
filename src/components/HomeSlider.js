import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import AdmissionStarburst from "./AdmissionButton"; // <-- import your button
import img1 from "../assets/images/home page photo/1.webp";
import img2 from "../assets/images/home page photo/2.webp";
import img3 from "../assets/images/home page photo/3.webp";
import img4 from "../assets/images/home page photo/4.webp";
import img5 from "../assets/images/home page photo/5.webp";
import img6 from "../assets/images/home page photo/6.webp";
import img7 from "../assets/images/home page photo/7.webp";
import img8 from "../assets/images/home page photo/8.webp";
import img9 from "../assets/images/home page photo/9.webp";
import "./HomeSlider.css";

const images = [
  { src: img1, caption: "Placement Banner" },
  { src: img2, caption: "Student Session 1" },
  { src: img3, caption: "Student Session 2" },
  { src: img4, caption: "Lab Session 1" },
  { src: img5, caption: "Front View" },
  { src: img6, caption: "Kitchen" },
  { src: img7, caption: "Side View" },
  { src: img8, caption: "Classroom" },
  { src: img9, caption: "Mess" },
];

function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-wrapper">
      {/* Starburst Button Overlay */}
      <AdmissionStarburst />

      <Carousel activeIndex={index} onSelect={setIndex} fade interval={null}>
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img.src} alt={img.caption} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeSlider;
