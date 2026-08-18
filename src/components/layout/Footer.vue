<template>
  <footer class="bg-footer text-white">
    <div class="container-site py-12 md:py-14 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        <!-- Column 1: Logo + Description + Social -->
        <div class="text-center md:text-right">
          <RouterLink to="/" class="inline-block mb-4" aria-label="مؤسسة رامي شريف - الرئيسية">
            <img
              src="/assets/images/wp-content/uploads/2024/07/rs-logo-300x300.webp"
              alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة"
              loading="lazy"
              class="w-24 h-24 object-contain"
            >
          </RouterLink>

          <p class="text-sm leading-relaxed text-white/80">
            مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، بقيادة الأستاذ رامي شريف بخبرة تمتد لأكثر من 17 عامًا.
          </p>

          <div class="flex justify-center md:justify-start gap-4 mt-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gold hover:text-white transition-all duration-300 hover:-translate-y-1"
              :aria-label="social.label"
              :title="social.label"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path v-if="social.icon === 'facebook'" d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                <path v-else-if="social.icon === 'youtube'" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                <path v-else-if="social.icon === 'instagram'" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                <path v-else-if="social.icon === 'linkedin'" d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM3 8H2V24h5V8H3zm7.982 0H8.028v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Important Links -->
        <div class="text-center md:text-right">
          <h3 class="relative pb-3 text-lg font-semibold text-gold after:absolute after:bottom-0 after:right-1/2 md:after:right-0 after:translate-x-1/2 md:after:translate-x-0 after:h-0.5 after:w-8 after:bg-gold">
            روابط مهمة
          </h3>
          <nav class="mt-4" aria-label="روابط مهمة">
            <ul class="space-y-2">
              <li v-for="link in footerLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-white/80 hover:text-gold transition-colors text-[15px] leading-[1.9]"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Column 3: Branches -->
        <div class="text-center md:text-right">
          <h3 class="relative pb-3 text-lg font-semibold text-gold after:absolute after:bottom-0 after:right-1/2 md:after:right-0 after:translate-x-1/2 md:after:translate-x-0 after:h-0.5 after:w-8 after:bg-gold">
            فروعنا
          </h3>
          <div class="mt-4 space-y-5">
            <div v-for="branch in branches" :key="branch.name">
              <h4 class="font-semibold text-white mb-1.5 text-[15px]">{{ branch.name }}</h4>
              <p class="text-white/80 text-sm leading-[1.8]">
                {{ branch.address }}
              </p>
            </div>
          </div>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="text-center md:text-right">
          <h3 class="relative pb-3 text-lg font-semibold text-gold after:absolute after:bottom-0 after:right-1/2 md:after:right-0 after:translate-x-1/2 md:after:translate-x-0 after:h-0.5 after:w-8 after:bg-gold">
            معلومات التواصل
          </h3>
          <div class="mt-4 space-y-5">
            <div>
              <h4 class="font-semibold text-white mb-1.5 text-[15px]">البريد الإلكتروني</h4>
              <a
                href="mailto:Info@Ramisharif.Com"
                class="block text-gold hover:text-white transition-colors text-sm break-all"
              >
                Info@Ramisharif.Com
              </a>
              <a
                href="mailto:ramisharif.law@email.com"
                class="block text-gold hover:text-white transition-colors text-sm break-all"
              >
                ramisharif.law@email.com
              </a>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-1.5 text-[15px]">أرقام التواصل</h4>
              <a href="tel:+201111904997" class="block text-gold hover:text-white transition-colors text-sm" dir="ltr">
                01111904997
              </a>
              <a href="tel:+2034863096" class="block text-gold hover:text-white transition-colors text-sm" dir="ltr">
                034863096
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bg-footerbar border-t border-gold/35">
      <div class="container-site py-[18px]">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3">
          <p class="text-center md:text-right text-xs text-white/70">
            جميع الحقوق محفوظة لمؤسسة المستشار رامي شريف 2026 © ramisharif.com
          </p>

          <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="روابط السياسات">
            <a
              v-for="policy in policies"
              :key="policy.name"
              :href="policy.href"
              class="text-xs font-bold text-white/70 hover:text-gold transition-colors"
            >
              {{ policy.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]

const socialLinks = [
  { name: 'facebook', href: 'https://www.facebook.com/ramisharif.law/', icon: 'facebook', label: 'Facebook' },
  { name: 'youtube', href: 'https://www.youtube.com/@ramisharif.law', icon: 'youtube', label: 'YouTube' },
  { name: 'instagram', href: 'https://www.instagram.com/ramisharifeg/', icon: 'instagram', label: 'Instagram' },
  { name: 'linkedin', href: 'https://www.linkedin.com/company/ramisharifeg', icon: 'linkedin', label: 'LinkedIn' }
]

const branches = [
  {
    name: 'فرع الإسكندرية',
    address: '١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠'
  },
  {
    name: 'الإسكندرية',
    address: 'شارع الجلاء، أمام مستشفى العقاد، برج أبو بكر الصديق الدور الخامس.'
  }
]

const policies = [
  { name: 'سياسة الخصوصية', href: 'https://ramisharif.com/?page_id=6831' },
  { name: 'سياسة الاسترجاع', href: 'https://ramisharif.com/?page_id=6849' },
  { name: 'الشروط والأحكام', href: 'https://ramisharif.com/?page_id=6851' }
]
</script>