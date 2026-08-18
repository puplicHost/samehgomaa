<template>
  <RouterLink to="/" class="flex items-center" aria-label="مؤسسة رامي شريف - الرئيسية">
    <img
      :src="src"
      :alt="alt"
      class="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[160px] object-contain"
    >
  </RouterLink>
</template>

<script setup>
defineProps({
  src: { type: String, default: '/assets/images/wp-content/uploads/2024/07/rs-logo.webp' },
  alt: { type: String, default: 'مؤسسة رامي شريف للاستشارات القانونية والمحاماة' }
})
</script>