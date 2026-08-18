# ABOUT PAGE

## Overview

The About page provides comprehensive information about Rami Sharif Legal Consultation Foundation, including its history, vision, values, expertise, achievements, and service departments.

**Route**: `/about`
**Component**: `src/pages/About.vue`

## Page Structure

```
src/pages/About.vue
├── AboutHero
├── AboutIntro
├── AboutHistory
├── AboutVision
├── AboutValues
├── AboutExpertise
├── AboutAchievements
└── AboutDepartments
```

## Section-by-Section Analysis

---

### 1. About Hero Section

**Purpose**: Page header with title and logo

**Current Implementation**: `src/components/about/AboutHero.vue`

**Content**:
- Main heading: "مؤسسة رامي شريف" + "ريادة وخبرة قانونيـــة"
- Description: Brief introduction

**Layout**:
- **Desktop**: Two-column (text + logo image)
- **Tablet**: Single column
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/AboutHero.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text column -->
        <div class="text-center md:text-right">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
            مؤسسة رامي شريف
          </h1>
          <h2 class="text-3xl md:text-4xl font-medium text-ink leading-tight">
            ريادة وخبرة قانونيـــة
          </h2>
        </div>
        
        <!-- Image column -->
        <div class="flex justify-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/08/hero-image.webp" 
            alt="مؤسسة رامي شريف" 
            class="w-full max-w-md h-auto rounded-2xl"
          >
        </div>
      </div>
      
      <p class="text-center md:text-right mt-8 text-lg text-ink-light">
        مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة في تقديم 
        الخدمات القانونية للأفراد والشركات، بقيادة الأستاذ رامي شريف بخبرة تمتد لأكثر من 17 عامًا.
      </p>
    </Container>
  </section>
</template>
```

**Assets**:
- hero-image.webp: About page hero image

---

### 2. About Intro Section

**Purpose**: Introduction with company logo

**Current Implementation**: `src/components/about/AboutIntro.vue`

**Content**:
- Company logo
- Detailed introduction paragraph

**Layout**:
- **Desktop**: Two-column (logo + text)
- **Tablet**: Single column
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/AboutIntro.vue -->
<template>
  <section class="py-12 md:py-16">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Logo column -->
        <div class="flex justify-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp" 
            alt="مؤسسة رامي شريف" 
            class="w-32 h-32"
          >
        </div>
        
        <!-- Text column -->
        <div class="text-center md:text-right">
          <p class="text-base md:text-lg text-ink-light leading-relaxed">
            <strong>مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong> 
            هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، 
            ومقرها المنشية بمحافظة الإسكندرية. يقودها 
            <strong>الأستاذ رامي شريف</strong> بخبرة قانونية متراكمة تمتد لأكثر من 17 عامًا، 
            مدعومة بتأهيل علمي متخصص في القانون الجنائي والتجاري. وتقدم المؤسسة 
            خدماتها في قضايا الأحوال الشخصية والمنازعات المدنية والشئون القانونية 
            للشركات، مع الالتزام بالدقة والسرية وحماية مصالح العملاء.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- rs-logo.webp: Company logo

---

### 3. About History Section

**Purpose**: Detailed company history and founder information

**Current Implementation**: `src/components/about/AboutHistory.vue`

**Content**:
- Detailed narrative about the foundation's establishment
- Founder's qualifications and experience
- Company's approach and specializations

**Layout**:
- Single column text
- Multiple paragraphs

**New Implementation**:

```vue
<!-- components/sections/AboutHistory.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right space-y-6">
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          تأسست <strong>مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong> 
          لتقديم خدمات قانونية متكاملة للأفراد والشركات، وفقًا لأعلى معايير المهنية 
          والالتزام، وبما يضمن حماية حقوق العملاء ومصالحهم القانونية.
        </p>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          يقود المؤسسة <strong>الأستاذ رامي شريف، المحامي</strong>، بخبرة قانونية 
          متراكمة تمتد لأكثر من 17 عامًا في مختلف مجالات العمل القانوني، مدعومة 
          بخلفية علمية متخصصة تشمل ليسانس الحقوق من جامعة الإسكندرية، ودبلوم 
          القانون العام، ودبلوم العلوم الجنائية، وماجستير القانون الجنائي، 
          وماجستير القانون التجاري.
        </p>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          وعلى مدار سنوات العمل والخبرة، نجحت المؤسسة في بناء خبرة عملية قوية 
          في إدارة القضايا، وتقديم الاستشارات القانونية، ومتابعة إجراءات التقاضي، 
          وتنفيذ الأحكام، إلى جانب تقديم الدعم القانوني المتكامل للشركات والأفراد.
        </p>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          وتتخصص المؤسسة في قضايا الأحوال الشخصية والقضايا المدنية، بالإضافة إلى 
          الشئون القانونية للشركات، مع الحرص على دراسة كل حالة بدقة ووضع استراتيجية 
          قانونية واضحة تتناسب مع طبيعة القضية واحتياجات العميل.
        </p>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          ونؤمن بأن العمل القانوني الناجح لا يعتمد فقط على المعرفة القانونية، بل 
          يقوم أيضًا على الخبرة العملية، والمتابعة الدقيقة، والقدرة على التعامل الفعّال 
          مع مختلف الإجراءات والجهات القضائية.
        </p>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          كما نحرص على بناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والشفافية 
          والاحترافية، مع الالتزام الكامل بالسرية وحماية المصالح القانونية في جميع 
          مراحل العمل.
        </p>
      </div>
    </Container>
  </section>
</template>
```

---

### 4. About Vision Section

**Purpose**: Company vision and mission statements

**Current Implementation**: `src/components/about/AboutVision.vue`

**Content**:
- Vision section with decorative image
- Mission section with decorative image

**Layout**:
- **Desktop**: Two-column layout with images and text
- **Tablet**: Adjusted layout
- **Mobile**: Stacked

**New Implementation**:

```vue
<!-- components/sections/AboutVision.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Vision -->
        <div class="text-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/07/vis.webp" 
            alt="" 
            class="w-32 h-32 mx-auto mb-6 rounded-2xl"
          >
          
          <h2 class="text-2xl md:text-3xl font-semibold text-ink mb-4">
            رؤية المؤسسة
          </h2>
          
          <p class="text-base md:text-lg text-ink-light leading-relaxed">
            نسعى إلى أن نكون من المؤسسات القانونية الرائدة في تقديم خدمات قانونية 
            موثوقة ومتكاملة للأفراد والشركات. نسعى إلى حماية حقوق عملائنا وتحقيق 
            أفضل النتائج القانونية الممكنة. نلتزم بتقديم حلول عملية قائمة على 
            الخبرة والدراسة الدقيقة لكل قضية. ونطمح إلى بناء علاقات مستدامة مع 
            عملائنا أساسها الثقة والاحترافية والشفافية.
          </p>
        </div>
        
        <!-- Mission -->
        <div class="text-center">
          <img 
            src="/assets/images/wp-content/uploads/2024/07/miss.webp" 
            alt="" 
            class="w-32 h-32 mx-auto mb-6 rounded-2xl"
          >
          
          <h2 class="text-2xl md:text-3xl font-semibold text-ink mb-4">
            رسالة المؤسسة
          </h2>
          
          <p class="text-base md:text-lg text-ink-light leading-relaxed">
            تقديم خدمات واستشارات قانونية متكاملة للأفراد والشركات بأعلى درجات 
            المهنية والدقة. نعمل على حماية حقوق عملائنا ومصالحهم من خلال حلول 
            قانونية عملية ومدروسة. نلتزم بالسرية والشفافية والمتابعة الجادة في جميع 
            مراحل العمل القانوني. ونسعى إلى تحقيق أفضل النتائج الممكنة وبناء 
            علاقة دائمة قائمة على الثقة والاحترافية.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
```

**Assets**:
- vis.webp: Vision decorative image
- miss.webp: Mission decorative image

---

### 5. About Values Section

**Purpose**: Company values and principles

**Current Implementation**: `src/components/about/AboutValues.vue`

**Content**:
- Section heading: "قيمنا التي نؤمن بها" (Our Values)
- 4 value cards with icons:
  1. التميز المهني (Professional Excellence)
  2. الوضوح والثقة (Clarity and Trust)
  3. المواكبة القانونية (Legal Follow-up)
  4. أولوية مصالح العملاء (Client Interests Priority)

**Layout**:
- **Desktop**: 4 cards in a row
- **Tablet**: 2-4 cards
- **Mobile**: Single column

**New Implementation**:

```vue
<!-- components/sections/AboutValues.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <SectionHeading title="قيمنا التي نؤمن بها" class="text-center mb-12" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ValueCard 
          v-for="value in values" 
          :key="value.title" 
          :icon="value.icon" 
          :title="value.title" 
          :description="value.description" 
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import ValueCard from '../ui/ValueCard.vue'

const values = [
  {
    icon: '/assets/images/wp-content/uploads/2024/07/11-1.webp',
    title: 'التميز المهني',
    description: 'نقدّم خدمات قانونية رفيعة المستوى، ترتكز على الخبرة والدقة والالتزام بأعلى المعايير المهنية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/1111.webp',
    title: 'الوضوح والثقة',
    description: 'نحرص على توضيح الإجراءات والمواقف القانونية، وإطلاع عملائنا على جميع مراحل العمل بكل صدق وشفافية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/11.webp',
    title: 'المواكبة القانونية',
    description: 'نتابع المستجدات التشريعية والقضائية، ونطوّر خبراتنا وأدواتنا باستمرار لتقديم حلول أكثر كفاءة وفاعلية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/111.webp',
    title: 'أولوية مصالح العملاء',
    description: 'نضع مصالح عملائنا في صميم عملنا، ونقدّم لكل عميل دعمًا قانونيًا مدروسًا يهدف إلى تحقيق أفضل النتائج الممكنة.'
  }
]
</script>
```

**ValueCard Component**:

```vue
<!-- components/ui/ValueCard.vue -->
<template>
  <div class="text-center">
    <img :src="icon" alt="" class="w-16 h-16 mx-auto mb-4 rounded-xl" />
    
    <h3 class="text-lg font-semibold text-ink mb-2">{{ title }}</h3>
    
    <p class="text-sm text-ink-light leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>
```

**Assets**:
- 11-1.webp: Professional excellence icon
- 1111.webp: Clarity and trust icon
- 11.webp: Legal follow-up icon
- 111.webp: Client priority icon

---

### 6. About Expertise Section

**Purpose**: Legal expertise description

**Current Implementation**: `src/components/about/AboutExpertise.vue`

**Content**:
- Section heading: "خبرات قانونيـــــــــة:" (Legal Expertise)
- Description paragraph

**Layout**:
- Single column
- Text with emphasis

**New Implementation**:

```vue
<!-- components/sections/AboutExpertise.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right">
        <SectionHeading title="خبرات قانونيـــــــــة:" class="mb-8" />
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          ضم <strong>مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong> 
          فريقًا من الكفاءات القانونية المؤهلة، يمتلك خبرة عملية في قضايا الأحوال 
          الشخصية والقضايا المدنية وشئون الشركات. ويعمل الفريق وفق منهج قانوني 
          دقيق يقوم على دراسة كل حالة ووضع الاستراتيجية الأنسب لحماية حقوق 
          العملاء ومصالحهم. كما تلتزم المؤسسة بتقديم خدمات قانونية احترافية تجمع 
          بين الخبرة، والمتابعة الجادة، والسرية التامة.
        </p>
      </div>
    </Container>
  </section>
</template>
```

---

### 7. About Achievements Section

**Purpose**: Company achievements and milestones

**Current Implementation**: `src/components/about/AboutAchievements.vue`

**Content**:
- Section heading: "محطات فخرنا وإنجازاتنا" (Our Pride Stations and Achievements)
- Description paragraph
- Image carousel (currently empty in the code)

**Layout**:
- Single column
- Text above carousel

**New Implementation**:

```vue
<!-- components/sections/AboutAchievements.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right">
        <SectionHeading title="محطات فخرنا وإنجازاتنا" class="mb-8" />
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed mb-12">
          تتمثل محطات فخر مؤسسة رامي شريف للاستشارات القانونية والمحاماة في 
          مسيرة مهنية تمتد لأكثر من 17 عامًا من الخبرة والعمل القانوني المتواصل. 
          وقد جمعت المؤسسة بين التأهيل العلمي المتخصص والخبرة العملية في قضايا 
          الأحوال الشخصية والمدنية والشئون القانونية للشركات. كما اكتسبت خبرة قوية 
          في إدارة القضايا ومتابعة الإجراءات القضائية وتنفيذ الأحكام. ونواصل تطوير 
          خدماتنا القانونية بما يحقق حماية مصالح العملاء ويعزز ثقتهم في المؤسسة.
        </p>
        
        <!-- Achievements gallery -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img 
            v-for="(image, index) in achievementImages" 
            :key="index" 
            :src="image" 
            alt="إنجاز" 
            class="w-full h-48 object-cover rounded-2xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const achievementImages = [
  '/assets/images/about-us/about-card-1.webp',
  '/assets/images/about-us/about-card-2.webp',
  '/assets/images/about-us/about-card-3.webp',
  '/assets/images/about-us/about-card-4.webp'
]
</script>
```

---

### 8. About Departments Section

**Purpose**: Service departments overview

**Current Implementation**: `src/components/about/AboutDepartments.vue`

**Content**:
- Section heading: "أقسام عمل المؤسســــة" (Foundation Work Departments)
- 3 department sections:
  1. **القضايا المدنية** (Civil Cases) - Description
  2. **الأحوال الشخصية** (Personal Affairs) - Description
  3. **الشئون القانونية للشركات** (Corporate Legal Affairs) - Description

**Layout**:
- Single column
- Each department has heading and description

**New Implementation**:

```vue
<!-- components/sections/AboutDepartments.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right">
        <SectionHeading title="أقسام عمل المؤسســــة" class="mb-12" />
        
        <div class="space-y-10">
          <div v-for="dept in departments" :key="dept.id">
            <h3 class="text-xl md:text-2xl font-semibold text-ink mb-4">
              {{ dept.title }}
            </h3>
            
            <p class="text-base md:text-lg text-ink-light leading-relaxed">
              {{ dept.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
const departments = [
  {
    id: 1,
    title: 'القضايا المدنية',
    description: 'نتولى المنازعات المدنية والعقارية والتعويضات والعقود، مع متابعة دقيقة لجميع مراحل التقاضي والتنفيذ.'
  },
  {
    id: 2,
    title: 'الأحوال الشخصية',
    description: 'نقدّم الدعم القانوني في قضايا الأسرة والنفقة والحضانة والطلاق والخلع، بما يحفظ الحقوق ويحقق أفضل حماية قانونية.'
  },
  {
    id: 3,
    title: 'الشئون القانونية للشركات',
    description: 'نقدّم خدمات تأسيس الشركات وصياغة العقود والاستشارات القانونية وإدارة المنازعات، بما يدعم استقرار النشاط ويحمي مصالحه.'
  }
]
</script>
```

---

## About Page Component

```vue
<!-- src/pages/About.vue -->
<template>
  <div>
    <AboutHero />
    <AboutIntro />
    <AboutHistory />
    <AboutVision />
    <AboutValues />
    <AboutExpertise />
    <AboutAchievements />
    <AboutDepartments />
  </div>
</template>

<script setup>
import AboutHero from '../components/sections/AboutHero.vue'
import AboutIntro from '../components/sections/AboutIntro.vue'
import AboutHistory from '../components/sections/AboutHistory.vue'
import AboutVision from '../components/sections/AboutVision.vue'
import AboutValues from '../components/sections/AboutValues.vue'
import AboutExpertise from '../components/sections/AboutExpertise.vue'
import AboutAchievements from '../components/sections/AboutAchievements.vue'
import AboutDepartments from '../components/sections/AboutDepartments.vue'
</script>
```

## Asset Inventory for About Page

### Images
| File | Purpose | Location | Reuse |
|------|---------|---------|-------|
| hero-image.webp | About hero | /assets/images/wp-content/uploads/2024/08/ | About only |
| rs-logo.webp | Company logo | /assets/images/wp-content/uploads/2024/07/ | Reusable |
| vis.webp | Vision image | /assets/images/wp-content/uploads/2024/07/ | About only |
| miss.webp | Mission image | /assets/images/wp-content/uploads/2024/07/ | About only |
| 11-1.webp | Professional excellence icon | /assets/images/wp-content/uploads/2024/07/ | About only |
| 1111.webp | Clarity and trust icon | /assets/images/wp-content/uploads/2024/07/ | About only |
| 11.webp | Legal follow-up icon | /assets/images/wp-content/uploads/2024/07/ | About only |
| 111.webp | Client priority icon | /assets/images/wp-content/uploads/2024/07/ | About only |

## Next Steps

Proceed to [09-services-page.md](./09-services-page.md) for detailed services page specifications.
