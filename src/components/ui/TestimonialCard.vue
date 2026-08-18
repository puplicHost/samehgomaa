<template>
  <article class="bg-white rounded-2xl p-6 md:p-8 shadow-testimonial border-t-4 border-gold flex flex-col h-full">
    <div class="text-gold text-4xl leading-none mb-4">&#10077;</div>

    <p class="text-ink-light text-base leading-relaxed mb-6 flex-grow">
      {{ testimonial.quote }}
    </p>

    <div class="text-center">
      <p class="font-bold text-ink text-lg">{{ testimonial.name }}</p>
      <p class="text-gold text-sm">{{ testimonial.location }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  testimonial: { type: Object, required: true }
})
</script>