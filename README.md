# Thịnh — Event Project Portfolio

Interactive career and project timeline for **Đinh Vũ Tiến Thịnh — Event Project Coordinator**.

## Portfolio structure

- Hero / professional positioning
- Profile and work process
- Career & project timeline (2020–2026)
- Case-study popups with purpose, role, challenge, handling, result and photography
- Exactly three featured stories: CapitaLand (The Lumi + Sycamore + The Orchard Hill), Decathlon Store Setup, and Mộc Châu Creamery Booth & Product Activation
- Capabilities
- Contact

## Photography and content

46 unique images are mapped from the supplied project archive and conversation attachments. Independent WebP derivatives reach 2200px where originals support it; smaller images are never upscaled. Galleries preserve full frames and covers use controlled cropping. The old sprite and standalone modal scripts are no longer loaded.

- `src/PortfolioApp.tsx`: timeline, three featured summaries and medical spotlight.
- `src/case-copy.json`: purpose, challenge, handling and result in EN/VI.
- `src/project-media.json`: project mapping, phases, captions, dimensions and responsive sources.
- `src/ProjectMedia.tsx`: responsive images and selectable galleries.
- `src/CaseStudy.tsx`: native dialog with keyboard focus management and grouped CapitaLand selector.
- `docs/image-sources.json`: source filenames and original image dimensions.

### Available source material

- Orchard Hill stage and foyer images are **design visualizations**, labeled accordingly. No setup/live photographs were available in its folder.
- Mộc Châu includes high-resolution installation/finishing photographs. Its supplied event photo overview remains intact at a conservative display width; individual small tiles are not enlarged.
- GESO and Gintell retain text and workflow case studies because no verified photographs were available.
- Oxford and NF1 use supplied **event artwork**, labeled as artwork in the timeline gallery.

### Verification

Production build passed. All 16 timeline dialogs opened with the five required content sections. Exactly three featured cases rendered. CapitaLand switching, image selection, EN/VI, Escape dismissal, focus containment and focus restoration were checked. Layout was reviewed at 320, 390, 768 and 1440px; a small-screen headline overflow was corrected. Browser console showed no errors.

## Run locally

Use Node.js 22.12+ or 24. Direct dependencies are pinned to the verified versions. A pnpm lockfile is also included for `pnpm install --frozen-lockfile`.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Designed for deployment on Vercel.

The existing Vercel configuration installs with npm and outputs `dist`. A GitHub update alone does not verify that a separately created Vercel site uses this repo: check its deployed Git commit before sharing the live URL.
