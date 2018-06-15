import axios from './config'

class Quotation {
  // 行情列表
  getQuotationList() {
    const url = 'api/quotation/quotation-list'
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

export default Quotation
