<template>
  <section class="py-12 md:py-16">
    <Container>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="stat in stats" :key="stat.title">
          <img
            :src="stat.image"
            :alt="stat.title"
            loading="lazy"
            class="w-full h-48 md:h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
          <h3 class="sr-only">{{ stat.title }}</h3>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'

const stats = [
  { image: '/assets/images/about-us/about-card-1.webp', title: 'عاما من الخبرة' },
  { image: '/assets/images/about-us/about-card-2.webp', title: 'قضايا رابحة' },
  { image: '/assets/images/about-us/about-card-3.webp', title: 'استشارة قانونية' },
  { image: '/assets/images/about-us/about-card-4.webp', title: 'كوادر عاملة' }
]
</script>