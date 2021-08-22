import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld'
import Profile from "../components/Profile";
import Сurrency from "../components/Currency";


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
    component: () => import( '../components/Axios.vue')
  }
]
const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router