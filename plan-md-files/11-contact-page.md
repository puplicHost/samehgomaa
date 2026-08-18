# CONTACT PAGE

## Overview

The Contact page provides all necessary information for visitors to get in touch with Rami Sharif Legal Consultation Foundation, including phone numbers, email addresses, physical addresses, and a location map.

**Route**: `/contacts`
**Component**: `src/pages/Contact.vue`

## Page Structure

```
src/pages/Contact.vue
├── ContactHero
└── ContactInfo
```

## Section-by-Section Analysis

---

### 1. Contact Hero Section

**Purpose**: Page header with title and brief description

**Current Implementation**: `src/components/contacts/ContactHero.vue`

**Content**:
- Main heading: "تواصل معنا" (Contact Us)
- Description: Brief introduction encouraging contact

**Layout**:
- Single column
- Centered text

**New Implementation**:

```vue
<!-- components/sections/ContactHero.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
          تواصل معنا
        </h1>
        
        <p class="text-base md:text-lg text-ink-light leading-relaxed">
          نحن في مؤسسة رامي شريف للاستشارات القانونية والمحاماة هنا لدعمكم. 
          سواء كنتم بحاجة لاستشارة قانونية أو معلومات حول خدماتنا، تواصلوا 
          معنا عبر الهاتف، البريد الإلكتروني، أو زيارتنا.
        </p>
      </div>
    </Container>
  </section>
</template>
```

---

### 2. Contact Info Section

**Purpose**: Detailed contact information with map

**Current Implementation**: `src/components/contacts/ContactInfo.vue`

**Content**:
- Google Maps embed showing location
- "Open in Google Maps" button
- 4 contact method cards with icons:
  1. **Email**: ramisharif.law@email.com
  2. **Alexandria Branch**: ١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠
  3. **Alexandria**: شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس
  4. **Phone Numbers**: 01111904997, 034863096

**Layout**:
- **Desktop**: Map above, 4 contact cards in a row below
- **Tablet**: Map above, 2-4 contact cards in a row below
- **Mobile**: Map above, 1-2 contact cards stacked below

**New Implementation**:

```vue
<!-- components/sections/ContactInfo.vue -->
<template>
  <section class="py-16 md:py-20">
    <Container>
      <!-- Google Maps -->
      <div class="mb-12">
        <div class="relative rounded-2xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1720.65!2d29.8929002!3d31.1996235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDExJzU4LjYiTiAyOcKwNTMnMzQuNCJF!5e0!3m2!1sar!2seg!4v1735656279793!5m2!1sar!2seg" 
            width="100%" 
            height="450" 
            style="border:0" 
            allowfullscreen="" 
            referrerpolicy="no-referrer-when-downgrade" 
            class="w-full"
            loading="lazy"
          />
          
          <a 
            href="https://www.google.com/maps/search/1+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B4%D9%8A%D8%A9%D8%8C+%D9%85%D8%A8%D9%86%D9%89+%D9%83%D9%85%D8%A7%D9%84+%D8%B3%D8%B9%D8%AF+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%8C+%D8%A3%D9%85%D8%A7%D9%85+%D9%85%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.1996235,29.8929002,17.84z" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gold text-white 
                   px-6 py-3 rounded-lg font-semibold text-sm 
                   hover:bg-gold-light transition-colors"
          >
            فتح الموقع على Google Maps
          </a>
        </div>
      </div>
      
      <!-- Contact cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ContactCard 
          v-for="contact in contacts" 
          :key="contact.id" 
          :icon="contact.icon" 
          :title="contact.title" 
          :content="contact.content" 
          :type="contact.type"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import ContactCard from '../ui/ContactCard.vue'

const contacts = [
  {
    id: 1,
    icon: 'envelope',
    title: 'البريد الإلكتروني',
    content: 'ramisharif.law@email.com',
    type: 'email'
  },
  {
    id: 2,
    icon: 'map-marker',
    title: 'فرع الإسكندرية',
    content: '١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠',
    type: 'address'
  },
  {
    id: 3,
    icon: 'map-marker',
    title: 'الإسكندرية',
    content: 'شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس.',
    type: 'address'
  },
  {
    id: 4,
    icon: 'phone',
    title: 'أرقام تواصل',
    content: '01111904997 - 034863096',
    type: 'phone'
  }
]
</script>
```

---

## Contact Card Component

```vue
<!-- components/ui/ContactCard.vue -->
<template>
  <div class="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
    <!-- Icon -->
    <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      <component :is="iconComponent" class="w-12 h-12 text-gold" />
    </div>
    
    <!-- Title -->
    <h3 class="text-lg font-semibold text-ink mb-2">
      {{ title }}
    </h3>
    
    <!-- Content -->
    <div class="text-ink-light text-sm leading-relaxed">
      <!-- Email -->
      <a 
        v-if="type === 'email'" 
        :href="`mailto:${content}`" 
        class="text-gold hover:text-gold-light transition-colors"
      >
        {{ content }}
      </a>
      
      <!-- Phone -->
      <div v-if="type === 'phone'" class="space-y-1">
        <a 
          v-for="(phone, index) in content.split('-')" 
          :key="index" 
          :href="`tel:${phone.trim()}`" 
          class="block text-gold hover:text-gold-light transition-colors"
        >
          {{ phone.trim() }}
        </a>
      </div>
      
      <!-- Address -->
      <p v-if="type === 'address'" class="whitespace-pre-line">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, default: 'text' }
})

const iconComponent = computed(() => {
  const icons = {
    envelope: 'EnvelopeIcon',
    'map-marker': 'MapMarkerIcon',
    phone: 'PhoneIcon'
  }
  return icons[props.icon] || 'div'
})
</script>
```

---

## Icon Components

Create simple SVG icon components:

```vue
<!-- components/ui/icons/EnvelopeIcon.vue -->
<template>
  <svg aria-hidden="true" class="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
  </svg>
</template>
```

```vue
<!-- components/ui/icons/MapMarkerIcon.vue -->
<template>
  <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
</template>
```

```vue
<!-- components/ui/icons/PhoneIcon.vue -->
<template>
  <svg aria-hidden="true" class="e-font-icon-svg e-fas-phone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
  </svg>
</template>
```

---

## Contact Page Component

```vue
<!-- src/pages/Contact.vue -->
<template>
  <div>
    <ContactHero />
    <ContactInfo />
  </div>
</template>

<script setup>
import ContactHero from '../components/sections/ContactHero.vue'
import ContactInfo from '../components/sections/ContactInfo.vue'
</script>
```

---

## Contact Information Summary

### Phone Numbers
- Primary: 01111904997
- Secondary: 034863096
- WhatsApp: 201111904997 (with pre-filled message)

### Email Addresses
- Primary: Info@Ramisharif.Com
- Secondary: ramisharif.law@email.com

### Physical Addresses
1. **فرع الإسكندرية** (Alexandria Branch):
   - ١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠

2. **الإسكندرية** (Alexandria):
   - شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس

### Google Maps
- Embed URL: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1720.65!2d29.8929002!3d31.1996235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDExJzU4LjYiTiAyOcKwNTMnMzQuNCJF!5e0!3m2!1sar!2seg!4v1735656279793!5m2!1sar!2seg`
- Direct link: `https://www.google.com/maps/search/1+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B4%D9%8A%D8%A9%D8%8C+%D9%85%D8%A8%D9%86%D9%89+%D9%83%D9%85%D8%A7%D9%84+%D8%B3%D8%B9%D8%AF+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%8C+%D8%A3%D9%85%D8%A7%D9%85+%D9%85%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.1996235,29.8929002,17.84z`

### Social Media Links
- Facebook: https://www.facebook.com/ramisharif.law/
- YouTube: https://www.youtube.com/@ramisharif.law
- Instagram: https://www.instagram.com/ramisharifeg/
- LinkedIn: https://www.linkedin.com/company/ramisharifeg

---

## Asset Inventory for Contact Page

No specific images are used in the Contact page. The page relies on:
- Google Maps embed
- Icon SVGs (inline or component-based)

## Next Steps

Proceed to [12-assets-and-content.md](./12-assets-and-content.md) for asset and content inventory.
