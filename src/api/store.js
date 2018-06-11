import axios from './config'
let token = localStorage.token

class Store {
  // 获取道具列表
  getGoodsList() {
    const url = '/api/goodstype/list'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 道具详情
  getPropertyDetail(goodsTypeId) {
    const url = '/api/goodstype/detail'
    return axios.get(url, {
      params: {
        token,
        goodsTypeId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 道具详情-在售列表
  getPropertyDetailForSaleList(goodsTypeId) {
    const url = '/api/goods/for-sale-list'
    return axios.get(url, {
      params: {
        token,
        goodsTypeId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 道具详情-求购列表
  getPropertyDetailForBuyList(goodsTypeId) {
    const url = '/api/purchase/for-list'
    return axios.get(url, {
      params: {
        token,
        goodsTypeId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 道具详情-成交记录列表
  getPropertyDetailOrderRecordsList(goodsTypeId) {
    const url = '/api/orders/order-records'
    return axios.get(url, {
      params: {
        token,
        goodsTypeId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 道具详情-成交记录分析
  getPropertyDetailStatistics(goodsTypeId) {
    const url = '/api/orders/order-statistics'
    return axios.get(url, {
      params: {
        token,
        goodsTypeId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 求购列表(非ID)
  getAllBuyList(status) {
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
  // 商品详情
  getGoodsDetailStatistics(goodsId) {
    const url = 'api/goods/detail'
    return axios.get(url, {
      params: {
        token,
        goodsId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 发布求购
  purchaseOrder({gameId, typeId, name, purchasePrice, totalPrice, count, payment, qq, email}) {
    const url = '/api/purchase/submit-purchase-order'
    return axios.post(url, {
      token,
      gameId,
      typeId,
      name,
      purchasePrice,
      totalPrice,
      count,
      payment,
      qq,
      email
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 提交订单(购买)
  buy(goodsId, sellPrice) {
    const url = '/api/purchase/submit-purchase-order'
    return axios.post(url, {
      token,
      payment: 1,
      goodsId,
      sellPrice
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 供应
  supply(purchaseId) {
    const url = '/api/purchase/supply'
    return axios.post(url, {
      token,
      purchaseId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 收藏
  collection(goodsId) {
    const url = '/api/collect/goods-collect'
    return axios.post(url, {
      token,
      goodsId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Store
