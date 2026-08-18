<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="max-w-4xl mx-auto">
        <SectionHeading title="مسيرتنا المهنية" class="mb-12" />

        <div class="relative">
          <div
            aria-hidden="true"
            class="absolute top-0 bottom-0 right-[13px] w-0.5 bg-gold/25"
          ></div>

          <ol class="space-y-8">
            <li v-for="(milestone, index) in milestones" :key="index" class="relative pr-9">
              <span
                class="absolute right-0 top-6 w-[26px] h-[26px] rounded-full bg-gold flex items-center justify-center z-10 shadow-gold"
              >
                <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>

              <div class="bg-white rounded-2xl p-6 md:p-8 shadow-testimonial border-r-3 border-gold/30 hover:border-gold/70 hover:shadow-gold transition-all duration-300">
                <h3 class="text-xl md:text-2xl font-semibold text-ink mb-3 flex items-center gap-2">
                  <span class="text-sm font-bold text-gold" aria-hidden="true">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  {{ milestone.title }}
                </h3>
                <p class="text-base md:text-lg text-ink-light leading-relaxed">
                  {{ milestone.text }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'

const milestones = [
  {
    title: 'تأسيس المؤسسة',
    text: 'تأسست مؤسسة رامي شريف للاستشارات القانونية والمحاماة لتقديم خدمات قانونية متكاملة للأفراد والشركات، وفقًا لأعلى معايير المهنية والالتزام، وبما يضمن حماية حقوق العملاء ومصالحهم القانونية.'
  },
  {
    title: 'القيادة والخبرة',
    text: 'يقود المؤسسة الأستاذ رامي شريف، المحامي، بخبرة قانونية متراكمة تمتد لأكثر من 17 عامًا في مختلف مجالات العمل القانوني، مدعومة بخلفية علمية متخصصة تشمل ليسانس الحقوق من جامعة الإسكندرية، ودبلوم القانون العام، ودبلوم العلوم الجنائية، وماجستير القانون الجنائي، وماجستير القانون التجاري.'
  },
  {
    title: 'الخبرة العملية',
    text: 'على مدار سنوات العمل والخبرة، نجحت المؤسسة في بناء خبرة عملية قوية في إدارة القضايا، وتقديم الاستشارات القانونية، ومتابعة إجراءات التقاضي، وتنفيذ الأحكام، إلى جانب تقديم الدعم القانوني المتكامل للشركات والأفراد.'
  },
  {
    title: 'مجالات التخصص',
    text: 'تتخصص المؤسسة في قضايا الأحوال الشخصية والقضايا المدنية، بالإضافة إلى الشئون القانونية للشركات، مع الحرص على دراسة كل حالة بدقة ووضع استراتيجية قانونية واضحة تتناسب مع طبيعة القضية واحتياجات العميل.'
  },
  {
    title: 'منهج العمل القانوني',
    text: 'نؤمن بأن العمل القانوني الناجح لا يعتمد فقط على المعرفة القانونية، بل يقوم أيضًا على الخبرة العملية، والمتابعة الدقيقة، والقدرة على التعامل الفعّال مع مختلف الإجراءات والجهات القضائية.'
  },
  {
    title: 'الثقة والشفافية',
    text: 'نحرص على بناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والشفافية والاحترافية، مع الالتزام الكامل بالسرية وحماية المصالح القانونية في جميع مراحل العمل.'
  }
]
</script>