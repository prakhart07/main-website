import React from "react";
import '../CSS/careers.css';
import { useNavigate } from "react-router-dom";


export default function JobPage({ data }) {
  const Navigate=useNavigate();
  if (!data) return null;


  function applyPage(){
    Navigate('/apply');
  }
  return (
    <main className="wrap" aria-labelledby="job-title">
      <article className="job-card">
        <header className="job-header">
          <h1 id="job-title">{data.title}</h1>
          <ul className="job-meta" role="list">
            {data.metaRows.map((m, i) => (
              <li key={i}>
                <span aria-hidden="true" className="meta-ico">{m.icon}</span>
                {m.text}
              </li>
            ))}
          </ul>
        </header>

        <section className="section">
          <h2>Overview</h2>
          <p>{data.overview}</p>
        </section>

        <section className="section">
          <h2>Responsibilities</h2>
          <ul className="bullets">
            {data.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="section">
          <h2>Requirements</h2>
          <ul className="bullets">
            {data.requirements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <footer className="card-footer">
          <button type="button" className="apply-btn" aria-label={`Apply for ${data.title}`} onClick={applyPage}>
            {data.ctaLabel}
          </button>
        </footer>
      </article>
    </main>
  );
}
