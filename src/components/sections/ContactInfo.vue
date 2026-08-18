<template>
  <section class="section-padding">
    <Container>
      <div class="mb-12">
        <div class="relative rounded-2xl overflow-hidden shadow-gold">
          <iframe
            :src="mapEmbedUrl"
            width="100%"
            height="450"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
            title="موقع مؤسسة رامي شريف على الخريطة"
          ></iframe>

          <a
            :href="mapLink"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors shadow-lg whitespace-nowrap"
          >
            فتح الموقع على Google Maps
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ContactCard
          v-for="contact in contacts"
          :key="contact.id"
          :icon="contact.icon"
          :title="contact.title"
          :content="contact.content"
          :type="contact.type"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import ContactCard from '../ui/ContactCard.vue'

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1720.65!2d29.8929002!3d31.1996235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDExJzU4LjYiTiAyOcKwNTMnMzQuNCJF!5e0!3m2!1sar!2seg!4v1735656279793!5m2!1sar!2seg'

const mapLink = 'https://www.google.com/maps/search/1+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B4%D9%8A%D8%A9%D8%8C+%D9%85%D8%A8%D9%86%D9%89+%D9%83%D9%85%D8%A7%D9%84+%D8%B3%D8%B9%D8%AF+%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%8C+%D8%A3%D9%85%D8%A7%D9%85+%D9%85%D8%AD%D9%83%D9%85%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.1996235,29.8929002,17.84z'

const contacts = [
  {
    id: 1,
    icon: 'envelope',
    title: 'البريد الإلكتروني',
    content: 'ramisharif.law@email.com',
    type: 'email'
  },
  {
    id: 2,
    icon: 'map-marker',
    title: 'فرع الإسكندرية',
    content: '١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠',
    type: 'address'
  },
  {
    id: 3,
    icon: 'map-marker',
    title: 'الإسكندرية',
    content: 'شارع الجلاء، أمام مستشفى العقاد، برج أبو بكر الصديق الدور الخامس.',
    type: 'address'
  },
  {
    id: 4,
    icon: 'phone',
    title: 'أرقام تواصل',
    content: '01111904997 - 034863096',
    type: 'phone'
  }
]
</script>