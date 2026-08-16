import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'الرئيسية | مؤسسة رامي شريف للاستشارات القانونية والمحاماة',
      description: 'مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، ومقرها المنشية بمحافظة الإسكندرية.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
    meta: {
      title: 'من نحن | مؤسسة رامي شريف للاستشارات القانونية والمحاماة',
      description: 'تعرف على مؤسسة رامي شريف للاستشارات القانونية والمحاماة، رؤيتها ورسالتها وقيمها وخبراتها القانونية الممتدة لأكثر من 17 عامًا.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/Services.vue'),
    meta: {
      title: 'الخدمات القانونية | مؤسسة رامي شريف للاستشارات القانونية والمحاماة',
      description: 'نقدم خدمات قانونية متخصصة في القضايا المدنية والأحوال الشخصية والشئون القانونية للشركات، مع التزام بالدقة والسرية وحماية مصالح العملاء.'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../pages/FAQ.vue'),
    meta: {
      title: 'الأسئلة الشائعة | مؤسسة رامي شريف للاستشارات القانونية والمحاماة',
      description: 'إجابات على الأسئلة الشائعة حول القضايا المدنية والأحوال الشخصية والشئون القانونية للشركات في مؤسسة رامي شريف.'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/Contact.vue'),
    meta: {
      title: 'تواصل معنا | مؤسسة رامي شريف للاستشارات القانونية والمحاماة',
      description: 'تواصل مع مؤسسة رامي شريف للاستشارات القانونية والمحاماة عبر الهاتف أو الواتساب أو البريد الإلكتروني. فرع الإسكندرية - المنشية.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'مؤسسة رامي شريف'
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description)
  }
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', window.location.origin + to.path)
  }
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || 'مؤسسة رامي شريف')
  }
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc && to.meta.description) {
    ogDesc.setAttribute('content', to.meta.description)
  }
})

export default router