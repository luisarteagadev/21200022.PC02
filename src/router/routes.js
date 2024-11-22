const routes = [
  {
    path: "/",
    component: () => import("components/auth/LoginForm.vue"),
  },
  {
    path: "/movies",
    component: () => import("pages/ProductPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
