# TAILWIND DESIGN SYSTEM

## Overview

This document defines the **clean Tailwind CSS design system** for the rebuilt website. The goal is to create a semantic, maintainable styling approach that captures the visual identity of Rami Sharif Legal Consultation Foundation while avoiding legacy CSS patterns.

## Design Tokens

### Color Palette

Based on the existing website's color scheme with semantic naming:

#### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `gold` | `#af8f69` | Primary brand color, CTAs, accents |
| `gold-light` | `#bf6f14` | Secondary gold, hover states |
| `gold-dark` | `#8a6b4a` | Darker gold variant |

#### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#2b2b2b` | Dark text, headers, footers |
| `ink-light` | `#4a4a4a` | Body text, secondary content |
| `ink-lighter` | `#6b6b6b` | Muted text, placeholders |

#### Background Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#fffcf7` | Light backgrounds, cards |
| `bodybg` | `#fffefd` | Page background |
| `white` | `#ffffff` | Pure white backgrounds |

#### Footer Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `footer` | `#2F2F2F` | Footer background |
| `footerbar` | `#262626` | Footer bottom bar |

#### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#af8f69` | Primary actions, links |
| `secondary` | `#2b2b2b` | Secondary elements |
| `success` | `#7bdcb5` | Success states |
| `warning` | `#fcb900` | Warning states |
| `error` | `#cf2e2e` | Error states |
| `info` | `#0693e3` | Information states |

### Typography

#### Font Families
```css
font-family: {
  cairo: ['Cairo', 'sans-serif'],
  heebo: ['Heebo', 'sans-serif'],
  body: ['Cairo', 'sans-serif'],
  heading: ['Cairo', 'sans-serif']
}
```

**Note**: The existing site uses Cairo for most content. We should:
- Use Cairo as the primary font
- Include fallback to system fonts
- Consider adding Heebo for specific use cases

#### Font Weights
- `300` - Light (for subtitles, secondary text)
- `400` - Regular (body text)
- `500` - Medium (emphasis)
- `600` - Semi-bold (headings, buttons)
- `700` - Bold (main headings, important text)

#### Font Sizes

**Clamp-based Responsive Sizes** (from existing config):
```css
fontSize: {
  '2xs': ['10px', { lineHeight: '1.5' }],
  '7xl': ['45px', { lineHeight: '1.5' }],
  '8xl': ['50px', { lineHeight: '1.5' }],
  '9xl': ['56px', { lineHeight: '1.5' }],
  '10xl': ['64px', { lineHeight: '1.5' }],
  '11xl': ['72px', { lineHeight: '1.3' }],
  '12xl': ['80px', { lineHeight: '1.3' }],
  // Responsive clamp sizes
  'clamp-sm': ['clamp(12px, 2vw, 14px)', { lineHeight: '1.5' }],
  'clamp-base': ['clamp(14px, 2.5vw, 16px)', { lineHeight: '1.65' }],
  'clamp-lg': ['clamp(16px, 3vw, 18px)', { lineHeight: '1.5' }],
  'clamp-xl': ['clamp(18px, 3.5vw, 20px)', { lineHeight: '1.5' }],
  'clamp-2xl': ['clamp(20px, 4vw, 24px)', { lineHeight: '1.5' }],
  'clamp-3xl': ['clamp(24px, 4.5vw, 28px)', { lineHeight: '1.5' }],
  'clamp-4xl': ['clamp(28px, 5vw, 35px)', { lineHeight: '1.5' }],
  'clamp-5xl': ['clamp(35px, 6vw, 42px)', { lineHeight: '1.5' }],
  'clamp-6xl': ['clamp(40px, 6vw, 72px)', { lineHeight: '1.3' }],
}
```

**Recommended Usage**:
- **Hero Headings**: `text-4xl md:text-5xl lg:text-6xl` or use clamp
- **Section Headings**: `text-3xl md:text-4xl`
- **Subheadings**: `text-xl md:text-2xl`
- **Body Text**: `text-base md:text-lg`
- **Small Text**: `text-sm`

#### Line Heights
- **Headings**: `1.3` - `1.4`
- **Body**: `1.6` - `1.8`
- **Tight**: `1.2` - `1.3` (for large headings)

### Spacing

#### Spacing Scale
Use Tailwind's default spacing scale with additions:
```css
spacing: {
  '18': '4.5rem',
  '88': '22rem',
  '128': '32rem',
}
```

**Recommended Usage**:
- **Section Padding**: `py-16 md:py-20 lg:py-24`
- **Container Padding**: `px-4 md:px-6 lg:px-8`
- **Card Padding**: `p-6 md:p-8`
- **Element Margins**: `mb-4 md:mb-6`
- **Gap Sizes**: `gap-4 md:gap-6 lg:gap-8`

### Layout

#### Container Widths
```css
maxWidth: {
  container: 'min(100%, 1280px)',
  content: 'min(100%, calc(100% - 40px * 2))',
}
```

**Usage**:
```html
<div class="max-w-container mx-auto px-4">
  <!-- Content -->
</div>
```

#### Border Radius
```css
borderRadius: {
  '4xl': '20px',
  '5xl': '24px',
  '6xl': '28px',
  '7xl': '40px',
}
```

**Usage**:
- **Cards**: `rounded-2xl md:rounded-3xl`
- **Images**: `rounded-2xl`
- **Buttons**: `rounded-lg`
- **Hero Images**: `rounded-4xl`

#### Border Width
```css
borderWidth: {
  '3': '3px',
  '4': '4px',
  '8': '8px',
}
```

**Usage**:
- **Accent Borders**: `border-t-3 border-gold`
- **Card Borders**: `border border-gray-200`

### Shadows

```css
boxShadow: {
  gold: '0 12px 20px rgba(41, 51, 61, 0.1)',
  whatsapp: '0 16px 24px 0 rgb(73 104 126 / 16%)',
  header: '0 10px 20px rgba(41, 51, 61, 0.1)',
  dropdown: '0px 0px 70px rgba(0, 0, 0, 0.35)',
  testimonial: '0 12px 30px rgba(0, 0, 0, 0.08)',
}
```

**Usage**:
- **Cards**: `shadow-lg` or custom `shadow-testimonial`
- **Buttons**: `shadow-md hover:shadow-lg`
- **Header**: `shadow-header`
- **WhatsApp Button**: `shadow-whatsapp`

### Z-Index

```css
zIndex: {
  '10001': '10001',  // WhatsApp button
}
```

**Usage**:
- **Header**: `z-50`
- **Mobile Menu**: `z-40`
- **Lightbox**: `z-50`
- **WhatsApp Button**: `z-10001` (from existing)

## RTL Support

### Configuration

Tailwind must be configured for RTL:

```js
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      // ...
    }
  },
  // Enable RTL support
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
```

### RTL Considerations

1. **Direction**: Set on HTML element
   ```html
   <html lang="ar" dir="rtl">
   ```

2. **Text Alignment**:
   - Use `text-right` for RTL (equivalent to `text-left` in LTR)
   - Use `text-center` for centered text (works in both)

3. **Flex Direction**:
   - Use `flex-row-reverse` for RTL row layouts
   - Or rely on `dir="rtl"` to handle automatically

4. **Spacing**:
   - `mr-*` becomes right margin in RTL
   - `ml-*` becomes left margin in RTL
   - Consider using `ps-*` (padding-start) and `pe-*` (padding-end) for logical properties

5. **Icons**:
   - Arrow icons should flip direction in RTL
   - Use CSS transforms: `[dir="rtl"] .icon-arrow:rotate-180`

## Color Usage Guidelines

### Primary Brand Color (Gold - #af8f69)
- **Buttons**: Primary CTAs
- **Accents**: Borders, highlights
- **Text**: Important headings, links
- **Backgrounds**: Hero sections, cards

### Neutral Colors
- **#2b2b2b (Ink)**: Headers, footers, dark text
- **#ffffff (White)**: Light backgrounds, text on dark
- **#fffcf7 (Cream)**: Card backgrounds, light sections
- **#fffefd (Body BG)**: Page background

### Text Colors
- **On Light Backgrounds**: `#2b2b2b` (ink)
- **On Dark Backgrounds**: `#ffffff` (white) or `#af8f69` (gold)
- **Muted Text**: `rgba(255, 255, 255, 0.8)` or `#6b6b6b`

## Typography Guidelines

### Headings
```html
<!-- Hero Heading -->
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight">
  مؤسسة رامي شريف
</h1>

<!-- Section Heading -->
<h2 class="text-3xl md:text-4xl font-semibold text-ink mb-6">
  خدماتنا
</h2>

<!-- Subheading -->
<h3 class="text-xl md:text-2xl font-medium text-ink mb-4">
  لماذا نحن
</h3>
```

### Body Text
```html
<!-- Regular paragraph -->
<p class="text-base md:text-lg text-ink-light leading-relaxed mb-4">
  مؤسسة متخصصة في تقديم الخدمات القانونية...
</p>

<!-- Small text -->
<p class="text-sm text-ink-lighter">
  جميع الحقوق محفوظة
</p>
```

### Links
```html
<!-- Primary link -->
<RouterLink class="text-gold hover:text-gold-light font-medium transition-colors">
  تواصل معنا
</RouterLink>

<!-- Button link -->
<RouterLink class="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors">
  حجز استشارة
</RouterLink>
```

## Component-Specific Styles

### Buttons

**Primary Button**:
```html
<button class="bg-gold text-ink font-semibold px-6 py-3 rounded-lg 
                hover:bg-gold-light hover:text-white 
                transition-colors duration-300">
  حجز استشارة قانونية
</button>
```

**Secondary Button**:
```html
<button class="border-2 border-gold text-gold font-semibold px-6 py-3 rounded-lg 
                hover:bg-gold hover:text-ink 
                transition-colors duration-300">
  عرض الكل
</button>
```

### Cards

**Testimonial Card**:
```html
<div class="bg-white rounded-2xl p-6 shadow-testimonial border-t-4 border-gold">
  <!-- Content -->
</div>
```

**Service Card**:
```html
<div class="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <img src="..." alt="..." class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-ink mb-2">الخدمات القانونية</h3>
  </div>
</div>
```

### Form Elements

**Input Fields**:
```html
<input class="w-full px-4 py-3 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-gold focus:border-gold 
               outline-none transition-all">
```

**Textarea**:
```html
<textarea class="w-full px-4 py-3 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-gold focus:border-gold 
                 outline-none transition-all resize-vertical min-h-[120px]">
</textarea>
```

## Animation and Transitions

### Transitions

```css
transition: {
  'colors': 'color, background-color, border-color 300ms ease-in-out',
  'shadow': 'box-shadow 300ms ease-in-out',
  'transform': 'transform 300ms ease-in-out',
  'all': 'all 300ms ease-in-out',
}
```

**Usage**:
```html
<!-- Button with hover effect -->
<button class="transition-colors hover:bg-gold-light">
  Click me
</button>

<!-- Card with shadow transition -->
<div class="transition-shadow hover:shadow-xl">
  Card content
</div>

<!-- Smooth height transition -->
<div class="transition-all duration-500">
  Expandable content
</div>
```

### Animations

From existing config, keep these animations:

```css
animation: {
  heartbeat: 'heartbeat 1.6s ease-in-out infinite',
  grow: 'grow 0.3s ease-in-out',
  fade: 'fade 0.3s ease-in-out',
  'slide-up': 'slide-up 0.3s ease-out',
  'slide-down': 'slide-down 0.3s ease-out',
}

keyframes: {
  heartbeat: {
    '0%': { transform: 'scale(1)' },
    '14%': { transform: 'scale(1.08)' },
    '28%': { transform: 'scale(1)' },
    '42%': { transform: 'scale(1.12)' },
    '70%': { transform: 'scale(1)' },
  },
  grow: {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.03)' },
  },
  fade: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'slide-up': {
    '0%': { transform: 'translateY(10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  'slide-down': {
    '0%': { transform: 'translateY(-10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
}
```

**Usage**:
```html
<!-- Heartbeat animation for CTA buttons -->
<button class="animate-heartbeat origin-center">
  حجز استشارة
</button>

<!-- Fade in on load -->
<div class="animate-fade">
  Content
</div>

<!-- Slide up on scroll -->
<div class="animate-slide-up">
  Content
</div>
```

## Responsive Breakpoints

Use Tailwind's default breakpoints with customizations:

```css
screens: {
  sm: '640px',
  md: '768px',
  lg: '1025px',  // Custom from existing config
  xl: '1440px',  // Custom from existing config
  '2xl': '1536px',
}
```

**Responsive Strategy**:
1. **Mobile First**: Design for mobile, enhance for larger screens
2. **Progressive Enhancement**: Add features as screen size increases
3. **Layout Changes**: Adjust column counts, spacing, and visibility

## Next Steps

Proceed to [05-responsive-guidelines.md](./05-responsive-guidelines.md) for detailed responsive design specifications.
