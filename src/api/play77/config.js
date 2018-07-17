import axios from 'axios'
import qs from 'qs'

const play77Axios = axios.create({
  baseURL: 'https://miniapps.play77.cn/ddmApiPrivate/api',
  timeout: 5000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})
// axios 配置

play77Axios.interceptors.request.use((config) => {
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

export default play77Axios
