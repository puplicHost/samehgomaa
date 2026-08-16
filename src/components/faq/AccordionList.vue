<template>
  <div class="elementor-accordion">
    <div
      v-for="(item, i) in items"
      :key="item.id"
      class="elementor-accordion-item"
    >
      <div
        :id="'elementor-tab-title-' + item.id"
        class="elementor-tab-title"
        :class="{ 'elementor-active': openIndex === i }"
        role="button"
        tabindex="0"
        :aria-controls="'elementor-tab-content-' + item.id"
        :aria-expanded="openIndex === i ? 'true' : 'false'"
        @click="toggle(i)"
        @keydown.enter.prevent="toggle(i)"
        @keydown.space.prevent="toggle(i)"
      >
        <span
          :class="['elementor-accordion-icon', iconSide === 'left' ? 'elementor-accordion-icon-left' : 'elementor-accordion-icon-right']"
          aria-hidden="true"
        >
          <span class="elementor-accordion-icon-closed">
            <svg class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          </span>
          <span class="elementor-accordion-icon-opened">
            <svg class="e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          </span>
        </span>
        <a class="elementor-accordion-title" tabindex="0">{{ item.title }}</a>
      </div>
      <div
        :id="'elementor-tab-content-' + item.id"
        class="elementor-tab-content elementor-clearfix"
        :class="{ 'elementor-active': openIndex === i }"
        role="region"
        :aria-labelledby="'elementor-tab-title-' + item.id"
        :style="openIndex === i ? 'display:block' : 'display:none'"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, required: true },
  iconSide: { type: String, default: 'right' }
})

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>