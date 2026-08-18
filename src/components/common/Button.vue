<template>
  <component
    :is="tag"
    v-bind="bindProps"
    class="inline-flex items-center justify-center rounded-lg font-semibold tracking-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    :class="[variantClasses, sizeClasses, { 'cursor-not-allowed opacity-50': disabled }]"
    :disabled="disabled"
  >
    <slot />
  </component>
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
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' }
})

const tag = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})

const bindProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: props.target, rel: props.rel }
  return { type: props.type }
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-light',
    secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    cta: 'bg-gold text-white hover:bg-gold-light px-8 py-4 text-lg',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-white'
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
