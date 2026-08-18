<template>
  <RouterLink
    :to="'/services'"
    class="group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 shadow-testimonial transition-all duration-300 hover:ring-gold/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
  >
    <img
      :src="service.image"
      :alt="service.title"
      loading="lazy"
      draggable="false"
      class="block w-full h-auto"
    >
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90 flex items-end"
    >
      <div class="p-5 md:p-6 w-full">
        <span class="block h-0.5 w-10 bg-gold mb-3" aria-hidden="true"></span>
        <h3 class="text-white text-xl md:text-2xl font-bold leading-snug">
          {{ service.title }}
        </h3>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>
