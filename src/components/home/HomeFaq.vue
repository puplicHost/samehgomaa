<template>
  <div class="elementor-element elementor-element-54f72cb e-flex e-con-boxed e-con e-parent" data-id="54f72cb" data-element_type="container">
    <div class="e-con-inner">
      <div class="elementor-element elementor-element-7e74cb7 e-con-full e-flex e-con e-child" data-id="7e74cb7" data-element_type="container">
        <div class="elementor-element elementor-element-072e8a5 elementor-widget elementor-widget-heading" data-id="072e8a5" data-element_type="widget" data-widget_type="heading.default">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title elementor-size-default">الأسئلة الشائعة</h2>
          </div>
        </div>
        <div class="elementor-element elementor-element-f7257fd elementor-widget elementor-widget-spacer" data-id="f7257fd" data-element_type="widget" data-widget_type="spacer.default">
          <div class="elementor-widget-container">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
        <FaqAccordion :items="homeFaqItems" wrapper-id="d35f073" />
        <div class="elementor-element elementor-element-82ffd7d elementor-widget elementor-widget-button" data-id="82ffd7d" data-element_type="widget" data-widget_type="button.default">
          <div class="elementor-widget-container">
            <div class="elementor-button-wrapper">
              <RouterLink to="/faq" class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow">
                <span class="elementor-button-content-wrapper">
                  <span class="elementor-button-text">عرض الكل</span>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-element elementor-element-d713285 e-con-full e-flex e-con e-child" data-id="d713285" data-element_type="container">
        <div class="elementor-element elementor-element-bd489c6 elementor-widget elementor-widget-image" data-id="bd489c6" data-element_type="widget" data-widget_type="image.default">
          <div class="elementor-widget-container">
            <img width="768" height="768" src="/assets/images/wp-content/uploads/2024/08/g.webp" class="attachment-full size-full wp-image-5688" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FaqAccordion from '../faq/FaqAccordion.vue'

const homeFaqItems = [
  { id: '2211', title: 'ما هي إجراءات تسجيل العقار في الشهر العقاري؟', content: 'يجب تقديم طلب التسجيل في الشهر العقاري مرفقًا بالوثائق المطلوبة مثل عقد البيع، بطاقة الرقم القومي للبائع والمشتري، وشهادة المخالصة من الضرائب العقارية. بعد تقديم الطلب، يتم فحصه وإجراء المعاينة ثم تسجيل العقار.' },
  { id: '2212', title: 'هل يمكن تعديل عقد الزواج ليشمل شروطاً إضافية؟', content: 'نعم، يمكن تعديل عقد الزواج ليشمل شروطاً إضافية بالاتفاق بين الزوجين، ويتم ذلك من خلال كتابة عقد ملحق يوقع عليه الطرفان ويصدق عليه من الجهات المختصة.' },
  { id: '2213', title: 'ما هي الإجراءات اللازمة للحصول على ترخيص بناء؟', content: 'يتطلب الحصول على ترخيص بناء تقديم طلب إلى الجهة المختصة مرفقاً بالرسومات الهندسية والمستندات المطلوبة مثل شهادة الملكية وتقرير السلامة الإنشائية. بعد ذلك يتم فحص الطلب وإجراء المعاينة ومن ثم إصدار الترخيص.' }
]
</script>