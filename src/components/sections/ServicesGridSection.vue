<template>
  <section class="section-padding bg-cream">
    <Container>
      <SectionHeading title="خدمات المؤسسة" align="center" class="mb-12" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="(service, index) in services" :key="service.id" class="bg-white rounded-2xl p-4 shadow-testimonial hover:shadow-lg transition-shadow duration-300">
          <div class="relative group cursor-pointer overflow-hidden rounded-xl" @click="openLightbox(index)">
            <img
              :src="service.src"
              :alt="service.alt"
              loading="lazy"
              class="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
              <div class="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <p class="text-center mt-3 text-ink font-medium">{{ service.alt }}</p>
        </div>
      </div>

      <div class="text-center">
        <Button variant="primary" size="lg" :to="'/contacts'">
          إحجز إستشارتك القانونية الآن
        </Button>
      </div>
    </Container>

    <Lightbox
      :items="services"
      :index="lightboxIndex"
      @close="lightboxIndex = -1"
      @update:index="lightboxIndex = $event"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'
import Lightbox from '../ui/Lightbox.vue'
import services from '../../data/services.json'

const lightboxIndex = ref(-1)

function openLightbox(index) {
  lightboxIndex.value = index
}
</script>