<template>
  <section class="section-padding">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div class="text-center lg:text-right order-2 lg:order-1">
          <SectionHeading
            title="نبذة عنا"
            align="center"
            class="lg:text-right"
          />

          <p class="text-base md:text-lg text-ink-light leading-relaxed mt-6 mb-8">
            <strong class="text-ink">مؤسسة رامي شريف للاستشارات القانونية والمحاماة</strong>
            هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، ومقرها المنشية بمحافظة الإسكندرية. يقودها الأستاذ رامي شريف بخبرة قانونية متراكمة تمتد لأكثر من 17 عامًا.
          </p>

          <Button variant="primary" :to="'/about'">
            تعرف علينا أكثر
          </Button>
        </div>

        <div class="order-1 lg:order-2">
          <video
            :src="videoSrc"
            class="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-gold aspect-video object-cover bg-black"
            controls
            preload="metadata"
            playsinline
          >
            <p>متصفحك لا يدعم تشغيل الفيديو.</p>
          </video>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'

const videoSrc = '/assets/images/wp-content/uploads/2026/04/%D9%85%D8%A4%D8%B3%D8%B3%D9%87-%D8%B1%D8%A7%D9%85%D9%8A-%D8%B4%D8%B1%D9%8A%D9%81-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D9%87-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87-720p-h264.mp4'
</script>