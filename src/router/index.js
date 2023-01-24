import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/start",
    name: "start",
    component: Start,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
