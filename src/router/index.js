/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * @for meta
 * @param title 
 * @param icon 
 * @param name 
 */

const constantRouter = [
  // 
  {
    path: "/",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "5,5" },
    children: [
      {
        path: "/",
        name: "ido",
        component: () => import("@/views/ido/Index"),
        meta: { title: "index" },
      },


      {
        path: "/ido",
        name: "ido",
        component: () => import("@/views/ido/Index"),
        meta: { title: "ido" },
      },

    ],
  },
  {
    path: "*",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "5,5" },
    children: [
      {
        path: "*",
        name: "tab1",
        component: () => import("@/views/ido/Index"),
        meta: { title: "5,5 " },
      },
    ],
  },

  // 404
  // {
  //   path: '*',
  //   name: 'nopage',
  //   component: () => import(/* webpackChunkName: "nopage" */ '@/views/error-page/404.vue'),
  //   meta: { title: '404 - stable' },
  // },
];

export default new Router({
  base: "/",
  mode: "hash",
  routes: constantRouter,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
