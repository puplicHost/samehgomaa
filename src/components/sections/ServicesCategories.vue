<template>
  <section class="section-padding">
    <Container>
      <SectionHeading title="أقسام عمل المؤسســــة" align="center" class="mb-12" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="category in categories" :key="category.id" class="group relative overflow-hidden rounded-2xl">
          <img
            :src="category.image"
            :alt="category.title"
            loading="lazy"
            class="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end">
            <h3 class="p-5 text-white text-xl font-semibold">{{ category.title }}</h3>
          </div>
        </div>
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