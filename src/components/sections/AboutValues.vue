<template>
  <section class="section-padding bg-cream">
    <Container>
      <SectionHeading title="قيمنا التي نؤمن بها" align="center" class="mb-12" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white rounded-2xl p-6 md:p-8 shadow-testimonial border-t-4 border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-gold transition-all duration-300"
        >
          <ValueCard
            :icon="value.icon"
            :title="value.title"
            :description="value.description"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import ValueCard from '../ui/ValueCard.vue'

const values = [
  {
    icon: '/assets/images/wp-content/uploads/2024/07/11-1.webp',
    title: 'التميز المهني',
    description: 'نقدّم خدمات قانونية رفيعة المستوى، ترتكز على الخبرة والدقة والالتزام بأعلى المعايير المهنية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/1111.webp',
    title: 'الوضوح والثقة',
    description: 'نحرص على توضيح الإجراءات والمواقف القانونية، وإطلاع عملائنا على جميع مراحل العمل بكل صدق وشفافية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/11.webp',
    title: 'المواكبة القانونية',
    description: 'نتابع المستجدات التشريعية والقضائية، ونطوّر خبراتنا وأدواتنا باستمرار لتقديم حلول أكثر كفاءة وفاعلية.'
  },
  {
    icon: '/assets/images/wp-content/uploads/2024/07/111.webp',
    title: 'أولوية مصالح العملاء',
    description: 'نضع مصالح عملائنا في صميم عملنا، ونقدّم لكل عميل دعمًا قانونيًا مدروسًا يهدف إلى تحقيق أفضل النتائج الممكنة.'
  }
]
</script>