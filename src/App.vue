<template>
  <div id="main-container">
    <a class="skip-link sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[10002] focus:bg-ink focus:text-gold focus:px-4 focus:py-2 focus:rounded" href="#main">التجاوز إلى المحتوى</a>
    <SiteHeader />
    <main id="main" class="site-main">
      <RouterView />
    </main>
    <SiteFooter />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import SiteHeader from './components/layout/Header.vue'
import SiteFooter from './components/layout/Footer.vue'
import WhatsAppButton from './components/layout/WhatsAppButton.vue'
</script>
