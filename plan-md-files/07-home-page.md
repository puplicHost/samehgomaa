# HOME PAGE

## Overview

The home page is the main landing page for Rami Sharif Legal Consultation Foundation. It introduces the foundation, showcases services, builds trust through testimonials, and provides clear calls-to-action.

**Route**: `/`
**Component**: `src/pages/Home.vue`

## Page Structure

```
src/pages/Home.vue
├── HomeHero
├── AboutPreview
├── StatsRow (Desktop)
├── StatsRow (Tablet)
├── ServicesGrid
├── WhyUs
├── Testimonials
├── ConsultationCta
└── HomeFaq
```

## Section-by-Section Analysis

---

### 1. Home Hero Section

**Purpose**: Introduce the foundation with strong branding and primary CTA

**Current Implementation**: `src/components/home/HomeHero.vue`

**Content**:
- Main heading: "مؤسسة رامي شريف"
- Subheading: "مؤسسة استشارات قانونية"
- CTA button: "عن المؤسسة" (links to /about)
- Decorative image: rami sharif portrait
- Decorative SVG shape at bottom

**Layout**:
- **Desktop**: Two-column (51% text, 49% image)
- **Tablet**: Single column, text then image
- **Mobile**: Single column, image moved to top

**Visual Elements**:
- Background: ink (#2b2b2b)
- Text colors: gold (#af8f69) for main heading, cream (#fff3e5) for subheading
- Text shadow: 0 0 10px rgba(0,0,0,0.3)
- Decorative SVG: Complex shape divider at bottom

**New Implementation**:

```vue
<!-- components/sections/HomeHero.vue -->
<template>
  <section class="relative bg-ink text-white min-h-screen flex items-center">
    <!-- Decorative shape -->
    <div class="absolute bottom-0 left-0 right-0 h-20" aria-hidden="true">
      <svg class="w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <!-- Simplified decorative shape -->
        <path d="M0 40 Q 360 0 720 40 T 1440 40 V 80 H 0 Z" fill="#2b2b2b"/>
      </svg>
    </div>
    
    <Container class="relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text column -->
        <div class="text-center lg:text-right">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gold 
              leading-tight mb-4" style="text-shadow: 0 0 10px rgba(0,0,0,0.3);">
            مؤسسة رامي شريف
          </h1>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-cream 
              leading-tight mb-8" style="text-shadow: 0 0 10px rgba(0,0,0,0.3);">
            مؤسسة استشارات قانونية
          </h2>
          
          <Button variant="primary" to="/about" size="lg">
            عن المؤسسة
          </Button>
        </div>
        
        <!-- Image column -->
        <div class="order-first lg:order-none flex justify-center lg:justify-end">
          <img 
            src="/assets/images/heroes/ramisharif.webp" 
            alt="مؤسسة رامي شريف" 
            class="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto 
                   rounded-2xl md:rounded-3xl object-cover"
          >
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- Image: `/assets/images/wp-content/uploads/2026/04/ramisharif.webp`
- SVG: Decorative shape (can be simplified)

**Responsive Behavior**:
- Mobile: Image on top, text below, both centered
- Tablet: Image on top, text below
- Desktop: Image right, text left

---

### 2. About Preview Section

**Purpose**: Provide a brief introduction to the foundation with a video

**Current Implementation**: `src/components/home/AboutPreview.vue`

**Content**:
- Section heading: "نبذة عنا" (About Us)
- Description paragraph
- CTA button: "تعرف علينا أكثر" (Get to know us more)
- Embedded video

**Layout**:
- **Desktop**: Two-column (text + video)
- **Tablet**: Single column
- **Mobile**: Single column, video moved to top

**New Implementation**:

```vue
<!-- components/sections/AboutPreview.vue -->
<template>
  <section class="py-16 md:py-20 lg:py-24">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Text column -->
        <div class="text-center md:text-right">
          <SectionHeading title="نبذة عنا" accent-color="gold" align="center" class="md:text-right" />
          
          <p class="text-base md:text-lg text-ink-light leading-relaxed mt-6 mb-8">
            <strong>مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong> 
            هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، 
            ومقرها المنشية بمحافظة الإسكندرية. يقودها الأستاذ رامي شريف 
            بخبرة قانونية متراكمة تمتد لأكثر من 17 عامًا.
          </p>
          
          <Button variant="primary" to="/about">
            تعرف علينا أكثر
          </Button>
        </div>
        
        <!-- Video column -->
        <div class="order-first md:order-none">
          <VideoPlayer 
            src="/assets/images/wp-content/uploads/2026/04/مؤسسه-رامي-شريف-للاستشارات-القانونيه-والمحاماه-720p-h264.mp4" 
            class="w-full max-w-md mx-auto rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- Video: `/assets/images/wp-content/uploads/2026/04/مؤسسه-رامي-شريف-للاستشارات-القانونيه-والمحاماه-720p-h264.mp4`

**Responsive Behavior**:
- Mobile: Video on top, text below
- Tablet: Two columns
- Desktop: Two columns

---

### 3. Statistics Row (Desktop)

**Purpose**: Showcase achievements through visual statistics

**Current Implementation**: `src/components/home/StatsRowDesktop.vue`

**Content**:
- 4 image cards with achievement themes:
  1. "عاما من الخبرة" (Years of experience)
  2. "قضايا رابحة" (Winning cases)
  3. "استشارة قانونية" (Legal consultation)
  4. "كوادر عاملة" (Working team)

**Layout**:
- **Desktop**: 4 cards in a row, equal width
- **Tablet**: Hidden (separate tablet component)
- **Mobile**: Hidden

**New Implementation**:

```vue
<!-- components/sections/StatsRowDesktop.vue -->
<template>
  <section class="hidden lg:block py-16">
    <Container>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="(stat, index) in stats" :key="index" class="group">
          <img 
            :src="stat.image" 
            :alt="stat.title" 
            class="w-full h-64 object-cover rounded-2xl 
                   group-hover:scale-105 transition-transform duration-300"
          >
          <h3 class="sr-only">{{ stat.title }}</h3>
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

**Assets**:
- about-card-1.webp: Years of experience
- about-card-2.webp: Winning cases
- about-card-3.webp: Legal consultation
- about-card-4.webp: Working team

---

### 4. Statistics Row (Tablet)

**Purpose**: Alternative statistics display for tablet devices

**Current Implementation**: `src/components/home/StatsRowTablet.vue`

**Layout**:
- **Desktop**: Hidden
- **Tablet**: 2-4 cards in a row
- **Mobile**: Hidden

**New Implementation**:

```vue
<!-- components/sections/StatsRowTablet.vue -->
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

**Note**: This can be combined with the desktop version using responsive grid classes, eliminating the need for separate components.

**Better Approach**:

```vue
<!-- Single StatsRow component -->
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

### 5. Services Grid Section

**Purpose**: Display main service categories with a call-to-action

**Current Implementation**: `src/components/home/ServicesGrid.vue`

**Content**:
- Section heading: "خدماتنا" (Our Services)
- 3 service category cards:
  1. القضايا المدنية (Civil Cases) - service-1.webp
  2. أحوال شخصية (Personal Affairs) - service-2.webp
  3. شئون قانونية وشركات (Legal Affairs & Companies) - service-3.webp
- CTA button: "عرض الكل" (View All)

**Layout**:
- **Desktop**: Heading + CTA on left (30%), 3 cards on right (68%)
- **Tablet**: Full width, heading + CTA above cards
- **Mobile**: Full width, stacked

**New Implementation**:

```vue
<!-- components/sections/ServicesGrid.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <!-- Heading and CTA -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <SectionHeading title="خدماتنا" />
        
        <Button variant="primary" to="/services" class="mt-4 md:mt-0">
          عرض الكل
        </Button>
      </div>
      
      <!-- Service cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.id">
          <img 
            :src="service.image" 
            :alt="service.title" 
            class="w-full h-80 md:h-96 object-cover rounded-2xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const services = [
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

### 6. Why Us Section

**Purpose**: Highlight competitive advantages

**Current Implementation**: `src/components/home/WhyUs.vue`

**Content**:
- Section heading: "لماذا نحن" (Why Us)
- 3 image cards:
  1. why-us-1.webp (Legal experience)
  2. why-us-2.webp (Legal specializations)
  3. why-us-3.webp (Serious follow-up)
- Background: ink with overlay pattern

**Layout**:
- **Desktop**: 3 cards in a row, height 420px, rounded 40px
- **Tablet**: 3 cards in a row, height 300px
- **Mobile**: Single column, aspect ratio 4/3

**New Implementation**:

```vue
<!-- components/sections/WhyUs.vue -->
<template>
  <section class="py-16 md:py-20 bg-ink relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10" aria-hidden="true">
      <img 
        src="/assets/images/wp-content/uploads/2024/07/drawings.webp" 
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    
    <Container class="relative z-10">
      <SectionHeading title="لماذا نحن" color="gold" class="text-center mb-12" />
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(reason, index) in reasons" :key="index">
          <img 
            :src="reason.image" 
            :alt="reason.title" 
            class="w-full h-80 md:h-96 object-cover rounded-4xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const reasons = [
  { image: '/assets/images/why-us/why-us-1.webp', title: 'خبرة قانونية' },
  { image: '/assets/images/why-us/why-us-2.webp', title: 'تخصصات قانونية' },
  { image: '/assets/images/why-us/why-us-3.webp', title: 'متابعة جادة' }
]
</script>
```

**Assets**:
- why-us-1.webp: Legal experience
- why-us-2.webp: Legal specializations
- why-us-3.webp: Serious follow-up
- drawings.webp: Background pattern

---

### 7. Testimonials Section

**Purpose**: Build trust through client testimonials

**Current Implementation**: `src/components/home/Testimonials.vue`

**Content**:
- Section heading: "آراء العملاء" (Client Opinions)
- 3 testimonial cards with:
  - Quote icon (❝)
  - Testimonial text
  - Client name
  - Client location

**Testimonials**:
1. **Ahmed Ali** (Alexandria): Praise for real estate dispute case
2. **Maryam Mahmoud** (Alexandria): Praise for divorce case support
3. **Khaled Abdullah** (Alexandria): Praise for compensation case

**Layout**:
- **Desktop**: 3 cards in a row
- **Tablet**: 2-3 cards in a row
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/Testimonials.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <SectionHeading title="آراء العملاء" color="ink" class="mb-12" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard 
          v-for="testimonial in testimonials" 
          :key="testimonial.id" 
          :testimonial="testimonial" 
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import TestimonialCard from '../ui/TestimonialCard.vue'

const testimonials = [
  {
    id: 1,
    quote: 'بجد مؤسسة رامي شريف فرقوا معايا كتير في قضية النزاع العقاري اللي كنت واقع فيها. كانوا محترفين جدًا وساعدوني أرجع حقي. مشكورين جدًا.',
    name: 'أحمد علي',
    location: 'الإسكندرية'
  },
  {
    id: 2,
    quote: 'المستشار رامي شريف وفريقه بصراحة كانوا دعم كبير ليا في قضية الطلاق. كانوا فاهمين كل التفاصيل وقدموا لي نصائح ممتازة. ربنا يبارك فيهم.',
    name: 'مريم محمود',
    location: 'الإسكندرية'
  },
  {
    id: 3,
    quote: 'أنا رحت لمؤسسة رامي شريف بعد ما كنت فاقد الأمل في قضية تعويض مالي. الحمد لله، المستشارين هناك قدروا يجيبوا لي حقي بمنتهى الاحترافية.',
    name: 'خالد عبد الله',
    location: 'الإسكندرية'
  }
]
</script>
```

**TestimonialCard Component**:

```vue
<!-- components/ui/TestimonialCard.vue -->
<template>
  <div class="bg-white rounded-2xl p-6 md:p-8 shadow-testimonial border-t-4 border-gold">
    <div class="text-gold text-4xl mb-4">"</div>
    
    <p class="text-ink-light text-base leading-relaxed mb-6 grow">
      {{ testimonial.quote }}
    </p>
    
    <div class="text-center">
      <p class="font-bold text-ink text-lg">{{ testimonial.name }}</p>
      <p class="text-gold text-sm">{{ testimonial.location }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: { type: Object, required: true }
})
</script>
```

---

### 8. Consultation CTA Section

**Purpose**: Primary call-to-action for booking legal consultations

**Current Implementation**: `src/components/home/ConsultationCta.vue`

**Content**:
- Decorative image (gavel)
- Section heading: "أحصـل على استشارتك القانونية" (Get your legal consultation)
- Description: "نقدم خدمة حجز الاستشارات القانونية المدفوعة لضمان حصولكم على المشورة القانونية المتخصصة والمناسبة لقضاياكم."
- CTA button: "حجز استشارة قانونية" (links to WhatsApp)

**Layout**:
- **Desktop**: Two-column (56% image, 42% text)
- **Tablet**: Single column, centered
- **Mobile**: Single column, centered

**New Implementation**:

```vue
<!-- components/sections/ConsultationCta.vue -->
<template>
  <section class="py-16 md:py-20 bg-ink">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image column -->
        <div class="flex justify-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/07/cc.webp" 
            alt="" 
            class="w-32 md:w-48 h-auto"
          >
        </div>
        
        <!-- Text column -->
        <div class="text-center md:text-right">
          <SectionHeading title="أحصـل على<br>استشارتك القانونية" color="gold" />
          
          <p class="text-gold text-base md:text-lg leading-relaxed mt-4 mb-8">
            نقدم خدمة حجز الاستشارات القانونية المدفوعة لضمان حصولكم على المشورة 
            القانونية المتخصصة والمناسبة لقضاياكم.
          </p>
          
          <a 
            href="https://wa.me/201111904997?text=مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-block"
          >
            <Button variant="primary">
              حجز استشارة قانونية
            </Button>
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- cc.webp: Gavel/consultation image

---

### 9. Home FAQ Section

**Purpose**: Preview of frequently asked questions

**Current Implementation**: `src/components/home/HomeFaq.vue`

**Content**:
- Section heading: "الأسئلة الشائعة" (FAQ)
- 3 FAQ items with accordion
- CTA button: "عرض الكل" (View All, links to /faq)
- Decorative image (gavel)

**FAQ Items**:
1. ما هي إجراءات تسجيل العقار في الشهر العقاري؟
2. هل يمكن تعديل عقد الزواج ليشمل شروطاً إضافية؟
3. ما هي الإجراءات اللازمة للحصول على ترخيص بناء؟

**Layout**:
- **Desktop**: Two-column (60% FAQ, 38% image)
- **Tablet**: Single column, image moved to top
- **Mobile**: Single column, image moved to top

**New Implementation**:

```vue
<!-- components/sections/HomeFaq.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- FAQ column -->
        <div class="order-2 md:order-1">
          <SectionHeading title="الأسئلة الشائعة" class="mb-8" />
          
          <Accordion :items="faqItems" icon-side="left" class="mb-8" />
          
          <div class="text-center md:text-right">
            <Button variant="primary" to="/faq">
              عرض الكل
            </Button>
          </div>
        </div>
        
        <!-- Image column -->
        <div class="order-1 md:order-2 flex justify-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/08/g.webp" 
            alt="" 
            class="w-32 md:w-48 h-auto"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Accordion from '../ui/Accordion.vue'

const faqItems = [
  {
    id: 'home-faq-1',
    title: 'ما هي إجراءات تسجيل العقار في الشهر العقاري؟',
    content: 'يجب تقديم طلب التسجيل في الشهر العقاري مرفقًا بالوثائق المطلوبة مثل عقد البيع، بطاقة الرقم القومي للبائع والمشتري، وشهادة المخالصة من الضرائب العقارية. بعد تقديم الطلب، يتم فحصه وإجراء المعاينة ثم تسجيل العقار.'
  },
  {
    id: 'home-faq-2',
    title: 'هل يمكن تعديل عقد الزواج ليشمل شروطاً إضافية؟',
    content: 'نعم، يمكن تعديل عقد الزواج ليشمل شروطاً إضافية بالاتفاق بين الزوجين، ويتم ذلك من خلال كتابة عقد ملحق يوقع عليه الطرفان ويصدق عليه من الجهات المختصة.'
  },
  {
    id: 'home-faq-3',
    title: 'ما هي الإجراءات اللازمة للحصول على ترخيص بناء؟',
    content: 'يتطلب الحصول على ترخيص بناء تقديم طلب إلى الجهة المختصة مرفقاً بالرسومات الهندسية والمستندات المطلوبة مثل شهادة الملكية وتقرير السلامة الإنشائية. بعد ذلك يتم فحص الطلب وإجراء المعاينة ومن ثم إصدار الترخيص.'
  }
]
</script>
```

**Assets**:
- g.webp: FAQ decorative image

---

## Home Page Component

```vue
<!-- src/pages/Home.vue -->
<template>
  <div>
    <HomeHero />
    <AboutPreview />
    <StatsRow />
    <ServicesGrid />
    <WhyUs />
    <Testimonials />
    <ConsultationCta />
    <HomeFaq />
  </div>
</template>

<script setup>
import HomeHero from '../components/sections/HomeHero.vue'
import AboutPreview from '../components/sections/AboutPreview.vue'
import StatsRow from '../components/sections/StatsRow.vue'
import ServicesGrid from '../components/sections/ServicesGrid.vue'
import WhyUs from '../components/sections/WhyUs.vue'
import Testimonials from '../components/sections/Testimonials.vue'
import ConsultationCta from '../components/sections/ConsultationCta.vue'
import HomeFaq from '../components/sections/HomeFaq.vue'
</script>
```

## Asset Inventory for Home Page

### Images
| File | Purpose | Location | Reuse |
|------|---------|---------|-------|
| ramisharif.webp | Hero image | /assets/images/wp-content/uploads/2026/04/ | Home only |
| مؤسسه-رامي-شريف-للاستشارات-القانونيه-والمحاماه-720p-h264.mp4 | About video | /assets/images/wp-content/uploads/2026/04/ | Home only |
| about-card-1.webp | Years of experience | /assets/images/about-us/ | Reusable |
| about-card-2.webp | Winning cases | /assets/images/about-us/ | Reusable |
| about-card-3.webp | Legal consultation | /assets/images/about-us/ | Reusable |
| about-card-4.webp | Working team | /assets/images/about-us/ | Reusable |
| service-1.webp | Civil cases | /assets/images/services/ | Reusable |
| service-2.webp | Personal affairs | /assets/images/services/ | Reusable |
| service-3.webp | Legal affairs | /assets/images/services/ | Reusable |
| why-us-1.webp | Legal experience | /assets/images/why-us/ | Home only |
| why-us-2.webp | Legal specializations | /assets/images/why-us/ | Home only |
| why-us-3.webp | Serious follow-up | /assets/images/why-us/ | Home only |
| cc.webp | Consultation image | /assets/images/wp-content/uploads/2024/07/ | Reusable |
| g.webp | FAQ image | /assets/images/wp-content/uploads/2024/08/ | Reusable |
| drawings.webp | Background pattern | /assets/images/wp-content/uploads/2024/07/ | Home only |

### SVG
| File | Purpose | Location |
|------|---------|---------|
| Decorative shape | Hero bottom divider | Inline in component |

## Next Steps

Proceed to [08-about-page.md](./08-about-page.md) for detailed about page specifications.
