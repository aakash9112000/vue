import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import About from "./components/About.vue";
import Login from "./components/Login.vue";
import whishlist from "./components/whishlist.vue";

const routes = [
  {
    name: "landingPage",
    path: "/",
    component: LandingPage,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "whishlist",
    path: "/whishlist",
    component: whishlist,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
