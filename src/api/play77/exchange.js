import axios from './config'

class Exchange {
  // 绑定
  bind(sid, phone, identifyingCode, userAccountId) {
    const url = ''
    return axios.post(url, {
      method: 'bind_wallet',
      sid,
      phone,
      identifyingCode,
      user_account_id: userAccountId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 发送验证码
  sendVerification(phone) {
    const url = ''
    return axios.post(url, {
      method: 'send_sms',
      phone
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Exchange
