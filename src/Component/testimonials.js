// Testimonials.jsx
import { useState, useRef, useEffect } from "react";
import '../CSS/testimonials.css';
import image1 from '../images/testimonial-1.jpg';
import image2 from '../images/testimonial-2.jpg';
import image3 from '../images/testimonial-3.jpg';
import image4 from '../images/testimonial-4.jpg';
import image5 from '../images/testimonial-5.jpg';
// import '../CSS/style.css';

// testimonials.data.js
 const testimonials = [
  {
    id: 1,
    name: "Vikas kanade",
    role: "Accuduck",
    quote: "Clear communication and great results.",
    avatar: image1
  },
  {
    id: 2,
    name: "Manish",
    role: "M.ark Design",
    quote: "They delivered on time and exceeded expectations.",
    avatar: image2
  },
  {
    id: 3,
    name: "Vicky",
    role: "UnitechAlgo",
    quote: "A reliable partner for our growth.",
    avatar: image3
  },
  {
    id: 4,
    name: "Rushikesh",
    role: "Ad-Agency",
    quote: "Thoughtful strategy and clean execution.",
    avatar: image4
  },
  {
    id: 5,
    name: "Manoj",
    role: "mDesiEng",
    quote: "Would recommend them to any founder.",
    avatar: image5
  }
];


export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const regionRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const goTo = (i) => setIndex(i);

  const [isPaused, setIsPaused] = useState(false);

const handleMouseEnter = () => setIsPaused(true);
const handleMouseLeave = () => setIsPaused(false);
const handleFocusIn = () => setIsPaused(true);
const handleFocusOut = () => setIsPaused(false);

useEffect(() => {
  if (isPaused) return;

  const id = setInterval(() => {
    setIndex((i) => (i + 1) % total);
  }, 2000); // 4s per slide

  return () => clearInterval(id);
}, [isPaused, total]);


  // Keyboard support on the region
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [total]);

  const t = testimonials[index];

  return (
    <section
      className="testimonials container"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      aria-live="polite"
      tabIndex={0}
      ref={regionRef}
      onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onFocus={handleFocusIn}
  onBlur={handleFocusOut}
    >
      <header className="section-header text-center">
        <h2>Testimonials</h2>
        {/* <p>See what people have to say about us</p> */}
      </header>

      <div className="testimonial-card">
        {/* <img className="avatar" src={t.avatar} alt={`${t.name} photo`} /> */}
        <blockquote className="quote">“{t.quote}”</blockquote>
        <div className="meta">
          <h3 className="name">{t.name}</h3>
          <p className="role">{t.role}</p>
        </div>
      </div>

      <div className="controls">
        <button
          type="button"
          className="btn-nav prev"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <ul className="dots" role="tablist" aria-label="Select testimonial">
          {testimonials.map((_, i) => (
            <li key={i} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`tpanel-${i}`}
                tabIndex={i === index ? 0 : -1}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="visually-hidden">Go to testimonial {i + 1}</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn-nav next"
          onClick={next}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
