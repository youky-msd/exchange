import axios from '../config'
let token = localStorage.token

class MyAccount {
  // 账单明细详情列表
  getAccountDetailList() {
    const url = '/api/financeaccount/bill-list'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 当月 / 周收支统计
  getMonthWeekStatistics() {
    const url = '/api/financeaccount/month-week-statistics'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 地址列表
  getAddressList() {
    const url = '/api/bankwallent/list'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 添加列表
  // addAddress() {
  //   const url = '/api/bankwallent/save'
  //   return axios.get(url, {
  //     params: {
  //       token
  //     }
  //   })
  //     .then(res => {
  //       return Promise.resolve(res.data)
  //     })
  // }
  // // 删除列表
  // deleteAddress() {
  //   const url = '/api/bankwallent/delete'
  //   return axios.get(url, {
  //     params: {
  //       token
  //     }
  //   })
  //     .then(res => {
  //       return Promise.resolve(res.data)
  //     })
  // }
}

export default MyAccount
