<template>
  <section class="pt-16 md:pt-20 pb-8 md:pb-12 relative overflow-hidden">
    <div
      aria-hidden="true"
      class="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>
    <div
      aria-hidden="true"
      class="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>

    <Container class="relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <span
          class="inline-flex items-center gap-2 bg-cream border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold text-gold-dark mb-6"
        >
          <span class="w-2 h-2 rounded-full bg-gold"></span>
          فريقنا في خدمتكم
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
          تواصل معنا
        </h1>

        <p class="text-2xl md:text-3xl lg:text-4xl font-medium text-gold mt-3 leading-snug">
          نحن هنا لدعمكم قانونيًا
        </p>

        <p class="mt-6 text-base md:text-lg text-ink-light leading-relaxed">
          سواء كنتم بحاجة لاستشارة قانونية أو معلومات حول خدماتنا، تواصلوا معنا عبر الهاتف،
          البريد الإلكتروني، واتساب، أو بزيارتنا في فروعنا.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span
            v-for="chip in chips"
            :key="chip.text"
            class="inline-flex items-center gap-2 bg-cream border border-gold/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink shadow-testimonial"
          >
            <svg class="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="chip.icon === 'chat'" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              <path v-else-if="chip.icon === 'clock'" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              <path v-else d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {{ chip.text }}
          </span>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="https://wa.me/201111904997" class="!px-8" target="_blank">
            <Icon icon="simple-icons:whatsapp" class="w-5 h-5" aria-hidden="true" />
            <span class="mr-2">احجز استشارتك عبر واتساب</span>
          </Button>
          <Button variant="secondary" size="lg" :to="'/services'">
            استعرض خدماتنا
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import Container from '../common/Container.vue'
import Button from '../common/Button.vue'

const chips = [
  { icon: 'chat', text: 'رد سريع عبر واتساب' },
  { icon: 'clock', text: 'استشارات مخصصة' },
  { icon: 'shield', text: 'سرية تامة للمعلومات' }
]
</script>