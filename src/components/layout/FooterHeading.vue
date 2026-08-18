<template>
  <h3
    class="relative pb-3 text-xl font-semibold text-gold text-center after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:h-0.5 after:w-8 after:bg-gold md:text-right md:after:right-0 md:after:translate-x-0"
  >
    {{ title }}
  </h3>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>
