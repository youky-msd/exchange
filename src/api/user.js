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
}

export default User
