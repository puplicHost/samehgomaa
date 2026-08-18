<template>
  <section class="section-padding">
    <Container>
      <SectionHeading
        title="أقسام عمل المؤسســــة"
        align="center"
        subtitle="تصفح أقسامنا الرئيسية ثم اكتشف الخدمات التفصيلية لكل قسم"
        class="mb-12"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <a
          v-for="(category, index) in categories"
          :key="category.id"
          :href="'#services-grid'"
          class="group relative block overflow-hidden rounded-2xl shadow-testimonial ring-1 ring-gold/15 hover:ring-gold/60 transition-all duration-300 hover:-translate-y-1"
        >
          <img
            :src="category.image"
            :alt="category.title"
            loading="lazy"
            class="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
            draggable="false"
          >

          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <span
            aria-hidden="true"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center text-sm font-bold ring-1 ring-white/30"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <div class="absolute bottom-0 inset-x-0 p-6">
            <span aria-hidden="true" class="block h-0.5 w-10 bg-gold mb-3"></span>
            <h3 class="text-xl md:text-2xl font-bold text-white leading-snug">
              {{ category.title }}
            </h3>
            <span class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              تصفح الخدمات
              <svg class="w-4 h-4 -scale-x-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const categories = [
  { id: 1, image: '/assets/images/services/service-1.webp', title: 'القضايا المدنية' },
  { id: 2, image: '/assets/images/services/service-2.webp', title: 'أحوال شخصية' },
  { id: 3, image: '/assets/images/services/service-3.webp', title: 'شئون قانونية وشركات' }
]
</script>