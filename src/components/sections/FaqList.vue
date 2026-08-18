<template>
  <section class="section-padding">
    <Container>
      <div class="max-w-3xl mx-auto space-y-12">
        <FaqCategory
          v-for="category in categories"
          :key="category.title"
          :title="category.title"
          :items="category.items"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import FaqCategory from '../ui/FaqCategory.vue'
import faqItems from '../../data/faq.json'

const categories = [
  { title: 'الأحوال الشخصية', items: faqItems.filter(faq => faq.category === 'personal-affairs') },
  { title: 'القضايا المدنية', items: faqItems.filter(faq => faq.category === 'civil-cases') },
  { title: 'شئون الشركات', items: faqItems.filter(faq => faq.category === 'corporate-affairs') }
]
</script>