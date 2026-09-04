import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin, X } from 'lucide-react';

type Project = {
  id: string;
  name: string;
  type: string;
  role: string;
  detail: string;
  image?: string;
  overview?: string;
  handled?: string[];
  flow?: string;
};

const ASSET_BASE = 'https://raw.githubusercontent.com/davidthinh3010-maker/thinh-event-project-portfolio/main/public/assets';

const timeline: { year: string; company: string; projects: Project[] }[] = [
  { year: '2020–2021', company: 'Kingsmen Vietnam', projects: [
    { id: 'gamuda', name: 'Gamuda Vietnam — Christmas & Tet Decoration', type: 'Seasonal / Property Activation', role: 'Event Coordinator', detail: 'Contractor coordination · Drawing-to-site execution · Client coordination · Timeline control', image: `${ASSET_BASE}/gamuda.jpg`, overview: 'Seasonal Christmas & Tet decoration across Gamuda / Celadon City public and residential areas.', handled: ['Coordinated contractors for decoration at roundabouts, residential areas and entrance gates.', 'Translated technical drawings into practical onsite execution with contractors.', 'Coordinated directly with the client when site conditions required adjustment.', 'Followed installation progress and kept work aligned with the timeline.'], flow: 'Drawing → Contractor → Site → Problem → Client → Solution → Deadline' },
  ]},
  { year: '2022', company: 'Kingsmen Vietnam', projects: [
    { id: 'prada', name: 'Prada — Exhibition Room Setup', type: 'Exhibition', role: 'Event Coordinator', detail: 'Setup coordination · Technical execution · Onsite support' },
    { id: 'tokyo', name: 'Tokyo Festival — Saigon Centre', type: 'Exhibition', role: 'Event Coordinator', detail: 'Drawing → Timeline → Technical Check → Mall Coordination → Inspection → Handover', image: `${ASSET_BASE}/tokyo.jpg`, overview: 'Exhibition and festival installation at Saigon Centre.', handled: ['Received and followed technical drawings.', 'Tracked the timeline and checked technical details onsite.', 'Coordinated contractors and the Saigon Centre / mall team.', 'Supported inspection, acceptance and handover.'], flow: 'Drawing → Timeline → Technical Check → Mall Coordination → Inspection → Handover' },
    { id: 'decathlon', name: 'Decathlon — Store Setup', type: 'Retail Project', role: 'Event Coordinator', detail: 'Contractor coordination · Mall coordination · Site troubleshooting · Handover', image: `${ASSET_BASE}/decathlon.jpg`, overview: 'Store setup project transforming an empty retail space into a completed Decathlon store.', handled: ['Coordinated contractors and workstreams across the store setup.', 'Worked with mall / venue, developer-investor and landlord / property stakeholders.', 'Followed schedule and handled ad-hoc issues onsite.', 'Supported execution through completion and handover.'], flow: 'Empty Space → Contractors → Coordination → Troubleshooting → Completed Store' },
    { id: 'keppel', name: 'Keppel Land — Recycled Art Exhibition', type: 'Exhibition', role: 'Event Coordinator', detail: 'Setup supervision · Artwork & POSM logging · Event-day support' },
  ]},
  { year: '2023', company: 'Kingsmen Vietnam', projects: [
    { id: 'forbes', name: 'Forbes Business Forum', type: 'Business Event', role: 'Event Executive', detail: 'Construction supervision · Manpower coordination · AAM support · Onsite operations', image: `${ASSET_BASE}/forbes.jpg`, overview: 'Business forum event supporting the account and project team from build-up through live operations.', handled: ['Supported the Assistant Account Manager (AAM) and Manager during preparation and event delivery.', 'Supervised construction of event items.', 'Provided and coordinated helpers, then managed them onsite.', 'Followed tasks and progress and handled onsite issues.'], flow: 'Build-up → Manpower → AAM Support → Live Operations → Issue Handling' },
  ]},
  { year: '2024', company: 'Kingsmen Vietnam', projects: [
    { id: 'lumi', name: 'CapitaLand — The Lumi', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Project execution · Vendor coordination · Onsite delivery' },
    { id: 'sycamore', name: 'CapitaLand — Sycamore', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Project execution · Vendor coordination · Onsite delivery' },
    { id: 'orchard', name: 'CapitaLand — The Orchard Hill', type: 'Real Estate Event', role: 'Event Coordinator', detail: 'Setup coordination · Technical delivery · Event operations' },
    { id: 'blum', name: 'Blum — B2B Booth', type: 'B2B Exhibition', role: 'Event Coordinator', detail: 'Booth setup · Contractor coordination · Onsite execution' },
  ]},
  { year: '2025', company: 'KKO.vn', projects: [
    { id: 'geso', name: 'GESO — Business Forum', type: 'Business Forum / Booth', role: 'Event Project Support', detail: 'Booth setup · Team coordination · Onsite execution' },
  ]},
  { year: '2026', company: 'Kingsmen Vietnam · KKO.vn · Tâm Anh Research Institute', projects: [
    { id: 'gladia', name: 'Gladia Heights — Kick-off Event', type: 'Kick-off / Real Estate', role: 'Event Coordinator', detail: 'Project coordination · Setup · Onsite execution' },
    { id: 'panasonic', name: 'Panasonic — DERGO', type: 'B2B Exhibition', role: 'Event Project Support', detail: 'B2B booth execution · Setup coordination · Onsite delivery' },
    { id: 'mocchau', name: 'Mộc Châu Creamery — Product Launch', type: 'Product Launch', role: 'Event Project Support', detail: 'AEON Mall Tân Phú · Launch setup · Product introduction event' },
    { id: 'medical', name: 'Medical & Pharmaceutical Events', type: 'Scientific / Medical Events', role: 'Event / Project Coordinator', detail: 'Regulatory submission → Expert contracts → POSM → Vendor coordination → Execution → Reporting', overview: 'End-to-end scientific seminars and pharmaceutical events at Tâm Anh Research Institute.', handled: ['Regulatory submission and event documentation.', 'Expert and speaker contract coordination.', 'Full POSM briefing from requirement through production.', 'Coordination with pharmaceutical companies, medical experts, vendors and internal stakeholders.', 'Event execution and post-event reporting.'], flow: 'Regulatory → Expert Contract → Event Documentation → POSM → Vendor → Execution → Reporting' },
  ]},
];

const caseStudyIds = ['gamuda', 'decathlon', 'tokyo', 'forbes'];
const allProjects = timeline.flatMap((group) => group.projects);
const caseStudies = caseStudyIds.map((id) => allProjects.find((project) => project.id === id)!).filter(Boolean);
const capabilities = ['Project Coordination', 'Event Execution', 'Client Communication', 'Vendor & Contractor Management', 'Venue / Mall Coordination', 'Expert & Speaker Coordination', 'POSM Briefing', 'Event Documentation & Reporting'];

export default function App() {
  const [openProject, setOpenProject] = useState<string | null>('gamuda');
  const toggleProject = (project: Project) => {
    if (!project.overview && !project.handled && !project.image) return;
    setOpenProject((current) => current === project.id ? null : project.id);
  };
  const openFromCase = (project: Project) => {
    setOpenProject(project.id);
    requestAnimationFrame(() => document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  };

  return (
    <main>
      <nav className="nav"><a className="brand" href="#top">THỊNH / 2026</a><div className="nav-links"><a href="#timeline">Timeline</a><a href="#about">About</a><a href="#case-studies">Cases</a><a href="#contact">Contact</a></div></nav>
      <section id="top" className="hero section-shell">
        <div className="eyebrow"><span className="dot"/> EVENT PROJECT PORTFOLIO · 2020—2026</div>
        <div className="hero-grid"><div><h1>EVENT<br/>PROJECT<br/><em>COORDINATOR</em></h1></div><div className="hero-side"><p className="hero-name">ĐINH VŨ TIẾN THỊNH</p><p>Corporate Events · B2B · Exhibition · Retail · Medical Events</p><p className="muted">From brief to execution, I coordinate the people, timelines and details that bring projects to life.</p><a className="cta" href="#timeline">Explore my timeline <ArrowDown size={18}/></a></div></div>
        <div className="hero-strip"><span>6+ YEARS</span><span>MULTIPLE INDUSTRIES</span><span>ONE FOCUS: MAKING PROJECTS HAPPEN</span></div>
      </section>
      <section id="about" className="intro section-shell"><div className="section-label">01 / PROFILE</div><div className="intro-grid"><h2>COORDINATE.<br/>EXECUTE.<br/>SOLVE.<br/>DELIVER.</h2><div><p className="lead">Event and project coordination professional with 6+ years of experience across corporate events, exhibitions, retail projects, real estate launches, B2B forums and medical events.</p><div className="process">BRIEF <span>→</span> PLAN <span>→</span> COORDINATE <span>→</span> EXECUTE <span>→</span> HANDOVER <span>→</span> REPORT</div></div></div></section>
      <section id="timeline" className="timeline section-shell">
        <div className="section-label">02 / CAREER & PROJECT TIMELINE</div><div className="timeline-head"><h2>2020 → 2026</h2><p>A project-led timeline showing what I worked on, where I contributed and how my role evolved. Projects with photography can be opened for more detail.</p></div>
        <div className="timeline-list">{timeline.map((group) => <article className="year-block" key={group.year}><div className="year-rail"><span className="year">{group.year}</span><span className="rail-dot"/></div><div className="year-content"><div className="company"><BriefcaseBusiness size={16}/> {group.company}</div>{group.projects.map((project, index) => { const canOpen = Boolean(project.overview || project.handled || project.image); const isOpen = openProject === project.id; return <div className={`project-wrap ${isOpen ? 'is-open' : ''}`} id={`project-${project.id}`} key={project.id}><button className={`project ${canOpen ? 'project-clickable' : ''}`} onClick={() => toggleProject(project)} aria-expanded={isOpen}><div className="project-num">{String(index + 1).padStart(2,'0')}</div><div className="project-main"><div className="project-meta"><span>{project.type}</span><span>{project.role}</span></div><h3>{project.name}</h3><p>{project.detail}</p></div>{project.image ? <img className="project-thumb" src={project.image} alt={project.name}/> : <div className="project-placeholder">PROJECT</div>}{canOpen ? (isOpen ? <X className="project-arrow" size={22}/> : <ArrowUpRight className="project-arrow" size={22}/>) : <span/>}</button>{isOpen && <div className="project-expanded">{project.image && <img className="project-hero-image" src={project.image} alt={project.name}/>}<div className="project-detail"><div><span className="detail-label">PROJECT OVERVIEW</span><p>{project.overview}</p></div><div><span className="detail-label">MY ROLE</span><p>{project.role}</p></div>{project.handled && <div><span className="detail-label">WHAT I HANDLED</span><ul>{project.handled.map((item) => <li key={item}>{item}</li>)}</ul></div>}{project.flow && <div className="flow-box"><span className="detail-label">PROJECT FLOW</span><p>{project.flow}</p></div>}</div></div>}</div>; })}</div></article>)}</div>
      </section>
      <section className="featured section-shell" id="case-studies"><div className="section-label">03 / FEATURED CASE STUDIES</div><div className="featured-intro"><h2>SELECTED PROJECTS,<br/>BEYOND THE FINAL PHOTO.</h2><p>Each case highlights the project context, my role, the coordination work and the execution flow behind the result.</p></div><div className="case-grid">{caseStudies.map((project, index) => <article className="case-card" key={project.id}><button onClick={() => openFromCase(project)} className="case-button"><div className="case-image-wrap"><img src={project.image} alt={project.name}/><span className="case-index">0{index + 1}</span></div><div className="case-meta"><span>{project.type}</span><span>{project.role}</span></div><h3>{project.name}</h3><p>{project.overview}</p><div className="case-link">VIEW PROJECT <ArrowUpRight size={18}/></div></button></article>)}</div></section>
      <section className="capabilities section-shell"><div className="section-label">04 / WHAT I DO</div><div className="cap-grid">{capabilities.map((cap, i) => <div className="cap" key={cap}><span>{String(i+1).padStart(2,'0')}</span><p>{cap}</p></div>)}</div></section>
      <section id="contact" className="contact section-shell"><div className="section-label">05 / CONTACT</div><h2>LET'S MAKE<br/><em>PROJECTS HAPPEN.</em></h2><div className="contact-row"><span><CalendarDays size={16}/> Available for event / project opportunities</span><span><MapPin size={16}/> Ho Chi Minh City, Vietnam</span></div></section>
      <footer className="footer section-shell"><span>© 2026 ĐINH VŨ TIẾN THỊNH</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
