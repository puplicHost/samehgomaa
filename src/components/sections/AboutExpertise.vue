<template>
  <section class="section-padding">
    <Container>
      <div class="max-w-4xl mx-auto">
        <SectionHeading title="خبرات قانونيـــــــــة" class="mb-6" />

        <p class="text-center md:text-right text-base md:text-lg text-ink-light leading-relaxed max-w-3xl mx-auto md:mx-0">
          تضم <strong class="text-ink">مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong>
          فريقًا من الكفاءات القانونية المؤهلة، يمتلك خبرة عملية في قضايا الأحوال الشخصية والقضايا المدنية وشئون الشركات، ويعمل وفق منهج قانوني دقيق يقوم على دراسة كل حالة ووضع الاستراتيجية الأنسب لحماية حقوق العملاء ومصالحهم.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div
            v-for="item in capabilities"
            :key="item.title"
            class="group bg-cream rounded-2xl p-7 shadow-testimonial text-center hover:shadow-gold hover:-translate-y-1 transition-all duration-300 border-b-3 border-gold/30 hover:border-gold"
          >
            <span class="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gold/10 text-gold-dark mb-5 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path v-if="item.slug === 'team'" d="M12 5.9a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zM6.9 7.5a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zm10.2 0a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zM12 13.2c-2.87 0-6.1 1.32-6.1 3.6v1.9h12.2v-1.9c0-2.28-3.23-3.6-6.1-3.6zM3.8 14.5c-1.92 0-3.8.93-3.8 2.44v1.3h4v-1.3c0-.7.28-1.45.82-2.03-.62-.24-1.18-.4-1.02-.41zm16.4 0c.15.01-.4.17-1.02.4.54.59.82 1.34.82 2.04v1.3h4v-1.3c0-1.51-1.88-2.44-3.8-2.44z" />
                <path v-else-if="item.slug === 'strategy'" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path v-else d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </span>
            <h3 class="text-lg md:text-xl font-semibold text-ink mb-3">{{ item.title }}</h3>
            <p class="text-sm md:text-base text-ink-light leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const capabilities = [
  {
    slug: 'team',
    title: 'فريق مؤهل',
    description: 'كفاءات قانونية تمتلك خبرة عملية في الأحوال الشخصية والقضايا المدنية وشئون الشركات.'
  },
  {
    slug: 'strategy',
    title: 'منهج دقيق',
    description: 'دراسة كل حالة ووضع الاستراتيجية القانونية الأنسب لحماية حقوق العملاء ومصالحهم.'
  },
  {
    slug: 'confidentiality',
    title: 'سرية تامة',
    description: 'التزام كامل بالسرية والاحترافية في جميع مراحل العمل القانوني.'
  }
]
</script>