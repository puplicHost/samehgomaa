<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-ink bg-opacity-95 z-40 md:hidden"
        @click="$emit('close')"
      >
        <nav
          class="flex flex-col items-center justify-center h-full"
          @click.stop
          aria-label="القائمة الجانبية"
        >
          <ul class="w-full max-w-sm px-6">
            <li
              v-for="item in items"
              :key="item.to"
              class="border-b border-dashed border-white/10 last:border-b-0"
            >
              <RouterLink
                :to="item.to"
                class="block py-4 px-4 text-center text-base font-semibold text-white hover:text-gold focus:text-gold transition-colors duration-300"
                :class="{ 'text-gold': isActive(item.to) }"
                @click="$emit('close')"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useRoute } from 'vue-router'

const props = defineProps({
  items: { type: Array, required: true },
  isOpen: { type: Boolean, required: true }
})

defineEmits(['close'])

const route = useRoute()

function isActive(to) {
  return route.path === to
}
</script>