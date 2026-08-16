# PRD — مؤسسة رامي شريف | Rami Sharif Law Firm Website

**Project:** Static website clone of a legal-consultation firm (original: ramisharif.com)
**Repository:** `samehgomaa.com-clone`
**Document Status:** Draft
**Language of the product:** Arabic (RTL) — full Arabic-first experience

---

## 1. Overview

A fully static, Arabic Right-to-Left (RTL) marketing website for a law firm — *مؤسسة رامي شريف للاستشارات القانونية والمحاماة* (Rami Sharif Foundation for Legal Consultations & Advocacy). The site is built from flat HTML/CSS/JS files (no backend, no build step) and mirrors the design, structure, and content of the original WordPress/Elementor site.

The purpose of the site is to:
- Present the firm's identity, credibility, and 17+ years of legal experience.
- Showcase legal services offered to individuals and companies.
- Convert visitors into leads via consultation booking, WhatsApp, phone, and contact forms.

## 2. Business Goals

| Goal | Description |
|---|---|
| G1 | Establish trust and credibility (experience, qualifications, testimonials, firm branches) |
| G2 | Generate qualified leads through consultation booking (حجز استشارة) |
| G3 | Make direct contact effortless: WhatsApp, phone, email, contact form |
| G4 | Provide instant answers via a comprehensive FAQ section (84 accordion items) |
| G5 | Strong SEO presence in Egyptian legal-search queries |

## 3. Target Audience

- Individuals: families facing family-status cases, real estate/rental disputes, civil disputes.
- Business owners & companies needing corporate legal affairs (عقود، تأسيس، تسوية مخالفات).
- Clients who prefer WhatsApp/phone-first contact culture (Egyptian market).

## 4. Pages & Sitemap

| Page | Path | Purpose |
|---|---|---|
| Home | `index.html` | Hero, intro (نبذة عنا), services preview, why-us, testimonials, CTA, FAQ, footer |
| About | `about/index.html` | Firm history, founder profile, qualifications, mission |
| Services | `services/index.html` | Full catalog of legal services with images |
| FAQ | `faq/index.html` | 84-question accordion covering common legal questions |
| Contact | `contacts/index.html` | Contact info, branches (فروعنا), form, map, socials |

## 5. Functional Requirements

### 5.1 Global (all pages)
- FR-01: RTL layout, `dir="rtl"` and `lang="ar"` throughout.
- FR-02: Sticky header with mobile menu toggle (hamburger) and desktop nav.
- FR-03: Floating WhatsApp chat button — links to `https://wa.me/201111904997` with a pre-filled booking message.
- FR-04: Footer containing: logo, quick links (روابط مهمة), branches (فروعنا), contact info (معلومات التواصل), email (البريد الإلكتروني), socials, and legal copyright.
- FR-05: "Skip to content" accessibility link.
- FR-06: Localised page titles and canonical URLs per page.

### 5.2 Home (`index.html`)
- FR-10: Hero section with headline + subheadline, "book a consultation" CTA.
- FR-11: "About us" summary section.
- FR-12: Services preview cards linking to services page.
- FR-13: "Why choose us" (لماذا نحن) differentiators section.
- FR-14: Client testimonials (آراء العملاء) carousel with ratings.
- FR-15: Consultation booking/banner CTA (أحجز استشارتك القانونية الآن).
- FR-16: FAQ accordion preview.
- FR-17: Booking form component (inline, sends via form service/WhatsApp).

### 5.3 Services (`services/index.html`)
- FR-20: Categorized service cards with images (lightbox "عرض الصورة كاملة").
- FR-21: Services cover at minimum: family-status cases (الأحوال الشخصية), civil disputes (المنازعات المدنية), corporate legal affairs (الشئون القانونية للشركات), and criminal-related advice.

### 5.4 FAQ (`faq/index.html`)
- FR-30: 84 expandable accordion Q&A items.
- FR-31: FAQ grouped/tagged logically with searchable text via browser find.
- FR-32: Fallback CTA under the FAQ ("contact us" / WhatsApp) for unanswered questions.

### 5.5 Contacts (`contacts/index.html`)
- FR-40: Contact form (name, phone, message) — 9 form instances incl. booking forms.
- FR-41: Contact channels displayed: phone `+201011904997`, landline `+2034863096`, email `Info@Ramisharif.Com`, WhatsApp.
- FR-42: Branches (فروعنا) section with addresses.
- FR-43: Embedded Google Map.
- FR-44: Social media links.

## 6. Non-Functional Requirements

- **NFR-01 Performance:** Static, cache-friendly assets; minified CSS/JS; lazy-loaded images; no render-blocking for critical path.
- **NFR-02 Compatibility:** Responsive from mobile (360px) to desktop; cross-browser (Chrome, Firefox, Safari, Edge).
- **NFR-03 Mobile-first:** Optimized touch targets, viewport-fit cover support, large tap areas.
- **NFR-04 SEO:** Meta descriptions, Open Graph + Twitter cards, canonical URLs, structured article dates (published/modified).
- **NFR-05 Accessibility:** Semantic HTML, skip-link, alt texts, sufficient contrast.
- **NFR-06 Privacy/Security:** No sensitive data collection beyond standard forms; no keys/secrets in repo.

## 7. Content Requirements

| Asset | Requirement |
|---|---|
| Copy | Arabic native tone, formal but accessible legal language |
| Images | Located in `assets/images/` (about-us, About-us, services) and `assets/`; WebP preferred, alt texts in Arabic |
| Videos | Located in `assets/videos/` for hero/background where used |
| Icons & Fonts | Local files in `assets/icons/` and `assets/fonts/` (no external CDN dependency) |
| Logo | `logo.png` + `logo.svg` variants used in header/footer |
| Source content | Reference document: `Data Website.docx` + original site pages |

## 8. Design Requirements

- Faithful reproduction of the original Elementor design (custom post CSS files under `assets/css/`, e.g. `post-*.css`).
- Color scheme: professional legal palette (dark blue/black + gold/accent tones) per original.
- Typography: Arabic-friendly font families (local font assets), clamp()-based fluid heading sizes (e.g., 40px→72px).
- Components used: accordion, icon-boxes, counters, carousels, flip-box, lightbox, image gallery, testimonials.

## 9. Technical Stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 (semantic) |
| Styling | Local CSS (`assets/css/main.min.css`, `main-rtl.min.css`, Elementor widget CSS) |
| Scripts | Vanilla JS (`assets/js/`), Swiper, flatpickr, Elementor frontend scripts |
| No build tooling | Static files served directly |
| Forms | Client-side forms wired to booking/WhatsApp flow (no backend) |

## 10. Integrations

- **WhatsApp Deep Link:** `wa.me/201111904997` with prefilled message for consultation booking.
- **Telephony:** `tel:+201011904997`, `tel:+2034863096`.
- **Email:** `mailto:Info@Ramisharif.Com`.
- **Maps:** Google Maps embed (contact page).
- **Analytics (optional):** can be added as a static snippet.

## 11. Success Metrics

- Leads: consultation bookings, WhatsApp clicks, calls, form submissions.
- Engagement: FAQ page views, time on page, services page depth.
- SEO: ranking for Arabic legal keywords (محامي الإسكندرية، استشارات قانونية، الأحوال الشخصية...).
- Performance: LCP < 2.5s on 4G; zero layout shift; mobile usability 100%.

## 12. Future Roadmap (Out of Scope)

- CMS / headless backend for editing content.
- Real appointment scheduling with calendar + notifications.
- Multi-language (EN/AR) switch.
- Blog / news & judgments section.
- Online payment gateway for retainer/consultation fees.
- Server-side form handling with spam protection.

## 13. Risks & Open Questions

| Risk / Question | Notes |
|---|---|
| Forms have no backend | Leads may be lost if forms are non-functional — confirm they route to WhatsApp/mail client |
| 158 MB of assets | Large repo size; consider compressing images / moving to CDN |
| Rebrand (logo 2 commits) | Confirm final logo variant is the one to keep |
| Original site updates | Content drift vs. live site; decide refresh cadence |
| Legal compliance | Trademark/copyright of mirrored content; confirm rights to use original content |