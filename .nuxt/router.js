import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ead10e98 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _defed0c2 = () => interopDefault(import('..\\pages\\products\\add\\index.vue' /* webpackChunkName: "pages/products/add/index" */))
const _48b4cb5c = () => interopDefault(import('..\\pages\\products\\edit\\_id.vue' /* webpackChunkName: "pages/products/edit/_id" */))
const _260fe4d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/products",
    component: _ead10e98,
    name: "products"
  }, {
    path: "/products/add",
    component: _defed0c2,
    name: "products-add"
  }, {
    path: "/products/edit/:id?",
    component: _48b4cb5c,
    name: "products-edit-id"
  }, {
    path: "/",
    component: _260fe4d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
