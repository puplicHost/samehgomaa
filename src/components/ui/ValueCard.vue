<template>
  <div class="group text-center">
    <div class="relative inline-flex w-24 h-24 items-center justify-center rounded-2xl bg-gold/10 border border-gold/25 mb-5 group-hover:bg-gold/15 group-hover:scale-105 transition-all duration-300">
      <img
        :src="icon"
        :alt="title"
        loading="lazy"
        class="w-14 h-14 object-contain"
      >
    </div>
    <h3 class="text-lg md:text-xl font-semibold text-ink mb-2">{{ title }}</h3>
    <p class="text-sm md:text-base text-ink-light leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>