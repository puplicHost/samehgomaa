<template>
  <div id="main-container">
    <a class="skip-link screen-reader-text" href="#main">التجاوز إلى المحتوى</a>
    <SiteHeader />
    <main id="main" class="site-main hfeed">
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