import Vue from 'vue'
import VueRouter from 'vue-router'
import Music from './../views/Music'
import Kobe from './../views/Kobe'
import Movies from './../views/Movies'
import Harden from './../views/Harden'
import MoviesDetail from './../views/MoviesDetail'
import MusicDetail from '../views/MusicDetail'

Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   name:'Home',
 },
 {
   path:'/Music',
   component:Music
 },
 {
  path:'/Kobe',
  component:Kobe
},
{
  path:'/Movies',
  component:Movies
},
{
  path:'/harden',
  component:Harden
},
{
  path:'/MoviesDetail',
  name:'MoviesDetail',
  component:MoviesDetail
},
{
  path:'/MusicDetail',
  component:MusicDetail
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
