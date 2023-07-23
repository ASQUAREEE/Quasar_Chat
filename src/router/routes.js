const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/UsersPage.vue") },
      { path: "/auth", component: () => import("pages/AuthPage.vue") },
      // { path: "/groupChat", component: () => import("pages/groupChat.vue") },
      {
        path: "/chat/:otherUserId",
        component: () => import("pages/PageChat.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
