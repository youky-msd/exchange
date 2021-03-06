// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/reset.styl'
import 'common/stylus/common.styl'
import 'vant/lib/vant-css/index.css'
import Trend from 'vuetrend'
import fastclick from 'fastclick'
import Vant from 'vant'
import VueLazyload from 'vue-lazyload'
import store from './store'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Trend)
Vue.use(VueLazyload, {
  loading: require('common/img/lazy.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
