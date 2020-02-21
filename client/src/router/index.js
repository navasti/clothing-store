import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FAQ from '../views/FAQ.vue'
import Cart from '../views/Cart.vue'
import ShippingReturns from '../views/ShippingReturns.vue';
import TermsCondition from '../views/TermsCondition.vue';
import CreateAccount from '../views/CreateAccount.vue';
import Login from '../views/Login.vue';
import Sales from '../views/Sales.vue';
import Cloths from '../views/Cloths.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/shipping-returns',
    name: 'ShippingReturns',
    component: ShippingReturns,
  },
  {
    path: '/terms-condition',
    name: 'TermsCondition',
    component: TermsCondition,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/cloths',
    name: 'Cloths',
    component: Cloths,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router