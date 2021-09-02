import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HelloWorld from '../components/ProfileList/ProfileList'
import Profile from "../components/ProfileList/Profile";
import Сurrency from "../components/Currency/Currency";
import FileUploader from "../components/FileUploader/FileUploader"

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    name: 'ProfileWorld',
    path: '/users/:id',
    component: Profile,
    props: true,
  },
  {
    name: 'CentralBank',
    path: '/currency',
    component: Сurrency,
  },
  {
    path: '/others',
    name: 'others',
    component: () => import( '../components/QuoteOfTheDay/QuoteOfTheDay.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import( '../components/NotFound.vue')
  },
  {
    name: 'FileUploader',
    path: '/file-info',
    component: FileUploader,
  },
  {
    name:'wiki-info',
    path: '/wiki/:id',
    beforeEnter() {location.href = 'https://en.wikipedia.org/wiki/' },
    props: true,
  }
]
const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
  data(){

  },
})
export default router