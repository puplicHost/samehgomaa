<template>
  <section class="pt-16 md:pt-20 pb-8 md:pb-12 relative overflow-hidden">
    <div
      aria-hidden="true"
      class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>
    <div
      aria-hidden="true"
      class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none"
    ></div>

    <Container class="relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <span
          class="inline-flex items-center gap-2 bg-cream border border-gold/30 rounded-full px-4 py-1.5 text-sm font-semibold text-gold-dark mb-6"
        >
          <span class="w-2 h-2 rounded-full bg-gold"></span>
          دليلك القانوني
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
          الأسئلة الشائعة
        </h1>

        <p class="mt-6 text-base md:text-lg text-ink-light leading-relaxed">
          مصدر شامل للإجابة على أكثر الأسئلة تكرارًا حول القوانين والإجراءات القانونية في مصر،
          لمساعدتكم على فهم حقوقكم والتزاماتكم القانونية بوضوح ودقة.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span
            v-for="chip in chips"
            :key="chip.text"
            class="inline-flex items-center gap-2 bg-cream border border-gold/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink shadow-testimonial"
          >
            <svg class="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="chip.icon === 'book'" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
              <path v-else-if="chip.icon === 'check'" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              <path v-else d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {{ chip.text }}
          </span>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" :to="'/contacts'" class="!px-8">
            لم تجد إجابتك؟ تواصل معنا
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
import Container from '../common/Container.vue'
import Button from '../common/Button.vue'

const chips = [
  { icon: 'book', text: 'مصدر شامل ومحدث' },
  { icon: 'check', text: 'معلومات دقيقة وواضحة' },
  { icon: 'shield', text: 'ثلاثة تصنيفات قانونية' }
]
</script>