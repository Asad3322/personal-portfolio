# Muhammad Asad — Personal Portfolio

React 19 portfolio using the existing Create React App and Tailwind stack.

## Local development

- `npm ci`
- `npm start` (set PORT=3100 if port 3000 is occupied)
- `npm test -- --watchAll=false --runInBand`
- `npm run build`
- `npm run preview` serves the production build at http://127.0.0.1:3101.

The preview server binds only to localhost and supports /about, /skills, /projects, and /contact.

## Editing content

Project content and category filters are maintained in `src/data/projects.js`. Use public source evidence before adding features, completion claims, or live demo links. Screenshots are in `public/projects`; cards without verified screenshots use text thumbnails.

`src/Portfolio.jsx` contains the section layout, navigation, filtering, and contact form. `src/portfolio.css` contains the responsive design. Previous components and page wrappers remain in the codebase but are not part of the active entry point.

See `PROJECT_AUDIT.md` for repository coverage, source evidence, exclusions, missing projects, and demo verification. The design now follows the supplied navy/blue UI reference with cutout portraits, decorative rings, blue pill buttons, and white project cards.

The supplied transparent portrait is stored unchanged at `src/components/assets/asad-portrait.png`. Both the Home and About sections use it with proportional sizing and no portrait crop. Technology logos in the hero band represent the toolkit, not clients or endorsements.

The existing Formspree endpoint is retained. Delivery has not been tested; no test message was submitted.

LinkedIn is maintained in `src/data/profile.js`. Animations respect reduced-motion preferences and leave content visible when animation APIs are unavailable.

Portrait favicon and touch/app assets are committed under `public`. To regenerate them, run `python scripts/generate-favicons.py` with Pillow installed. Build output, dependencies, research files, temporary files and environment files are excluded from Git.
