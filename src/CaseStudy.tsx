import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { Project } from './PortfolioApp';
import { ProjectGallery, type Lang } from './ProjectMedia';
import caseData from './case-copy.json';

type CaseCopy = { purpose: string; challenge: string; solution: string; result: string };
export const caseCopy = caseData as Record<string, Record<Lang, CaseCopy>>;
export const caseLabels = {
  en: { purpose: 'PROJECT PURPOSE', role: 'MY ROLE', challenge: 'CHALLENGE', solution: 'HOW I HANDLED IT', result: 'RESULT' },
  vi: { purpose: 'MỤC ĐÍCH DỰ ÁN', role: 'VAI TRÒ CỦA TÔI', challenge: 'THỬ THÁCH', solution: 'CÁCH TÔI XỬ LÝ', result: 'KẾT QUẢ' },
};

export function CaseStudy({ projects, lang, onClose }: { projects: Project[]; lang: Lang; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(projects[0].id);
  const project = projects.find(item => item.id === selected)!;
  const labels = caseLabels[lang];
  const copy = caseCopy[project.id][lang];

  useEffect(() => {
    const element = dialog.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  return <dialog className="case-dialog" ref={dialog} aria-labelledby="case-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="case-dialog-inner">
      <header className="case-dialog-header">
        <span>{projects.length > 1 ? 'CAPITALAND / 2024' : project.type[lang]}</span>
        <button type="button" className="case-close" autoFocus onClick={onClose} aria-label={lang === 'en' ? 'Close case study' : 'Đóng câu chuyện dự án'}><X size={23} /></button>
      </header>
      {projects.length > 1 && <nav className="case-project-picker" aria-label={lang === 'en' ? 'CapitaLand events' : 'Các sự kiện CapitaLand'}>
        {projects.map(item => <button type="button" key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}>{item.name.replace('CapitaLand — ', '')}</button>)}
      </nav>}
      <div className="case-dialog-grid">
        <div className="case-dialog-media"><ProjectGallery key={project.id} projectId={project.id} name={project.name} lang={lang} /></div>
        <div className="case-dialog-copy"><p className="section-label">{lang === 'en' ? 'PROJECT CASE STUDY' : 'CÂU CHUYỆN DỰ ÁN'}</p>
          <h2 id="case-title">{project.name}</h2>
          <section className="case-role"><h3>{labels.role}</h3><p>{project.role[lang]}</p></section>
          {(['purpose', 'challenge', 'solution', 'result'] as const).map(field => <section className={`case-copy-block case-copy-${field}`} key={field}>
            <h3>{labels[field]}</h3><p>{copy[field]}</p>
          </section>)}
          <div className="case-workflow"><h3>{lang === 'en' ? 'DELIVERY FLOW' : 'QUY TRÌNH TRIỂN KHAI'}</h3><p>{project.flow[lang]}</p></div>
        </div>
      </div>
    </div>
  </dialog>;
}
