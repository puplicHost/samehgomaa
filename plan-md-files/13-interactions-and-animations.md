# INTERACTIONS AND ANIMATIONS

## Overview

This document identifies all user interactions and animations from the existing website that should be preserved in the new rebuild, along with recommendations for clean Vue implementations.

## Interaction Categories

### 1. Navigation Interactions
### 2. Mobile Menu
### 3. Accordion (FAQ)
### 4. Lightbox (Service Images)
### 5. Buttons and Links
### 6. Scroll Behavior
### 7. Form Interactions (if any)

---

## 1. Navigation Interactions

### Current Implementation
- Desktop: Hover effects on navigation links
- Mobile: Toggle menu with hamburger icon
- Active state: Gold color for current page

### New Implementation

#### Desktop Navigation Hover

```vue
<!-- DesktopNav.vue -->
<template>
  <nav>
    <ul class="flex gap-4">
      <li v-for="item in items" :key="item.to">
        <RouterLink 
          :to="item.to" 
          class="text-white hover:text-gold focus:text-gold 
                 transition-colors duration-300"
          :class="{ 'text-gold': isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
```

**CSS**:
```css
/* Smooth color transition */
.transition-colors {
  transition: color 0.3s ease-in-out;
}
```

---

## 2. Mobile Menu Interaction

### Current Implementation
- Hamburger menu toggle
- Slide-down overlay
- Close on click outside
- Close on Escape key
- Close on route change

### New Implementation

```vue
<!-- MobileNav.vue -->
<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-ink bg-opacity-95 z-40"
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
                   transition-colors duration-300"
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

<script setup>
defineProps({
  items: { type: Array, required: true },
  isOpen: { type: Boolean, required: true }
})

defineEmits(['close'])
</script>
```

**Mobile Menu Toggle**:

```vue
<!-- MobileMenuToggle.vue -->
<template>
  <button 
    @click="$emit('toggle')" 
    class="p-2 text-white hover:text-gold focus:text-gold"
    aria-label="Toggle menu"
    :aria-expanded="isOpen"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path 
        v-if="!isOpen" 
        d="M3 12h18M3 6h18M3 18h18" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2"
      />
      <path 
        v-else 
        d="M6 18L18 6M6 6l12 12" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true }
})

defineEmits(['toggle'])
</script>
```

**Parent Component (Header.vue)**:

```vue
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobileMenu() {
  mobileOpen.value = false
}

// Close on route change
watch(() => route.path, () => {
  mobileOpen.value = false
})

// Close on Escape key
function onKeydown(e) {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>
```

---

## 3. Accordion Interaction (FAQ)

### Current Implementation
- Click to expand/collapse
- Only one item open at a time
- Icon changes (plus to minus)
- Keyboard support (Enter, Space)

### New Implementation

```vue
<!-- AccordionItem.vue -->
<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <button 
      type="button" 
      class="w-full flex items-center justify-between py-4 px-0 
             text-left hover:bg-gray-50 transition-colors"
      :class="{
        'bg-gray-50': isOpen
      }"
      @click="$emit('toggle')"
      @keydown.enter.prevent="$emit('toggle')"
      @keydown.space.prevent="$emit('toggle')"
      :aria-expanded="isOpen"
    >
      <span class="flex items-center flex-grow">
        <svg 
          v-if="iconSide === 'left'" 
          class="w-5 h-5 text-gold mr-4 flex-shrink-0"
          :class="{ 'rotate-45': isOpen }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        
        <span class="text-base md:text-lg font-medium text-ink">{{ item.title }}</span>
      </span>
      
      <svg 
        v-if="iconSide === 'right'" 
        class="w-5 h-5 text-gold ml-4 flex-shrink-0"
        :class="{ 'rotate-45': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="pb-4 px-0 overflow-hidden"
    >
      <p class="text-ink-light leading-relaxed">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  isOpen: { type: Boolean, default: false },
  iconSide: { type: String, default: 'right' }
})

defineEmits(['toggle'])
</script>
```

**Accordion Parent**:

```vue
<!-- Accordion.vue -->
<template>
  <div class="w-full">
    <AccordionItem 
      v-for="(item, index) in items" 
      :key="item.id" 
      :item="item" 
      :is-open="openIndex === index" 
      :icon-side="iconSide" 
      @toggle="toggle(index)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccordionItem from './AccordionItem.vue'

const props = defineProps({
  items: { type: Array, required: true },
  iconSide: { type: String, default: 'right' },
  allowMultiple: { type: Boolean, default: false }
})

const openIndex = ref(null)

function toggle(index) {
  if (props.allowMultiple) {
    openIndex.value = openIndex.value === index ? null : index
  } else {
    openIndex.value = openIndex.value === index ? null : index
  }
}
</script>
```

---

## 4. Lightbox Interaction (Service Images)

### Current Implementation
- Click image to open lightbox
- Keyboard navigation (arrows, escape)
- Click outside to close
- Previous/Next buttons
- Caption display
- Body scroll lock

### New Implementation

```vue
<!-- Lightbox.vue -->
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
             transition-colors focus:outline-none focus:text-gold"
      aria-label="إغلاق" 
      @click="$emit('close')"
      ref="closeButton"
    >
      &times;
    </button>
    
    <!-- Previous button -->
    <button 
      type="button" 
      class="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl 
             hover:text-gold transition-colors focus:outline-none focus:text-gold"
      aria-label="السابق" 
      @click="step(-1)"
    >
      &#10094;
    </button>
    
    <!-- Image and caption -->
    <div class="max-w-full max-h-full text-center">
      <img 
        :src="current.src" 
        :alt="current.alt" 
        class="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
      >
      <p class="text-white mt-4 text-lg">{{ current.alt }}</p>
    </div>
    
    <!-- Next button -->
    <button 
      type="button" 
      class="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl 
             hover:text-gold transition-colors focus:outline-none focus:text-gold"
      aria-label="التالي" 
      @click="step(1)"
    >
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: -1 }
})

const emit = defineEmits(['close', 'update:index'])

const closeButton = ref(null)

const current = computed(() => {
  const i = ((props.index % props.items.length) + props.items.length) % props.items.length
  return props.items[i]
})

// Prevent body scroll when open
watchEffect(() => {
  document.body.style.overflow = props.index >= 0 ? 'hidden' : ''
})

// Focus close button when opened
watch(
  () => props.index,
  async (v) => {
    if (v >= 0) {
      await nextTick()
      closeButton.value?.focus()
    }
  }
)

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

---

## 5. Button Interactions

### Current Implementation
- Hover effects
- Active states
- WhatsApp button with fixed position

### New Implementation

**Button Component**:

```vue
<!-- Button.vue -->
<template>
  <component
    :is="to ? 'RouterLink' : 'a'"
    v-if="to || href"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-flex items-center justify-center px-6 py-3 
           rounded-lg font-semibold uppercase tracking-wide
           transition-all duration-300 focus:outline-none focus:ring-2 
           focus:ring-gold focus:ring-offset-2"
    :class="[
      variantClasses,
      sizeClasses,
      { 'cursor-not-allowed opacity-50': disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </component>
  
  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center px-6 py-3 
           rounded-lg font-semibold uppercase tracking-wide
           transition-all duration-300 focus:outline-none focus:ring-2 
           focus:ring-gold focus:ring-offset-2"
    :class="[
      variantClasses,
      sizeClasses,
      { 'cursor-not-allowed opacity-50': disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  target: { type: String, default: '_blank' },
  rel: { type: String, default: 'noopener noreferrer' },
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false }
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gold text-ink hover:bg-gold-light hover:text-white',
    secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-ink',
    cta: 'bg-gold text-ink hover:bg-gold-light hover:text-white px-8 py-4 text-lg',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-ink'
  }
  return variants[props.variant] || variants.primary
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  return sizes[props.size] || sizes.md
})
</script>
```

**WhatsApp Button**:

```vue
<!-- WhatsAppButton.vue -->
<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="تواصل معنا عبر واتساب"
    class="fixed bottom-6 right-6 z-[10001] w-16 h-16 
           bg-green-500 rounded-full shadow-whatsapp 
           flex items-center justify-center text-white
           hover:bg-green-600 transition-colors"
  >
    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.144-.173.179-.347.268-.644.179-.297-.089-.593-.386-.692-.773-.099-.386-.406-1.048-.593-1.437-.188-.388-.714-.966-.995-1.144-.28-.178-.561-.119-.749.119-.188.237-.855.946-.984 1.124-.129.178-.316.267-.553.178-.237-.089-.474-.386-.552-.773-.078-.386-.364-1.048-.542-1.437-.178-.388-.603-.966-.78 1.144-.177.179-.593.657-.78 1.048-.188.39-.714.995-.892 1.294-.178.297-.346.446-.644.396-.297-.049-.496-.346-.594-.634-.098-.288-.306-.766-.384-1.048-.078-.281-.236-1.016-.305-1.294-.069-.278-.187-.471-.256-.593-.069-.122-.187-.149-.346-.059-.158.089-.266.317-.345.594-.079.277-.187.471-.256.593-.069.122-.187.149-.346.059-.158-.089-.266-.317-.345-.594-.079-.277-.187-.471-.256-.593zM12.017 19.5c-2.482 0-4.493-2.01-4.493-4.492 0-2.482 2.011-4.493 4.493-4.493 2.481 0 4.492 2.011 4.492 4.493 0 2.481-2.011 4.492-4.492 4.492zm0-7.489c-1.577 0-2.858 1.281-2.858 2.858s1.281 2.858 2.858 2.858 2.858-1.281 2.858-2.858-1.281-2.858-2.858-2.858z" />
    </svg>
  </a>
</template>

<script setup>
const href = 'https://wa.me/201111904997?text=' + 
  encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')
</script>
```

---

## 6. Scroll Behavior

### Current Implementation
- Smooth scrolling to hash anchors
- Scroll to top on route change
- Preserve scroll position

### New Implementation

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Smooth scroll to anchor
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80  // Account for fixed header
      }
    }
    
    if (savedPosition) {
      // Restore saved position
      return savedPosition
    }
    
    // Scroll to top on route change
    return { top: 0 }
  }
})
```

---

## 7. Animations

### Current Implementation (from tailwind.config.js)

```javascript
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

### New Implementation

**Tailwind Config**:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
        grow: 'grow 0.3s ease-in-out',
        fade: 'fade 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
      },
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
        'slide-in-right': {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
}
```

**Usage Examples**:

```html
<!-- Heartbeat animation for CTA buttons -->
<button class="animate-heartbeat origin-center">
  حجز استشارة
</button>

<!-- Fade in on page load -->
<div class="animate-fade">
  Content
</div>

<!-- Slide up on scroll -->
<div class="animate-slide-up">
  Content
</div>

<!-- Grow on hover -->
<button class="hover:animate-grow">
  Click me
</button>
```

---

## Interaction Summary Table

| Interaction | Current Implementation | New Implementation | Priority |
|-------------|----------------------|-------------------|----------|
| Desktop Navigation Hover | Elementor CSS | Tailwind hover classes | High |
| Mobile Menu Toggle | jQuery | Vue state | High |
| Mobile Menu Close | jQuery | Vue events | High |
| Accordion Expand/Collapse | Elementor JS | Vue state | High |
| Lightbox Open/Close | Custom JS | Vue component | High |
| Lightbox Navigation | Custom JS | Vue methods | High |
| Button Hover | Elementor CSS | Tailwind classes | Medium |
| WhatsApp Button | HTML/CSS | Vue component | Medium |
| Smooth Scroll | Elementor | Vue Router | Medium |
| Scroll to Top | Elementor | Vue Router | Medium |
| Heartbeat Animation | Elementor CSS | Tailwind animation | Low |
| Fade Animation | Elementor CSS | Tailwind animation | Low |
| Slide Animations | Elementor CSS | Tailwind animation | Low |

---

## Accessibility Considerations

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use proper `tabindex` values
- Handle `Enter` and `Space` keys for buttons
- Ensure focus states are visible

### ARIA Attributes
- Use `aria-label` for icon-only buttons
- Use `aria-expanded` for accordion items
- Use `aria-modal` for lightbox
- Use `aria-hidden` for decorative elements

### Focus Management
- Focus close button when lightbox opens
- Trap focus in modal dialogs
- Return focus to trigger element when modal closes

### Screen Reader Support
- Use semantic HTML elements
- Provide text alternatives for images
- Use `sr-only` class for screen-reader-only text

```css
/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Next Steps

Proceed to [14-implementation-phases.md](./14-implementation-phases.md) for the phased implementation plan.
