<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <button
      type="button"
      class="w-full flex items-center justify-between gap-4 py-4 px-0 text-right transition-colors hover:bg-cream"
      :class="{ 'bg-cream': isOpen }"
      :aria-expanded="isOpen"
      @click="$emit('toggle')"
    >
      <span v-if="iconSide === 'left'" class="text-gold flex-shrink-0" :class="{ 'rotate-45': isOpen }">
        <svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </span>

      <span class="text-base md:text-lg font-medium text-ink flex-grow leading-relaxed">
        {{ item.title }}
      </span>

      <span v-if="iconSide === 'right'" class="text-gold flex-shrink-0" :class="{ 'rotate-45': isOpen }">
        <svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </span>
    </button>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[2000px]"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-[2000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isOpen" class="overflow-hidden">
        <p class="text-ink-light leading-relaxed pb-5 pr-1">
          {{ item.content }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  isOpen: { type: Boolean, default: false },
  iconSide: { type: String, default: 'right' }
})

defineEmits(['toggle'])
</script>
