<template>
  <div :class="[alignClasses]">
    <h2 class="text-3xl md:text-4xl font-bold leading-tight" :class="titleColorClasses">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-base md:text-lg leading-relaxed max-w-2xl" :class="[subtitleColorClasses, { 'mx-auto': align === 'center' }]">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'right' },
  accentColor: { type: String, default: 'gold' },
  color: { type: String, default: 'ink' }
})

const alignClasses = computed(() => {
  if (props.align === 'center') return 'text-center'
  if (props.align === 'left') return 'text-left'
  return 'text-right'
})

const titleColorClasses = computed(() => {
  const colors = {
    ink: 'text-ink',
    gold: 'text-gold',
    white: 'text-white',
    cream: 'text-cream'
  }
  return colors[props.color] || colors.ink
})

const subtitleColorClasses = computed(() => {
  const colors = {
    ink: 'text-ink-light',
    gold: 'text-gold',
    white: 'text-white/80',
    cream: 'text-cream/90'
  }
  return colors[props.color] || colors.ink
})
</script>