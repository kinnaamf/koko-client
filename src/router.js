import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '@/components/LoginView.vue';
import RegisterView from '@/components/RegisterView.vue';
import HomeView from '@/components/HomeView.vue';
import CartView from '@/components/CartView.vue';
import ItemView from "@/components/ItemView.vue";
import AllCategoriesView from "@/components/AllCategoriesView.vue";
import VideoView from "@/components/VideoView.vue";
import AudioView from "@/components/AudioView.vue";
import AmpsView from "@/components/AmpsView.vue";
import VideoCamerasView from "@/components/VideoCamerasView.vue";
import PhotoCamerasVies from "@/components/PhotoCamerasVies.vue";
import HeadphonesView from "@/components/HeadphonesView.vue";
import SpeakersView from "@/components/SpeakersView.vue";

const routes = [
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/homepage', component: HomeView },
    { path: '/cart', component: CartView },
    { path: `/amps/item/:id` ,component: ItemView, props: true},
    { path: `/headphones/item/:id` ,component: ItemView, props: true},
    { path: `/speakers/item/:id` ,component: ItemView, props: true},
    { path: `/cameras/item/:id` ,component: ItemView, props: true},
    { path: `/video/item/:id` ,component: ItemView, props: true},
    { path: '/categories', component: AllCategoriesView},
    { path: '/audio-devices', component: AudioView },
    { path: '/video-devices', component: VideoView},
    { path: '/amps', component: AmpsView},
    { path: '/video ', component: VideoCamerasView},
    { path: '/cameras', component: PhotoCamerasVies},
    { path: '/headphones', component: HeadphonesView},
    { path: '/speakers', component: SpeakersView }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
