import axios from './config'

class User {
  // 登录
  login(mobile, validCode) {
    const url = '/api/user/login'
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
