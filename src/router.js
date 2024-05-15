import {createRouter, createWebHashHistory} from "vue-router";
import LoginView from "@/components/LoginView.vue";
import RegisterView from "@/components/RegisterView.vue";
import HomeView from "@/components/HomeView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/login', component: LoginView},
        {path: '/', component: RegisterView},
        {path: '/homepage', component: HomeView}
    ]
})