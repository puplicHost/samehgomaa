<template>
  <div
    v-if="index >= 0"
    class="service-lightbox"
    id="serviceLightbox"
    aria-modal="true"
    role="dialog"
    aria-label="عرض الصورة"
    @click="onBackdropClick"
  >
    <button type="button" class="service-lightbox-close" aria-label="إغلاق" ref="closeBtn" @click="$emit('close')">&#10005;</button>
    <button type="button" class="service-lightbox-nav service-lightbox-prev" aria-label="السابق" @click="step(-1)">&#10094;</button>
    <figure class="service-lightbox-figure">
      <img class="service-lightbox-img" :src="current.src" :alt="current.alt" />
      <figcaption class="service-lightbox-caption">{{ current.alt }}</figcaption>
    </figure>
    <button type="button" class="service-lightbox-nav service-lightbox-next" aria-label="التالي" @click="step(1)">&#10095;</button>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: -1 }
})

const emit = defineEmits(['close'])

const closeBtn = ref(null)

const current = computed(() => props.items[((props.index % props.items.length) + props.items.length) % props.items.length])

watchEffect(() => {
  document.body.style.overflow = props.index >= 0 ? 'hidden' : ''
})

watch(
  () => props.index,
  async (v) => {
    if (v >= 0) {
      await nextTick()
      closeBtn.value && closeBtn.value.focus()
    }
  }
)

function step(dir) {
  const next = props.index + dir
  emitUpdate(((next % props.items.length) + props.items.length) % props.items.length)
}

function emitUpdate(i) {
  emit('update:index', i)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) emit('close')
}

function onKeydown(e) {
  if (props.index < 0) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') emitUpdate((props.index + 1) % props.items.length)
  if (e.key === 'ArrowRight') emitUpdate(((props.index - 1) % props.items.length + props.items.length) % props.items.length)
}

document.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>