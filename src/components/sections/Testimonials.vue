<template>
  <section class="section-padding">
    <Container>
      <SectionHeading title="آراء العملاء" align="center" class="mb-12" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import TestimonialCard from '../ui/TestimonialCard.vue'

const testimonials = [
  {
    id: 1,
    quote: 'بجد مؤسسة رامي شريف فرقوا معايا كتير في قضية النزاع العقاري اللي كنت واقع فيها. كانوا محترفين جدًا وساعدوني أرجع حقي. مشكورين جدًا.',
    name: 'أحمد علي',
    location: 'الإسكندرية'
  },
  {
    id: 2,
    quote: 'المستشار رامي شريف وفريقه بصراحة كانوا دعم كبير ليا في قضية الطلاق. كانوا فاهمين كل التفاصيل وقدموا لي نصائح ممتازة. ربنا يبارك فيهم.',
    name: 'مريم محمود',
    location: 'الإسكندرية'
  },
  {
    id: 3,
    quote: 'أنا رحت لمؤسسة رامي شريف بعد ما كنت فاقد الأمل في قضية تعويض مالي. الحمد لله، المستشارين هناك قدروا يجيبوا لي حقي بمنتهى الاحترافية.',
    name: 'خالد عبد الله',
    location: 'الإسكندرية'
  }
]
</script>