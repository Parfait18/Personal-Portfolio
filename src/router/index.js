import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Meta from "vue-meta";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    mode: "history",
    base: process.env.BASE_URL,
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog/post/:id",
    name: "blogPost",
    component: () => import("../views/BlogPost.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/portfolio",
    name: "webPortfolio",
    component: () => import("../views/Portfolio/Portfolio.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
