<template>
  <Teleport to="body">
    <div
      v-if="index >= 0"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="عرض الصورة"
      @click="onBackdropClick"
    >
      <button
        type="button"
        ref="closeButton"
        class="absolute top-6 right-6 text-white text-4xl leading-none hover:text-gold transition-colors focus:outline-none focus:text-gold"
        aria-label="إغلاق"
        @click="$emit('close')"
      >
        &times;
      </button>

      <button
        type="button"
        class="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gold transition-colors focus:outline-none focus:text-gold"
        aria-label="السابق"
        @click="step(-1)"
      >
        &#10094;
      </button>

      <div class="max-w-full max-h-full text-center">
        <img
          :src="current.src"
          :alt="current.alt"
          class="max-w-[90vw] max-h-[80vh] object-contain rounded-lg mx-auto"
        >
        <p class="text-white mt-4 text-lg">{{ current.alt }}</p>
      </div>

      <button
        type="button"
        class="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gold transition-colors focus:outline-none focus:text-gold"
        aria-label="التالي"
        @click="step(1)"
      >
        &#10095;
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch, watchEffect, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: -1 }
})

const emit = defineEmits(['close', 'update:index'])

const closeButton = ref(null)

const current = computed(() => {
  const i = ((props.index % props.items.length) + props.items.length) % props.items.length
  return props.items[i]
})

watchEffect(() => {
  document.body.style.overflow = props.index >= 0 ? 'hidden' : ''
})

watch(
  () => props.index,
  async (v) => {
    if (v >= 0) {
      await nextTick()
      closeButton.value?.focus()
    }
  }
)

function step(dir) {
  const next = props.index + dir
  const nextIndex = ((next % props.items.length) + props.items.length) % props.items.length
  emit('update:index', nextIndex)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

function onKeydown(e) {
  if (props.index < 0) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') step(1)
  if (e.key === 'ArrowRight') step(-1)
}

document.addEventListener('keydown', onKeydown)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
