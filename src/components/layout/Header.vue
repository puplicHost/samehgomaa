<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-ink shadow-header">
    <div class="container-site">
      <div class="flex items-center justify-between py-3 md:py-4">
        <Logo class="flex-shrink-0" />

        <div class="hidden lg:flex items-center gap-6">
          <DesktopNav :items="menuItems" />
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gold text-white px-5 py-2.5 rounded-lg font-semibold text-sm lg:text-base uppercase hover:bg-gold-light transition-colors animate-heartbeat origin-center"
          >
            حجز استشارة قانونية
          </a>
        </div>

        <div class="hidden md:flex lg:hidden items-center gap-4">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gold text-white px-4 py-2 rounded-lg font-semibold text-sm uppercase hover:bg-gold-light transition-colors inline-flex items-center gap-2"
          >
            <Icon icon="simple-icons:whatsapp" class="w-4 h-4" aria-hidden="true" />
            حجز استشارة
          </a>
          <DesktopNav :items="menuItems" />
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gold text-white px-3 py-2 rounded-lg font-semibold text-xs uppercase hover:bg-gold-light transition-colors"
            aria-label="حجز استشارة عبر واتساب"
          >
            حجز استشارة
          </a>
          <button
            type="button"
            class="p-2 text-white hover:text-gold focus:text-gold transition-colors"
            :aria-label="mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            @click="toggleMobileMenu"
          >
            <svg v-if="!mobileOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <MobileNav
      :items="menuItems"
      :is-open="mobileOpen"
      @close="mobileOpen = false"
    />
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import Logo from '../navigation/Logo.vue'
import DesktopNav from '../navigation/DesktopNav.vue'
import MobileNav from '../navigation/MobileNav.vue'

const route = useRoute()
const mobileOpen = ref(false)

const menuItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]

const whatsappLink = 'https://wa.me/201111904997?text=' + encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  }
)

function onKeydown(e) {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>