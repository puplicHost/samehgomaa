# SERVICES PAGE

## Overview

The Services page showcases all legal services offered by Rami Sharif Legal Consultation Foundation, organized by categories with visual galleries.

**Route**: `/services`
**Component**: `src/pages/Services.vue`

## Page Structure

```
src/pages/Services.vue
├── ServicesHero
├── ServicesCategories
├── ServicesGrid
├── ServicesStatsDesktop
└── ServicesStatsTablet
```

## Section-by-Section Analysis

---

### 1. Services Hero Section

**Purpose**: Page header introducing legal services

**Current Implementation**: `src/components/services/ServicesHero.vue`

**Content**:
- Main heading: "الخدمات القانونية" + "في مؤسسة رامي شريف"
- Description: Brief introduction to services
- Decorative images (2)

**Layout**:
- **Desktop**: Text with decorative images
- **Tablet**: Adjusted layout
- **Mobile**: Stacked

**New Implementation**:

```vue
<!-- components/sections/ServicesHero.vue -->
<template>
  <section class="py-16 md:py-20 relative overflow-hidden">
    <!-- Decorative images -->
    <img 
      src="/assets/images/wp-content/uploads/2024/07/d3awybw.webp" 
      alt="" 
      class="absolute top-0 left-0 w-48 md:w-64 h-auto opacity-20 -translate-x-1/4 -translate-y-1/4"
    >
    
    <img 
      src="/assets/images/wp-content/uploads/2024/07/ta7selbw.webp" 
      alt="" 
      class="absolute top-0 right-0 w-48 md:w-64 h-auto opacity-20 translate-x-1/4 -translate-y-1/4"
    >
    
    <Container class="relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
          الخدمات القانونية
        </h1>
        
        <h2 class="text-3xl md:text-4xl font-medium text-ink leading-tight mb-6">
          في مؤسسة رامي شريف
        </h2>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          تقدم مؤسسة رامي شريف للمحاماه والاستشارات القانونية مجموعة واسعة من 
          الخدمات القانونية التي تلبي احتياجات الأفراد والشركات على حد سواء.
        </p>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- d3awybw.webp: Decorative image 1
- ta7selbw.webp: Decorative image 2

---

### 2. Services Categories Section

**Purpose**: Display main service categories

**Current Implementation**: `src/components/services/ServicesCategories.vue`

**Content**:
- Section heading: "أقسام عمل المؤسسة" (Foundation Work Departments)
- 3 category images:
  1. service-1.webp (Civil Cases)
  2. service-2.webp (Personal Affairs)
  3. service-3.webp (Legal Affairs & Companies)

**Layout**:
- **Desktop**: 3 images in a row
- **Tablet**: 3 images in a row
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/ServicesCategories.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <SectionHeading title="أقسام عمل المؤسســــة" class="text-center mb-12" />
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="category in categories" :key="category.id">
          <img 
            :src="category.image" 
            :alt="category.title" 
            class="w-full h-80 md:h-96 object-cover rounded-2xl"
          >
          <h3 class="sr-only">{{ category.title }}</h3>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const categories = [
  { id: 1, image: '/assets/images/services/service-1.webp', title: 'القضايا المدنية' },
  { id: 2, image: '/assets/images/services/service-2.webp', title: 'أحوال شخصية' },
  { id: 3, image: '/assets/images/services/service-3.webp', title: 'شئون قانونية وشركات' }
]
</script>
```

**Assets**:
- service-1.webp: Civil Cases
- service-2.webp: Personal Affairs
- service-3.webp: Legal Affairs & Companies

---

### 3. Services Grid Section

**Purpose**: Gallery of all service images with lightbox

**Current Implementation**: `src/components/services/ServicesGrid.vue`

**Content**:
- Section heading: "خدمات المؤسسة" (Foundation Services)
- 8 service images with lightbox buttons
- CTA: "إحجز إستشارتك القانونية الآن" (links to /contacts)

**Services**:
1. قضايا الأحوال الشخصية (Personal Affairs Cases)
2. قضايا الأسرة (Family Cases)
3. القضايا المدنية (Civil Cases)
4. المنازعات والتعويضات (Disputes and Compensations)
5. تأسيس الشركات (Company Establishment)
6. الشئون القانونية للشركات (Corporate Legal Affairs)
7. صياغة ومراجعة العقود (Drafting and Reviewing Contracts)
8. تنفيذ الأحكام (Judgment Execution)

**Layout**:
- **Desktop**: Grid of images (3-4 columns)
- **Tablet**: Adjusted grid
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/ServicesGrid.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <SectionHeading title="خدمات المؤسسة" class="text-center mb-12" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="(service, index) in services" :key="service.id">
          <div class="relative group cursor-pointer" @click="openLightbox(index)">
            <img 
              :src="service.src" 
              :alt="service.alt" 
              class="w-full h-64 md:h-80 object-cover rounded-2xl 
                     group-hover:scale-105 transition-transform duration-300"
            >
            
            <!-- Lightbox trigger overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
                        rounded-2xl transition-all duration-300 flex items-center 
                        justify-center">
              <div class="bg-white bg-opacity-90 p-3 rounded-full group-hover:scale-110 
                          transition-transform">
                <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>
          
          <p class="text-center mt-2 text-ink-light">{{ service.alt }}</p>
        </div>
      </div>
      
      <div class="text-center">
        <Button variant="primary" to="/contacts" size="lg">
          إحجز إستشارتك القانونية الآن
        </Button>
      </div>
    </Container>
    
    <!-- Lightbox -->
    <Lightbox 
      :items="services" 
      :index="lightboxIndex" 
      @close="lightboxIndex = -1" 
      @update:index="lightboxIndex = $event"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Lightbox from '../ui/Lightbox.vue'
import services from '../../data/services.json'

const lightboxIndex = ref(-1)

function openLightbox(index) {
  lightboxIndex.value = index
}
</script>
```

**Data**: `src/data/services.json`

---

### 4. Services Stats (Desktop)

**Purpose**: Achievement statistics for desktop

**Current Implementation**: `src/components/services/ServicesStatsDesktop.vue`

**Content**:
- 4 image cards (same as home page stats)

**Layout**:
- **Desktop**: 4 cards in a row
- **Tablet**: Hidden
- **Mobile**: Hidden

**New Implementation**:

```vue
<!-- components/sections/ServicesStatsDesktop.vue -->
<template>
  <section class="hidden lg:block py-16">
    <Container>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="(stat, index) in stats" :key="index">
          <img 
            :src="stat.image" 
            :alt="stat.title" 
            class="w-full h-64 object-cover rounded-2xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const stats = [
  { image: '/assets/images/about-us/about-card-1.webp', title: 'عاما من الخبرة' },
  { image: '/assets/images/about-us/about-card-2.webp', title: 'قضايا رابحة' },
  { image: '/assets/images/about-us/about-card-3.webp', title: 'استشارة قانونية' },
  { image: '/assets/images/about-us/about-card-4.webp', title: 'كوادر عاملة' }
]
</script>
```

---

### 5. Services Stats (Tablet)

**Purpose**: Achievement statistics for tablet

**Current Implementation**: `src/components/services/ServicesStatsTablet.vue`

**Layout**:
- **Desktop**: Hidden
- **Tablet**: 2-4 cards in a row
- **Mobile**: Hidden

**New Implementation**:

```vue
<!-- components/sections/ServicesStatsTablet.vue -->
<template>
  <section class="hidden md:block lg:hidden py-12">
    <Container>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(stat, index) in stats" :key="index">
          <img 
            :src="stat.image" 
            :alt="stat.title" 
            class="w-full h-48 object-cover rounded-2xl aspect-[4/3]"
          >
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Better Approach**: Combine with desktop version

```vue
<!-- Single ServicesStats component -->
<template>
  <section class="hidden md:block py-12 md:py-16">
    <Container>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="(stat, index) in stats" :key="index">
          <img 
            :src="stat.image" 
            :alt="stat.title" 
            class="w-full h-48 md:h-64 object-cover rounded-2xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>
```

---

## Services Page Component

```vue
<!-- src/pages/Services.vue -->
<template>
  <div>
    <ServicesHero />
    <ServicesCategories />
    <ServicesGrid />
    <ServicesStats />
  </div>
</template>

<script setup>
import ServicesHero from '../components/sections/ServicesHero.vue'
import ServicesCategories from '../components/sections/ServicesCategories.vue'
import ServicesGrid from '../components/sections/ServicesGrid.vue'
import ServicesStats from '../components/sections/ServicesStats.vue'
</script>
```

## Lightbox Component

The lightbox is used for viewing service images in full size.

```vue
<!-- components/ui/Lightbox.vue -->
<template>
  <div 
    v-if="index >= 0" 
    class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center 
          justify-center p-4" 
    aria-modal="true" 
    role="dialog" 
    aria-label="عرض الصورة" 
    @click="onBackdropClick"
  >
    <!-- Close button -->
    <button 
      type="button" 
      class="absolute top-6 right-6 text-white text-4xl hover:text-gold 
             transition-colors" 
      aria-label="إغلاق" 
      @click="$emit('close')"
    >
      &times;
    </button>
    
    <!-- Previous button -->
    <button 
      type="button" 
      class="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl 
             hover:text-gold transition-colors" 
      aria-label="السابق" 
      @click="step(-1)"
    >
      &#10094;
    </button>
    
    <!-- Image -->
    <div class="max-w-full max-h-full">
      <img 
        :src="current.src" 
        :alt="current.alt" 
        class="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
      >
      <p class="text-center text-white mt-4">{{ current.alt }}</p>
    </div>
    
    <!-- Next button -->
    <button 
      type="button" 
      class="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl 
             hover:text-gold transition-colors" 
      aria-label="التالي" 
      @click="step(1)"
    >
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { computed, watchEffect, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: -1 }
})

const emit = defineEmits(['close', 'update:index'])

const current = computed(() => {
  const i = ((props.index % props.items.length) + props.items.length) % props.items.length
  return props.items[i]
})

// Prevent body scroll when open
watchEffect(() => {
  document.body.style.overflow = props.index >= 0 ? 'hidden' : ''
})

function step(dir) {
  const next = props.index + dir
  const nextIndex = ((next % props.items.length) + props.items.length) % props.items.length
  emit('update:index', nextIndex)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

// Keyboard navigation
function onKeydown(e) {
  if (props.index < 0) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') step(1)
  if (e.key === 'ArrowRight') step(-1)
}

document.addEventListener('keydown', onKeydown)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
```

## Services Data

```json
// src/data/services.json
[
  {
    "id": "srv1",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.18 PM.jpeg",
    "alt": "قضايا الأحوال الشخصية"
  },
  {
    "id": "srv2",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.18 PM (1).jpeg",
    "alt": "قضايا الأسرة"
  },
  {
    "id": "srv3",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.18 PM (2).jpeg",
    "alt": "القضايا المدنية"
  },
  {
    "id": "srv4",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.19 PM.jpeg",
    "alt": "المنازعات والتعويضات"
  },
  {
    "id": "srv5",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.19 PM (1).jpeg",
    "alt": "تأسيس الشركات"
  },
  {
    "id": "srv6",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.20 PM.jpeg",
    "alt": "الشئون القانونية للشركات"
  },
  {
    "id": "srv7",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.28.21 PM.jpeg",
    "alt": "صياغة ومراجعة العقود"
  },
  {
    "id": "srv8",
    "src": "/assets/images/services/Our/WhatsApp Image 2026-08-12 at 6.33.11 PM.jpeg",
    "alt": "تنفيذ الأحكام"
  }
]
```

## Asset Inventory for Services Page

### Images
| File | Purpose | Location | Reuse |
|------|---------|---------|-------|
| d3awybw.webp | Decorative 1 | /assets/images/wp-content/uploads/2024/07/ | Services only |
| ta7selbw.webp | Decorative 2 | /assets/images/wp-content/uploads/2024/07/ | Services only |
| service-1.webp | Civil Cases | /assets/images/services/ | Reusable |
| service-2.webp | Personal Affairs | /assets/images/services/ | Reusable |
| service-3.webp | Legal Affairs | /assets/images/services/ | Reusable |
| about-card-1.webp | Experience | /assets/images/about-us/ | Reusable |
| about-card-2.webp | Winning Cases | /assets/images/about-us/ | Reusable |
| about-card-3.webp | Consultation | /assets/images/about-us/ | Reusable |
| about-card-4.webp | Team | /assets/images/about-us/ | Reusable |
| WhatsApp Image 2026-08-12 at 6.28.18 PM.jpeg | Personal Affairs Cases | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.18 PM (1).jpeg | Family Cases | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.18 PM (2).jpeg | Civil Cases | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.19 PM.jpeg | Disputes | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.19 PM (1).jpeg | Company Establishment | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.20 PM.jpeg | Corporate Affairs | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.28.21 PM.jpeg | Contracts | /assets/images/services/Our/ | Services only |
| WhatsApp Image 2026-08-12 at 6.33.11 PM.jpeg | Judgment Execution | /assets/images/services/Our/ | Services only |

## Next Steps

Proceed to [10-faq-page.md](./10-faq-page.md) for detailed FAQ page specifications.
