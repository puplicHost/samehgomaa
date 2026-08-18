<template>
  <div>
    <div class="flex items-center justify-between gap-4 mb-6">
      <div class="flex items-center gap-3">
        <span class="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gold/10 text-gold-dark flex-shrink-0">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="icon === 'family'" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            <path v-else-if="icon === 'civil'" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            <path v-else d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
          </svg>
        </span>
        <h2 class="text-2xl md:text-3xl font-semibold text-ink">
          {{ title }}
        </h2>
      </div>

      <span
        class="flex-shrink-0 rounded-full bg-gold/10 text-gold-dark text-sm font-bold px-3 py-1.5"
        aria-label="{{ title }} - {{ items.length }} سؤال"
      >
        {{ items.length }} سؤال
      </span>
    </div>

    <Accordion :items="items" icon-side="left" />
  </div>
</template>

<script setup>
import Accordion from './Accordion.vue'

defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: 'family' },
  items: { type: Array, required: true }
})
</script>