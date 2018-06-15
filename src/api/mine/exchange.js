import axios from '../config'

class Exchange {
  // 提现申请接口
  /*
   * amount 提现金额
   * exchangeAmount 兑换金额
   * actualAmount 实际到账金额
   * charge 提现手续费
   * channel 提现渠道类型
   * cardId 银行卡ID / 钱包ID
  */
  withdrawApply({amount, exchangeAmount, actualAmount, charge, channel, cardId}) {
    const url = '/api/withdrawcashapply/apply'
    return axios.post(url, {
      token: localStorage.token || '9898962464',
      amount,
      exchangeAmount,
      actualAmount,
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
        token: localStorage.token || '9898962464',
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
      token: localStorage.token || '9898962464',
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
        token: localStorage.token || '9898962464',
        bankCardId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 手续费(佣金)比例
  getChargeRate(key = 'withdrawal_charge_rate') {
    const url = '/api/sysconf/get-by-key'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464',
        key
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 充值DDM汇率
  getDDMRate(key = 'exchange_rate') {
    const url = '/api/sysconf/get-by-key'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464',
        key
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Exchange
