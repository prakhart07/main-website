import { useMemo, useState } from 'react';
import '../CSS/careers.css';
import JobPage from './jobPage';

const meta = [
  {
  id: "digital-marketing-intern",
  title: "Digital Marketing Intern",
  posted: "Aug 29, 2025",
  metaRows: [
    { icon: "👤", text: "Experience: 0-Fresher (Internship)" },
    { icon: "🛠️", text: "Skills: SEO, Social Media, Content, PPC, Email" },
    { icon: "📅", text: "Posted: Aug 29, 2025" }
  ],
  overview:
    "As a Digital Marketing Intern, support the marketing team in planning and executing campaigns across social media, SEO, email, and content. Assist with research, asset creation, publishing, and performance analysis while learning industry tools and best practices in a fast‑paced environment.",
  responsibilities: [
    "Assist in creating and scheduling social posts across platforms (e.g., Instagram, LinkedIn, X).",
    "Conduct keyword research and help optimize website/blog content for SEO.",
    "Support email marketing by building lists, preparing newsletters, and tracking results.",
    "Help produce content assets such as short posts, basic graphics, and blog snippets.",
    "Monitor campaign metrics in tools like Google Analytics and prepare simple reports.",
    "Research competitor activity and audience trends to inform new ideas.",
    "Collaborate with marketing, design, and sales on ongoing initiatives."
  ],
  requirements: [
    "Pursuing or recently completed any degree in Marketing, Communications,Engineering or any field.",
    "Familiarity with digital marketing concepts (SEO, SMM, email, basic analytics).",
    "Comfort using social scheduling tools and spreadsheets or dashboards.",
    "Clear written communication and basic content creation skills.",
    "Detail‑oriented, organized, and eager to learn in a team environment.",
    "Plus: exposure to Google Analytics/Looker Studio, Canva, or basic Graphics"
  ],
  ctaLabel: "Apply Now"
}
,
  {
  id: "ui-ux-intern",
  title: "UI/UX Intern",
  posted: "Aug 29, 2025",
  metaRows: [
    { icon: "👤", text: "Experience: 0–1 year (Internship)" },
    { icon: "🛠️", text: "Skills: Figma, Wireframing, Prototyping, User Research" },
    { icon: "📅", text: "Posted: Aug 29, 2025" }
  ],
  overview:
    "Support the product/design team by creating wireframes, mockups, and interactive prototypes, assisting with user research and usability testing, and iterating designs based on feedback to deliver clear, accessible interfaces.",
  responsibilities: [
    "Create wireframes, low/high‑fidelity mockups, and clickable prototypes.",
    "Assist with user research, interviews, and usability testing; synthesize insights.",
    "Document user flows, journeys, and information architecture.",
    "Contribute to design systems and component libraries in Figma.",
    "Collaborate with product managers and engineers during handoff and QA.",
    "Incorporate accessibility and platform guidelines into designs."
  ],
  requirements: [
    "Pursuing or recently completed a degree/certification in Design, HCI, or related field.",
    "Portfolio showcasing UI/UX work (wireframes, prototypes, case studies).",
    "Proficiency with Figma or similar tools; basic understanding of UX process.",
    "Clear communication, openness to feedback, and strong attention to detail.",
    "Plus: familiarity with accessibility basics and HTML/CSS."
  ],
  ctaLabel: "Apply Now"
},
{
  id: "graphic-designer-intern",
  title: "Graphic Designer Intern",
  posted: "Aug 29, 2025",
  metaRows: [
    { icon: "👤", text: "Experience: 0–1 year (Internship)" },
    { icon: "🛠️", text: "Skills: Adobe Photoshop, Illustrator, Canva, Branding" },
    { icon: "📅", text: "Posted: Aug 29, 2025" }
  ],
  overview:
    "Work with the creative team to produce brand‑aligned visuals for social media, web, and campaigns. Adapt design concepts across formats while maintaining consistency and deadlines.",
  responsibilities: [
    "Design social posts, banners, thumbnails, and basic motion/animated assets.",
    "Prepare print/digital collaterals (flyers, posters, one‑pagers).",
    "Follow brand guidelines and help refine visual systems and templates.",
    "Collaborate with marketing to turn briefs into clear visual concepts.",
    "Export production‑ready files and organize source assets."
  ],
  requirements: [
    "Portfolio demonstrating composition, color, and typography skills.",
    "Hands‑on with Photoshop/Illustrator; familiarity with Figma/Canva.",
    "Understanding of aspect ratios, export settings, and file management.",
    "Ability to iterate quickly from feedback and meet timelines.",
    "Plus: basic video editing or motion graphics exposure."
  ],
  ctaLabel: "Apply Now"
},
{
  id: "hr-intern",
  title: "HR Intern",
  posted: "Aug 29, 2025",
  metaRows: [
    { icon: "👤", text: "Experience: 0–1 year (Internship)" },
    { icon: "🛠️", text: "Skills: Recruitment Support, Coordination, MS Excel, Communication" },
    { icon: "📅", text: "Posted: Aug 29, 2025" }
  ],
  overview:
    "Support HR operations across recruitment coordination, onboarding, and records. Assist with sourcing, scheduling, documentation, and HR reporting while learning core people processes.",
  responsibilities: [
    "Assist with sourcing, screening resumes, and interview scheduling.",
    "Coordinate candidate communication and feedback tracking.",
    "Support onboarding: documentation, orientation logistics, and checklists.",
    "Maintain HR databases/spreadsheets and help generate simple reports.",
    "Assist with engagement activities and policy communication."
  ],
  requirements: [
    "Pursuing or recently completed a degree in HR/Business or related field.",
    "Strong organization and communication skills; attention to detail.",
    "Comfort with spreadsheets and basic HR documentation.",
    "Professionalism and confidentiality with sensitive information.",
    "Plus: exposure to ATS/HRIS tools."
  ],
  ctaLabel: "Apply Now"
},
{
  id: "management-trainee",
  title: "Management Trainee",
  posted: "Aug 29, 2025",
  metaRows: [
    { icon: "👤", text: "Experience: 0–1 year Fresher (Entry Level)" },
    { icon: "🛠️", text: "Skills: Analytics, Problem‑Solving, Communication, MS Excel/Slides" },
    { icon: "📅", text: "Posted: Aug 29, 2025" }
  ],
  overview:
    "Rotate across functions (e.g., operations, marketing, sales, product) to learn core business processes, analyze data, and contribute to projects while building leadership and cross‑functional collaboration skills.",
  responsibilities: [
    "Support functional teams with research, data analysis, and reporting.",
    "Assist project managers with planning, tracking, and documentation.",
    "Prepare presentations, dashboards, and meeting notes.",
    "Identify process gaps and propose improvements with measurable impact.",
    "Collaborate with multiple stakeholders to deliver milestones."
  ],
  requirements: [
    "Bachelor’s/Master’s in Business, Engineering, Economics, or related field.",
    "Strong analytical and problem‑solving abilities; proficiency with Excel/Sheets.",
    "Clear written and verbal communication; stakeholder coordination.",
    "Adaptability to rotating roles and fast‑paced environments.",
    "Plus: familiarity with SQL/BI dashboards or basic financial modeling."
  ],
  ctaLabel: "Apply Now"
}

];

function Jobs(){

      const [selectedId, setSelectedId] = useState(meta.id);
  const job = useMemo(() => meta.find(j => j.id === selectedId), [selectedId]);

    return(
        <>
        <section id="home" className="home">
          <h2>Careers</h2>
        </section>
            <div className=''>
                <div className="section-head-1 col-sm-12" style={{textAlign: 'center'}}>
              <h4 style={{marginTop: '-5rem'}} id="portfolio"><span></span>Internships</h4>
              <p>The objective of Genkaix is to enable a large number of youth to take up <br />industry-relevant skill training that will help them<br /> in securing a better livelihood.
              </p>
            </div>
      {/* simple selector to switch openings */}
      <nav className="job-switch">
        {meta.map(j => (
          <button
            key={j.id}
            className={`job-switch-btn ${selectedId === j.id ? "is-active" : ""}`}
            onClick={() => setSelectedId(j.id)}
          >
            {j.title}
          </button>
        ))}
      </nav>
        <div>
      <JobPage data={job} />
        </div>
    </div>
    </>
    )
}
export default Jobs;