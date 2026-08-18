<template>
  <section class="pt-16 md:pt-20 pb-8 md:pb-12 relative overflow-hidden">
    <img
      src="/assets/images/wp-content/uploads/2024/07/d3awybw.webp"
      alt=""
      loading="lazy"
      aria-hidden="true"
      class="absolute top-0 left-0 w-48 md:w-64 h-auto opacity-20 -translate-x-1/4 -translate-y-1/4 pointer-events-none"
    >

    <img
      src="/assets/images/wp-content/uploads/2024/07/ta7selbw.webp"
      alt=""
      loading="lazy"
      aria-hidden="true"
      class="absolute top-0 right-0 w-48 md:w-64 h-auto opacity-20 translate-x-1/4 -translate-y-1/4 pointer-events-none"
    >

    <div
      aria-hidden="true"
      class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>

    <Container class="relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <span
          class="inline-flex items-center gap-2 bg-cream border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold text-gold-dark mb-6"
        >
          <span class="w-2 h-2 rounded-full bg-gold"></span>
          خدماتنا القانونية
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          الخدمات القانونية
        </h1>

        <p class="text-2xl md:text-3xl lg:text-4xl font-medium text-gold mt-3 leading-snug">
          في مؤسسة رامي شريف
        </p>

        <p class="mt-6 text-base md:text-lg text-ink-light leading-relaxed">
          نقدم مجموعة واسعة من الخدمات القانونية التي تلبي احتياجات الأفراد والشركات على حد سواء،
          بقيادة الأستاذ رامي شريف وخبرة تمتد لأكثر من 17 عامًا.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span
            v-for="chip in chips"
            :key="chip.text"
            class="inline-flex items-center gap-2 bg-cream border border-gold/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink shadow-testimonial"
          >
            <svg class="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="chip.icon === 'briefcase'" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              <path v-else-if="chip.icon === 'star'" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
              <path v-else d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {{ chip.text }}
          </span>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" :to="'/contacts'" class="!px-8">
            احجز استشارتك الآن
          </Button>
          <Button variant="secondary" size="lg" :to="'/about'">
            تعرف علينا
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import Button from '../common/Button.vue'

const chips = [
  { icon: 'briefcase', text: 'خدمات الأفراد والشركات' },
  { icon: 'star', text: 'خبرة تتجاوز 17 عامًا' },
  { icon: 'shield', text: 'متابعة دقيقة وسرية تامة' }
]
</script>