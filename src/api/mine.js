import axios from './config'
let token = localStorage.token

class Mine {
  // 行情列表
  getBalanceLock() {
    const url = '/api/financeaccount/balance-lock'
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

export default Mine
