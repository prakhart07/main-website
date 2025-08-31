import React from "react";
import "../CSS/client.css";
import img from '../images/Cloud9IDE.png';
import img2 from '../images/ignitive_software_labs_pvt_ltd_logo.jpg';
import img3 from '../images/Screenshot 2025-01-14 165548 (1).png';
import img5 from '../images/Screenshot 2025-04-01 000958.png';
import img6 from '../images/Screenshot 2025-03-11 161513.png';
import img7 from '../images/Screenshot 2025-08-30 224423.png';
import img8 from '../images/logo.png';
import img9 from '../images/logomarc.png';
import img10 from '../images/Blue_Rounded_Rectangle_Accounting_Logo-removebg-preview.png';
import img11 from '../images/WhatsApp Image 2025-08-30 at 10.50.33 PM.jpeg';


const logos = [
    { image: img11 },
    { image: img9 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img5 },
    { image: img3 },
    { image: img10 },
    { image: img2 },
    { image: img },
];

function Clients() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Duplicate logos for smooth infinite scroll */}
        {logos.concat(logos).map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo.image} alt={`client-${index}|| image`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
