<template>
  <div class="w-full space-y-3">
    <AccordionItem
      v-for="(item, index) in items"
      :key="item.id || index"
      :item="item"
      :is-open="openIndex === index"
      :icon-side="iconSide"
      @toggle="toggle(index)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccordionItem from './AccordionItem.vue'

const props = defineProps({
  items: { type: Array, required: true },
  iconSide: { type: String, default: 'right' },
  allowMultiple: { type: Boolean, default: false }
})

const openIndex = ref(null)

function toggle(index) {
  if (props.allowMultiple) {
    openIndex.value = openIndex.value === index ? null : index
  } else {
    openIndex.value = openIndex.value === index ? null : index
  }
}
</script>
