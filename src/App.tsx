import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';

const timeline = [
  { year: '2020–2021', company: 'Kingsmen Vietnam', projects: [
    { name: 'Gamuda Vietnam — Christmas & Tet Decoration', type: 'Seasonal / Property Activation', role: 'Event Coordinator', detail: 'Contractor coordination · Drawing-to-site execution · Client coordination · Timeline control' },
  ]},
  { year: '2022', company: 'Kingsmen Vietnam', projects: [
    { name: 'Prada — Exhibition Room Setup', type: 'Exhibition', role: 'Event Coordinator', detail: 'Setup coordination · Technical execution · Onsite support' },
    { name: 'Tokyo Festival — Saigon Centre', type: 'Exhibition', role: 'Event Coordinator', detail: 'Drawing → Timeline → Technical Check → Mall Coordination → Inspection → Handover' },
    { name: 'Decathlon — Store Setup', type: 'Retail Project', role: 'Event Coordinator', detail: 'Contractor coordination · Mall coordination · Site troubleshooting · Handover' },
    { name: 'Keppel Land — Recycled Art Exhibition', type: 'Exhibition', role: 'Event Coordinator', detail: 'Setup supervision · Artwork & POSM logging · Event-day support' },
  ]},
  { year: '2023', company: 'Kingsmen Vietnam', projects: [
    { name: 'Forbes Business Forum', type: 'Business Event', role: 'Event Executive', detail: 'Construction supervision · Manpower coordination · AAM support · Onsite operations' },
  ]},
  { year: '2024', company: 'Kingsmen Vietnam', projects: [
    { name: 'CapitaLand — The Lumi', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Project execution · Vendor coordination · Onsite delivery' },
    { name: 'CapitaLand — Sycamore', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Project execution · Vendor coordination · Onsite delivery' },
    { name: 'CapitaLand — The Orchard Hill', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Setup coordination · Technical delivery · Event operations' },
    { name: 'Blum — B2B Booth', type: 'B2B Exhibition', role: 'Event Coordinator', detail: 'Booth setup · Contractor coordination · Onsite execution' },
  ]},
  { year: '2025', company: 'KKO.vn', projects: [
    { name: 'GESO — Business Forum', type: 'Business Forum / Booth', role: 'Event Project Support', detail: 'Booth setup · Team coordination · Onsite execution' },
  ]},
  { year: '2026', company: 'Kingsmen Vietnam · KKO.vn · Tâm Anh Research Institute', projects: [
    { name: 'Gladia Heights — Kick-off Event', type: 'Kick-off / Real Estate', role: 'Event Coordinator', detail: 'Project coordination · Setup · Onsite execution' },
    { name: 'Panasonic — DERGO', type: 'B2B Exhibition', role: 'Event Project Support', detail: 'B2B booth execution · Setup coordination · Onsite delivery' },
    { name: 'Mộc Châu Creamery — Product Launch', type: 'Product Launch', role: 'Event Project Support', detail: 'AEON Mall Tân Phú · Launch setup · Product introduction event' },
    { name: 'Medical & Pharmaceutical Events', type: 'Scientific / Medical Events', role: 'Event / Project Coordinator', detail: 'Regulatory submission → Expert contracts → POSM → Vendor coordination → Execution → Reporting' },
  ]},
];

const capabilities = [
  'Project Coordination', 'Event Execution', 'Client Communication', 'Vendor & Contractor Management',
  'Venue / Mall Coordination', 'Expert & Speaker Coordination', 'POSM Briefing', 'Event Documentation & Reporting'
];

export default function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THỊNH / 2026</a>
        <div className="nav-links">
          <a href="#timeline">Timeline</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="eyebrow"><span className="dot"/> EVENT PROJECT PORTFOLIO · 2020—2026</div>
        <div className="hero-grid">
          <div>
            <h1>EVENT<br/>PROJECT<br/><em>COORDINATOR</em></h1>
          </div>
          <div className="hero-side">
            <p className="hero-name">ĐINH VŨ TIẾN THỊNH</p>
            <p>Corporate Events · B2B · Exhibition · Retail · Medical Events</p>
            <p className="muted">From brief to execution, I coordinate the people, timelines and details that bring projects to life.</p>
            <a className="cta" href="#timeline">Explore my timeline <ArrowDown size={18}/></a>
          </div>
        </div>
        <div className="hero-strip">
          <span>6+ YEARS</span><span>MULTIPLE INDUSTRIES</span><span>ONE FOCUS: MAKING PROJECTS HAPPEN</span>
        </div>
      </section>

      <section id="about" className="intro section-shell">
        <div className="section-label">01 / PROFILE</div>
        <div className="intro-grid">
          <h2>COORDINATE.<br/>EXECUTE.<br/>SOLVE.<br/>DELIVER.</h2>
          <div>
            <p className="lead">Event and project coordination professional with 6+ years of experience across corporate events, exhibitions, retail projects, real estate launches, B2B forums and medical events.</p>
            <div className="process">BRIEF <span>→</span> PLAN <span>→</span> COORDINATE <span>→</span> EXECUTE <span>→</span> HANDOVER <span>→</span> REPORT</div>
          </div>
        </div>
      </section>

      <section id="timeline" className="timeline section-shell">
        <div className="section-label">02 / CAREER & PROJECT TIMELINE</div>
        <div className="timeline-head">
          <h2>2020 → 2026</h2>
          <p>A project-led timeline showing what I worked on, where I contributed and how my role evolved.</p>
        </div>

        <div className="timeline-list">
          {timeline.map((group) => (
            <article className="year-block" key={group.year}>
              <div className="year-rail">
                <span className="year">{group.year}</span>
                <span className="rail-dot"/>
              </div>
              <div className="year-content">
                <div className="company"><BriefcaseBusiness size={16}/> {group.company}</div>
                {group.projects.map((project, index) => (
                  <div className="project" key={project.name}>
                    <div className="project-num">{String(index + 1).padStart(2,'0')}</div>
                    <div className="project-main">
                      <div className="project-meta"><span>{project.type}</span><span>{project.role}</span></div>
                      <h3>{project.name}</h3>
                      <p>{project.detail}</p>
                    </div>
                    <ArrowUpRight className="project-arrow" size={22}/>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured section-shell">
        <div className="section-label">03 / FEATURED CASE STUDIES — IMAGE MAPPING IN PROGRESS</div>
        <div className="featured-grid">
          <div className="feature-card feature-dark"><div className="feature-index">01</div><div><span>BUSINESS EVENT · 2023</span><h3>FORBES BUSINESS FORUM</h3><p>Construction supervision · Manpower coordination · Onsite operations</p></div></div>
          <div className="feature-card feature-light"><div className="feature-index">02</div><div><span>RETAIL PROJECT · 2022</span><h3>DECATHLON STORE SETUP</h3><p>Contractor management · Mall coordination · Site troubleshooting</p></div></div>
          <div className="feature-card feature-mid"><div className="feature-index">03</div><div><span>MEDICAL EVENTS · 2026</span><h3>TÂM ANH RESEARCH INSTITUTE</h3><p>Regulatory · Experts · POSM · Vendors · Execution · Reporting</p></div></div>
        </div>
      </section>

      <section className="capabilities section-shell">
        <div className="section-label">04 / WHAT I DO</div>
        <div className="cap-grid">
          {capabilities.map((cap, i) => <div className="cap" key={cap}><span>{String(i+1).padStart(2,'0')}</span><p>{cap}</p></div>)}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="section-label">05 / CONTACT</div>
        <h2>LET'S MAKE<br/><em>PROJECTS HAPPEN.</em></h2>
        <div className="contact-row">
          <span><CalendarDays size={16}/> Available for event / project opportunities</span>
          <span><MapPin size={16}/> Ho Chi Minh City, Vietnam</span>
        </div>
      </section>

      <footer className="footer section-shell"><span>© 2026 ĐINH VŨ TIẾN THỊNH</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
