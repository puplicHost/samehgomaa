<template>
  <div class="elementor-element elementor-element-83516f3 e-flex e-con-boxed e-con e-parent" data-id="83516f3" data-element_type="container">
    <div class="e-con-inner">
      <div class="elementor-element elementor-element-06725df e-con-full e-flex e-con e-child" data-id="06725df" data-element_type="container">
        <div class="elementor-element elementor-element-5e2bbbb elementor-widget elementor-widget-heading" data-id="5e2bbbb" data-element_type="widget" data-widget_type="heading.default">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title elementor-size-default">خدمات المؤسسة</h2>
          </div>
        </div>
        <div class="elementor-element elementor-element-c926872 elementor-widget elementor-widget-spacer" data-id="c926872" data-element_type="widget" data-widget_type="spacer.default">
          <div class="elementor-widget-container">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="elementor-element elementor-element-2c04e97 e-con-full e-flex e-con e-child" data-id="2c04e97" data-element_type="container">
        <div
          v-for="(item, i) in services"
          :key="item.id"
          :class="['elementor-element', 'elementor-element-' + item.id, 'elementor-widget', 'elementor-widget-image']"
          :data-id="item.id"
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div class="elementor-widget-container">
            <img :src="item.src" :alt="item.alt" class="attachment-full size-full" />
            <button
              type="button"
              class="service-lightbox-btn"
              :data-src="item.src"
              :data-alt="item.alt"
              :aria-label="'عرض الصورة كاملة'"
              @click="openLightbox(i)"
            >
              <svg class="service-lightbox-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span class="service-lightbox-label">عرض الصورة كاملة</span>
            </button>
          </div>
        </div>
      </div>
      <div class="elementor-element elementor-element-88aeec6 e-con-full e-flex e-con e-child" data-id="88aeec6" data-element_type="container">
        <div class="elementor-element elementor-element-b5c1b66 elementor-widget elementor-widget-heading" data-id="b5c1b66" data-element_type="widget" data-widget_type="heading.default">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title elementor-size-default"><RouterLink to="/contacts">إحجز إستشارتك القانونية الآن</RouterLink></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ServiceLightbox :items="services" :index="lightboxIndex" @update:index="lightboxIndex = $event" @close="lightboxIndex = -1" />
</template>

<script setup>
import { ref } from 'vue'
import services from '../../data/services.json'
import ServiceLightbox from './ServiceLightbox.vue'

const lightboxIndex = ref(-1)

function openLightbox(i) {
  lightboxIndex.value = i
}
</script>