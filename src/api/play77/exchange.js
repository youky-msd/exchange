import axios from 'api/config'

class Exchange {
  // 绑定
  bind(phone, identifyingCode) {
    const url = '/api/ddm-wallet/DDMBinding'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464',
        phone,
        identifyingCode
      }
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
    }, {
      baseURL: 'https://miniapps.play77.cn/ddmApiPrivate/api'
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Exchange
