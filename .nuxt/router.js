import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a972466 = () => interopDefault(import('../pages/Communities.vue' /* webpackChunkName: "pages/Communities" */))
const _db0ce81a = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _5b64cc70 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _dd98525e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5a972466,
    name: "Communities"
  }, {
    path: "/Dashboard",
    component: _db0ce81a,
    name: "Dashboard"
  }, {
    path: "/Login",
    component: _5b64cc70,
    name: "Login"
  }, {
    path: "/",
    component: _dd98525e,
    name: "index"
  }, {
    path: "/login",
    component: _5b64cc70,
    alias: "/sign-up"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
