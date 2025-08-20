import { useEffect, useState } from "react";
import "./AdmissionButton.css";
import AdmissionForm from "../../src/assets/pdfs/Admission_Form.pdf";
import image from "../assets/images/admission.gif";

const AdmissionStarburst = ({ text = "ADMISSION OPEN" }) => {
  const [size, setSize] = useState(getResponsiveSize());

  function getResponsiveSize() {
    if (window.innerWidth <= 480) return 80;  // Mobile
    if (window.innerWidth <= 768) return 100;  // Tablet
    return 150; // Desktop
  }

  useEffect(() => {
    const handleResize = () => setSize(getResponsiveSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="starburst-wrap">
      <a
        href={AdmissionForm}
        target="_blank"
        rel="noreferrer"
        className="starburst-link"
        aria-label={text}
        title={text}
      >
        <img
          src={image}
          alt={text}
          className="starburst-gif"
          style={{ width: `${size}px`, height: `${size - 50}px` }}

        />
      </a>
    </div>
  );
};

export default AdmissionStarburst;
