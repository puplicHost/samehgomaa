<template>
  <div
    v-if="wrapperId"
    :class="['elementor-element', 'elementor-element-' + wrapperId, 'elementor-widget', 'elementor-widget-accordion']"
    :data-id="wrapperId"
    data-element_type="widget"
    data-widget_type="accordion.default"
  >
    <div class="elementor-widget-container">
      <AccordionList :items="items" :icon-side="iconSide" />
    </div>
  </div>
  <AccordionList v-else :items="items" :icon-side="iconSide" />
</template>

<script setup>
import AccordionList from './AccordionList.vue'

defineProps({
  items: { type: Array, required: true },
  wrapperId: { type: String, default: '' },
  iconSide: { type: String, default: 'right' }
})
</script>