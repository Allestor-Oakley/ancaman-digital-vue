import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hacking from '../views/cyber-crime/Hacking.vue'
import Hoax from '../views/cyber-crime/Hoax.vue'
import Malware from '../views/cyber-crime/Malware.vue'
import Scam from '../views/cyber-crime/Scam.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
    path : "/Hacking",
    name : "Hacking", 
    component : Hacking,
    meta : {
      title : "Hacking"
    }
  },
  {
    path : "/Hoax",
    name : "Hoax", 
    component : Hoax,
    meta : {
      title : "Hoax"
    }
  },
  {
    path : "/Malware",
    name : "Malware", 
    component : Malware,
    meta : {
      title : "Malware"
    }
  },
  {
    path : "/Scam",
    name : "Scam", 
    component : Scam,
    meta : {
      title : "Scam"
    }
  },
  {
    path: "/:pathMatch(.*)*", 
    name : "404 Not Found",
    component: PageNotFound,
    meta : {
      title :  "404 Not Found"
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
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
