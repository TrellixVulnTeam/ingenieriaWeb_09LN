import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../components/Principal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',component: Principal
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
