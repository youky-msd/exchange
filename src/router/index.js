import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/Index/Index'
import Store from 'page/Store/Store'
import Quotation from 'page/Quotation/Quotation'
import Mine from 'page/Mine/Mine'
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index',
  component: Index
},
{
  path: '/index',
  component: Index
},
{
  path: '/store',
  component: Store
},
{
  path: '/quotation',
  component: Quotation
},
{
  path: '/mine',
  component: Mine
}]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})
