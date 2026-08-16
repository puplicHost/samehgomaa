<template>
  <div class="elementor-element elementor-element-697e4f9 e-flex e-con-boxed e-con e-parent" data-id="697e4f9" data-element_type="container">
    <div class="e-con-inner">
      <div class="elementor-element elementor-element-882ecb2 e-con-full e-flex e-con e-child" data-id="882ecb2" data-element_type="container">
        <div class="elementor-element elementor-element-bc8372b e-con-full e-flex e-con e-child" data-id="bc8372b" data-element_type="container">
          <div class="elementor-element elementor-element-f6c8e9d elementor-widget elementor-widget-heading" data-id="f6c8e9d" data-element_type="widget" data-widget_type="heading.default">
            <div class="elementor-widget-container">
              <h3 class="elementor-heading-title elementor-size-default">الأحوال الشخصية</h3>
            </div>
          </div>
          <FaqAccordion wrapper-id="54472f8" icon-side="left" :items="faqItems" />
        </div>
        <div class="elementor-element elementor-element-506d10e e-con-full elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-child" data-id="506d10e" data-element_type="container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FaqAccordion from './FaqAccordion.vue'
import faqItems from '../../data/faq.json'
</script>