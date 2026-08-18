<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="max-w-5xl mx-auto">
        <SectionHeading title="محطات فخرنا وإنجازاتنا" class="mb-6" />

        <p class="text-center md:text-right text-base md:text-lg text-ink-light leading-relaxed max-w-3xl mx-auto md:mx-0">
          مسيرة مهنية تمتد لأكثر من 17 عامًا من الخبرة والعمل القانوني المتواصل، جمعت بين التأهيل العلمي المتخصص والخبرة العملية في قضايا الأحوال الشخصية والمدنية والشئون القانونية للشركات، مع قدرة قوية على إدارة القضايا ومتابعة الإجراءات القضائية وتنفيذ الأحكام.
        </p>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          <figure
            v-for="item in achievements"
            :key="item.caption"
            class="group relative overflow-hidden rounded-2xl shadow-testimonial focus-within:ring-2 focus-within:ring-gold"
          >
            <img
              :src="item.image"
              :alt="item.caption"
              loading="lazy"
              class="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-90 transition-opacity duration-300"
            ></div>
            <figcaption class="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between gap-2">
              <span class="text-white text-sm md:text-base font-semibold leading-snug">
                {{ item.caption }}
              </span>
              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-gold/90 text-white flex items-center justify-center">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const achievements = [
  { image: '/assets/images/about-us/about-card-1.webp', caption: '+17 عامًا من الخبرة' },
  { image: '/assets/images/about-us/about-card-2.webp', caption: 'قضايا رابحة' },
  { image: '/assets/images/about-us/about-card-3.webp', caption: 'استشارة قانونية' },
  { image: '/assets/images/about-us/about-card-4.webp', caption: 'كوادر عاملة' }
]
</script>