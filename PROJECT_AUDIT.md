# Public project audit — 3 October 2026

Source: https://github.com/Asad3322 and the unauthenticated GitHub API.

The repository endpoint was read with `per_page=100`: page 1 returned 20 public repositories; page 2 returned zero. All default-branch trees were inspected, along with available first-party READMEs, package manifests and selected application code. Vendored node_modules were excluded. No private repositories or environment files were used. All repositories report `fork: false`; this does not establish original authorship, so explicit clone and scaffold attribution is retained.

## Coverage

18 distinct projects are maintained in `src/data/projects.js`. `Car-app-French` and `carapp-backend` are combined because they implement the same vehicle domain and share Supabase, authentication and report workflows. `Asad3322` is a profile README, not an application. The two portfolio repositories are distinct: one is this website; ML-Portfolio is a template adaptation with a different component and page structure.

| Repository | Evidence used |
| --- | --- |
| codeles-pos | README, package.json, dashboard POS/reports pages, auth and product actions; full tree |
| nationlinks-dispatch | package.json, dashboard stats API, driver API, DriverTable, payment editing component, Prisma schema |
| barber-shop-website | frontend/backend manifests, booking/product/service/image route code; frontend component tree |
| shophub-ecommerce | README, manifests, App routing, auth/deal/order/product controller code |
| Car-app-French + carapp-backend | manifests, App routes, auth page, AI/auth/report controller code and service tree |
| Chat-app | manifests, auth/chat/admin controller code, socket and Zustand store tree |
| real-estate-project | READMEs, manifests, property/agent/auth controller code, frontend component tree |
| Ai-chat-bot- | manifest, chat API, app page, assistant components and sidebar tree |
| expertb-clone | clone README, manifests, auth/enrollment/student route code and dashboard tree |
| brew-spark-react | Lovable README, manifest, App and hero/footer components, products/newsletter tree |
| tiktik | manifest, download form/status code, App, index.html and server tree |
| personal-portfolio | local source, manifest and README |
| ML-Portfolio | manifest, App, AboutHeader and AboutSection; template identity retained in audit |
| SaaS-model | AI Studio README, manifest, App.tsx; Aura attribution in source |
| Agriculture-Assignment-By-Udevs | index.html, index.js; local sample arrays |
| Staff-Management-System-Dashboard-Assignment-By-U-Devs | index.html and browser JS |
| Donation-Assignment-By-Udevs | Index.html; two-file static UI repository |
| Landing-page-assignment | index.html; Bootstrap ShopEase landing page |

## Demo and image policy

Advertised demos for Car App, ML-Portfolio and the previous personal portfolio returned HTTP 200. Car App and ML-Portfolio are included after browser inspection. The previous portfolio demo is not linked from this updated website because it represents the earlier version. ShopHub and tiktik advertised demos were unavailable during the audit and are omitted. Deployment instructions, localhost links, placeholder URLs and AI Studio editor links are not live demos.

No confirmed application screenshots were found in repository trees. The generically named ShopHub screenshot was inspected and depicts an Amazon candle listing, so it is not used as a project screenshot. Text thumbnails distinguish project categories without implying a captured application interface. Real screenshots were captured from the accessible Car App (WazAlert) and ML-Portfolio demos and saved under public/projects. Completion and backend behavior cannot be established solely from repository files; status labels reflect these limits.

## Requested projects not located

Codeles POS and NationLinks Dispatch were located under `codeles-pos` and `nationlinks-dispatch`. **Zapkart Pharmacy Store, Lawfirm AI SaaS, and Al Noor Al Ambar** were not located in the 20 public repository names, available READMEs, or inspected application code. `SaaS-model` is a Lab 01 UI concept, not verified as Lawfirm AI SaaS. Provide public repository or demo URLs to add the missing work.

## Contact and design

Email and LinkedIn are supported by the public profile README. The existing Formspree endpoint is preserved; its owner and delivery were not independently verified, and no test message was sent. No phone number, testimonials, employment history or results were invented.

The initial audit was completed before the visual reference was supplied. The website now follows the attached navy/blue reference with uppercase headings, gradient pill buttons, a technology band, white project cards and decorative rings. The attached transparent PNG is copied unchanged to `src/components/assets/asad-portrait.png` and used in Home and About with proportional sizing and `object-fit: contain`. The reference's sample brands and experience statistics are replaced with verified technologies and development focus areas.


## Validation

- Production build: passed after final UI and screenshot changes.
- Jest: 7 tests passed, covering project coverage/source links, four retained routes, filtering, mobile menu state and contact fields.
- Browser: navigation and filtering verified in the production preview; mobile widths 320/390, tablet 768 and desktop 1280 checked. Horizontal overflow fixed and rechecked. Portrait and captured demo screenshots verified as loaded.
- Git whitespace check: passed.
- Existing Create React App tooling emits Browserslist/deprecation warnings, but the build succeeds.
- Formspree submission, external backend workflows and deployment were not tested.

Production preview: http://127.0.0.1:3101 (`npm run preview`). No push or deployment was performed.

## Reference-based redesign validation

The supplied JPG was inspected and its navy gradients, blue accents, uppercase headings, pill buttons, decorative rings and white project cards were implemented as real React components and CSS. The transparent portrait's SHA-256 matches the supplied file exactly. Natural dimensions are 427 × 585; both Home and About preserve that ratio with no image crop.

Production build passed. Eight tests cover catalogue/source links, existing routes, filters, mobile navigation, contact fields and cross-page homepage fragment navigation. Desktop (1280), tablet (768) and mobile (390/320) previews were inspected without horizontal overflow. Native project details expand correctly. Public project data, contact details and Formspree endpoint are retained.

## Final portfolio validation

The canonical LinkedIn URL is shared by the active social links and About section; external links use safe new-tab attributes. Hero, viewport and hover animations respect reduced motion and retain visible fallback content. The final suite passes all 10 tests, including LinkedIn and reduced-motion coverage.

Portrait favicons include seven ICO sizes, 16/32/48 pixel PNGs, an Apple touch icon and 192/512 pixel app icons. The production build passed after icon configuration. A fresh local browser reload confirmed the new icon references and successfully loaded the 32 pixel portrait asset; browser tab chrome was unavailable for direct inspection. Default React icons were removed. Published icon assets are intentional website assets; build output and local research remain excluded from Git.
