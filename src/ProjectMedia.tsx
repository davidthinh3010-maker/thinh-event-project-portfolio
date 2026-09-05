import { useState } from 'react';
import mediaData from './project-media.json';

export type Lang = 'en' | 'vi';
export type Photo = {
  src: string; thumbnail: string; srcSet?: string; width: number; height: number;
  phase: string; caption: Record<Lang, string>; position: string;
};
export const projectMedia = mediaData as Record<string, Photo[]>;
const phaseLabels: Record<string, Record<Lang, string>> = {
  scope: { en: 'SCOPE CONFIRMATION', vi: 'XÁC ĐỊNH PHẠM VI' },
  before: { en: 'EXISTING CONDITION', vi: 'HIỆN TRẠNG BAN ĐẦU' },
  dismantling: { en: 'DISMANTLING', vi: 'THÁO DỠ' },
  handover: { en: 'HANDOVER PREPARATION', vi: 'CHUẨN BỊ BÀN GIAO' },
  returned: { en: 'SITE RETURNED', vi: 'MẶT BẰNG SAU HOÀN TRẢ' },
  artwork: { en: 'EVENT ARTWORK', vi: 'THIẾT KẾ SỰ KIỆN' },
  setup: { en: 'SETUP', vi: 'THI CÔNG' },
  finishing: { en: 'FINISHING', vi: 'HOÀN THIỆN' },
  final: { en: 'COMPLETED', vi: 'ĐÃ HOÀN THIỆN' },
  live: { en: 'EVENT LIVE', vi: 'SỰ KIỆN' },
  design: { en: 'DESIGN REFERENCE', vi: 'PHỐI CẢNH THIẾT KẾ' },
  overview: { en: 'EVENT PHOTO OVERVIEW', vi: 'ẢNH TỔNG HỢP SỰ KIỆN' },
  archive: { en: 'ARCHIVE', vi: 'ẢNH LƯU TRỮ' },
};
export const phaseLabel = (photo: Photo, lang: Lang) => phaseLabels[photo.phase]?.[lang] || photo.phase;
const phaseOrder: Record<string, number> = {
  scope: 0,
  before: 1,
  dismantling: 2,
  handover: 3,
  returned: 4,
  design: 0,
  artwork: 0,
  setup: 1,
  finishing: 2,
  final: 3,
  live: 4,
  overview: 5,
  archive: 6,
};

export function ProjectImage({ projectId, lang, className = '', sizes = '180px' }: {
  projectId: string; lang: Lang; className?: string; sizes?: string;
}) {
  const photo = projectMedia[projectId]?.[0];
  if (!photo) return <div className={`project-placeholder ${className}`} aria-hidden="true">{lang === 'en' ? 'PROJECT WORKFLOW' : 'QUY TRÌNH DỰ ÁN'}</div>;
  return <img className={className} src={photo.src} srcSet={photo.srcSet} sizes={sizes}
    width={photo.width} height={photo.height} alt={photo.caption[lang]} loading="lazy" decoding="async"
    style={{ objectPosition: photo.position, maxWidth: photo.width }} />;
}

export function ProjectGallery({ projectId, name, lang }: { projectId: string; name: string; lang: Lang }) {
  const photos = [...(projectMedia[projectId] || [])].sort((a, b) =>
    (phaseOrder[a.phase] ?? 99) - (phaseOrder[b.phase] ?? 99)
  );
  const [selected, setSelected] = useState(0);
  if (!photos.length) return <div className="story-only-card"><span>{lang === 'en' ? 'PROJECT WORKFLOW' : 'QUY TRÌNH DỰ ÁN'}</span><strong>{name}</strong><p>{lang === 'en' ? 'Explore the responsibilities and delivery process alongside.' : 'Xem phần trách nhiệm và quy trình triển khai của dự án.'}</p></div>;
  const photo = photos[selected];
  const maxWidth = photo.phase === 'overview' ? photo.width / 2 : photo.width;
  return <div className="project-gallery">
    <figure className="gallery-figure">
      <div className="gallery-stage">
        <img src={photo.src} srcSet={photo.srcSet} sizes="(max-width: 850px) 90vw, 46vw"
          width={photo.width} height={photo.height} alt={photo.caption[lang]} decoding="async"
          style={{ maxWidth }} />
      </div>
      <figcaption aria-live="polite"><span className="photo-phase">{phaseLabel(photo, lang)}</span>
        <p>{photo.caption[lang]}</p><span className="photo-count">{selected + 1} / {photos.length}</span>
      </figcaption>
    </figure>
    {photos.length > 1 && <div className="gallery-thumbnails" aria-label={lang === 'en' ? 'Choose a project image' : 'Chọn ảnh dự án'}>
      {photos.map((item, index) => <button key={item.src} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}
        aria-label={`${index + 1}. ${item.caption[lang]}`}>
        <img src={item.thumbnail} width={item.width} height={item.height} alt="" loading="lazy" decoding="async" />
        <span><b>{String(index + 1).padStart(2, '0')}</b>{phaseLabel(item, lang)}</span>
      </button>)}
    </div>}
    {photo.phase !== 'overview' && <a className="original-image" href={photo.src} target="_blank" rel="noreferrer">
      {lang === 'en' ? 'Open full image ↗' : 'Mở ảnh đầy đủ ↗'}
    </a>}
  </div>;
}
