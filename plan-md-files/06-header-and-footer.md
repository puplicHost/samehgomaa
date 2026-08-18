# HEADER AND FOOTER

## Header

### Overview

The header is a critical component that appears on every page with different layouts based on:
1. Page type (home vs. subpages)
2. Screen size (desktop, tablet, mobile)

### Current Implementation Issues

The existing header has **4 different layout variations**:
- Home: Desktop + Mobile bar
- Home: Tablet-only bar  
- Subpages: Desktop + Mobile bar
- Subpages: Tablet-only bar

This creates unnecessary complexity. The **new implementation should simplify** this while preserving the visual hierarchy.

### New Header Architecture

```
src/components/layout/
├── Header.vue          # Main header component
├── Logo.vue           # Logo component
├── DesktopNav.vue     # Desktop navigation
├── MobileNav.vue      # Mobile navigation
└── CtaButton.vue      # WhatsApp CTA button
```

### Header Structure

#### Main Header Component (`Header.vue`)

```vue
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-ink">
    <Container class="flex items-center justify-between py-4 md:py-3">
      <!-- Logo -->
      <Logo />
      
      <!-- Desktop Navigation -->
      <DesktopNav class="hidden md:flex" />
      
      <!-- CTA Button -->
      <CtaButton class="hidden md:flex" />
      
      <!-- Mobile Menu Toggle -->
      <MobileMenuToggle class="md:hidden" />
    </Container>
    
    <!-- Mobile Navigation Overlay -->
    <MobileNav :is-open="mobileOpen" @close="mobileOpen = false" />
  </header>
</template>
```

### Logo Component

**Props**:
- `src` - Logo image path
- `alt` - Alternative text
- `width` - Logo width
- `height` - Logo height

**Responsive Sizing**:
- Mobile: 32-38px height, max-width 100-120px
- Tablet: 38-50px height, max-width 120-160px  
- Desktop: 50px height, max-width 160px

```vue
<template>
  <RouterLink to="/" class="flex items-center">
    <img 
      :src="src" 
      :alt="alt" 
      class="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[160px] object-contain"
    >
  </RouterLink>
</template>
```

### Desktop Navigation

**Props**:
- `items` - Array of navigation items

**Structure**:
```vue
<template>
  <nav aria-label="Main navigation">
    <ul class="flex items-center gap-2 md:gap-4">
      <li v-for="item in items" :key="item.to">
        <RouterLink 
          :to="item.to" 
          class="text-sm md:text-base font-bold text-white 
                 hover:text-gold focus:text-gold 
                 transition-colors"
          :class="{ 'text-gold': isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
```

**Navigation Items**:
```javascript
const menuItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]
```

### Mobile Navigation

**Props**:
- `items` - Array of navigation items
- `isOpen` - Controlled by parent

**Emits**:
- `@close` - When menu should close

```vue
<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-ink bg-opacity-95 z-40 md:hidden"
    @click="$emit('close')"
  >
    <nav 
      class="flex flex-col items-center justify-center h-full"
      @click.stop
    >
      <ul class="w-full max-w-sm">
        <li 
          v-for="(item, index) in items" 
          :key="item.to"
          class="border-b border-dashed border-white border-opacity-10 
                 last:border-b-0"
        >
          <RouterLink 
            :to="item.to" 
            class="block py-4 px-6 text-center text-base font-semibold 
                   text-white uppercase hover:bg-ink focus:bg-ink
                   transition-colors"
            :class="{ 'bg-ink': isActive(item.to) }"
            @click="$emit('close')"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
```

### CTA Button

**Props**:
- `text` - Button text
- `href` - WhatsApp link

```vue
<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noopener noreferrer"
    class="bg-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-lg 
           font-semibold text-sm md:text-base uppercase 
           hover:bg-gold-light transition-colors"
  >
    {{ text }}
  </a>
</template>
```

**WhatsApp Link**:
```javascript
const whatsappLink = 'https://wa.me/201111904997?text=' + 
  encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')
```

### Mobile Menu Toggle

```vue
<template>
  <button 
    @click="$emit('toggle')" 
    class="p-2 text-white hover:text-gold focus:text-gold md:hidden"
    aria-label="Toggle menu"
    aria-expanded="false"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path v-if="!isOpen" d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" />
      <path v-else d="M6 18L18 6M6 6l12 12" stroke-linecap="round" />
    </svg>
  </button>
</template>
```

### Header Behavior

1. **Fixed Positioning**: Header stays fixed at top on scroll
2. **Z-index**: 50 (above most content, below lightbox)
3. **Background**: ink (#2b2b2b)
4. **Padding**:
   - Mobile: 10px top/bottom (8px on smallest)
   - Tablet: 10-15px top/bottom
   - Desktop: 15px top/bottom

5. **Active State**:
   - Active link: gold color
   - Hover: gold color
   - Focus: gold color

6. **Mobile Menu**:
   - Opens on toggle click
   - Closes on:
     - Toggle click
     - Route change
     - Escape key
     - Click outside
   - Overlay: semi-transparent black
   - Animation: smooth slide/fade

### Simplified Approach

Instead of 4 header variations, use **one unified header** with responsive adjustments:

```vue
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-ink">
    <div class="max-w-container mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between py-3 md:py-4">
        <!-- Logo: always visible -->
        <Logo class="flex-shrink-0" />
        
        <!-- Desktop: Navigation + CTA -->
        <div class="hidden lg:flex items-center gap-6">
          <DesktopNav :items="menuItems" />
          <CtaButton :href="whatsappLink" text="حجز استشارة قانونية" />
        </div>
        
        <!-- Tablet: CTA + Navigation -->
        <div class="hidden md:flex lg:hidden items-center gap-4">
          <CtaButton :href="whatsappLink" text="حجز استشارة" icon="whatsapp" />
          <DesktopNav :items="menuItems" />
        </div>
        
        <!-- Mobile: CTA + Toggle -->
        <div class="flex items-center gap-4 md:hidden">
          <CtaButton :href="whatsappLink" text="حجز" icon="whatsapp" small />
          <MobileMenuToggle :is-open="mobileOpen" @toggle="toggleMobileMenu" />
        </div>
      </div>
    </div>
    
    <MobileNav 
      :items="menuItems" 
      :is-open="mobileOpen" 
      @close="mobileOpen = false" 
    />
  </header>
</template>
```

---

## Footer

### Overview

The footer contains company information, links, contact details, and social media. It should be **clean and organized** with proper responsive behavior.

### Footer Structure

```
src/components/layout/
└── Footer.vue          # Main footer component
```

### Footer Sections

#### 1. Main Footer Content

**Desktop Layout (4 columns)**:
```
┌─────────────────────┬─────────────────┬─────────────────┬─────────────────┐
│  Logo + Description  │  Important Links │   Branches      │ Contact Info    │
│  + Social Icons     │                 │                 │                 │
└─────────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

**Tablet Layout (2 columns)**:
```
┌─────────────────────┬─────────────────┐
│  Logo + Description  │  Important Links │
│  + Social Icons     │                 │
├─────────────────────┼─────────────────┤
│     Branches        │ Contact Info    │
└─────────────────────┴─────────────────┘
```

**Mobile Layout (1 column)**:
```
┌─────────────────────┐
│  Logo + Description  │
│  + Social Icons     │
├─────────────────────┤
│  Important Links     │
├─────────────────────┤
│     Branches        │
├─────────────────────┤
│ Contact Info        │
└─────────────────────┘
```

### Footer Component

```vue
<template>
  <footer class="bg-footer text-white">
    <!-- Main footer content -->
    <div class="max-w-container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-14 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        <!-- Column 1: Logo and Description -->
        <FooterColumn>
          <template #header>
            <RouterLink to="/">
              <img 
                src="/assets/images/logo.webp" 
                alt="مؤسسة رامي شريف" 
                class="w-32 h-32 mx-auto md:mx-0 mb-4"
              >
            </RouterLink>
          </template>
          
          <p class="text-center md:text-right text-ink-lighter text-sm leading-relaxed">
            مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة 
            في تقديم الخدمات القانونية للأفراد والشركات، بقيادة الأستاذ رامي شريف 
            بخبرة تمتد لأكثر من 17 عامًا.
          </p>
          
          <div class="flex justify-center md:justify-start gap-4 mt-6">
            <SocialLink 
              v-for="social in socialLinks" 
              :key="social.name" 
              :href="social.href" 
              :icon="social.icon" 
              :label="social.label" 
            />
          </div>
        </FooterColumn>
        
        <!-- Column 2: Important Links -->
        <FooterColumn title="روابط مهمة">
          <nav>
            <ul class="space-y-2">
              <li v-for="link in footerLinks" :key="link.to">
                <RouterLink 
                  :to="link.to" 
                  class="text-ink-lighter hover:text-gold transition-colors"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </FooterColumn>
        
        <!-- Column 3: Branches -->
        <FooterColumn title="فروعنا">
          <div class="space-y-4">
            <div v-for="branch in branches" :key="branch.name">
              <h4 class="font-semibold text-white mb-2">{{ branch.name }}</h4>
              <p class="text-ink-lighter text-sm leading-relaxed">
                {{ branch.address }}
              </p>
            </div>
          </div>
        </FooterColumn>
        
        <!-- Column 4: Contact Info -->
        <FooterColumn title="معلومات التواصل">
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-white mb-2">البريد الإلكتروني</h4>
              <p class="text-ink-lighter">
                <a 
                  href="mailto:Info@Ramisharif.Com" 
                  class="text-gold hover:text-white transition-colors"
                >
                  Info@Ramisharif.Com
                </a>
              </p>
            </div>
            
            <div>
              <h4 class="font-semibold text-white mb-2">أرقام التواصل</h4>
              <p class="text-ink-lighter space-y-1">
                <a href="tel:+201111904997" class="block text-gold hover:text-white">
                  01111904997
                </a>
                <a href="tel:+2034863096" class="block text-gold hover:text-white">
                  034863096
                </a>
              </p>
            </div>
          </div>
        </FooterColumn>
      </div>
    </div>
    
    <!-- Footer bottom bar -->
    <div class="bg-footerbar border-t border-white border-opacity-20">
      <div class="max-w-container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-center md:text-right text-xs text-ink-lighter">
            جميع الحقوق محفوظة لمؤسسة المستشار رامي شريف 2026 © ramisharif.com
          </p>
          
          <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a 
              v-for="policy in policies" 
              :key="policy.name" 
              :href="policy.href" 
              class="text-xs font-bold text-ink-lighter hover:text-gold transition-colors"
            >
              {{ policy.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
```

### Footer Column Component

```vue
<template>
  <div class="text-center md:text-right">
    <h3 
      v-if="title" 
      class="relative pb-3 text-lg font-semibold text-gold 
             after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-8 after:bg-gold 
             md:after:right-auto md:after:left-0"
    >
      {{ title }}
    </h3>
    
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' }
})
</script>
```

### Social Link Component

```vue
<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noopener noreferrer"
    class="text-gold hover:text-white transition-all duration-300 hover:-translate-y-1"
    :aria-label="label"
  >
    <component :is="icon" class="w-5 h-5" />
    <span class="sr-only">{{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  icon: { type: String, required: true },
  label: { type: String, required: true }
})
</script>
```

### Footer Data

```javascript
// Navigation links
const footerLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]

// Social links
const socialLinks = [
  { name: 'facebook', href: 'https://www.facebook.com/ramisharif.law/', icon: 'FacebookIcon', label: 'Facebook' },
  { name: 'youtube', href: 'https://www.youtube.com/@ramisharif.law', icon: 'YoutubeIcon', label: 'YouTube' },
  { name: 'instagram', href: 'https://www.instagram.com/ramisharifeg/', icon: 'InstagramIcon', label: 'Instagram' },
  { name: 'linkedin', href: 'https://www.linkedin.com/company/ramisharifeg', icon: 'LinkedinIcon', label: 'LinkedIn' }
]

// Branches
const branches = [
  {
    name: 'فرع الإسكندرية',
    address: '١ شارع الصحافه - المنشيه - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠'
  },
  {
    name: 'الإسكندرية',
    address: 'شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس.'
  }
]

// Policies
const policies = [
  { name: 'سياسة الخصوصية', href: 'https://ramisharif.com/?page_id=6831' },
  { name: 'سياسة الاسترجاع', href: 'https://ramisharif.com/?page_id=6849' },
  { name: 'الشروط والأحكام', href: 'https://ramisharif.com/?page_id=6851' }
]
```

### Footer Styling

**Colors**:
- Background: `footer` (#2F2F2F)
- Bottom bar: `footerbar` (#262626)
- Text: `white` (#ffffff)
- Muted text: `rgba(255, 255, 255, 0.8)` or `ink-lighter`
- Accents: `gold` (#af8f69)
- Borders: `rgba(255, 255, 255, 0.1)` for dividers

**Typography**:
- Column titles: 19px, font-semibold, gold color
- Body text: 15px, leading-1.9, light color
- Small text: 14px, leading-1.8
- Policy links: 14px, font-bold

**Spacing**:
- Main padding: 44-56px top, 40-44px bottom
- Column gap: 28-36px horizontal, 28-44px vertical
- Bottom bar padding: 18px top/bottom

**Borders**:
- Bottom bar top border: 1px solid rgba(175, 143, 105, 0.35)
- Column title underline: 2px gold, 34px width

## Next Steps

Proceed to [07-home-page.md](./07-home-page.md) for detailed home page specifications.
