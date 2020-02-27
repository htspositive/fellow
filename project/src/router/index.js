import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'
import Test1 from '../views/Test1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/detail',
    name:'Detail',
    component:Detail
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/test1',
    component:Test1
  },
  {
    path:'*',
    component:Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
