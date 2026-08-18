<template>
  <section class="section-padding bg-ink relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
      <img
        src="/assets/images/wp-content/uploads/2024/07/drawings.webp"
        class="w-full h-full object-cover"
        alt=""
        loading="lazy"
      >
    </div>

    <Container class="relative z-10">
      <SectionHeading title="لماذا نحن" accent-color="gold" color="gold" align="center" class="mb-12" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="reason in reasons" :key="reason.title" class="group">
          <img
            :src="reason.image"
            :alt="reason.title"
            loading="lazy"
            class="w-full h-80 md:h-96 object-cover rounded-[40px] transition-transform duration-500 group-hover:scale-[1.02]"
          >
          <h3 class="sr-only">{{ reason.title }}</h3>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const reasons = [
  { image: '/assets/images/why-us/why-us-1.webp', title: 'خبرة قانونية' },
  { image: '/assets/images/why-us/why-us-2.webp', title: 'تخصصات قانونية' },
  { image: '/assets/images/why-us/why-us-3.webp', title: 'متابعة جادة' }
]
</script>