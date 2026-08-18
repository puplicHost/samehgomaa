<template>
  <component
    :is="cardTag"
    v-bind="cardAttrs"
    class="group bg-white rounded-2xl p-6 shadow-testimonial text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-gold border-t-4 border-transparent hover:border-gold flex flex-col h-full"
    :class="{ 'cursor-pointer': isLink }"
  >
    <span
      class="inline-flex w-14 h-14 mx-auto mb-4 items-center justify-center rounded-2xl bg-gold/10 text-gold-dark group-hover:bg-gold group-hover:text-white transition-colors duration-300"
    >
      <component :is="iconComponent" class="w-7 h-7" />
    </span>

    <h3 class="text-lg font-semibold text-ink mb-2">{{ title }}</h3>

    <div class="text-ink-light text-sm leading-relaxed flex-grow">
      <a
        v-if="type === 'email'"
        :href="`mailto:${content}`"
        class="block text-gold hover:text-gold-light transition-colors break-all"
        dir="ltr"
      >
        {{ content }}
      </a>

      <div v-if="type === 'phone'" class="space-y-1">
        <a
          v-for="(phone, index) in content.split('-')"
          :key="index"
          :href="`tel:${phone.trim().replace(/\s+/g, '')}`"
          class="block text-gold hover:text-gold-light transition-colors"
          dir="ltr"
        >
          {{ phone.trim() }}
        </a>
      </div>

      <p v-if="type === 'address'" class="whitespace-pre-line leading-relaxed break-words">
        {{ content }}
      </p>
    </div>

    <span
      v-if="isLink"
      class="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-gold-dark opacity-70 group-hover:opacity-100 transition-opacity"
    >
      عرض على الخريطة
      <svg class="w-3.5 h-3.5 -scale-x-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'
import MapMarkerIcon from './icons/MapMarkerIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, default: 'text' },
  link: { type: String, default: '' }
})

const iconComponent = computed(() => {
  const icons = {
    envelope: EnvelopeIcon,
    'map-marker': MapMarkerIcon,
    phone: PhoneIcon
  }
  return icons[props.icon] || 'div'
})

const isLink = computed(() => Boolean(props.link))

const cardTag = computed(() => (isLink.value ? 'a' : 'div'))

const cardAttrs = computed(() =>
  isLink.value
    ? { href: props.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}
)
</script>