import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a5f1265e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _19ceef36 = () => interopDefault(import('../pages/commercial.vue' /* webpackChunkName: "pages/commercial" */))
const _64fbf9ee = () => interopDefault(import('../pages/dog-detail.vue' /* webpackChunkName: "pages/dog-detail" */))
const _5e0c7e0a = () => interopDefault(import('../pages/dog-list.vue' /* webpackChunkName: "pages/dog-list" */))
const _31f1213f = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _ac6c78d4 = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _ee9951b4 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _668170d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a5f1265e,
    name: "about"
  }, {
    path: "/commercial",
    component: _19ceef36,
    name: "commercial"
  }, {
    path: "/dog-detail",
    component: _64fbf9ee,
    name: "dog-detail"
  }, {
    path: "/dog-list",
    component: _5e0c7e0a,
    name: "dog-list"
  }, {
    path: "/news",
    component: _31f1213f,
    name: "news"
  }, {
    path: "/sample",
    component: _ac6c78d4,
    name: "sample"
  }, {
    path: "/welcome",
    component: _ee9951b4,
    name: "welcome"
  }, {
    path: "/",
    component: _668170d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
