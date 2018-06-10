import axios from './config'

class User {
  // 登录
  login(mobile, validCode) {
    const url = '/api/user/login'
    return axios.post(url, {
      mobile,
      validCode
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 发送验证码
  sendVerification(mobile, validCode) {
    const url = '/api/sms/send-sms-code'
    return axios.get(url, {
      params: {
        mobile,
        validCode
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 更新token
  updateToken() {
    const url = '/api/token/retrieve-token'
    return axios.get(url, {
      params: {
        token: localStorage.token || ''
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 获取用户信息
  getUserInfo() {
    const url = '/api/user/info'
    return axios.get(url, {
      params: {
        token: localStorage.token || ''
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 获取余额
  getBalanceLock() {
    const url = '/api/financeaccount/balance-lock'
    return axios.get(url, {
      params: {
        token: localStorage.token || ''
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default User
