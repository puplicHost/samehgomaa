<template>
  <section class="py-12 md:py-16">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="flex justify-center order-2 md:order-1">
          <div class="relative">
            <div
              aria-hidden="true"
              class="absolute inset-0 m-auto w-full h-full rounded-full bg-gold/10 -rotate-6 pointer-events-none"
            ></div>
            <img
              src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp"
              alt="شعار مؤسسة رامي شريف"
              loading="lazy"
              class="relative w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl bg-cream p-4 border border-gold/20 shadow-testimonial"
            >
          </div>
        </div>

        <div class="text-center md:text-right order-1 md:order-2">
          <SectionHeading title="نبذة عن المؤسسة" />
          <p class="mt-4 text-base md:text-lg text-ink-light leading-relaxed">
            <strong class="text-ink">مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong>
            مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، ومقرها المنشية بمحافظة الإسكندرية، يقودها
            <strong class="text-ink">الأستاذ رامي شريف</strong> بخبرة قانونية متراكمة تمتد لأكثر من 17 عامًا،
            مدعومة بتأهيل علمي متخصص في القانون الجنائي والتجاري.
          </p>

          <ul class="mt-6 space-y-3">
            <li v-for="point in highlights" :key="point" class="flex items-start justify-center md:justify-start gap-3 text-base text-ink-light leading-relaxed">
              <span class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
              {{ point }}
            </li>
          </ul>

          <div class="mt-8">
            <Button variant="secondary" :to="'/services'">
              اكتشف خدماتنا القانونية
              <svg class="w-5 h-5 mr-2 -scale-x-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'

const highlights = [
  'خبرة قانونية تتجاوز 17 عامًا في مختلف مجالات العمل القانوني',
  'تأهيل علمي متخصص في القانون الجنائي والتجاري',
  'الالتزام بالدقة والسرية وحماية مصالح العملاء',
  'مقر رئيسي في المنشية بمحافظة الإسكندرية'
]
</script>