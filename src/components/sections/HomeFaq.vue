<template>
  <section class="section-padding">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div class="order-2 lg:order-1">
          <SectionHeading title="الأسئلة الشائعة" class="mb-8" />

          <Accordion :items="faqItems" icon-side="left" class="mb-8" />

          <div class="text-center lg:text-right">
            <Button variant="primary" :to="'/faq'">
              عرض الكل
            </Button>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center pt-4">
          <img
            src="/assets/images/wp-content/uploads/2024/08/g.webp"
            alt=""
            loading="lazy"
            class="w-40 md:w-56 h-auto rounded-2xl shadow-testimonial"
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import Button from '../common/Button.vue'
import Accordion from '../ui/Accordion.vue'

const faqItems = [
  {
    id: 'home-faq-1',
    title: 'ما هي إجراءات تسجيل العقار في الشهر العقاري؟',
    content: 'يجب تقديم طلب التسجيل في الشهر العقاري مرفقًا بالوثائق المطلوبة مثل عقد البيع، بطاقة الرقم القومي للبائع والمشتري، وشهادة المخالصة من الضرائب العقارية. بعد تقديم الطلب، يتم فحصه وإجراء المعاينة ثم تسجيل العقار.'
  },
  {
    id: 'home-faq-2',
    title: 'هل يمكن تعديل عقد الزواج ليشمل شروطاً إضافية؟',
    content: 'نعم، يمكن تعديل عقد الزواج ليشمل شروطاً إضافية بالاتفاق بين الزوجين، ويتم ذلك من خلال كتابة عقد ملحق يوقع عليه الطرفان ويصدق عليه من الجهات المختصة.'
  },
  {
    id: 'home-faq-3',
    title: 'ما هي الإجراءات اللازمة للحصول على ترخيص بناء؟',
    content: 'يتطلب الحصول على ترخيص بناء تقديم طلب إلى الجهة المختصة مرفقاً بالرسومات الهندسية والمستندات المطلوبة مثل شهادة الملكية وتقرير السلامة الإنشائية. بعد ذلك يتم فحص الطلب وإجراء المعاينة ومن ثم إصدار الترخيص.'
  }
]
</script>