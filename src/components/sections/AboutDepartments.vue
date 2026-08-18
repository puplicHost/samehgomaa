<template>
  <section class="section-padding">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right">
        <SectionHeading title="أقسام عمل المؤسســــة" class="mb-12" />

        <div class="space-y-10">
          <div v-for="dept in departments" :key="dept.id" class="bg-cream rounded-2xl p-8 shadow-testimonial">
            <h3 class="text-xl md:text-2xl font-semibold text-ink mb-4">
              {{ dept.title }}
            </h3>

            <p class="text-base md:text-lg text-ink-light leading-relaxed">
              {{ dept.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const departments = [
  {
    id: 1,
    title: 'القضايا المدنية',
    description: 'نتولى المنازعات المدنية والعقارية والتعويضات والعقود، مع متابعة دقيقة لجميع مراحل التقاضي والتنفيذ.'
  },
  {
    id: 2,
    title: 'الأحوال الشخصية',
    description: 'نقدّم الدعم القانوني في قضايا الأسرة والنفقة والحضانة والطلاق والخلع، بما يحفظ الحقوق ويحقق أفضل حماية قانونية.'
  },
  {
    id: 3,
    title: 'الشئون القانونية للشركات',
    description: 'نقدّم خدمات تأسيس الشركات وصياغة العقود والاستشارات القانونية وإدارة المنازعات، بما يدعم استقرار النشاط ويحمي مصالحه.'
  }
]
</script>