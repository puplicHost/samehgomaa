<template>
  <div class="text-center">
    <img
      :src="icon"
      :alt="title"
      loading="lazy"
      class="w-20 h-20 mx-auto mb-4 rounded-xl object-contain"
    >
    <h3 class="text-lg font-semibold text-ink mb-2">{{ title }}</h3>
    <p class="text-sm text-ink-light leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>