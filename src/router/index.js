import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld'
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
    // children:[{
    //   path:'profile',
    //   component:Profile
    // }]
  },
  {
    path: '/others',
    name: 'others',

    component: () => import( '../components/others.vue')
  }
]
const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router