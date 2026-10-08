# Santhosh Kumar Portfolio — Implementation Plan

## Product scope
A single-page, responsive portfolio site for Santhosh Kumar, a Chennai-based Front End Developer with 8 years of experience. The site presents his positioning, strengths, skills, experience, achievements, education, open-source work, and direct contact actions using accurate resume-derived copy.

## Approved design direction
- **Design movement:** Neo-editorial digital portfolio: an art-directed Swiss grid with asymmetrical rhythm, oversized typography, and subtle technical annotation.
- **Core principles:** confident hierarchy, purposeful whitespace, evidence-led storytelling, and tactile micro-interactions.
- **Color philosophy:** deep ink (#101312) creates a premium studio canvas; warm paper (#f3f0e8) keeps the reading surface human; electric lime (#d7ff5f) is the ownable action color for momentum and technical energy; muted sage and clay notes support scannability without visual noise.
- **Layout paradigm:** a sticky left rail anchors identity while content travels in a wide editorial column. Sections alternate between full-bleed statements and compact evidence rows instead of centered cards.
- **Signature elements:** lime bracket cursor mark, oversized outlined section numbers, and thin ruled dividers with small uppercase metadata labels.
- **Interaction philosophy:** interactions should feel like a capable interface, not decoration—links reveal intent, buttons shift with a crisp spring, and content enters in quiet staggered motion.
- **Animation:** use CSS reveal transitions on scroll, marquee-style metadata movement, and hover transforms under 160ms; respect `prefers-reduced-motion` by disabling nonessential motion.
- **Typography system:** Space Grotesk for display/headings and Inter for body/metadata. Headings use tight tracking and wide line-height contrast; labels use uppercase 11px tracking.
- **Brand essence:** A front-end craftsperson who turns complex product requirements into fast, considered interfaces. Personality: precise, inventive, dependable.
- **Brand voice:** direct, calm, and quietly confident. Example lines: “Interfaces that earn their place.” and “Let’s make the next release feel inevitable.”
- **Wordmark & logo:** `SK/` as a typographic monogram, with the slash treated as a forward-motion cursor.
- **Signature brand color:** electric lime `#d7ff5f`.

## Implementation approach
- Use a lightweight static Node server with no external runtime dependencies so the Preview can start immediately on port 3000.
- Keep structure readable: `index.html` for semantic content, `styles.css` for the visual system and responsive behavior, `script.js` for the menu, scroll reveal, current-year label, and small interactions.
- Provide `/manus-routes.json` as a static route manifest for the single `/` page.
- Avoid invented portrait photography; create an abstract CSS/HTML visual system that preserves the resume’s professional tone without misrepresenting the subject.
- Use accessible landmarks, visible focus states, semantic buttons/links, and reduced-motion support.

## Project structure
- `index.html` — complete single-page portfolio markup and metadata.
- `styles.css` — tokens, layout, responsive breakpoints, animations, and component states.
- `script.js` — navigation drawer, reveal observer, magnetic button detail, and year.
- `server.js` — minimal static server for Preview and production.
- `public/manus-routes.json` — route manifest.
- `app.config.ts` — project logo metadata.
- `TODO.md` — outcome criteria and implementation trace.
