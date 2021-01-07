import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Tuner",
    component: () => import("../views/Tuner.vue")
  },
  {
    path: "/metronome",
    name: "Metronome",
    component: () => import("../views/Metronome.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
