import axios from '../config'
let token = localStorage.token

class Charge {
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
}

export default Charge
