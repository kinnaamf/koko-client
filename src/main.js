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
            'header_stores' : 'OUR STORES',
            'header_categories' : 'ALL CATEGORIES',
            'header_audio' : 'AUDIO DEVICES',
            'header_video' : 'VIDEO DEVICES',
            'header_about' : 'ABOUT US',
            'header_contact' : 'CONTACT US',
            'header_faq' : 'FAQ',

            'homepage_ambassadors' : 'MEET OUR KOKO AMBASSADORS',
        },
        ro: {
            'header_shipping' : 'LIVRARE GLOBALĂ RAPIDĂ',
            'header_stores' : 'MAGAZINELE NOASTRE',
            'header_categories' : 'TOATE CATEGORIILE',
            'header_audio' : 'DISPOZITIVE AUDIO',
            'header_video' : 'DISPOZITIVE VIDEO',
            'header_about' : 'DESPRE NOI',
            'header_contact' : 'CONTACTAŢI-NE',
            'header_faq' : 'FAQ',

            'homepage_ambassadors' : 'CUNOAȘTE-TE CU AMBASADORII KOKO',
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')