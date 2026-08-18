<template>
  <section class="section-padding bg-cream">
    <Container>
      <div class="max-w-5xl mx-auto">
        <SectionHeading
          title="أرسل لنا رسالة"
          align="center"
          subtitle="املأ النموذج وسيتم إرسال طلبك مباشرة إلى فريقنا عبر واتساب للرد عليك في أسرع وقت"
          class="mb-12"
        />

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <form
            class="lg:col-span-3 bg-white rounded-2xl p-6 md:p-10 shadow-testimonial border-t-4 border-gold"
            novalidate
            @submit.prevent="onSubmit"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label for="cf-name" class="block text-sm font-semibold text-ink mb-2">
                  الاسم الكامل <span class="text-error" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-name"
                  v-model.trim="form.name"
                  type="text"
                  autocomplete="name"
                  placeholder="اكتب اسمك"
                  class="w-full rounded-xl border-2 px-4 py-3 text-base text-ink placeholder:text-ink-lighter transition-all duration-300 focus:outline-none focus:ring-2"
                  :class="errors.name ? 'border-error focus:ring-error/20 focus:border-error' : 'border-gold/25 focus:border-gold focus:ring-gold/20'"
                >
                <p v-if="errors.name" class="mt-1.5 text-xs font-semibold text-error">{{ errors.name }}</p>
              </div>

              <div>
                <label for="cf-phone" class="block text-sm font-semibold text-ink mb-2">
                  رقم الهاتف <span class="text-error" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-phone"
                  v-model.trim="form.phone"
                  type="tel"
                  inputmode="tel"
                  dir="ltr"
                  autocomplete="tel"
                  placeholder="01xxxxxxxxx"
                  class="w-full rounded-xl border-2 px-4 py-3 text-base text-ink placeholder:text-ink-lighter text-left transition-all duration-300 focus:outline-none focus:ring-2"
                  :class="errors.phone ? 'border-error focus:ring-error/20 focus:border-error' : 'border-gold/25 focus:border-gold focus:ring-gold/20'"
                >
                <p v-if="errors.phone" class="mt-1.5 text-xs font-semibold text-error">{{ errors.phone }}</p>
              </div>
            </div>

            <div class="mt-5">
              <label for="cf-service" class="block text-sm font-semibold text-ink mb-2">
                الخدمة المطلوبة
              </label>
              <select
                id="cf-service"
                v-model="form.service"
                class="w-full rounded-xl border-2 border-gold/25 bg-white px-4 py-3 text-base text-ink transition-all duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 appearance-none"
              >
                <option value="">اختر الخدمة (اختياري)</option>
                <option v-for="service in services" :key="service.id" :value="service.alt">
                  {{ service.alt }}
                </option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>

            <div class="mt-5">
              <label for="cf-message" class="block text-sm font-semibold text-ink mb-2">
                رسالتك <span class="text-error" aria-hidden="true">*</span>
              </label>
              <textarea
                id="cf-message"
                v-model.trim="form.message"
                rows="5"
                placeholder="اكتب تفاصيل استفسارك أو قضيتك..."
                class="w-full rounded-xl border-2 px-4 py-3 text-base text-ink placeholder:text-ink-lighter leading-relaxed transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                :class="errors.message ? 'border-error focus:ring-error/20 focus:border-error' : 'border-gold/25 focus:border-gold focus:ring-gold/20'"
              ></textarea>
              <p v-if="errors.message" class="mt-1.5 text-xs font-semibold text-error">{{ errors.message }}</p>
            </div>

            <div v-if="submitted" class="mt-6 rounded-xl bg-success/10 border border-success/40 px-5 py-4 flex items-start gap-3" role="status">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <p class="text-sm leading-relaxed text-ink">
                تم تجهيز رسالتك وإرسالها إلى واتساب — أرسلها من التطبيق وسنرد عليك في أقرب وقت. شكرًا لتواصلك معنا!
              </p>
            </div>

            <button
              type="submit"
              class="mt-8 inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 w-full md:w-auto"
            >
              <Icon icon="simple-icons:whatsapp" class="w-5 h-5" aria-hidden="true" />
              إرسال عبر واتساب
            </button>
          </form>

          <aside class="lg:col-span-2 bg-ink rounded-2xl p-6 md:p-8 shadow-testimonial sticky top-24">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-6">بيانات التواصل السريع</h2>

            <ul class="space-y-4">
              <li>
                <a
                  href="tel:+201111904997"
                  class="group flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4 hover:border-gold/60 hover:bg-white/10 transition-all duration-300"
                >
                  <span class="flex-shrink-0 w-11 h-11 rounded-xl bg-gold text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <PhoneIcon class="w-5 h-5" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-xs text-white/60 mb-0.5">الهاتف</span>
                    <span class="block text-base font-semibold text-white" dir="ltr">01111904997</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@Ramisharif.Com"
                  class="group flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4 hover:border-gold/60 hover:bg-white/10 transition-all duration-300"
                >
                  <span class="flex-shrink-0 w-11 h-11 rounded-xl bg-gold text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <EnvelopeIcon class="w-5 h-5" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-xs text-white/60 mb-0.5">البريد الإلكتروني</span>
                    <span class="block text-base font-semibold text-white break-all" dir="ltr">Info@Ramisharif.Com</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  :href="whatsappLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4 hover:border-gold/60 hover:bg-white/10 transition-all duration-300"
                >
                  <span class="flex-shrink-0 w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon icon="simple-icons:whatsapp" class="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-xs text-white/60 mb-0.5">واتساب</span>
                    <span class="block text-base font-semibold text-white">تواصل فوري</span>
                  </span>
                </a>
              </li>
              <li>
                <div class="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4">
                  <span class="flex-shrink-0 w-11 h-11 rounded-xl bg-gold text-white flex items-center justify-center">
                    <MapMarkerIcon class="w-5 h-5" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-xs text-white/60 mb-0.5">العنوان الرئيسي</span>
                    <span class="block text-sm text-white/85 leading-relaxed">
                      ١ شارع الصحافه - المنشية - الإسكندرية
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            <div class="mt-8 pt-6 border-t border-white/10">
              <p class="text-sm font-semibold text-white mb-4">تابعنا على</p>
              <div class="flex gap-3">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  :title="social.label"
                  class="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:border-gold hover:text-white hover:shadow-gold/20 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
                >
                  <Icon :icon="social.icon" class="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Container from '../common/Container.vue'
import SectionHeading from '../common/SectionHeading.vue'
import EnvelopeIcon from '../ui/icons/EnvelopeIcon.vue'
import PhoneIcon from '../ui/icons/PhoneIcon.vue'
import MapMarkerIcon from '../ui/icons/MapMarkerIcon.vue'
import services from '../../data/services.json'

const form = reactive({ name: '', phone: '', service: '', message: '' })
const errors = reactive({ name: '', phone: '', message: '' })
const submitted = ref(false)

const whatsappLink = 'https://wa.me/201111904997?text=' +
  encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')

const socials = [
  { name: 'facebook', href: 'https://www.facebook.com/ramisharif.law/', icon: 'simple-icons:facebook', label: 'Facebook' },
  { name: 'instagram', href: 'https://www.instagram.com/ramisharifeg/', icon: 'simple-icons:instagram', label: 'Instagram' },
  { name: 'youtube', href: 'https://www.youtube.com/@ramisharif.law', icon: 'simple-icons:youtube', label: 'YouTube' },
  { name: 'linkedin', href: 'https://www.linkedin.com/company/ramisharifeg', icon: 'simple-icons:linkedin', label: 'LinkedIn' }
]

function validate() {
  errors.name = ''
  errors.phone = ''
  errors.message = ''

  if (!form.name) errors.name = 'يرجى إدخال الاسم'
  if (!form.phone) {
    errors.phone = 'يرجى إدخال رقم الهاتف'
  } else if (!/^[0-9+\s-]{8,15}$/.test(form.phone)) {
    errors.phone = 'يرجى إدخال رقم هاتف صحيح'
  }
  if (!form.message) errors.message = 'يرجى كتابة رسالتك'
  else if (form.message.length < 10) errors.message = 'الرسالة قصيرة جدًا (10 أحرف على الأقل)'

  return !errors.name && !errors.phone && !errors.message
}

function onSubmit() {
  if (!validate()) return
  const text =
    `مرحبًا، أنا ${form.name}.\n` +
    `هاتفي: ${form.phone}\n` +
    (form.service ? `الخدمة المطلوبة: ${form.service}\n` : '') +
    `الرسالة: ${form.message}`
  window.open(`https://wa.me/201111904997?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  submitted.value = true
}
</script>