import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: Register,
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "todolist",
        component: () => import("@/views/TodoList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
