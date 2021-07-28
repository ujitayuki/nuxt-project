import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppLogo: () => import('../../components/AppLogo.vue' /* webpackChunkName: "components/app-logo" */).then(c => wrapFunctional(c.default || c)),
  Copylight: () => import('../../components/Copylight.vue' /* webpackChunkName: "components/copylight" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Home: () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Modal: () => import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c)),
  Mypage: () => import('../../components/Mypage.vue' /* webpackChunkName: "components/mypage" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
