import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48804d49 = () => interopDefault(import('../pages/Communities.vue' /* webpackChunkName: "pages/Communities" */))
const _e6182e2a = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _4bda25f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Communities",
    component: _48804d49,
    name: "Communities"
  }, {
    path: "/Login",
    component: _e6182e2a,
    name: "Login"
  }, {
    path: "/",
    component: _4bda25f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
