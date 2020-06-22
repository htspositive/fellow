import Vue from 'vue'
import VueRouter from 'vue-router'
import Web from '../views/Web.vue'
import Home from '../views/Home'
import ArticlePage from '../views/ArticlePage.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import CityDetail from '../views/CityDetail'
import PeopleDetail from '../views/PeopleDetail'
import EventDetail from '../views/EventDetail'

import ArticleManage from '../views/admin/ArticleManage'
import CityManage from '../views/admin/CityManage'
import EventManage from '../views/admin/EventManage'
import PeopleManage from '../views/admin/PeopleManage'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/web/home'
  }, {
    path: '/web',
    name: 'Web',
    redirect: '/web/home',
    component: Web,
    children: [{
      path: '/web/home',
      name: 'Home',
      component: Home
    }, {
      path: '/web/articlePage',
      name: 'ArticlePage',
      component: ArticlePage
    }, {
      path: '/web/articleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    }, {
      path: '/web/cityDetail',
      name: 'CityDetail',
      component: CityDetail
    },{
      path: '/web/peopleDetail',
      name: 'PeopleDetail',
      component: PeopleDetail
    },{
      path: '/web/eventDetail',
      name: 'EventDetail',
      component: EventDetail
    },{
      path: '/web/articleManage',
      name: 'ArticleManage',
      component: ArticleManage
    },{
      path: '/web/cityManage',
      name: 'CityManage',
      component: CityManage
    },{
      path: '/web/eventManage',
      name: 'EventManage',
      component: EventManage
    },{
      path: '/web/peopleManage',
      name: 'PeopleManage',
      component: PeopleManage
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  }, {
    path: '/reg',
    name: 'Reg',
    component: () => import( /* webpackChunkName: "about" */ '../views/Reg.vue')
  }, {
    path: '/userInfo',
    name: 'UserInfo',
    component: () => import( /* webpackChunkName: "about" */ '../views/UserInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router