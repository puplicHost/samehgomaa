<template>
  <section class="section-padding">
    <Container>
      <SectionHeading title="رؤيتنا ورسالتنا" class="mb-12" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="group relative bg-cream rounded-2xl p-8 md:p-10 shadow-testimonial border-t-4 border-gold hover:shadow-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center">
          <div
            aria-hidden="true"
            class="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-colors duration-300 pointer-events-none"
          ></div>

          <div class="relative inline-flex w-24 h-24 items-center justify-center rounded-2xl bg-white border border-gold/25 shadow-testimonial mb-6 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/images/wp-content/uploads/2024/07/vis.webp"
              alt="رؤية المؤسسة"
              loading="lazy"
              class="w-16 h-16 object-contain"
            >
          </div>

          <h3 class="relative text-2xl md:text-3xl font-semibold text-ink mb-4">رؤية المؤسسة</h3>

          <p class="relative text-base md:text-lg text-ink-light leading-relaxed">
            نسعى إلى أن نكون من المؤسسات القانونية الرائدة في تقديم خدمات قانونية موثوقة ومتكاملة للأفراد والشركات، وحماية حقوق عملائنا وتحقيق أفضل النتائج القانونية الممكنة عبر حلول عملية قائمة على الخبرة والدراسة الدقيقة، وبناء علاقات مستدامة أساسها الثقة والاحترافية والشفافية.
          </p>
        </div>

        <div class="group relative bg-cream rounded-2xl p-8 md:p-10 shadow-testimonial border-t-4 border-gold hover:shadow-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center">
          <div
            aria-hidden="true"
            class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-colors duration-300 pointer-events-none"
          ></div>

          <div class="relative inline-flex w-24 h-24 items-center justify-center rounded-2xl bg-white border border-gold/25 shadow-testimonial mb-6 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/images/wp-content/uploads/2024/07/miss.webp"
              alt="رسالة المؤسسة"
              loading="lazy"
              class="w-16 h-16 object-contain"
            >
          </div>

          <h3 class="relative text-2xl md:text-3xl font-semibold text-ink mb-4">رسالة المؤسسة</h3>

          <p class="relative text-base md:text-lg text-ink-light leading-relaxed">
            تقديم خدمات واستشارات قانونية متكاملة للأفراد والشركات بأعلى درجات المهنية والدقة، وحماية حقوق عملائنا ومصالحهم من خلال حلول قانونية عملية ومدروسة، مع الالتزام بالسرية والشفافية والمتابعة الجادة في جميع مراحل العمل القانوني.
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
</script>