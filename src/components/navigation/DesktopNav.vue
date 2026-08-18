<template>
  <nav aria-label="القائمة الرئيسية">
    <ul class="flex items-center gap-[6px]">
      <li v-for="item in items" :key="item.to">
        <RouterLink
          :to="item.to"
          class="text-sm md:text-[15px] font-bold text-white px-2 py-2 transition-colors duration-300 hover:text-gold focus:text-gold"
          :class="{ 'text-gold': isActive(item.to) }"
          :aria-current="isActive(item.to) ? 'page' : null"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  items: { type: Array, required: true }
})

const route = useRoute()

function isActive(to) {
  return route.path === to
}
</script>