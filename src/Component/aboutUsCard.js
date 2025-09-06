import React, { useState } from "react";
import "../CSS/aboutUsCard.css"; 
import prakharImage from "../images/prakhar.jpeg";

const AboutUsCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => setShowDetails(!showDetails);

  return (
    <div className="about-container">
      {/* Card Section */}
      <div className="team-card">
        <div className="team-image">
          <img src={prakharImage} alt="Prakhar Tripathi" />
          <a
            href="https://www.linkedin.com/in/prakhar-tripathi07"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <i className="fas fa-linkedin"></i>
          </a>
        </div>
        <div className="team-info">
          <h3>Prakhar Tripathi</h3>
          <p>Founder</p>
          <hr />
          <button className="read-more" onClick={handleToggle}>
            {showDetails ? "HIDE DETAILS ←" : "READ MORE →"}
          </button>
        </div>
      </div>

      {/* Details Section (appears beside the image card) */}
      {showDetails && (
        <div className="team-details">
          <h2>Prakhar Tripathi</h2>
          <p>
            Role: Founder
          </p>
          <p>
            <strong> <i class="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/prakhar-tripathi07"></i> &nbsp;  | &nbsp;<i class="fa fa-envelope fa-lg" ></i></strong> 
          </p>
          <p>
            Prakhar leads at the crossroads of technology and business outcomes, turning strategy into products that ship and scale. 
            With hands‑on experience architecting modern solutions,
             he sets the vision, aligns teams around clear goals, and keeps execution focused on measurable impact.
          </p>
          <p>
            His priorities include empowering organizations with secure, scalable IT, cultivating a culture of curiosity and high standards, 
            and delivering results clients can see—in faster launches, better performance, and smarter decisions
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUsCard;
