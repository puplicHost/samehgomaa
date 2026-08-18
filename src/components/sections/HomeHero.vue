<template>
  <section class="relative bg-ink text-white min-h-screen flex items-center overflow-hidden">
    <Container class="relative z-10 py-24 lg:py-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="text-center lg:text-right order-2 lg:order-1">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gold leading-tight mb-4" style="text-shadow: 0 0 10px rgba(0,0,0,0.3);">
            مؤسسة رامي شريف
          </h1>

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-cream leading-tight mb-8" style="text-shadow: 0 0 10px rgba(0,0,0,0.3);">
            مؤسسة استشارات قانونية
          </h2>

          <Button variant="primary" size="lg" :to="'/about'">
            عن المؤسسة
          </Button>
        </div>

        <div class="flex justify-center order-1 lg:order-2">
          <img
            src="/assets/images/wp-content/uploads/2026/04/ramisharif.webp"
            alt="مؤسسة رامي شريف"
            class="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-[20px] md:rounded-[24px] object-cover"
          >
        </div>
      </div>
    </Container>

    <div class="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" aria-hidden="true">
      <svg class="w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0 40 Q 360 0 720 40 T 1440 40 V 80 H 0 Z" fill="#fffefd" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import Button from '../common/Button.vue'
</script>