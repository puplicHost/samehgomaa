<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="تواصل معنا عبر واتساب"
    class="fixed bottom-6 left-6 z-[10001] w-16 h-16 bg-[#25D366] rounded-full shadow-whatsapp flex items-center justify-center text-white hover:bg-[#1ebe5b] transition-colors"
  >
    <Icon icon="simple-icons:whatsapp" class="w-8 h-8" aria-hidden="true" />
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const href = 'https://wa.me/201111904997?text=' +
  encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')
</script>