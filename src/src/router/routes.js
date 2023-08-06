const routes = [
  {
    path: "/user",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/user", component: () => import("pages/UsersPage.vue") },
      { path: "/auth", component: () => import("pages/AuthPage.vue") },
      {
        path: "/creategroup",
        component: () => import("pages/CreateGroup.vue"),
      },
      {
        path: "/chat/:otherUserId",
        component: () => import("pages/PageChat.vue"),
      },
      {
        path: "/group/:groupId",
        component: () => import("pages/groupChat.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
