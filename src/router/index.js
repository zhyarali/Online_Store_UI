import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/contact.vue'
import search from '../views/search.vue'
import product from '../views/product.vue'
import detail_product from '../views/detail_product.vue'
import cart from '../views/yourCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/detail_product',
    name: 'detail_product',
    component: detail_product
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
