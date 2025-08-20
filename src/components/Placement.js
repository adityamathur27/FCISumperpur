import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Placement.css";

// Auto-import logos
function importAll(r) {
  return r.keys().map(r);
}
const logos = importAll(
  require.context("../assets/images/Placement Partners", false, /\.(webp)$/)
);

export default function PlacementPartners() {
  const logosPerPage = 4;
  const totalPages = Math.ceil(logos.length / logosPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const startIndex = currentPage * logosPerPage;
  const visibleLogos = logos.slice(startIndex, startIndex + logosPerPage);

  return (
    <div className="placement-wrapper">
      <h2 className="placement-heading">Placement Partners</h2>

      <div className="placement-slider-wrapper">
        <button className="placement-nav-btn left" onClick={prevPage} aria-label="Previous">
          <FaChevronLeft />
        </button>

        <div className="placement-grid">
          {visibleLogos.map((logo, index) => (
            <div className="placement-card" key={index}>
              <img
                src={logo}
                alt={`Placement Partner ${index + 1}`}
                className="placement-logo"
              />
            </div>
          ))}
        </div>

        <button className="placement-nav-btn right" onClick={nextPage} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="dot-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
