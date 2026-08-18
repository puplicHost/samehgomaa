# CLEAN WEBSITE REBUILD — OVERVIEW

## Project Summary

This document outlines the comprehensive plan for a **clean rebuild** of the **Rami Sharif Legal Consultation Foundation** website (ramisharif.com). The existing website is built on WordPress with Elementor, and we are migrating to a modern, maintainable frontend architecture using **Vue 3 + Vite + Tailwind CSS**.

## Core Objective

Create a completely new, clean, maintainable frontend application that:
- Preserves the website's information architecture
- Maintains all existing pages and routes
- Retains the major sections of every page
- Preserves the overall layout structure and visual hierarchy
- Maintains important imagery and content
- Preserves responsive behavior across all devices
- Produces a clean, maintainable codebase for future development

## What We Are NOT Doing

- ❌ CSS-to-Tailwind migration
- ❌ Elementor migration  
- ❌ WordPress migration
- ❌ Copying Elementor classes, IDs, or markup
- ❌ Preserving legacy CSS architecture
- ❌ Carrying over WordPress theme variables
- ❌ Reproducing pixel-perfect designs

## What We ARE Doing

- ✅ Building a new Vue 3 + Vite + Tailwind CSS application from scratch
- ✅ Using the existing website as a **reference** for structure and content
- ✅ Creating a clean component architecture
- ✅ Implementing a semantic Tailwind design system
- ✅ Ensuring full responsiveness (mobile, tablet, desktop)
- ✅ Preserving all content, routes, and information architecture
- ✅ Implementing clean interactions and animations

## Website Information

- **Organization**: مؤسسة رامي شريف للاستشارات القانونية والمحاماة (Rami Sharif Legal Consultation Foundation)
- **Location**: Alexandria, Egypt (المنشية - محافظة الإسكندرية)
- **Language**: Arabic (RTL)
- **Direction**: Right-to-Left (RTL)
- **Primary Contact**: 01111904997
- **Email**: Info@Ramisharif.Com
- **Website**: ramisharif.com

## Current Technology Stack (Reference Only)

- WordPress with Elementor page builder
- Custom theme with Blocksy framework
- Various Elementor widgets and plugins
- jQuery-based interactions
- Responsive design with mobile-specific layouts

## New Technology Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v3
- **Router**: Vue Router 4
- **Language**: Arabic (RTL support)
- **Styling**: Utility-first with semantic design tokens

## Project Structure (New)

```
src/
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── services/
│   │   ├── about/
│   │   ├── why-us/
│   │   ├── testimonials/
│   │   └── heroes/
│   └── fonts/
│       └── (Arabic fonts)
├── components/
│   ├── layout/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── WhatsAppButton.vue
│   ├── navigation/
│   │   └── MobileMenu.vue
│   ├── common/
│   │   ├── Button.vue
│   │   ├── SectionHeading.vue
│   │   ├── Container.vue
│   │   └── IconBox.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── StatsSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── FaqSection.vue
│   │   ├── CtaSection.vue
│   │   └── ServicesGrid.vue
│   └── ui/
│       ├── Accordion.vue
│       ├── AccordionItem.vue
│       ├── Lightbox.vue
│       └── VideoPlayer.vue
├── pages/
│   ├── Home.vue
│   ├── About.vue
│   ├── Services.vue
│   ├── FAQ.vue
│   └── Contact.vue
├── router/
│   └── index.js
├── styles/
│   ├── tailwind.css
│   ├── rtl.css
│   └── animations.css
├── data/
│   ├── faq.json
│   ├── services.json
│   ├── testimonials.json
│   └── navigation.json
├── App.vue
└── main.js
```

## Design Philosophy

1. **Semantic Structure**: Use semantic HTML and Vue components
2. **Clean Separation**: Separate concerns (components, styles, data, logic)
3. **Reusability**: Create reusable components where beneficial
4. **Maintainability**: Write code that's easy to understand and modify
5. **Performance**: Optimize for fast loading and smooth interactions
6. **Accessibility**: Ensure WCAG compliance for RTL content
7. **Responsiveness**: Mobile-first approach with clean breakpoints

## Success Criteria

The rebuild is successful when:
- All pages load correctly with preserved content
- Navigation works seamlessly across all devices
- Responsive behavior matches or improves upon original
- Codebase is clean, organized, and well-documented
- Build process is simple and reliable
- Performance metrics are equal or better than original
- Future development is straightforward and intuitive

## Next Steps

Proceed to [01-current-site-analysis.md](./01-current-site-analysis.md) for detailed analysis of the existing website.
