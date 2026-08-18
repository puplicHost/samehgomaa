<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <SectionHeading title="خدماتنا" />
        <Button variant="secondary" :to="'/services'" class="mt-4 lg:mt-0">
          عرض الكل
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink
          v-for="service in services"
          :key="service.id"
          :to="'/services'"
          class="group relative overflow-hidden rounded-2xl"
        >
          <img
            :src="service.image"
            :alt="service.title"
            loading="lazy"
            class="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end">
            <div class="p-5 w-full">
              <h3 class="text-white text-xl font-semibold">{{ service.title }}</h3>
            </div>
          </div>
        </RouterLink>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'

const services = [
  { id: 1, image: '/assets/images/services/service-1.webp', title: 'القضايا المدنية' },
  { id: 2, image: '/assets/images/services/service-2.webp', title: 'أحوال شخصية' },
  { id: 3, image: '/assets/images/services/service-3.webp', title: 'شئون قانونية وشركات' }
]
</script>