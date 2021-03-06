import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a5f1265e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _19ceef36 = () => interopDefault(import('../pages/commercial.vue' /* webpackChunkName: "pages/commercial" */))
const _64fbf9ee = () => interopDefault(import('../pages/dog-detail.vue' /* webpackChunkName: "pages/dog-detail" */))
const _5e0c7e0a = () => interopDefault(import('../pages/dog-list.vue' /* webpackChunkName: "pages/dog-list" */))
const _9413ecf0 = () => interopDefault(import('../pages/favorite.vue' /* webpackChunkName: "pages/favorite" */))
const _4ab9d3f0 = () => interopDefault(import('../pages/new-dog-list.vue' /* webpackChunkName: "pages/new-dog-list" */))
const _31f1213f = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _de8c89e8 = () => interopDefault(import('../pages/popular-dog.vue' /* webpackChunkName: "pages/popular-dog" */))
const _5f867af7 = () => interopDefault(import('../pages/protection-group.vue' /* webpackChunkName: "pages/protection-group" */))
const _a32806b0 = () => interopDefault(import('../pages/sponser.vue' /* webpackChunkName: "pages/sponser" */))
const _ee9951b4 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _5efe5424 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _46b599f3 = () => interopDefault(import('../pages/chat/chat.vue' /* webpackChunkName: "pages/chat/chat" */))
const _4cc14878 = () => interopDefault(import('../pages/my_page/dog_setting.vue' /* webpackChunkName: "pages/my_page/dog_setting" */))
const _60e35e96 = () => interopDefault(import('../pages/my_page/home_list.vue' /* webpackChunkName: "pages/my_page/home_list" */))
const _243231b6 = () => interopDefault(import('../pages/my_page/mypage_setting.vue' /* webpackChunkName: "pages/my_page/mypage_setting" */))
const _4274757e = () => interopDefault(import('../pages/payment/payment.vue' /* webpackChunkName: "pages/payment/payment" */))
const _7a47dd3f = () => interopDefault(import('../pages/payment/payment_detail.vue' /* webpackChunkName: "pages/payment/payment_detail" */))
const _314004c0 = () => interopDefault(import('../pages/sample/like.vue' /* webpackChunkName: "pages/sample/like" */))
const _285f93a8 = () => interopDefault(import('../pages/sample/register.vue' /* webpackChunkName: "pages/sample/register" */))
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
    path: "/favorite",
    component: _9413ecf0,
    name: "favorite"
  }, {
    path: "/new-dog-list",
    component: _4ab9d3f0,
    name: "new-dog-list"
  }, {
    path: "/news",
    component: _31f1213f,
    name: "news"
  }, {
    path: "/popular-dog",
    component: _de8c89e8,
    name: "popular-dog"
  }, {
    path: "/protection-group",
    component: _5f867af7,
    name: "protection-group"
  }, {
    path: "/sponser",
    component: _a32806b0,
    name: "sponser"
  }, {
    path: "/welcome",
    component: _ee9951b4,
    name: "welcome"
  }, {
    path: "/auth/register",
    component: _5efe5424,
    name: "auth-register"
  }, {
    path: "/chat/chat",
    component: _46b599f3,
    name: "chat-chat"
  }, {
    path: "/my_page/dog_setting",
    component: _4cc14878,
    name: "my_page-dog_setting"
  }, {
    path: "/my_page/home_list",
    component: _60e35e96,
    name: "my_page-home_list"
  }, {
    path: "/my_page/mypage_setting",
    component: _243231b6,
    name: "my_page-mypage_setting"
  }, {
    path: "/payment/payment",
    component: _4274757e,
    name: "payment-payment"
  }, {
    path: "/payment/payment_detail",
    component: _7a47dd3f,
    name: "payment-payment_detail"
  }, {
    path: "/sample/like",
    component: _314004c0,
    name: "sample-like"
  }, {
    path: "/sample/register",
    component: _285f93a8,
    name: "sample-register"
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
