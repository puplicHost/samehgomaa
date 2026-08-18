<template>
  <section class="section-padding relative overflow-hidden">
    <div
      aria-hidden="true"
      class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>
    <div
      aria-hidden="true"
      class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>

    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div class="text-center md:text-right">
          <span
            class="inline-flex items-center gap-2 bg-cream border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold text-gold-dark mb-6"
          >
            <span class="w-2 h-2 rounded-full bg-gold"></span>
            من نحن
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
            مؤسسة رامي شريف
          </h1>

          <p class="text-2xl md:text-3xl lg:text-4xl font-medium text-gold mt-3 leading-snug">
            ريادة وخبرة قانونيـــة
          </p>

          <p class="mt-6 text-base md:text-lg text-ink-light leading-relaxed max-w-xl">
            مؤسسة رامي شريف للاستشارات القانونية والمحاماة متخصصة في تقديم الخدمات القانونية
            للأفراد والشركات، بقيادة الأستاذ رامي شريف بخبرة تمتد لأكثر من 17 عامًا.
          </p>

          <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <span
              class="inline-flex items-center gap-2 bg-cream border border-gold/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink shadow-testimonial"
            >
              <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
              </svg>
              أكثر من 17 عامًا من الخبرة
            </span>
            <span
              class="inline-flex items-center gap-2 bg-cream border border-gold/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink shadow-testimonial"
            >
              <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              التزام كامل بالسرية
            </span>
          </div>

          <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button variant="primary" size="lg" :to="'/contacts'" class="!px-8">
              تواصل معنا
            </Button>
            <Button variant="secondary" size="lg" :to="'/services'">
              خدماتنا القانونية
            </Button>
          </div>
        </div>

        <div class="relative flex justify-center">
          <div class="relative w-full max-w-md">
            <div
              aria-hidden="true"
              class="absolute inset-0 m-auto w-full h-full rounded-2xl border-4 border-gold/20 rotate-3 pointer-events-none"
            ></div>
            <img
              src="/assets/images/wp-content/uploads/2024/08/hero-image.webp"
              alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة"
              class="relative w-full h-auto rounded-2xl shadow-testimonial z-10"
            >
            <div
              class="absolute -bottom-6 right-1/2 translate-x-1/2 md:translate-x-0 md:right-4 bg-ink text-white rounded-2xl px-6 py-4 shadow-testimonial z-20 flex items-center gap-3 whitespace-nowrap"
            >
              <span class="text-3xl font-bold text-gold">17+</span>
              <span class="text-sm leading-snug text-white/90">
                عامًا من<br>الخبرة القانونية
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import Button from '../common/Button.vue'
</script>