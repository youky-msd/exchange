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
        token: localStorage.token || '9898962464'
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
        token: localStorage.token || '9898962464'
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
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 登出
  logout() {
    const url = 'api/user/logout'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 上传图片
  uploadPhoto(uploadFile) {
    alert(uploadFile)
    const url = '/api/image/upload'
    return axios.post(url, {
      token: localStorage.token || '9898962464',
      uploadFile
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default User
