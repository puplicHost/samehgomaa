import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './icons.js'
import './styles/tailwind.css'
import './styles/fonts.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
