import { useState } from "react";
// import '../CSS/style.css';
import '../CSS/careers.css';
import img1 from '../images/Yellow White Illustrative Gradient Important Announcement Instagram Post_20250831_192211_0000.png';
import img2 from '../images/Blue White Modern Important Announcement Instagram Post_20250831_205631_0000.png';
import img3 from '../images/Green White Illustrative Important Announcement Instagram Post_20250831_205034_0000.png';
import img4 from '../images/Red Orange and Yellow Modern Job Fair Flyer_20250831_211052_0000.png';
import img5 from '../images/Turquoise and Orange Retro Illustration Now Hiring Flyer_20250831_210114_0000.png';
import img6 from '../images/Purple and White Professional Minimalist Digital Marketing Webinar Instagra_20250901_224030_0000.png';
import img7 from '../images/Yellow and Blue Modern Marketing Course Sale Instagram Post_20250901_233948_0000.png';

const events = [
  {
    id: 1,
    category: "Marketing",
    title: "Digital Marketing Certification",
    image: img1,
    date: "22nd September, 2025",
    time: "3-4 Weeks",
  },
  {
    id: 2,
    category: "Development",
    title: "HTML+CSS Certification",
    image: img3,
    date: "22nd September, 2025",
    time: "2-3 Weeks",
  },
  {
    id: 3,
    category: "Development",
    title: "JS+REACT Certification",
    image: img3,
    date: "22nd September, 2025",
    time: "4-5 Weeks",
  },
  {
    id: 4,
    category: "Skills",
    title: "Basic Computer Certification",
    image: img4,
    date: "22nd September, 2025",
    time: "3-4 Weeks",
  },
  {
    id: 5,
    category: "Interview",
    title: "Interview(Technical+HR)",
    image: img5,
    date: "22nd September, 2025",
    time: "2-3 Weeks",
  },
  {
    id: 6,
    category: "Interview",
    title: "BPO Interview",
    image: img5,
    date: "22ndSeptember, 2025",
    time: "1-2 Weeks",
  },
  {
    id: 7,
    category: "Development",
    title: "Data Structure & Algorithms Certification",
    image: img2,
    date: "22nd September, 2025",
    time: "4-5 Weeks",
  },
  {
    id: 8,
    category: "Development",
    title: "Core JAVA Certification",
    image: img7,
    date: "22nd September, 2025",
    time: "4-5 Weeks",
  },
  {
    id: 9,
    category: "Interview",
    title: "Campus Recruitment Training",
    image: img6,
    date: "22nd September, 2025",
    time: "4-5 Weeks",
  },
];

const categories = ["All", "Skills", "Marketing", "Development","Interview"];

function SkillDevelopment(){

    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

    return(
             <div>
                <div>
                        <section id="home" className="home">
                    <h2>Careers</h2>
                </section>
                </div>
      {/* Category Filter */}
      <div className="col-12 d-flex flex-wrap justify-content-center gap-4 my-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn mx-2 my-2 ${
              selectedCategory === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Cards Grid */}
      <div className="container">
  <div className="row g-4">
    {filteredEvents.map((event) => (
      <div key={event.id} className="col-md-4 my-3">
        <div className="card h-100 shadow-lg ">
          <img
            src={event.image}
            className="card-img-top"
            alt={event.title}
          />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">
              <i className="bi bi-calendar-event"></i> New Batch: {event.date}
              <br />
              <i className="bi bi-clock"></i> Course Duration: {event.time}
            </p>
            <button className="btn">Register Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    )
}
export default SkillDevelopment;