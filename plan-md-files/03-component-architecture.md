# COMPONENT ARCHITECTURE

## Overview

This document defines the **new component architecture** for the rebuilt website. The goal is to create a clean, maintainable, and reusable component structure that avoids the pitfalls of the Elementor-based implementation.

## Architecture Principles

### 1. Separation of Concerns
- **Pages** own page composition and layout
- **Components** own reusable UI and behavior
- **Data** is separated into JSON files where appropriate
- **Styles** use Tailwind utility classes

### 2. Component Categories

```
src/components/
├── layout/          # Global layout components (used on every page)
├── navigation/     # Navigation-related components
├── common/         # Reusable UI elements
├── sections/       # Page section components
├── ui/            # Interactive UI components
└── pages/          # Page-specific components (if needed)
```

### 3. Naming Conventions
- **PascalCase** for component filenames: `Button.vue`, `Header.vue`
- **kebab-case** for HTML classes (Tailwind)
- **Descriptive names**: `SectionHeading.vue` not `Title.vue`
- **Prefix with context**: `ServiceCard.vue` not `Card.vue`

## Global Layout Components

### 1. Header (`components/layout/Header.vue`)

**Purpose**: Site header with logo, navigation, and CTA

**Responsibilities**:
- Display logo linking to home
- Render navigation menu
- Mobile menu toggle
- WhatsApp CTA button
- Sticky/fixed positioning
- Responsive layout variations

**Sub-components**:
- `DesktopNavigation` - Horizontal menu for desktop
- `MobileNavigation` - Slide-down menu for mobile
- `Logo` - Site logo component

**Props**:
- `isHome` - Boolean to determine header variant

**Behavior**:
- Mobile menu opens/closes with animation
- Closes on route change
- Closes on Escape key
- Active link highlighting

---

### 2. Footer (`components/layout/Footer.vue`)

**Purpose**: Site footer with company info, links, and contact

**Responsibilities**:
- Company logo and description
- Important links column
- Branches/locations column
- Contact information column
- Social media links
- Copyright notice
- Policy links (privacy, terms, etc.)

**Layout**:
- Desktop: Multi-column grid
- Mobile: Stacked columns

---

### 3. WhatsAppButton (`components/layout/WhatsAppButton.vue`)

**Purpose**: Floating WhatsApp contact button

**Responsibilities**:
- Fixed position in bottom-right corner
- Links to WhatsApp with pre-filled message
- Accessible label and ARIA attributes
- Visual styling with shadow

**Props**:
- `phone` - Phone number for WhatsApp link
- `message` - Pre-filled message text

## Navigation Components

### 1. DesktopNavigation (`components/navigation/DesktopNavigation.vue`)

**Purpose**: Horizontal navigation menu for desktop/tablet

**Responsibilities**:
- Render navigation links
- Active state styling
- Hover effects
- Right-to-left layout for Arabic

**Props**:
- `items` - Array of navigation items

---

### 2. MobileNavigation (`components/navigation/MobileNavigation.vue`)

**Purpose**: Slide-down mobile menu

**Responsibilities**:
- Overlay background
- Vertical menu layout
- Close button
- Divider between items
- Smooth open/close animation

**Props**:
- `items` - Array of navigation items
- `isOpen` - Controlled by parent

**Emits**:
- `@close` - When menu should close

## Common Components

### 1. Button (`components/common/Button.vue`)

**Purpose**: Reusable button component

**Variants**:
- `primary` - Gold background, white text
- `secondary` - Outline gold, dark text
- `cta` - Large CTA button

**Props**:
- `variant` - Button style variant
- `size` - sm, md, lg
- `to` - For RouterLink (if internal)
- `href` - For external links
- `disabled` - Disabled state

---

### 2. SectionHeading (`components/common/SectionHeading.vue`)

**Purpose**: Consistent section heading with decorative elements

**Responsibilities**:
- Main heading text
- Optional subtitle
- Decorative border/accent
- Centered or left-aligned

**Props**:
- `title` - Main heading text
- `subtitle` - Optional subtitle
- `align` - center, left, right
- `accentColor` - Border color (gold by default)

---

### 3. Container (`components/common/Container.vue`)

**Purpose**: Consistent content container with max-width

**Responsibilities**:
- Centered content
- Max-width constraint
- Horizontal padding
- Responsive padding adjustments

**Props**:
- `maxWidth` - Custom max-width
- `padding` - Custom padding

---

### 4. IconBox (`components/common/IconBox.vue`)

**Purpose**: Icon with title and description

**Responsibilities**:
- Icon display
- Title and description
- Optional link
- Hover effects

**Props**:
- `icon` - Icon name or SVG
- `title` - Box title
- `description` - Box description
- `to` - Optional link

## Section Components

### 1. HeroSection (`components/sections/HeroSection.vue`)

**Purpose**: Page hero section with title and optional image

**Variants**:
- `home` - Home page hero with decorative shape
- `standard` - Standard hero with title and description
- `withImage` - Hero with background image

**Props**:
- `title` - Main title
- `subtitle` - Subtitle
- `description` - Description text
- `image` - Optional image source
- `ctaText` - Call-to-action button text
- `ctaTo` - CTA button link
- `variant` - Hero variant

---

### 2. StatsSection (`components/sections/StatsSection.vue`)

**Purpose**: Statistics/achievements display

**Responsibilities**:
- Grid of stat cards
- Image-based stats
- Responsive grid layout

**Props**:
- `items` - Array of stat items
- `columns` - Number of columns (responsive)

---

### 3. TestimonialsSection (`components/sections/TestimonialsSection.vue`)

**Purpose**: Client testimonials display

**Responsibilities**:
- Grid of testimonial cards
- Optional carousel/slider
- Quote icons
- Client attribution

**Props**:
- `testimonials` - Array of testimonial objects
- `columns` - Number of columns

---

### 4. ServicesGrid (`components/sections/ServicesGrid.vue`)

**Purpose**: Grid of service cards/images

**Responsibilities**:
- Responsive grid layout
- Image cards with hover effects
- Lightbox integration
- "View All" button

**Props**:
- `services` - Array of service objects
- `columns` - Number of columns
- `showViewAll` - Show "View All" button

---

### 5. CtaSection (`components/sections/CtaSection.vue`)

**Purpose**: Call-to-action section

**Responsibilities**:
- Compelling headline
- Description text
- Prominent CTA button
- Optional image

**Props**:
- `title` - CTA headline
- `description` - CTA description
- `buttonText` - Button text
- `buttonTo` - Button link
- `image` - Optional image

---

### 6. FaqSection (`components/sections/FaqSection.vue`)

**Purpose**: Frequently asked questions with accordion

**Responsibilities**:
- Section heading
- Accordion list
- "View All" button (if partial list)

**Props**:
- `items` - Array of FAQ items
- `showViewAll` - Show "View All" button
- `maxItems` - Maximum items to show

## UI Components

### 1. Accordion (`components/ui/Accordion.vue`)

**Purpose**: Accordion component for expandable content

**Responsibilities**:
- Multiple accordion items
- Single or multiple items open
- Smooth animations
- Icon rotation

**Props**:
- `items` - Array of accordion items
- `allowMultiple` - Allow multiple items open
- `iconSide` - Icon position (left, right)

---

### 2. AccordionItem (`components/ui/AccordionItem.vue`)

**Purpose**: Individual accordion item

**Props**:
- `title` - Item title
- `content` - Item content
- `isOpen` - Open state
- `iconSide` - Icon position

**Emits**:
- `@toggle` - When item is toggled

---

### 3. Lightbox (`components/ui/Lightbox.vue`)

**Purpose**: Image lightbox for gallery

**Responsibilities**:
- Full-screen overlay
- Image display
- Navigation arrows
- Close button
- Keyboard navigation (arrows, escape)
- Caption display

**Props**:
- `items` - Array of images
- `index` - Current image index
- `show` - Visibility state

**Emits**:
- `@close` - Close lightbox
- `@next` - Go to next image
- `@prev` - Go to previous image

---

### 4. VideoPlayer (`components/ui/VideoPlayer.vue`)

**Purpose**: Embedded video player

**Responsibilities**:
- Video embed
- Autoplay (muted)
- Controls
- Responsive sizing

**Props**:
- `src` - Video source URL
- `poster` - Poster image
- `autoplay` - Autoplay setting
- `controls` - Show controls

## Page-Specific Components

### Home Page Components

1. **HomeHero** - Home-specific hero with decorative shape
2. **AboutPreview** - Brief about section with video
3. **WhyUs** - Why choose us section with images
4. **ConsultationCta** - Consultation booking CTA
5. **HomeFaq** - FAQ preview for home page

### About Page Components

1. **AboutHero** - About page hero
2. **AboutIntro** - Introduction section
3. **AboutHistory** - History narrative
4. **AboutVision** - Vision and mission
5. **AboutValues** - Company values with icons
6. **AboutExpertise** - Expertise description
7. **AboutAchievements** - Achievements and milestones
8. **AboutDepartments** - Service departments

### Services Page Components

1. **ServicesHero** - Services page hero
2. **ServicesCategories** - Service category display
3. **ServicesGrid** - Service images gallery
4. **ServicesStats** - Service statistics

### FAQ Page Components

1. **FaqIntro** - FAQ introduction
2. **FaqList** - Full FAQ list with accordion

### Contact Page Components

1. **ContactHero** - Contact page hero
2. **ContactInfo** - Contact information with map

## Component Reuse Strategy

### High Reuse (Create as reusable components)
- ✅ Header
- ✅ Footer
- ✅ WhatsAppButton
- ✅ Button
- ✅ SectionHeading
- ✅ Container
- ✅ IconBox
- ✅ Accordion
- ✅ Lightbox
- ✅ HeroSection
- ✅ StatsSection
- ✅ TestimonialsSection
- ✅ ServicesGrid
- ✅ CtaSection

### Medium Reuse (Consider reusable components)
- ⚠️ Navigation (Desktop/Mobile variants)
- ⚠️ Card (Generic card component)
- ⚠️ ImageGallery
- ⚠️ VideoPlayer

### Low Reuse (Keep as page-specific)
- ❌ HomeHero (unique layout)
- ❌ AboutHistory (unique content)
- ❌ ContactInfo (unique layout)

## Component Communication

### Props Pattern
- Use descriptive prop names
- Type props with JSDoc or TypeScript
- Default values where appropriate
- Avoid excessive props (use slots for content)

### Slots Pattern
- Use slots for content injection
- Named slots for specific areas
- Default slot for main content

### Events Pattern
- Use `emit` for parent communication
- Descriptive event names
- Pass relevant data with events

## Next Steps

Proceed to [04-design-system.md](./04-design-system.md) for Tailwind design system definition.
