import Vue from "vue";
import VueRouter from "vue-router";
import Evaluations from "../views/Evaluations.vue";
import Evaluation from "../views/Evaluation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Evaluations",
    component: Evaluations,
  },
  {
    path: "/evaluation/:id",
    name: "Evaluation",
    component: Evaluation,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
