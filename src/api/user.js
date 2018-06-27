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
    let formdata = new FormData()
    console.log(uploadFile)
    formdata.append('uploadFile', uploadFile)
    formdata.append('token', localStorage.token)
    // console.log(formdata.get())
    const url = '/api/image/upload'
    // console.log(uploadFile)
    return axios({
      url,
      method: 'post',
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default User
