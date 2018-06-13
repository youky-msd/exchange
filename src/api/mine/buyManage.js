import axios from '../config'
let token = localStorage.token

class BuyManage {
  // 购买记录查询
  /*
   * 1. 正在购买 2. 已购买 3. 取消购买
   */
  buyLogList(type) {
    const url = '/api/orders/user-buy-orders'
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
}

export default BuyManage
