import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clothing-donation",
      name: "kleiderspende",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ClothingDonation.vue"),
    },
    {
      path: "/imprint",
      name: "impressum",
      component: () => import("../views/ImprintView.vue"),
    },
    {
      path: "/data-protection",
      name: "datenschutz",
      component: () => import("../views/DataProtectionView.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/SuccessView.vue"),
    },
  ],
});

export default router;
