import axios from '../config'
let token = localStorage.token

class MyBuy {
  // 求购列表
  /*
   * 1. 正在求购
   * 2. 交易中
   * 3. 已完成
   * 4. 已取消
  */
  getWantToBuyList(status) {
    const url = '/api/purchase/seek-purchase-orders'
    return axios.get(url, {
      params: {
        token,
        status
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default MyBuy
