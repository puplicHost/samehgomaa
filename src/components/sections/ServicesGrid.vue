<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="mb-8 lg:mb-10">
        <SectionHeading title="خدماتنا" />
        <div class="mt-4">
          <Button variant="secondary" :to="'/services'" class="hidden lg:inline-flex">
            عرض الكل
          </Button>
        </div>
      </div>

      <div class="hidden lg:grid grid-cols-3 gap-6">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>

      <div class="lg:hidden">
        <div
          ref="track"
          class="overflow-hidden touch-pan-y select-none rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          role="region"
          aria-roledescription="carousel"
          aria-label="قائمة الخدمات"
          tabindex="0"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @click.capture="onClickCapture"
          @keydown="onKeydown"
        >
          <div
            class="flex"
            :class="{ 'transition-transform duration-500 ease-out': !isDragging }"
            :style="{ transform: `translateX(${offset}px)` }"
          >
            <div
              v-for="(service, index) in services"
              :key="service.id"
              class="w-full shrink-0"
              aria-roledescription="slide"
              :aria-label="`${service.title} - الشريحة ${index + 1} من ${services.length}`"
            >
              <ServiceCard :service="service" />
            </div>
          </div>
        </div>

        <div class="mt-5 flex justify-center gap-2">
          <button
            v-for="(service, index) in services"
            :key="service.id"
            type="button"
            class="h-2.5 rounded-full transition-all duration-300"
            :class="activeIndex === index ? 'w-7 bg-gold' : 'w-2.5 bg-gold/30 hover:bg-gold/50'"
            :aria-label="`الانتقال إلى ${service.title}`"
            :aria-current="activeIndex === index ? 'true' : undefined"
            @click="goTo(index)"
          ></button>
        </div>

        <div class="mt-6 flex justify-center">
          <Button variant="secondary" :to="'/services'" class="lg:hidden">
            عرض الكل
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'
import ServiceCard from './ServiceCard.vue'

const services = [
  { id: 1, image: '/assets/images/services/service-1.webp', title: 'القضايا المدنية' },
  { id: 2, image: '/assets/images/services/service-2.webp', title: 'أحوال شخصية' },
  { id: 3, image: '/assets/images/services/service-3.webp', title: 'شئون قانونية وشركات' }
]

const track = ref(null)
const activeIndex = ref(0)
const offset = ref(0)
const isDragging = ref(false)

let startX = 0
let baseOffset = 0
let dragDelta = 0
let pointerDown = false
let didDrag = false

const slideWidth = computed(() => track.value?.clientWidth || 0)

function updateOffset() {
  offset.value = activeIndex.value * slideWidth.value
}

function goTo(index) {
  activeIndex.value = Math.min(Math.max(index, 0), services.length - 1)
  updateOffset()
}

function next() {
  goTo(activeIndex.value + 1)
}

function prev() {
  goTo(activeIndex.value - 1)
}

function onPointerDown(e) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  pointerDown = true
  isDragging.value = false
  startX = e.clientX
  baseOffset = offset.value
  dragDelta = 0
  try {
    track.value.setPointerCapture(e.pointerId)
  } catch {
    // synthetic events may lack a real pointer id
  }
}

function onPointerMove(e) {
  if (!pointerDown) return
  dragDelta = e.clientX - startX
  if (Math.abs(dragDelta) > 4) isDragging.value = true
  if (isDragging.value) {
    offset.value = baseOffset + dragDelta
  }
}

function onPointerUp() {
  if (!pointerDown) return
  pointerDown = false
  didDrag = isDragging.value
  isDragging.value = false
  if (didDrag) {
    const threshold = Math.max(40, slideWidth.value * 0.15)
    if (dragDelta < -threshold) next()
    else if (dragDelta > threshold) prev()
    else updateOffset()
  }
}

function onClickCapture(e) {
  if (didDrag) {
    didDrag = false
    e.preventDefault()
    e.stopPropagation()
  }
}

function onKeydown(e) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    prev()
  }
}

onMounted(() => {
  window.addEventListener('resize', updateOffset)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateOffset)
})
</script>
