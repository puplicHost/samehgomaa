<template>
  <div class="bg-white rounded-2xl p-6 shadow-testimonial text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      <component :is="iconComponent" class="w-12 h-12 text-gold" />
    </div>

    <h3 class="text-lg font-semibold text-ink mb-2">{{ title }}</h3>

    <div class="text-ink-light text-sm leading-relaxed flex-grow">
      <a
        v-if="type === 'email'"
        :href="`mailto:${content}`"
        class="block text-gold hover:text-gold-light transition-colors break-all"
      >
        {{ content }}
      </a>

      <div v-if="type === 'phone'" class="space-y-1">
        <a
          v-for="(phone, index) in content.split('-')"
          :key="index"
          :href="`tel:${phone.trim().replace(/\s+/g, '')}`"
          class="block text-gold hover:text-gold-light transition-colors"
        >
          {{ phone.trim() }}
        </a>
      </div>

      <p v-if="type === 'address'" class="whitespace-pre-line leading-relaxed">
        {{ content }}
      </p>
    </div>
  </div>
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
  type: { type: String, default: 'text' }
})

const iconComponent = computed(() => {
  const icons = {
    envelope: EnvelopeIcon,
    'map-marker': MapMarkerIcon,
    phone: PhoneIcon
  }
  return icons[props.icon] || 'div'
})
</script>