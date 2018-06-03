import axios from 'axios'
import qs from 'qs'
import {
  Toast
} from 'vant'
import Router from '../router'

// axios 配置
axios.defaults.timeout = 5000
const debug = process.env.NODE_ENV === 'production'
// 本地 http://192.168.1.222/zcmu/public
// 线上 http://47.104.170.242:15001/zcmu/public/

axios.defaults.baseURL = debug ? 'http://47.104.170.242:15001/zcmu/public' : 'http://47.104.170.242:15001/zcmu/public'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
  // POST传参序列化
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // PUT传参序列化
  if (config.method === 'put') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  alert('errror params')
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    /*
      token config
    */
    // status === 200
    if (response.status === 200) {
      // 没有权限
      if (response.data.code === 401) {
        Toast({
          message: response.data.message,
          duration: 1500
        })
      } else if (response.data.code === 402) {
        // 登录失效
        Toast.clear()
        localStorage.removeItem('token')
        Router.push('/login')
      } else if (response.data.code !== 200) {
        // 其他情况
        Toast({
          message: response.data.message,
          duration: 1500
        })
      } else {
        return response
      }
    }
    return response
  },
  error => {
    return Promise.reject(error.response)
  })

export default axios
