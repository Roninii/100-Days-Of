import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f2e8f34 = () => interopDefault(import('../pages/Communities.vue' /* webpackChunkName: "pages/Communities" */))
const _d0bfc01a = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _0c43a470 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _8e772a5e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _9f2e8f34,
    name: "Communities"
  }, {
    path: "/Dashboard",
    component: _d0bfc01a,
    name: "Dashboard"
  }, {
    path: "/Login",
    component: _0c43a470,
    name: "Login"
  }, {
    path: "/",
    component: _8e772a5e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
