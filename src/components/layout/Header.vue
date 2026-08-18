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
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-4.11 5.18c-.16 0-.3.05-.44.11-.15.07-.34.27-.54.53-.67.71-.77 1.7-.19 2.86.66 1.32 1.81 2.96 3.65 4.34 1.14.86 2.54 1.58 3.3 1.93.62.28 1.85.83 2.14.59.13-.11.2-.25.26-.31.05-.07.12-.2.08-.3-.04-.09-.61-1.52-.75-1.61-.06-.05-.11-.08-.18-.08-.08 0-.13.03-.21.05-.09.04-.48.47-.56.57-.14.16-.26.17-.4.09-.73-.38-1.87-1.23-2.68-2.02-.06-.06-.14-.1-.2-.2-.06-.06-.05-.15 0-.24.05-.08.12-.17.17-.25.08-.08.1-.14.15-.23.05-.1.08-.16.08-.21 0-.05-.05-.15-.15-.28-.3-.41-.87-1.42-.96-1.56-.06-.09-.16-.14-.26-.16-.06 0-.16 0-.25.02m-4.11.18c.28 0 .55.03.71.1.44.2.25.56.14.8-.07.15-.1.27-.1.44 0 .34.13.68.31.98.53.85 1.46 1.81 2.51 2.57 1.02.74 2.06 1.39 2.62 1.61.39.16.62.2.96.27.18.04.57.06.82-.05.31-.14.35-.43.43-.66.08-.24.23-.8.36-1.03.13-.23.28-.27.42-.16.18.09.76.61 1.04.83.18.15.29.39.25.66-.04.34-.11 1.03-.36 1.27-.25.24-.9.38-1.42.37-1.86-.02-3.55-1.08-4.63-2.09-1.21-1.13-2.02-2.5-2.19-3.84-.09-.69.16-1.26.46-1.6.19-.22.44-.39.73-.44.12-.02.25-.05.39-.05z" />
            </svg>
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