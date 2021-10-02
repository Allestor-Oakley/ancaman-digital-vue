import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hacking from '../views/cyber-crime/Hacking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      title : "Ancaman Digital"
    }
  },
  {
    path : "/Hack",
    name : "Hack", 
    component : Hacking,
    meta : {
      title : "Hacking"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    if (document.getElementById("home")){ 
      document.getElementById("home").scrollIntoView() 
    }
    else {
      document.getElementById("title").scrollIntoView()
    }
  }
})

export default router
