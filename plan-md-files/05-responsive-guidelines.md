# RESPONSIVE DESIGN GUIDELINES

## Overview

Responsive design is a **high priority** for this rebuild. The website must work correctly on all device sizes while preserving the information architecture and visual hierarchy.

## Breakpoints

Based on the existing Tailwind configuration:

```javascript
// tailwind.config.js
screens: {
  md: '768px',      // Tablet portrait
  lg: '1025px',     // Tablet landscape / Small desktop
  xl: '1440px',     // Large desktop
}
```

**Device Categories**:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px - 1439px
- **Large Desktop**: >= 1440px

## Responsive Strategy

### 1. Mobile-First Approach
- Design for mobile first
- Add enhancements for larger screens
- Use `min-width` media queries (Tailwind's default)

### 2. Progressive Enhancement
- Mobile: Stacked layouts, single column
- Tablet: Multi-column, adjusted spacing
- Desktop: Full multi-column layouts

### 3. Content Priority
- Mobile: Most important content first
- Desktop: All content visible, optimal layout

## Global Responsive Patterns

### Container Widths

```html
<!-- Main container -->
<div class="max-w-container mx-auto px-4 md:px-6 lg:px-8">
  <!-- Content -->
</div>

<!-- Narrow container for text -->
<div class="max-w-3xl mx-auto px-4">
  <!-- Text content -->
</div>

<!-- Full width sections -->
<div class="w-full">
  <!-- Full width content -->
</div>
```

### Typography

**Responsive Font Sizes**:

```html
<!-- Hero heading -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">
  مؤسسة رامي شريف
</h1>

<!-- Section heading -->
<h2 class="text-2xl md:text-3xl lg:text-4xl">
  خدماتنا
</h2>

<!-- Body text -->
<p class="text-base md:text-lg">
  نص وصفي
</p>

<!-- Small text -->
<p class="text-sm md:text-base">
  نص صغير
</p>
```

**Clamp-based Sizes** (for smooth scaling):

```html
<!-- Responsive heading with clamp -->
<h1 class="text-clamp-4xl md:text-clamp-5xl">
  عنوان
</h1>
```

### Spacing

**Padding**:
```html
<!-- Section padding -->
<div class="py-12 md:py-16 lg:py-20">
  <!-- Section content -->
</div>

<!-- Card padding -->
<div class="p-4 md:p-6 lg:p-8">
  <!-- Card content -->
</div>

<!-- Container padding -->
<div class="px-4 md:px-6 lg:px-8">
  <!-- Content -->
</div>
```

**Margins**:
```html
<!-- Bottom margin -->
<div class="mb-4 md:mb-6 lg:mb-8">
  <!-- Element -->
</div>

<!-- Gap in grids -->
<div class="gap-4 md:gap-6 lg:gap-8">
  <!-- Grid items -->
</div>
```

### Images

**Responsive Images**:

```html
<!-- Full width image -->
<img src="..." alt="..." class="w-full h-auto">

<!-- Constrained width image -->
<img src="..." alt="..." class="w-full max-w-md mx-auto h-auto">

<!-- Object fit -->
<img src="..." alt="..." class="w-full h-64 object-cover">

<!-- Rounded images -->
<img src="..." alt="..." class="w-full h-auto rounded-lg md:rounded-xl">
```

**Image Sizing Strategy**:
- Mobile: Full width or constrained
- Tablet: Adjusted widths, better aspect ratios
- Desktop: Optimal display with proper dimensions

## Page-Specific Responsive Behavior

### Home Page

#### Hero Section

**Desktop (>= 1025px)**:
- Two-column layout (51% text, 49% image)
- Text on left, image on right
- Decorative SVG shape at bottom
- Logo: 50px height, max-width 160px

**Tablet (768px - 1024px)**:
- Single column, text then image
- Image centered
- Padding: 20px top/bottom

**Mobile (< 768px)**:
- Single column, text then image
- Image centered, order moved to top
- Logo: 32-38px height
- Padding: 10-125px top, 10-120px bottom

```html
<!-- Hero layout -->
<div class="flex flex-col lg:flex-row items-center">
  <!-- Text column: 51% on desktop, 100% on mobile -->
  <div class="w-full lg:w-[51%] text-center lg:text-right">
    <!-- Text content -->
  </div>
  
  <!-- Image column: 49% on desktop, 100% on mobile, order -99999 on mobile -->
  <div class="w-full lg:w-[49%] order-first lg:order-none">
    <img src="..." alt="..." class="w-full h-auto">
  </div>
</div>
```

#### About Preview Section

**Desktop**:
- Two-column layout (text + video)
- Video on right side

**Tablet**:
- Single column
- Video below text
- Gap: 30px

**Mobile**:
- Single column
- Video moved to top (order: -99999)
- Padding: 40px top/bottom

```html
<div class="flex flex-col md:flex-row gap-0 md:gap-8">
  <div class="w-full md:w-[60%]">
    <!-- Text content -->
  </div>
  <div class="w-full md:w-[40%] order-first md:order-none">
    <!-- Video -->
  </div>
</div>
```

#### Statistics Row

**Desktop**:
- 4 image cards in a row
- Each card: grow, basis-0, min-height 280px
- Images: object-cover, rounded-2xl

**Tablet**:
- Hidden (md:max-lg:!hidden)
- Separate tablet-specific component

**Mobile**:
- Hidden
- Stacked layout in tablet component

```html
<!-- Desktop stats -->
<div class="hidden md:flex flex-row flex-nowrap justify-between">
  <div class="grow basis-0 min-h-[280px]">
    <img src="..." class="w-full h-full object-cover rounded-2xl">
  </div>
  <!-- Repeat for 4 cards -->
</div>

<!-- Tablet stats -->
<div class="hidden md:block lg:hidden">
  <!-- Tablet-specific layout -->
</div>
```

#### Services Grid

**Desktop**:
- 3-column grid
- Each service: 33.33% width
- Images: rounded-2xl, max-height 260px on mobile

**Tablet**:
- 2 or 3 columns based on space
- Responsive grid

**Mobile**:
- Single column
- Images: max-height 260px, object-cover

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div v-for="service in services" :key="service.id">
    <img :src="service.image" class="w-full h-auto rounded-2xl max-h-[260px] object-cover">
  </div>
</div>
```

#### Why Us Section

**Desktop**:
- 3 image cards in a row
- Height: 420px
- Gap: 24px
- Rounded: 40px

**Tablet**:
- 3 image cards in a row
- Height: 300px

**Mobile**:
- Single column
- Height: auto
- Aspect ratio: 4/3

```html
<div class="flex flex-row gap-6 h-[420px] md:h-[300px] max-md:h-auto">
  <div class="grow basis-0 min-w-0">
    <img src="..." class="w-full h-full object-cover rounded-4xl max-md:aspect-[4/3]">
  </div>
  <!-- Repeat for 3 cards -->
</div>
```

#### Testimonials Section

**Desktop**:
- 3 testimonial cards in a row
- Equal width (grow, basis-0)
- Shadow: testimonial
- Border top: 4px gold

**Tablet**:
- 2 or 3 columns
- Responsive grid

**Mobile**:
- Single column
- Full width cards

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-2xl p-6 shadow-testimonial border-t-4 border-gold">
    <!-- Testimonial content -->
  </div>
</div>
```

#### Consultation CTA Section

**Desktop**:
- Two-column layout (56% image, 42% text)
- Image on left, text on right

**Tablet**:
- Single column
- Image and text centered

**Mobile**:
- Single column
- Image and text centered
- Padding: 30px

```html
<div class="flex flex-col md:flex-row items-center">
  <div class="w-full md:w-[56%]">
    <img src="..." class="w-[20%] md:w-[50%]">
  </div>
  <div class="w-full md:w-[42%]">
    <!-- Text and CTA -->
  </div>
</div>
```

#### Home FAQ Section

**Desktop**:
- Two-column layout (60% FAQ, 38% image)
- Image on right

**Tablet**:
- Single column
- Image moved to top (order: -99999)

**Mobile**:
- Single column
- Image moved to top
- Text centered

```html
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-[60%]">
    <!-- FAQ content -->
  </div>
  <div class="w-full md:w-[38%] order-first md:order-none">
    <img src="..." class="w-[20%] md:w-[50%]">
  </div>
</div>
```

### About Page

#### General Pattern
Most about sections follow a similar pattern:
- Desktop: Two-column or multi-column
- Tablet: Adjusted column counts
- Mobile: Single column, stacked

#### Vision/Mission Section

**Desktop**:
- Two-column layout with images
- Image + text pairs

**Mobile**:
- Single column
- Images and text stacked

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="flex items-center gap-4">
    <img src="..." class="w-24 h-24">
    <div>
      <h3>رؤية المؤسسة</h3>
      <p>...</p>
    </div>
  </div>
  <!-- Repeat -->
</div>
```

#### Values Section

**Desktop**:
- 4 value cards in a grid
- Each with icon, title, description

**Mobile**:
- Single column
- Full width cards

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="text-center">
    <img src="..." class="w-16 h-16 mx-auto mb-4">
    <h4>التميز المهني</h4>
    <p>...</p>
  </div>
  <!-- Repeat for 4 values -->
</div>
```

#### Departments Section

**Desktop**:
- 3 department sections
- Each with heading and description

**Mobile**:
- Single column
- Stacked departments

```html
<div class="space-y-8">
  <div v-for="dept in departments" :key="dept.id">
    <h3>{{ dept.title }}</h3>
    <p>{{ dept.description }}</p>
  </div>
</div>
```

### Services Page

#### Services Categories

**Desktop**:
- 3 category images in a row

**Mobile**:
- Single column
- Full width images

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <img src="..." alt="..." class="w-full h-auto rounded-2xl">
</div>
```

#### Services Grid with Lightbox

**Desktop**:
- Grid of service images
- Lightbox on click

**Mobile**:
- Single column
- Lightbox still functional

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div v-for="(service, i) in services" :key="service.id">
    <img :src="service.src" @click="openLightbox(i)" class="cursor-pointer">
  </div>
</div>
```

### FAQ Page

#### FAQ List

**Desktop**:
- Single column
- Full width accordion
- Icon on left side

**Mobile**:
- Single column
- Full width
- Adjusted spacing

```html
<div class="w-full max-w-3xl mx-auto">
  <Accordion :items="faqs" icon-side="left" />
</div>
```

### Contact Page

#### Contact Info with Map

**Desktop**:
- Google Maps embed (full width)
- Contact cards grid below

**Mobile**:
- Google Maps embed (full width)
- Contact cards stacked

```html
<!-- Map -->
<div class="w-full">
  <iframe src="..." class="w-full h-[450px] rounded-xl"></iframe>
</div>

<!-- Contact cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  <div class="text-center">
    <Icon name="envelope" />
    <h4>البريد الإلكتروني</h4>
    <p>info@ramisharif.com</p>
  </div>
  <!-- Repeat for all contact methods -->
</div>
```

## Header Responsive Behavior

### Desktop (>= 1025px)

**Home Page Header**:
- 3-column layout:
  - Logo: 7% width
  - Navigation: 72% width
  - CTA Button: 17% width
- Fixed at top
- Background: ink (#2b2b2b)
- Padding: 15px top/bottom

**Subpages Header**:
- Same 3-column layout
- Different element IDs

### Tablet (768px - 1024px)

**Home Page Header**:
- 3-column layout:
  - Logo: 10% width
  - CTA Button: 74% width (with icon)
  - Navigation: 10% width
- Fixed at top
- Mobile menu toggle visible

**Subpages Header**:
- Similar layout to home

### Mobile (< 768px)

**All Pages**:
- Logo: 20% width
- Navigation: Hidden (mobile menu)
- CTA Button: 50% width
- Mobile menu toggle: Visible
- Mobile menu: Slide down overlay
- Padding: 10px top/bottom (adjusts down to 6px on smallest screens)

**Mobile Menu**:
- Full width overlay
- Vertical menu
- Divider between items: 1px dashed rgba(43, 43, 43, 0.07)
- Background: ink
- Active state: background ink

```html
<!-- Mobile menu toggle -->
<button 
  @click="toggleMobileMenu" 
  class="md:hidden p-2"
  aria-label="Toggle menu"
>
  <svg class="w-6 h-6" fill="none" stroke="currentColor">
    <path v-if="!mobileOpen" d="M3 12h18M3 6h18M3 18h18" />
    <path v-else d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

<!-- Mobile menu -->
<div 
  v-if="mobileOpen" 
  class="fixed inset-0 bg-ink z-40 md:hidden"
  @click="closeMobileMenu"
>
  <nav class="flex flex-col items-center justify-center h-full">
    <RouterLink 
      v-for="item in menuItems" 
      :key="item.to" 
      :to="item.to"
      class="py-4 px-6 text-white hover:text-gold"
      @click="closeMobileMenu"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</div>
```

## Footer Responsive Behavior

### Desktop (>= 1025px)

- 4-column layout:
  - Column 1: Logo + description + social icons (flex: 1.35)
  - Column 2: Important links (flex: 1)
  - Column 3: Branches (flex: 1)
  - Column 4: Contact info (flex: 1)
- Gap: 36px horizontal, 44px vertical
- Padding: 56px top, 44px bottom

### Tablet (768px - 1024px)

- 2-column layout:
  - Each column: 50% - 16px
- Gap: 32px horizontal, 40px vertical
- Padding: 44px top, 40px bottom

### Mobile (< 768px)

- Single column
- All columns stacked
- Gap: 28px
- Padding: 44px top, 40px bottom
- Text centered
- Social icons centered

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  <!-- Column 1: Logo and description -->
  <div class="lg:col-span-1">
    <img src="..." alt="Logo" class="w-32 h-32 mx-auto md:mx-0">
    <p class="mt-4 text-center md:text-right">...</p>
    <div class="flex justify-center md:justify-start gap-4 mt-6">
      <!-- Social icons -->
    </div>
  </div>
  
  <!-- Column 2: Links -->
  <div>
    <h4>روابط مهمة</h4>
    <ul class="mt-4 space-y-2">
      <li><RouterLink to="/">الرئيسية</RouterLink></li>
      <!-- More links -->
    </ul>
  </div>
  
  <!-- Column 3: Branches -->
  <div>
    <h4>فروعنا</h4>
    <div class="mt-4 space-y-4">
      <div>
        <h5>فرع الإسكندرية</h5>
        <p>...</p>
      </div>
      <!-- More branches -->
    </div>
  </div>
  
  <!-- Column 4: Contact -->
  <div>
    <h4>معلومات التواصل</h4>
    <div class="mt-4">
      <h5>البريد الإلكتروني</h5>
      <p><a href="mailto:...">Info@Ramisharif.Com</a></p>
    </div>
  </div>
</div>
```

## WhatsApp Button

- Fixed position: bottom-6 right-6 (25px, 30px in existing)
- Size: 70px x 70px
- Rounded: full (50%)
- Shadow: whatsapp
- Z-index: 10001
- Always visible

```html
<a 
  href="https://wa.me/201111904997?text=..." 
  target="_blank"
  class="fixed bottom-6 right-6 z-[10001] w-16 h-16 bg-green-500 rounded-full 
         shadow-whatsapp flex items-center justify-center text-white"
  aria-label="تواصل معنا عبر واتساب"
>
  <WhatsAppIcon class="w-8 h-8" />
</a>
```

## Testing Checklist

### Mobile (< 768px)
- [ ] Header collapses to mobile menu
- [ ] Mobile menu opens/closes correctly
- [ ] All sections stack vertically
- [ ] Images are full width or constrained
- [ ] Text is readable (font sizes appropriate)
- [ ] Touch targets are large enough
- [ ] Scrolling is smooth
- [ ] WhatsApp button is accessible

### Tablet (768px - 1024px)
- [ ] Header shows tablet layout
- [ ] Navigation is accessible
- [ ] Multi-column layouts work correctly
- [ ] Images display properly
- [ ] Content doesn't overflow
- [ ] Spacing is appropriate

### Desktop (>= 1025px)
- [ ] Full multi-column layouts display correctly
- [ ] Header shows all elements
- [ ] Navigation is horizontal
- [ ] All images display at correct sizes
- [ ] Hover effects work
- [ ] Animations are smooth

### Large Desktop (>= 1440px)
- [ ] Layouts don't stretch too wide
- [ ] Max-width containers work
- [ ] Content remains readable
- [ ] Spacing scales appropriately

## Next Steps

Proceed to [06-header-and-footer.md](./06-header-and-footer.md) for detailed header and footer specifications.
