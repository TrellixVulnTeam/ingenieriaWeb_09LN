import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '@/components/Principal.vue'
import Productos from '@/components/Productos.vue'
import Detalle from '@/components/Detalle.vue'

Vue.use(VueRouter)


const routes = [
  {path: '/', component: Principal},
  {path: '/productos',component: Productos},
  {path:'/detalle/:id', component: Detalle}
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
