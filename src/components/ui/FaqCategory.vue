<template>
  <div>
    <h2 class="text-2xl md:text-3xl font-semibold text-ink mb-6 pb-3 border-b-2 border-gold/60 inline-block">
      {{ title }}
    </h2>

    <Accordion :items="items" icon-side="left" />
  </div>
</template>

<script setup>
import Accordion from './Accordion.vue'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true }
})
</script>