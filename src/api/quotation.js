import axios from './config'
let token = localStorage.token

class Quotation {
  // 行情列表
  quotationList() {
    const url = 'api/quotation/quotation-list'
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

export default Quotation
