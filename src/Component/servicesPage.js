import React from "react";
import "../CSS/services.css";
import cityImage from "../images/digital.png"; // replace with your image
import cityImage2 from "../images/web.png"; // replace with your image
import { image } from "framer-motion/client";

const services = [
  {
  title: "Website Design",
  desc: "Modern, responsive websites built for speed, SEO, and conversion—launched fast and easy to update.",
  icon: "bi bi-laptop",
  image: cityImage
},
{
  title: "App developmment",
  desc: "From MVP to scalable product—secure, performant apps with clean UX and robust APIs.",
  icon: "bi bi-phone",
  image: cityImage
},
{
  title: "Custom Software",
  desc: "Tailored systems that streamline workflows and integrate with existing tools to cut manual work.",
  icon: "bi bi-cpu",
  image: cityImage
},
{
  title: "Cloud Services",
  desc: "Migrate, optimize, and manage on AWS/GCP/Azure with secure, cost‑efficient architecture.",
  icon: "bi bi-cloud-arrow-up",
  image: cityImage
},
{
  title: "Database Migration",
  desc: "Zero‑downtime planning, schema transformation, and data validation from legacy to modern DBs.",
  icon: "bi bi-database-gear",
  image: cityImage
},
{
  title: "AI Modeling",
  desc: "Turn data into predictions with ML pipelines—training, evaluation, and deployment to production.",
  icon: "bi bi-robot",
  image: cityImage
},
{
  title: "Digital Marketing",
  desc: "SEO, ads, and content that turn traffic into leads—with tracking and clear ROI reporting.",
  icon: "bi bi-graph-up-arrow",
  image: cityImage
},
{
  title: "Graphic Design",
  desc: "Brand‑aligned visuals—social creatives, ads, pitch decks, and print assets that stand out.",
  icon: "bi bi-palette",
  image: cityImage
},
{
  title: "Tech Support",
  desc: "Proactive monitoring and on‑call support to keep systems reliable and users productive.",
  icon: "bi bi-headset",
  image: cityImage
}

];

function ServicesPage(){
  return (
    <>
    <section id="home" className="home-image">
          {/* <h2>Home / Careers</h2> */}
        </section>
    <div className="services-container">
      {/* Left Section */}
      <div class="d-flex align-items-stretch">
      <h1 class="vertical-text">SERVICES</h1>
      </div>
      <div className="services-left">
        {/* <p className="explore">EXPLORE</p> */}
        <h2>
          <span className="highlight">GenkaiX</span> SERVICES
        </h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
            className="service-card"
            key={idx}
            style={{ ['--card-bg']: `url(${service.image})` }} // image per card
            >
            <div className="service-icon align-items-center">
                <i className={service.icon}></i>
            <h4>{service.title}</h4>
            </div>
            <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="services-right">
        <img src={cityImage} alt="city" className="services-img" />
        <div className="overlay"></div>
      </div> */}
    </div>
    </>
  );
};

export default ServicesPage;


//website,app,software,cloud,database migration,AI modeling,digital marketing,graphic design,tech support