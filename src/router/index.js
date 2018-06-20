import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/Index/Index'
import Main from 'components/Layout/Main/Main'
import Store from 'page/Store/Store'
import Quotation from 'page/Quotation/Quotation'
// Store
import GoodsDetail from 'page/Store/GoodsDetail/GoodsDetail'
import GoodsBuy from 'page/Store/GoodsBuy/GoodsBuy'
import WantToBuy from 'page/Store/WantToBuy/WantToBuy'
// Mine
import Mine from 'page/Mine/Mine'
import Info from 'page/Mine/Info/Info'
import Collection from 'page/Mine/Collection/Collection'
import MyBuy from 'page/Mine/MyBuy/MyBuy'
import AccountSetting from 'page/Mine/AccountSetting/AccountSetting'
import ModifyNickname from 'page/Mine/AccountSetting/ModifyNickname/ModifyNickname'
import AboutProduct from 'page/Mine/AccountSetting/AboutProduct/AboutProduct'
import SellManage from 'page/Mine/SellManage/SellManage'
import Help from 'page/Mine/Help/Help'
import Question from 'page/Mine/Question/Question'
import SystemSetting from 'page/Mine/SystemSetting/SystemSetting'
import BuyDetail from 'page/Mine/MyBuy/BuyDetail/BuyDetail'
import BuyManage from 'page/Mine/BuyManage/BuyManage'
import MyAccount from 'page/Mine/MyAccount/MyAccount'
import Log from 'page/Mine/MyAccount/Log/Log'
import Charge from 'page/Mine/Charge/Charge'
import Exchange from 'page/Mine/Exchange/Exchange'
import AddAddress from 'page/Mine/Exchange/AddAddress/AddAddress'
import Up from 'page/Mine/SellManage/Up/Up'

// Login
import Login from 'page/Login/Login'
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index',
  component: Main,
  children: [{
    path: '/index',
    component: Index
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/store/:gameId',
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
},
{
  path: '/store/goods-detail/:goodsTypeId',
  component: GoodsDetail
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
  path: '/mine/account-setting/modify-nickname',
  component: ModifyNickname
},
{
  path: '/mine/account-setting/about-product',
  component: AboutProduct
},
{
  path: '/mine/sell-manage',
  component: SellManage
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
},
{
  path: '/mine/buy-manage',
  component: BuyManage
},
{
  path: '/mine/my-buy/buy-detail/:goodsId',
  component: BuyDetail
},
{
  path: '/mine/my-account',
  component: MyAccount
},
{
  path: '/mine/charge',
  component: Charge
},
{
  path: '/mine/exchange',
  component: Exchange
},
{
  path: '/mine/add-address',
  component: AddAddress
},
{
  path: '/mine/log',
  component: Log
},
{
  path: '/mine/up',
  component: Up
},
{
  path: '/login',
  component: Login
},
{
  path: '/store/goods-buy/:goodsId',
  component: GoodsBuy
},
{
  path: '/store/want-to-buy/:goodsTypeId',
  component: WantToBuy
}]

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})
