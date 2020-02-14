import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import VueRouter from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;