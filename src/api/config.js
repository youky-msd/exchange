import axios from 'axios'
import qs from 'qs'
import {
  Toast
} from 'vant'
import Router from '../router'

// axios 配置
axios.defaults.timeout = 5000
// const debug = process.env.NODE_ENV === 'production'

axios.defaults.baseURL = 'http://47.104.254.248:8080'

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
      // token不正确
      if (response.data.code === 11000) {
        localStorage.removeItem('token')
        Router.push('/login')
      } else if (response.data.code === 11001) {
        // token过期
        // 获取新token接口
      } else if (response.data.code !== 0) {
        // 其他情况
        Toast({
          message: response.data.message,
          duration: 1000
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
