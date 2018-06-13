import axios from '../config'
let token = localStorage.token

class SellManage {
  // 上架
  up({bizId, goodsTypeId, qq, email, price, goodsName, description}) {
    const url = '/api/goods/save'
    return axios.post(url, {
      token,
      bizId,
      goodsTypeId,
      qq,
      email,
      price,
      goodsName,
      description
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 获取热门游戏
  getGameList() {
    const url = '/api/game/all-games'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 通过游戏ID获取道具
  getGameForGoods(bizId) {
    const url = '/api/goodstype/get-list-biz'
    return axios.get(url, {
      params: {
        token,
        bizId
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 出售管理列表查询
  /*
   * 1. 交易中订单
   * 2. 已售订单
   * 3. 取消订单
  */
  getSellManageLogList(type) {
    const url = '/api/orders/user-sell-orders'
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
  // 商品管理列表
  /*
   * 1. 在售
   * 2. 下架
   */
  getGoodsManageList(type) {
    const url = '/api/goods/user-goods-list'
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
  // 商品下架
  goodsDown(goodsId) {
    const url = '/api/goods/sold-out'
    return axios.post(url, {
      token,
      goodsId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default SellManage
