<template>
  <section class="section-padding bg-ink">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center order-1 md:order-2">
          <img
            src="/assets/images/wp-content/uploads/2024/07/cc.webp"
            alt="استشارة قانونية"
            loading="lazy"
            class="w-40 md:w-56 h-auto"
          >
        </div>

        <div class="text-center md:text-right order-2 md:order-1">
          <h2 class="text-3xl md:text-4xl font-bold text-gold leading-tight mb-6">
            أحصـل على<br>استشارتك القانونية
          </h2>

          <p class="text-white/85 text-base md:text-lg leading-relaxed mt-4 mb-8">
            نقدم خدمة حجز الاستشارات القانونية المدفوعة لضمان حصولكم على المشورة القانونية المتخصصة والمناسبة لقضاياكم.
          </p>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-300 animate-heartbeat origin-center"
          >
            حجز استشارة قانونية
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'

const whatsappLink = 'https://wa.me/201111904997?text=' + encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')
</script>