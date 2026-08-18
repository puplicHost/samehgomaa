<template>
  <section id="services-grid" class="section-padding bg-cream scroll-mt-24">
    <Container>
      <SectionHeading
        title="خدمات المؤسسة"
        align="center"
        subtitle="اضغط على صورة أي خدمة لعرضها بالحجم الكامل، أو تواصل معنا مباشرة لحجزها"
        class="mb-12"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-testimonial border-t-4 border-transparent hover:border-gold hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative cursor-pointer overflow-hidden" @click="openLightbox(index)">
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
            <span
              aria-hidden="true"
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center text-xs font-bold shadow-gold"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <div class="flex flex-col flex-1 p-5">
            <h3 class="text-center text-lg md:text-xl font-semibold text-ink mb-4">
              {{ service.alt }}
            </h3>

            <a
              :href="whatsappLink(service.alt)"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gold text-gold px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              <Icon icon="simple-icons:whatsapp" class="w-4 h-4" aria-hidden="true" />
              اطلب الخدمة
            </a>
          </div>
        </article>
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
import { Icon } from '@iconify/vue'
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'
import Lightbox from '../ui/Lightbox.vue'
import services from '../../data/services.json'

const lightboxIndex = ref(-1)

function openLightbox(index) {
  lightboxIndex.value = index
}

function whatsappLink(title) {
  return 'https://wa.me/201111904997?text=' + encodeURIComponent(`مرحبًا، أرغب في حجز "${title}". هل يمكن معرفة المواعيد المتاحة؟`)
}
</script>