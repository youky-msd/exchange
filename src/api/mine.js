import axios from './config'

class Mine {
  // 行情列表
  getBalanceLock() {
    const url = '/api/financeaccount/balance-lock'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Mine
