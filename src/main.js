import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js";
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css'
import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
          'header_shipping' : 'FAST GLOBAL SHIPPING',
        },
        ro: {
            'header_shipping' : 'LIVRARE GLOBALĂ RAPIDĂ'
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')