import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hacking from "../views/cyber-crime/Hacking.vue";
import Hoax from "../views/cyber-crime/Hoax.vue";
import Malware from "../views/cyber-crime/Malware.vue";
import Scam from "../views/cyber-crime/Scam.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Ancaman Digital",
    },
  },
  {
    path: "/Hacking",
    name: "Hacking",
    component: Hacking,
    meta: {
      title: "Hacking",
    },
  },
  {
    path: "/Hoax",
    name: "Hoax",
    component: Hoax,
    meta: {
      title: "Hoax",
    },
  },
  {
    path: "/Malware",
    name: "Malware",
    component: Malware,
    meta: {
      title: "Malware",
    },
  },
  {
    path: "/Scam",
    name: "Scam",
    component: Scam,
    meta: {
      title: "Scam",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 Not Found",
    component: PageNotFound,
    meta: {
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementsByClassName("top-section")[0].scrollIntoView();
  },
});

export default router;
