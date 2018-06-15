import axios from '../config'

class MyAccount {
  // 账单明细详情列表
  getAccountDetailList() {
    const url = '/api/financeaccount/bill-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
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
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default MyAccount
