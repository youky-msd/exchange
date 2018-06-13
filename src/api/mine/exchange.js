import axios from '../config'
let token = localStorage.token

class Exchange {
  // 提现申请接口
  withdrawApply(amount, charge, channel, cardId) {
    const url = '/api/withdrawcashapply/apply'
    return axios.post(url, {
      token,
      amount,
      charge,
      channel,
      cardId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 地址列表
  getAddressList(type) {
    const url = '/api/bankwallent/list'
    return axios.get(url, {
      params: {
        token,
        type
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 添加地址
  addAddress(type, ddmAddress) {
    const url = '/api/bankwallent/save'
    return axios.post(url, {
      token,
      type,
      ddmAddress
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 删除地址
  deleteAddress(bankCardId) {
    const url = '/api/bankwallent/delete'
    return axios.get(url, {
      params: {
        token,
        bankCardId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Exchange
