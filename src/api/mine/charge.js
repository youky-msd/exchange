import axios from '../config'

class Charge {
  // 充值
  charge(amount, channel) {
    const url = '/api/payment/do-pay'
    return axios.post(url, {
      token: localStorage.token || '9898962464',
      amount,
      channel
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 充值记录
  chargeLog() {
    const url = '/api/exchange/exg-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 兑换记录
  withdrawLog() {
    const url = '/api/withdrawcashapply/record-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464',
        type: 2
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Charge
