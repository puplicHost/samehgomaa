<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="max-w-3xl mx-auto text-center md:text-right">
        <SectionHeading title="محطات فخرنا وإنجازاتنا" class="mb-8" />

        <p class="text-base md:text-lg text-ink-light leading-relaxed mb-12">
          تتمثل محطات فخر مؤسسة رامي شريف للاستشارات القانونية والمحاماة في مسيرة مهنية تمتد لأكثر من 17 عامًا من الخبرة والعمل القانوني المتواصل. وقد جمعت المؤسسة بين التأهيل العلمي المتخصص والخبرة العملية في قضايا الأحوال الشخصية والمدنية والشئون القانونية للشركات. كما اكتسبت خبرة قوية في إدارة القضايا ومتابعة الإجراءات القضائية وتنفيذ الأحكام. ونواصل تطوير خدماتنا القانونية بما يحقق حماية مصالح العملاء ويعزز ثقتهم في المؤسسة.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            v-for="(image, index) in achievementImages"
            :key="index"
            :src="image"
            alt="إنجاز"
            loading="lazy"
            class="w-full h-48 object-cover rounded-2xl"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const achievementImages = [
  '/assets/images/about-us/about-card-1.webp',
  '/assets/images/about-us/about-card-2.webp',
  '/assets/images/about-us/about-card-3.webp',
  '/assets/images/about-us/about-card-4.webp'
]
</script>