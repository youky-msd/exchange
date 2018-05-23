// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/reset.styl'
import 'common/stylus/common.styl'
import 'vant/lib/vant-css/index.css'
import Trend from 'vuetrend'
import Vant from 'vant'
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Trend)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
