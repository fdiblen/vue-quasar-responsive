import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/step/1',
    name: 'step1',
    component: () => import(/* webpackChunkName: "step" */ '../views/Step1.vue')
  },
  {
    path: '/step/2',
    name: 'step2',
    component: () => import(/* webpackChunkName: "step" */ '../views/Step2.vue')
  },
  {
    path: '/step/3',
    name: 'step3',
    component: () => import(/* webpackChunkName: "step" */ '../views/Step3.vue')
  },
  {
    path: '/step/4',
    name: 'step4',
    component: () => import(/* webpackChunkName: "step" */ '../views/Step4.vue')
  },
  // {
  //   path: '/step/:id(\\d+)+',
  //   name: 'step',
  //   component: () => import(/* webpackChunkName: "step" */ '../views/StepView.vue'),
  //   meta: {
  //     step: true
  //   }
  // }
  // {
  //   path: '/print',
  //   name: 'printpdf',
  //   component: () => import(/* webpackChunkName: "step" */ '../views/PrintPdf.vue')
  // }
  {
    path: '/preview',
    name: 'previewpdf',
    component: () => import(/* webpackChunkName: "step" */ '../views/PreviewPdf.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  // console.log('(router) from.matched:\n', from.matched)
  // console.log('(router) to.matched:\n', to.matched)
  // console.log('(router) to.params:\n', to.params)

  if (to.meta.step) {
    console.log('to.meta.step', to.meta.step)
    console.log('from', from)
    return {
      // path: '/login',
      // // save the location we were at to come back later
      // query: { redirect: to.fullPath }

      // path: `/step/${to.params.id}`
      path: to.fullPath
    }
  }
})

export default router
