<template>
  <div
    class="rounded-xl bg-white border border-gold/15 shadow-testimonial overflow-hidden transition-all duration-300"
    :class="isOpen ? 'border-gold/60 shadow-gold' : 'hover:border-gold/40'"
  >
    <button
      type="button"
      class="w-full flex items-center justify-between gap-4 py-4 px-4 md:px-5 text-right transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
      :class="isOpen ? 'bg-cream' : 'hover:bg-cream/60'"
      :aria-expanded="isOpen"
      @click="$emit('toggle')"
    >
      <span
        v-if="iconSide === 'left'"
        class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        :class="isOpen ? 'bg-gold text-white rotate-45' : 'bg-gold/10 text-gold'"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      </span>

      <span
        class="flex-grow text-base md:text-lg font-semibold leading-relaxed transition-colors"
        :class="isOpen ? 'text-gold-dark' : 'text-ink'"
      >
        {{ item.title }}
      </span>

      <span
        v-if="iconSide === 'right'"
        class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        :class="isOpen ? 'bg-gold text-white rotate-45' : 'bg-gold/10 text-gold'"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
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
      <div v-if="isOpen" class="overflow-hidden bg-white">
        <p class="text-ink-light leading-relaxed px-4 md:px-5 pb-5 pr-4 md:pr-5 border-r-2 border-gold/25 mr-3 ml-3 md:ml-5">
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