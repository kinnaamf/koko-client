import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import RegisterView from '@/components/RegisterView.vue';
import HomeView from '@/components/HomeView.vue';
import CartView from '@/components/CartView.vue';
import ItemView from '@/components/ItemView.vue';
import AllCategoriesView from '@/components/AllCategoriesView.vue';
import VideoView from '@/components/VideoView.vue';
import AudioView from '@/components/AudioView.vue';
import AmpsView from '@/components/AmpsView.vue';
import PhotoCamerasView from '@/components/PhotoCamerasView.vue';
import HeadphonesView from '@/components/HeadphonesView.vue';
import SpeakersView from '@/components/SpeakersView.vue';
import VideoCamerasView from '@/components/VideoCamerasView.vue';
import About from "@/components/AboutView.vue";
import AboutView from "@/components/AboutView.vue";

const routes = [
    { path: '/login', component: LoginView, name: 'Koko Login' },
    { path: '/register', component: RegisterView, name: 'Koko Register' },
    { path: '/', component: HomeView, name: 'Homepage' },
    { path: '/cart', component: CartView, name: 'Cart' },
    { path: '/amps/item/:id', component: ItemView, props: route => ({ id: route.params.id, category: 'amps' }) },
    { path: '/headphones/item/:id', component: ItemView, props: route => ({ id: route.params.id, category: 'headphones' }) },
    { path: '/speakers/item/:id', component: ItemView, props: route => ({ id: route.params.id, category: 'speakers' }) },
    { path: '/cameras/item/:id', component: ItemView, props: route => ({ id: route.params.id, category: 'cameras' }) },
    { path: '/video/item/:id', component: ItemView, props: route => ({ id: route.params.id, category: 'video' }) },
    { path: '/categories', component: AllCategoriesView, name: 'Koko Categories' },
    { path: '/audio-devices', component: AudioView, name: 'Audio Devices' },
    { path: '/video-devices', component: VideoView, name: 'Video Devices' },
    { path: '/amps', component: AmpsView, name: 'Amps' },
    { path: '/cameras', component: PhotoCamerasView, name: 'Cameras' },
    { path: '/headphones',component: HeadphonesView, name: 'Headphones' },
    { path: '/speakers', component: SpeakersView, name: 'Speakers' },
    { path: '/video', component: VideoCamerasView, name: 'Action Cameras' },
    { path: '/about', component: AboutView, name: 'About' },
];
/*
, redirect: '/en'
, redirect: '/en/cart'
, redirect: '/en/amps/item/:id'
, redirect: '/en/headphones/item/:id'
, redirect: '/en/speakers/item/:id'
, redirect: '/en/cameras/item/:id'
, redirect: '/en/video/item/:id'
, redirect: '/en/categories'
, redirect: '/en/audio-devices'
, component: VideoView
, redirect: '/en/video-devices'
, redirect: '/en/amps'
, redirect: '/en/cameras'
 redirect: '/en/headphones',
, redirect: '/en/speakers'
redirect: '/en/video'
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
