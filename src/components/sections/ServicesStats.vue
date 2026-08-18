<template>
  <section class="py-12 md:py-16">
    <Container>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <figure
          v-for="stat in stats"
          :key="stat.title"
          class="group relative overflow-hidden rounded-2xl shadow-testimonial focus-within:ring-2 focus-within:ring-gold"
        >
          <img
            :src="stat.image"
            :alt="stat.title"
            loading="lazy"
            class="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-90 transition-opacity duration-300"
          ></div>
          <figcaption class="absolute bottom-0 inset-x-0 p-4">
            <span class="block text-white text-sm md:text-base font-semibold leading-snug">
              {{ stat.title }}
            </span>
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'

const stats = [
  { image: '/assets/images/about-us/about-card-1.webp', title: '+17 عامًا من الخبرة' },
  { image: '/assets/images/about-us/about-card-2.webp', title: 'قضايا رابحة' },
  { image: '/assets/images/about-us/about-card-3.webp', title: 'استشارة قانونية' },
  { image: '/assets/images/about-us/about-card-4.webp', title: 'كوادر عاملة' }
]
</script>