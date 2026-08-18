# IMPLEMENTATION PHASES

## Overview

This document outlines the **phased implementation plan** for rebuilding the Rami Sharif Legal Consultation Foundation website. The plan is structured to ensure a clean, maintainable, and fully functional website at each phase.

## Phase Structure

Each phase includes:
- **Objective**: What the phase accomplishes
- **Deliverables**: Files/components to create
- **Dependencies**: What must be completed first
- **Implementation Guidelines**: How to implement
- **Responsive Requirements**: Responsive considerations
- **Validation**: How to verify completion
- **Completion Criteria**: What defines "done"

---

## PHASE 0 — Project Foundation

### Objective
Set up the project structure, tooling, and base configuration.

### Deliverables
- [ ] Project directory structure
- [ ] `package.json` with dependencies
- [ ] `vite.config.js` configuration
- [ ] `tailwind.config.js` with RTL support
- [ ] `postcss.config.js` configuration
- [ ] `index.html` with RTL support
- [ ] `src/main.js` entry point
- [ ] `src/App.vue` root component
- [ ] Git initialization and `.gitignore`

### Dependencies
- None (starting from scratch)

### Implementation Guidelines

1. **Initialize Project**:
   ```bash
   npm create vite@latest ramisharif-vue -- --template vue
   cd ramisharif-vue
   npm install
   ```

2. **Install Dependencies**:
   ```bash
   npm install vue-router@4
   npm install -D tailwindcss postcss autoprefixer
   npm install -D tailwindcss-rtl
   ```

3. **Configure Tailwind**:
   - Set up RTL support
   - Configure custom theme (colors, fonts, etc.)
   - Add custom animations

4. **Configure Vite**:
   - Set base path
   - Configure aliases if needed

5. **Set Up HTML**:
   ```html
   <!doctype html>
   <html lang="ar" dir="rtl">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>مؤسسة رامي شريف</title>
   </head>
   <body>
     <div id="app"></div>
     <script type="module" src="/src/main.js"></script>
   </body>
   </html>
   ```

### Responsive Requirements
- None (foundation only)

### Validation
- [ ] Project builds without errors
- [ ] Development server starts
- [ ] Tailwind styles are applied
- [ ] RTL direction is set

### Completion Criteria
✅ Project structure is in place
✅ All configuration files are created
✅ Basic build works
✅ RTL support is configured

---

## PHASE 1 — Tailwind Design System

### Objective
Implement the complete Tailwind CSS design system with all custom styles.

### Deliverables
- [ ] `src/styles/tailwind.css` with directives
- [ ] `src/styles/rtl.css` for RTL adjustments
- [ ] `src/styles/animations.css` for custom animations
- [ ] Complete `tailwind.config.js` with:
  - Color palette
  - Typography
  - Spacing
  - Border radius
  - Shadows
  - Animations
  - Screens
  - Z-index
  - Border width

### Dependencies
- Phase 0 (Project Foundation)

### Implementation Guidelines

1. **Create tailwind.css**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **Configure tailwind.config.js**:
   ```javascript
   export default {
     content: ['./index.html', './src/**/*.{vue,js,ts}'],
     theme: {
       extend: {
         colors: {
           gold: '#af8f69',
           ink: '#2b2b2b',
           cream: '#fffcf7',
           bodybg: '#fffefd',
           footer: '#2F2F2F',
           footerbar: '#262626',
         },
         fontFamily: {
           cairo: ['Cairo', 'sans-serif'],
           body: ['Cairo', 'sans-serif'],
           heading: ['Cairo', 'sans-serif'],
         },
         // ... all other extensions
       },
     },
     plugins: [
       require('tailwindcss-rtl'),
     ],
   }
   ```

3. **Create RTL adjustments**:
   ```css
   /* src/styles/rtl.css */
   [dir="rtl"] {
     /* RTL-specific adjustments */
   }
   ```

### Responsive Requirements
- All breakpoints configured
- Mobile-first approach established

### Validation
- [ ] All colors match design system
- [ ] Typography scales correctly
- [ ] RTL direction works
- [ ] Custom animations work

### Completion Criteria
✅ Tailwind is fully configured
✅ Design tokens are defined
✅ RTL support is working
✅ Custom animations are available

---

## PHASE 2 — Global Layout

### Objective
Create the global layout components that appear on every page.

### Deliverables
- [ ] `src/components/layout/Container.vue`
- [ ] `src/components/layout/Header.vue`
- [ ] `src/components/layout/Footer.vue`
- [ ] `src/components/layout/WhatsAppButton.vue`
- [ ] `src/components/navigation/DesktopNav.vue`
- [ ] `src/components/navigation/MobileNav.vue`
- [ ] `src/components/navigation/MobileMenuToggle.vue`
- [ ] `src/components/common/Logo.vue`
- [ ] `src/components/common/Button.vue`
- [ ] `src/components/common/SectionHeading.vue`

### Dependencies
- Phase 0 (Project Foundation)
- Phase 1 (Tailwind Design System)

### Implementation Guidelines

1. **Container**:
   - Max width: 1280px
   - Responsive padding
   - Centered

2. **Header**:
   - Fixed positioning
   - Responsive layouts (desktop, tablet, mobile)
   - Logo, navigation, CTA button
   - Mobile menu toggle

3. **Footer**:
   - Multi-column layout
   - Responsive grid
   - Company info, links, contact
   - Social media icons
   - Copyright

4. **Navigation**:
   - Desktop: Horizontal menu
   - Mobile: Slide-down overlay
   - Active state highlighting
   - Hover effects

5. **Buttons**:
   - Primary, secondary, outline variants
   - Size variants
   - Hover and focus states

### Responsive Requirements
- Header adapts to all screen sizes
- Navigation works on mobile
- Footer columns stack on mobile

### Validation
- [ ] Header renders correctly on all devices
- [ ] Mobile menu opens/closes
- [ ] Navigation links work
- [ ] Footer displays correctly
- [ ] Buttons have proper styling

### Completion Criteria
✅ All layout components are created
✅ Header works on all devices
✅ Footer is responsive
✅ Navigation is functional
✅ Buttons are styled

---

## PHASE 3 — Header/Navigation

### Objective
Complete and test the header and navigation components.

### Deliverables
- [ ] Finalize `Header.vue`
- [ ] Finalize `DesktopNav.vue`
- [ ] Finalize `MobileNav.vue`
- [ ] Finalize `MobileMenuToggle.vue`
- [ ] Finalize `Logo.vue`
- [ ] Navigation data in `src/data/navigation.json`

### Dependencies
- Phase 0-2

### Implementation Guidelines

1. **Navigation Data**:
   ```json
   {
     "items": [
       { "to": "/", "label": "الرئيسية" },
       { "to": "/about", "label": "من نحن" },
       { "to": "/services", "label": "خدماتنا" },
       { "to": "/faq", "label": "الأسئلة الشائعة" },
       { "to": "/contacts", "label": "تواصل معنا" }
     ]
   }
   ```

2. **Header Logic**:
   - Mobile menu state
   - Close on route change
   - Close on Escape key
   - Close on outside click

3. **Accessibility**:
   - ARIA labels
   - Keyboard navigation
   - Focus states

### Responsive Requirements
- Desktop: Full navigation visible
- Tablet: Adjusted layout
- Mobile: Hamburger menu

### Validation
- [ ] All navigation links work
- [ ] Mobile menu opens/closes smoothly
- [ ] Active link is highlighted
- [ ] Keyboard navigation works
- [ ] Accessibility is maintained

### Completion Criteria
✅ Header is fully functional
✅ Navigation works on all devices
✅ Mobile menu is accessible
✅ All links are functional

---

## PHASE 4 — Footer

### Objective
Complete and test the footer component.

### Deliverables
- [ ] Finalize `Footer.vue`
- [ ] `src/components/ui/SocialLink.vue`
- [ ] `src/components/ui/FooterColumn.vue`
- [ ] Footer data in `src/data/footer.json`

### Dependencies
- Phase 0-2

### Implementation Guidelines

1. **Footer Data**:
   ```json
   {
     "company": {
       "logo": "/assets/images/logo/rs-logo-300x300.webp",
       "description": "مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة...",
       "socialLinks": [...],
       "copyright": "جميع الحقوق محفوظة لمؤسسة المستشار رامي شريف 2026 © ramisharif.com"
     },
     "links": [...],
     "branches": [...],
     "contact": {...},
     "policies": [...]
   }
   ```

2. **Responsive Grid**:
   - Desktop: 4 columns
   - Tablet: 2 columns
   - Mobile: 1 column

### Responsive Requirements
- Footer adapts to all screen sizes
- Columns stack on mobile
- Text remains readable

### Validation
- [ ] Footer renders correctly
- [ ] All links work
- [ ] Social icons are visible
- [ ] Responsive layout works

### Completion Criteria
✅ Footer is complete
✅ All links are functional
✅ Responsive layout works
✅ Social icons are displayed

---

## PHASE 5 — Home Page

### Objective
Build the complete home page with all sections.

### Deliverables
- [ ] `src/pages/Home.vue`
- [ ] `src/components/sections/HomeHero.vue`
- [ ] `src/components/sections/AboutPreview.vue`
- [ ] `src/components/sections/StatsRow.vue`
- [ ] `src/components/sections/ServicesGrid.vue`
- [ ] `src/components/sections/WhyUs.vue`
- [ ] `src/components/sections/Testimonials.vue`
- [ ] `src/components/sections/ConsultationCta.vue`
- [ ] `src/components/sections/HomeFaq.vue`
- [ ] `src/components/ui/TestimonialCard.vue`
- [ ] `src/components/ui/VideoPlayer.vue`
- [ ] Home page data in `src/data/home.json`

### Dependencies
- Phase 0-4

### Implementation Guidelines

1. **Section Order**:
   - HomeHero
   - AboutPreview
   - StatsRow
   - ServicesGrid
   - WhyUs
   - Testimonials
   - ConsultationCta
   - HomeFaq

2. **Responsive Layout**:
   - Each section adapts to screen size
   - Images scale appropriately
   - Text remains readable

3. **Interactions**:
   - Video player works
   - Testimonial cards display
   - FAQ accordion works
   - CTA buttons are clickable

### Responsive Requirements
- All sections work on mobile
- Images are properly sized
- Layouts adapt correctly

### Validation
- [ ] All sections render
- [ ] Video plays
- [ ] FAQ accordion works
- [ ] All buttons work
- [ ] Responsive layout works

### Completion Criteria
✅ Home page is complete
✅ All sections are functional
✅ All interactions work
✅ Responsive design is correct

---

## PHASE 6 — About Page

### Objective
Build the complete about page with all sections.

### Deliverables
- [ ] `src/pages/About.vue`
- [ ] `src/components/sections/AboutHero.vue`
- [ ] `src/components/sections/AboutIntro.vue`
- [ ] `src/components/sections/AboutHistory.vue`
- [ ] `src/components/sections/AboutVision.vue`
- [ ] `src/components/sections/AboutValues.vue`
- [ ] `src/components/sections/AboutExpertise.vue`
- [ ] `src/components/sections/AboutAchievements.vue`
- [ ] `src/components/sections/AboutDepartments.vue`
- [ ] `src/components/ui/ValueCard.vue`
- [ ] About page data in `src/data/about.json`

### Dependencies
- Phase 0-4

### Implementation Guidelines

1. **Section Order**:
   - AboutHero
   - AboutIntro
   - AboutHistory
   - AboutVision
   - AboutValues
   - AboutExpertise
   - AboutAchievements
   - AboutDepartments

2. **Content**:
   - All text content from existing site
   - Proper typography
   - Readable layout

### Responsive Requirements
- All sections work on mobile
- Text is properly sized
- Layouts adapt correctly

### Validation
- [ ] All sections render
- [ ] All text is visible
- [ ] Layout is correct
- [ ] Responsive design works

### Completion Criteria
✅ About page is complete
✅ All content is preserved
✅ Layout is correct
✅ Responsive design works

---

## PHASE 7 — Services Page

### Objective
Build the complete services page with all sections.

### Deliverables
- [ ] `src/pages/Services.vue`
- [ ] `src/components/sections/ServicesHero.vue`
- [ ] `src/components/sections/ServicesCategories.vue`
- [ ] `src/components/sections/ServicesGrid.vue`
- [ ] `src/components/sections/ServicesStats.vue`
- [ ] `src/components/ui/Lightbox.vue`
- [ ] Services data in `src/data/services.json`

### Dependencies
- Phase 0-4

### Implementation Guidelines

1. **Section Order**:
   - ServicesHero
   - ServicesCategories
   - ServicesGrid
   - ServicesStats

2. **Lightbox**:
   - Opens on image click
   - Keyboard navigation
   - Close on Escape
   - Previous/Next buttons

3. **Responsive**:
   - Grid adapts to screen size
   - Lightbox works on mobile

### Responsive Requirements
- All sections work on mobile
- Lightbox is functional
- Images display correctly

### Validation
- [ ] All sections render
- [ ] Lightbox opens/closes
- [ ] Navigation works
- [ ] Responsive layout works

### Completion Criteria
✅ Services page is complete
✅ Lightbox works
✅ All images display
✅ Responsive design works

---

## PHASE 8 — FAQ Page

### Objective
Build the complete FAQ page with accordion functionality.

### Deliverables
- [ ] `src/pages/FAQ.vue`
- [ ] `src/components/sections/FaqIntro.vue`
- [ ] `src/components/sections/FaqList.vue`
- [ ] `src/components/ui/Accordion.vue`
- [ ] `src/components/ui/AccordionItem.vue`
- [ ] FAQ data in `src/data/faq.json`

### Dependencies
- Phase 0-4

### Implementation Guidelines

1. **Section Order**:
   - FaqIntro
   - FaqList

2. **Accordion**:
   - One item open at a time
   - Smooth animations
   - Icon rotation
   - Keyboard support

3. **Organization**:
   - Consider categorizing FAQs
   - Proper spacing

### Responsive Requirements
- Accordion works on mobile
- Text is readable
- Layout adapts

### Validation
- [ ] All sections render
- [ ] Accordion works
- [ ] Keyboard navigation works
- [ ] Responsive design works

### Completion Criteria
✅ FAQ page is complete
✅ Accordion is functional
✅ All questions are visible
✅ Responsive design works

---

## PHASE 9 — Contact Page

### Objective
Build the complete contact page with map and contact information.

### Deliverables
- [ ] `src/pages/Contact.vue`
- [ ] `src/components/sections/ContactHero.vue`
- [ ] `src/components/sections/ContactInfo.vue`
- [ ] `src/components/ui/ContactCard.vue`
- [ ] `src/components/ui/icons/` (EnvelopeIcon, MapMarkerIcon, PhoneIcon)
- [ ] Contact data in `src/data/contact.json`

### Dependencies
- Phase 0-4

### Implementation Guidelines

1. **Section Order**:
   - ContactHero
   - ContactInfo

2. **Map**:
   - Google Maps embed
   - "Open in Google Maps" button
   - Proper sizing

3. **Contact Cards**:
   - Icon + title + content
   - Clickable links
   - Proper spacing

### Responsive Requirements
- Map displays correctly on mobile
- Contact cards stack
- All information is visible

### Validation
- [ ] All sections render
- [ ] Map displays
- [ ] Links work
- [ ] Responsive layout works

### Completion Criteria
✅ Contact page is complete
✅ Map is functional
✅ All contact info is visible
✅ Responsive design works

---

## PHASE 10 — Responsive Refinement

### Objective
Test and refine responsive behavior across all devices.

### Deliverables
- [ ] Responsive testing on all pages
- [ ] Mobile-specific adjustments
- [ ] Tablet-specific adjustments
- [ ] Desktop-specific adjustments
- [ ] Large desktop testing

### Dependencies
- Phase 5-9 (All pages complete)

### Implementation Guidelines

1. **Test on Multiple Devices**:
   - Mobile: 320px - 767px
   - Tablet: 768px - 1024px
   - Desktop: 1025px - 1439px
   - Large Desktop: >= 1440px

2. **Check for Issues**:
   - Overflow
   - Touch targets
   - Readability
   - Layout breaks
   - Image sizing

3. **Fix Issues**:
   - Adjust spacing
   - Modify layouts
   - Optimize images
   - Improve touch targets

### Responsive Requirements
- All pages work on all devices
- No horizontal scrolling
- Touch targets >= 44x44px
- Text is readable

### Validation
- [ ] Mobile testing complete
- [ ] Tablet testing complete
- [ ] Desktop testing complete
- [ ] No responsive issues

### Completion Criteria
✅ All pages are responsive
✅ No layout issues
✅ Touch targets are adequate
✅ Text is readable on all devices

---

## PHASE 11 — Asset/Content Cleanup

### Objective
Organize, optimize, and clean up all assets and content.

### Deliverables
- [ ] Organized asset structure
- [ ] Optimized images
- [ ] Removed unused assets
- [ ] Proper naming conventions
- [ ] Lazy loading implementation

### Dependencies
- Phase 5-10

### Implementation Guidelines

1. **Organize Assets**:
   - Move to `public/assets/`
   - Create logical folders
   - Use descriptive names

2. **Optimize Images**:
   - Convert to WebP
   - Compress without quality loss
   - Create responsive versions

3. **Remove Unused**:
   - Delete legacy WordPress assets
   - Remove unused images
   - Clean up CSS files

4. **Implement Lazy Loading**:
   ```html
   <img src="..." alt="..." loading="lazy" />
   ```

### Responsive Requirements
- Images load correctly on all devices
- Lazy loading works
- No broken image references

### Validation
- [ ] All assets are organized
- [ ] All images are optimized
- [ ] No unused assets remain
- [ ] Lazy loading works

### Completion Criteria
✅ Assets are organized
✅ Images are optimized
✅ Unused assets are removed
✅ Lazy loading is implemented

---

## PHASE 12 — Final QA

### Objective
Perform final quality assurance testing.

### Deliverables
- [ ] Cross-browser testing
- [ ] Performance testing
- [ ] Accessibility audit
- [ ] SEO validation
- [ ] Content verification

### Dependencies
- Phase 11

### Implementation Guidelines

1. **Cross-Browser Testing**:
   - Chrome
   - Firefox
   - Safari
   - Edge
   - Mobile browsers

2. **Performance Testing**:
   - Lighthouse audit
   - Page load times
   - Image optimization
   - Bundle size

3. **Accessibility Audit**:
   - Keyboard navigation
   - Screen reader testing
   - Color contrast
   - ARIA attributes
   - Focus states

4. **SEO Validation**:
   - Meta tags
   - Page titles
   - Descriptions
   - Canonical URLs
   - OpenGraph tags

5. **Content Verification**:
   - All text preserved
   - All links work
   - All images display
   - No typos

### Responsive Requirements
- All tests pass on all devices

### Validation
- [ ] Cross-browser compatibility
- [ ] Performance metrics meet targets
- [ ] Accessibility score >= 90
- [ ] SEO is properly configured
- [ ] All content is correct

### Completion Criteria
✅ All tests pass
✅ Performance is optimized
✅ Accessibility is maintained
✅ SEO is configured
✅ Content is verified

---

## Implementation Timeline

| Phase | Name | Estimated Time | Priority |
|-------|------|---------------|----------|
| 0 | Project Foundation | 1-2 hours | Critical |
| 1 | Tailwind Design System | 2-4 hours | Critical |
| 2 | Global Layout | 4-6 hours | Critical |
| 3 | Header/Navigation | 2-3 hours | Critical |
| 4 | Footer | 2-3 hours | Critical |
| 5 | Home Page | 6-8 hours | High |
| 6 | About Page | 4-6 hours | High |
| 7 | Services Page | 4-6 hours | High |
| 8 | FAQ Page | 2-3 hours | High |
| 9 | Contact Page | 2-3 hours | High |
| 10 | Responsive Refinement | 4-6 hours | High |
| 11 | Asset/Content Cleanup | 2-3 hours | Medium |
| 12 | Final QA | 4-6 hours | Medium |

**Total Estimated Time**: 40-60 hours

---

## Risk Mitigation

### High Risk Items
1. **RTL Support**: Ensure all components work correctly with RTL
2. **Responsive Design**: Test thoroughly on all devices
3. **Content Preservation**: Verify all content is preserved
4. **Performance**: Optimize images and assets

### Mitigation Strategies
1. **RTL Testing**: Test each component with RTL early
2. **Responsive Testing**: Use browser dev tools and real devices
3. **Content Review**: Compare new site with old site
4. **Performance Budget**: Set targets and monitor

---

## Success Metrics

1. **Code Quality**:
   - Clean, maintainable code
   - Consistent patterns
   - Proper separation of concerns
   - Good documentation

2. **Performance**:
   - Lighthouse score >= 90
   - Page load time < 2s
   - Bundle size < 500KB
   - Time to First Byte < 200ms

3. **Accessibility**:
   - WCAG 2.1 AA compliance
   - Keyboard navigable
   - Screen reader compatible
   - Color contrast >= 4.5:1

4. **SEO**:
   - All meta tags present
   - Proper page titles
   - Descriptive descriptions
   - Valid structured data

5. **User Experience**:
   - Intuitive navigation
   - Clear information hierarchy
   - Fast interactions
   - No errors or bugs

---

## Next Steps

Proceed to [15-qa-and-verification.md](./15-qa-and-verification.md) for detailed QA and verification procedures.
