import { wrapFunctional } from './utils'

export { default as AppLogo } from '../../components/AppLogo.vue'
export { default as Copylight } from '../../components/Copylight.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Mypage } from '../../components/Mypage.vue'

export const LazyAppLogo = import('../../components/AppLogo.vue' /* webpackChunkName: "components/app-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCopylight = import('../../components/Copylight.vue' /* webpackChunkName: "components/copylight" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const LazyMypage = import('../../components/Mypage.vue' /* webpackChunkName: "components/mypage" */).then(c => wrapFunctional(c.default || c))
