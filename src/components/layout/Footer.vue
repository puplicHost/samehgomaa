<template>
  <footer class="bg-footer text-white" aria-label="تذييل الصفحة">
    <div class="container-site pt-12 md:pt-16 lg:pt-18 pb-8 md:pb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
        <!-- Column 1: معلومات المؤسسة -->
        <div class="sm:col-span-2 lg:col-span-1 text-center md:text-right">
          <RouterLink to="/" class="inline-block" aria-label="مؤسسة رامي شريف - الرئيسية">
            <img
              src="/assets/images/wp-content/uploads/2024/07/rs-logo-300x300.webp"
              alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة"
              loading="lazy"
              class="w-20 h-20 md:w-24 md:h-24 object-contain"
            >
          </RouterLink>

          <h2 class="mt-4 text-xl font-bold text-white leading-tight break-words">
            مؤسسة رامي شريف
          </h2>
          <p class="text-sm text-white/80 leading-relaxed mt-2">
            للاستشارات القانونية والمحاماة
          </p>

          <p class="mt-3 text-sm leading-relaxed text-white/75 break-words">
            مؤسسة رامي شريف متخصصة في تقديم الخدمات القانونية للأفراد والشركات، بقيادة الأستاذ رامي شريف بخبرة تتجاوز 17 عامًا.
          </p>

          <div class="flex justify-center md:justify-start gap-3 mt-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:border-gold hover:text-white hover:shadow-lg hover:shadow-gold/20 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-footer"
              :aria-label="social.label"
              :title="social.label"
            >
            <Icon
              :icon="social.icon"
              class="w-5 h-5 text-current"
              aria-hidden="true"
            />
            </a>
          </div>
        </div>

        <!-- Column 2: روابط سريعة -->
        <div class="text-center md:text-right">
          <FooterHeading title="روابط سريعة" />
          <nav class="mt-5" aria-label="روابط سريعة">
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="block text-white/80 hover:text-gold hover:underline transition-colors text-base leading-relaxed"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Column 3: الخدمات -->
        <div class="text-center md:text-right">
          <FooterHeading title="الخدمات" />
          <nav class="mt-5" aria-label="الخدمات">
            <ul class="space-y-3">
              <li v-for="service in footerServices" :key="service.id">
                <RouterLink
                  :to="'/services'"
                  class="block text-white/80 hover:text-gold hover:underline transition-colors text-base leading-relaxed"
                >
                  {{ service.alt }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Column 4: الفروع -->
        <div class="text-center md:text-right">
          <FooterHeading title="الفروع" />
          <div class="mt-5 space-y-6">
            <div v-for="branch in branches" :key="branch.name">
              <h4 class="font-semibold text-white mb-2 text-base flex items-center justify-center md:justify-start gap-2">
                <MapMarkerIcon class="w-4 h-4 text-gold shrink-0" />
                {{ branch.name }}
              </h4>
              <p class="text-white/75 text-sm leading-relaxed break-words">
                {{ branch.address }}
              </p>
            </div>
          </div>
        </div>

        <!-- Column 5: معلومات التواصل -->
        <div class="text-center md:text-right">
          <FooterHeading title="معلومات التواصل" />
          <div class="mt-5 space-y-6">
            <div>
              <h4 class="font-semibold text-white mb-2 text-base flex items-center justify-center md:justify-start gap-2">
                <EnvelopeIcon class="w-4 h-4 text-gold shrink-0" />
                البريد الإلكتروني
              </h4>
              <a
                href="mailto:Info@Ramisharif.Com"
                class="block text-gold hover:text-white hover:underline transition-colors text-sm break-all"
                dir="ltr"
              >
                Info@Ramisharif.Com
              </a>
              <a
                href="mailto:ramisharif.law@email.com"
                class="block text-gold hover:text-white hover:underline transition-colors text-sm break-all mt-1"
                dir="ltr"
              >
                ramisharif.law@email.com
              </a>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-2 text-base flex items-center justify-center md:justify-start gap-2">
                <PhoneIcon class="w-4 h-4 text-gold shrink-0" />
                أرقام التواصل
              </h4>
              <a href="tel:+201111904997" class="block text-gold hover:text-white hover:underline transition-colors text-sm" dir="ltr">
                01111904997
              </a>
              <a href="tel:+2034863096" class="block text-gold hover:text-white hover:underline transition-colors text-sm mt-1" dir="ltr">
                034863096
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bg-footerbar border-t border-gold/35">
      <div class="container-site py-4 md:py-5">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-center md:text-right text-sm text-white/70">
            © 2026 جميع الحقوق محفوظة لمؤسسة المستشار رامي شريف
          </p>

          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="روابط السياسات">
            <a
              v-for="policy in policies"
              :key="policy.name"
              :href="policy.href"
              rel="noopener noreferrer"
              class="text-sm font-medium text-white/70 hover:text-gold hover:underline transition-colors"
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
import FooterHeading from './FooterHeading.vue'
import { Icon } from '@iconify/vue'
import EnvelopeIcon from '../ui/icons/EnvelopeIcon.vue'
import PhoneIcon from '../ui/icons/PhoneIcon.vue'
import MapMarkerIcon from '../ui/icons/MapMarkerIcon.vue'
import services from '../../data/services.json'

const quickLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]

const footerServices = services.slice(0, 6)

const socialLinks = [
  { name: 'facebook', href: 'https://www.facebook.com/ramisharif.law/', icon: 'simple-icons:facebook', label: 'Facebook' },
  { name: 'instagram', href: 'https://www.instagram.com/ramisharifeg/', icon: 'simple-icons:instagram', label: 'Instagram' },
  { name: 'youtube', href: 'https://www.youtube.com/@ramisharif.law', icon: 'simple-icons:youtube', label: 'YouTube' },
  { name: 'linkedin', href: 'https://www.linkedin.com/company/ramisharifeg', icon: 'simple-icons:linkedin', label: 'LinkedIn' }
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
