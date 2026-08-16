<template>
  <header
    :class="headerClass"
    data-elementor-post-type="elementor_library"
    data-elementor-type="header"
  >
    <!-- Desktop + Mobile bar -->
    <div
      v-if="isHome"
      class="elementor-element elementor-element-b7ad0c4 elementor-hidden-tablet e-flex e-con-boxed e-con e-parent"
      data-id="b7ad0c4"
      data-element_type="container"
      data-e-type="container"
    >
      <div class="e-con-inner">
        <div class="elementor-element elementor-element-484227b e-con-full e-flex e-con e-child" data-id="484227b" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-1a3c3e3 elementor-widget elementor-widget-image" data-id="1a3c3e3" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <a href="/">
                <img width="512" height="512" src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp" class="header-logo attachment-full size-full wp-image-4749" alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة" />
              </a>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-803112f e-con-full e-flex e-con e-child" data-id="803112f" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-be584cc elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="be584cc" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
            <div class="elementor-widget-container">
              <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                <ul id="menu-1-be584cc" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
              <div
                class="elementor-menu-toggle"
                role="button"
                tabindex="0"
                aria-label="Menu Toggle"
                :aria-expanded="mobileOpen ? 'true' : 'false'"
                :class="{ 'elementor-active': mobileOpen }"
                @click="toggleMobileMenu"
                @keydown.enter.prevent="toggleMobileMenu"
                @keydown.space.prevent="toggleMobileMenu"
              >
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>
              </div>
              <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" :class="{ 'elementor-active': mobileOpen }">
                <ul id="menu-2-be584cc" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-0640219 e-con-full e-flex e-con e-child" data-id="0640219" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-0b5f466 elementor-align-justify elementor-widget elementor-widget-button" data-id="0b5f466" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-text">حجز استشارة قانونية</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tablet-only bar -->
    <div
      v-if="isHome"
      class="elementor-element elementor-element-ac4d29f elementor-hidden-desktop elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
      data-id="ac4d29f"
      data-element_type="container"
      data-e-type="container"
    >
      <div class="e-con-inner">
        <div class="elementor-element elementor-element-900588e e-con-full e-flex e-con e-child" data-id="900588e" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-7742a49 elementor-widget elementor-widget-image" data-id="7742a49" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <a href="/">
                <img width="512" height="512" src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp" class="header-logo attachment-full size-full wp-image-4749" alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة" />
              </a>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-8e8c2ad e-con-full e-flex e-con e-child" data-id="8e8c2ad" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-d1401c1 elementor-align-justify elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="d1401c1" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                    </span>
                    <span class="elementor-button-text">حجز استشارة قانونية</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-aea456a e-con-full e-flex e-con e-child" data-id="aea456a" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-72a9b91 elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="72a9b91" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
            <div class="elementor-widget-container">
              <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                <ul id="menu-1-72a9b91" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
              <div
                class="elementor-menu-toggle"
                role="button"
                tabindex="0"
                aria-label="Menu Toggle"
                :aria-expanded="mobileOpen ? 'true' : 'false'"
                :class="{ 'elementor-active': mobileOpen }"
                @click="toggleMobileMenu"
                @keydown.enter.prevent="toggleMobileMenu"
                @keydown.space.prevent="toggleMobileMenu"
              >
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>
              </div>
              <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" :class="{ 'elementor-active': mobileOpen }">
                <ul id="menu-2-72a9b91" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subpages: Desktop + Mobile bar -->
    <div
      v-if="!isHome"
      class="elementor-element elementor-element-7f10eef elementor-hidden-tablet e-flex e-con-boxed e-con e-parent"
      data-id="7f10eef"
      data-element_type="container"
      data-e-type="container"
    >
      <div class="e-con-inner">
        <div class="elementor-element elementor-element-fb3d7a9 e-con-full e-flex e-con e-child" data-id="fb3d7a9" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-98459e3 elementor-widget elementor-widget-image" data-id="98459e3" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <a href="/">
                <img width="512" height="512" src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp" class="header-logo attachment-full size-full wp-image-4749" alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة" />
              </a>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-e080ed0 e-con-full e-flex e-con e-child" data-id="e080ed0" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-8cfd3be elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="8cfd3be" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
            <div class="elementor-widget-container">
              <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                <ul id="menu-1-8cfd3be" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
              <div
                class="elementor-menu-toggle"
                role="button"
                tabindex="0"
                aria-label="Menu Toggle"
                :aria-expanded="mobileOpen ? 'true' : 'false'"
                :class="{ 'elementor-active': mobileOpen }"
                @click="toggleMobileMenu"
                @keydown.enter.prevent="toggleMobileMenu"
                @keydown.space.prevent="toggleMobileMenu"
              >
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>
              </div>
              <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" :class="{ 'elementor-active': mobileOpen }">
                <ul id="menu-2-8cfd3be" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-b87a77a e-con-full e-flex e-con e-child" data-id="b87a77a" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-0a60b07 elementor-align-justify elementor-widget elementor-widget-button" data-id="0a60b07" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-text">حجز استشارة قانونية</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subpages: Tablet-only bar -->
    <div
      v-if="!isHome"
      class="elementor-element elementor-element-78254cd elementor-hidden-desktop elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
      data-id="78254cd"
      data-element_type="container"
      data-e-type="container"
    >
      <div class="e-con-inner">
        <div class="elementor-element elementor-element-fc1ef13 e-con-full e-flex e-con e-child" data-id="fc1ef13" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-88996a1 elementor-widget elementor-widget-image" data-id="88996a1" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <a href="/">
                <img width="512" height="512" src="/assets/images/wp-content/uploads/2024/07/rs-logo.webp" class="header-logo attachment-full size-full wp-image-4749" alt="مؤسسة رامي شريف للاستشارات القانونية والمحاماة" />
              </a>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-dc778b5 e-con-full e-flex e-con e-child" data-id="dc778b5" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-9a14879 elementor-align-justify elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="9a14879" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
            <div class="elementor-widget-container">
              <div class="elementor-button-wrapper">
                <a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
                  <span class="elementor-button-content-wrapper">
                    <span class="elementor-button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                    </span>
                    <span class="elementor-button-text">حجز استشارة قانونية</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="elementor-element elementor-element-f7e2af6 e-con-full e-flex e-con e-child" data-id="f7e2af6" data-element_type="container" data-e-type="container">
          <div class="elementor-element elementor-element-915589f elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="915589f" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
            <div class="elementor-widget-container">
              <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                <ul id="menu-1-915589f" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
              <div
                class="elementor-menu-toggle"
                role="button"
                tabindex="0"
                aria-label="Menu Toggle"
                :aria-expanded="mobileOpen ? 'true' : 'false'"
                :class="{ 'elementor-active': mobileOpen }"
                @click="toggleMobileMenu"
                @keydown.enter.prevent="toggleMobileMenu"
                @keydown.space.prevent="toggleMobileMenu"
              >
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>
                <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>
              </div>
              <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" :class="{ 'elementor-active': mobileOpen }">
                <ul id="menu-2-915589f" class="elementor-nav-menu">
                  <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <RouterLink :to="item.to" class="elementor-item" :class="{ 'elementor-item-active': isActive(item.to) }" :aria-current="isActive(item.to) ? 'page' : null">{{ item.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

const isHome = computed(() => route.path === '/')

const menuItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contacts', label: 'تواصل معنا' }
]

const whatsappLink = 'https://wa.me/201111904997?text=' + encodeURIComponent('مرحبًا، أرغب في حجز استشارة. هل يمكن معرفة المواعيد المتاحة؟')

const headerClass = computed(() => {
  const headerId = isHome.value ? '5808' : '5819'
  return `elementor elementor-${headerId} elementor-location-header`
})

function isActive(to) {
  return route.path === to
}

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