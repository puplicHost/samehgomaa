<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="max-w-3xl mx-auto">
        <div class="relative mb-6">
          <svg
            class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="query"
            type="search"
            inputmode="search"
            placeholder="ابحث في الأسئلة الشائعة..."
            aria-label="ابحث في الأسئلة الشائعة"
            class="w-full rounded-xl border-2 border-gold/25 bg-white py-3.5 pr-12 pl-4 text-base text-ink placeholder:text-ink-lighter focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
          >
          <button
            v-if="query"
            type="button"
            class="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-ink-lighter hover:text-error hover:bg-error/10 transition-colors flex items-center justify-center"
            :aria-label="'مسح البحث'"
            @click="query = ''"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="تصنيفات الأسئلة">
          <button
            v-for="cat in filterChips"
            :key="cat.key"
            type="button"
            role="tab"
            :aria-selected="activeCategory === cat.key"
            class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            :class="activeCategory === cat.key
              ? 'bg-gold text-white shadow-gold'
              : 'bg-white text-ink border border-gold/25 hover:border-gold hover:text-gold-dark'"
            @click="activeCategory = cat.key"
          >
            {{ cat.title }}
            <span
              class="text-xs font-bold rounded-full px-2 py-0.5"
              :class="activeCategory === cat.key ? 'bg-white/20 text-white' : 'bg-gold/10 text-gold-dark'"
            >
              {{ cat.count }}
            </span>
          </button>
        </div>

        <p v-if="filteredCount === 0" class="text-center py-16">
          <svg class="w-14 h-14 mx-auto text-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
          </svg>
          <span class="block text-lg font-semibold text-ink">لا توجد نتائج مطابقة</span>
          <span class="block mt-2 text-ink-light">جرّب كلمة بحث أخرى أو اختر تصنيفًا مختلفًا</span>
        </p>

        <div v-else class="space-y-12">
          <FaqCategory
            v-for="category in filteredCategories"
            :key="category.title"
            :title="category.title"
            :icon="category.icon"
            :items="category.items"
          />
        </div>

        <div class="mt-14 bg-ink rounded-2xl p-8 md:p-10 text-center shadow-testimonial relative overflow-hidden">
          <div
            aria-hidden="true"
            class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/20 blur-3xl pointer-events-none"
          ></div>
          <svg class="w-12 h-12 mx-auto text-gold mb-4 relative" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 relative">
            لم تجد إجابة سؤالك؟
          </h2>
          <p class="text-white/80 leading-relaxed max-w-xl mx-auto mb-8 relative">
            تواصل معنا مباشرة عبر واتساب وسيقوم فريقنا القانوني بالإجابة على استفسارك في أسرع وقت.
          </p>
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink animate-heartbeat origin-center"
          >
            <Icon icon="simple-icons:whatsapp" class="w-6 h-6" aria-hidden="true" />
            اسأل عبر واتساب
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Container from '../common/Container.vue'
import FaqCategory from '../ui/FaqCategory.vue'
import faqItems from '../../data/faq.json'

const query = ref('')
const activeCategory = ref('all')

const categories = [
  {
    key: 'personal-affairs',
    title: 'الأحوال الشخصية',
    icon: 'family',
    items: faqItems.filter(faq => faq.category === 'personal-affairs')
  },
  {
    key: 'civil-cases',
    title: 'القضايا المدنية',
    icon: 'civil',
    items: faqItems.filter(faq => faq.category === 'civil-cases')
  },
  {
    key: 'corporate-affairs',
    title: 'شئون الشركات',
    icon: 'company',
    items: faqItems.filter(faq => faq.category === 'corporate-affairs')
  }
]

const filterChips = computed(() => [
  { key: 'all', title: 'الكل', count: faqItems.length },
  ...categories.map(cat => ({ key: cat.key, title: cat.title, count: cat.items.length }))
])

const filteredCategories = computed(() => {
  const q = query.value.trim()
  const visible = activeCategory.value === 'all'
    ? categories
    : categories.filter(cat => cat.key === activeCategory.value)

  return visible
    .map(cat => ({
      ...cat,
      items: q
        ? cat.items.filter(item =>
            item.title.includes(q) || item.content.includes(q))
        : cat.items
    }))
    .filter(cat => cat.items.length > 0)
})

const filteredCount = computed(() =>
  filteredCategories.value.reduce((sum, cat) => sum + cat.items.length, 0)
)

const whatsappLink = 'https://wa.me/201111904997?text=' +
  encodeURIComponent('مرحبًا، لدي سؤال ولم أجد إجابته في الأسئلة الشائعة. هل يمكن مساعدتي؟')
</script>