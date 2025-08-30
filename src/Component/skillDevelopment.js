import { useState } from "react";
// import '../CSS/style.css';
import '../CSS/careers.css';
import img1 from '../images/generated-image (4).png'

const events = [
  {
    id: 1,
    category: "Career",
    title: "The Harsh Truth: Your Career Plateau Isn’t Just Bad Luck",
    image: img1,
    date: "Friday, 29 Aug, 2025",
    time: "4:00pm to 5:00pm",
  },
  {
    id: 2,
    category: "Marketing",
    title: "From Marketing Executive to Digital Growth Leader",
    image: img1,
    date: "Friday, 29 Aug, 2025",
    time: "5:00pm to 6:00pm",
  },
  {
    id: 3,
    category: "AI",
    title: "Automation & AI in Digital Marketing: From Leads to Loyalty",
    image: img1,
    date: "Friday, 29 Aug, 2025",
    time: "8:00pm to 9:00pm",
  },
  {
    id: 4,
    category: "UI/UX",
    title: "UI/UX Portfolio Mastery: Design & Present with Framer",
    image: img1,
    date: "Saturday, 30 Aug, 2025",
    time: "10:00am to 12:00pm",
  },
  {
    id: 5,
    category: "Marketing",
    title: "10x your Social Media Growth",
    image: img1,
    date: "Saturday, 30 Aug, 2025",
    time: "3:30pm to 5:30pm",
  },
  {
    id: 6,
    category: "Development",
    title: "Becoming a Full Stack Developer: Step-by-Step Roadmap",
    image: img1,
    date: "Saturday, 30 Aug, 2025",
    time: "6:00pm to 9:00pm",
  },
];

const categories = ["All", "Career", "Marketing", "AI", "UI/UX", "Development"];

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
                    <h2>Home / Careers</h2>
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
        <div className="card h-100 shadow-lg">
          <img
            src={event.image}
            className="card-img-top"
            alt={event.title}
          />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">
              <i className="bi bi-calendar-event"></i> {event.date}
              <br />
              <i className="bi bi-clock"></i> {event.time}
            </p>
            <button className="btn btn-danger w-100">Register Now</button>
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