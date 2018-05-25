import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/Index/Index'
import Store from 'page/Store/Store'
import Quotation from 'page/Quotation/Quotation'
// Mine
import Mine from 'page/Mine/Mine'
import Info from 'page/Mine/Info/Info'
import Collection from 'page/Mine/Collection/Collection'
import MyBuy from 'page/Mine/MyBuy/MyBuy'
import AccountSetting from 'page/Mine/AccountSetting/AccountSetting'
import Exchange from 'page/Mine/Exchange/Exchange'
import Help from 'page/Mine/Help/Help'
import Question from 'page/Mine/Question/Question'
import SystemSetting from 'page/Mine/SystemSetting/SystemSetting'

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
},
{
  path: '/mine/info',
  component: Info
},
{
  path: '/mine/collection',
  component: Collection
},
{
  path: '/mine/my-buy',
  component: MyBuy
},
{
  path: '/mine/account-setting',
  component: AccountSetting
},
{
  path: '/mine/exchange',
  component: Exchange
},
{
  path: '/mine/help',
  component: Help
},
{
  path: '/mine/question',
  component: Question
},
{
  path: '/mine/system-setting',
  component: SystemSetting
}]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})
