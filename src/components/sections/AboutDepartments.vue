<template>
  <section class="section-padding">
    <Container>
      <div class="max-w-5xl mx-auto">
        <SectionHeading title="أقسام عمل المؤسســـة" class="mb-12" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(dept, index) in departments"
            :key="dept.id"
            class="group relative bg-cream rounded-2xl p-8 shadow-testimonial border-t-4 border-gold/30 hover:border-gold hover:shadow-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span
              aria-hidden="true"
              class="absolute -top-4 -left-2 text-7xl font-bold text-gold/10 select-none group-hover:text-gold/20 transition-colors duration-300"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span
              class="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gold text-white shadow-gold mb-5 group-hover:scale-105 transition-transform duration-300"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path v-if="dept.icon === 'civil'" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                <path v-else-if="dept.icon === 'family'" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path v-else d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </span>

            <h3 class="text-xl md:text-2xl font-semibold text-ink mb-3">
              {{ dept.title }}
            </h3>

            <p class="text-base md:text-lg text-ink-light leading-relaxed">
              {{ dept.description }}
            </p>
          </article>
        </div>

        <div class="mt-12 text-center">
          <Button variant="primary" size="lg" :to="'/services'">
            تصفح جميع خدماتنا
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'

const departments = [
  {
    id: 1,
    icon: 'civil',
    title: 'القضايا المدنية',
    description: 'نتولى المنازعات المدنية والعقارية والتعويضات والعقود، مع متابعة دقيقة لجميع مراحل التقاضي والتنفيذ.'
  },
  {
    id: 2,
    icon: 'family',
    title: 'الأحوال الشخصية',
    description: 'نقدّم الدعم القانوني في قضايا الأسرة والنفقة والحضانة والطلاق والخلع، بما يحفظ الحقوق ويحقق أفضل حماية قانونية.'
  },
  {
    id: 3,
    icon: 'company',
    title: 'الشئون القانونية للشركات',
    description: 'نقدّم خدمات تأسيس الشركات وصياغة العقود والاستشارات القانونية وإدارة المنازعات، بما يدعم استقرار النشاط ويحمي مصالحه.'
  }
]
</script>