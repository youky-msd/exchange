import axios from '../config'
let token = localStorage.token

class SellManage {
  // 上架
  up({bizId, goodsTypeId, qq, email, price, goodsName, imgs, description}) {
    const url = '/api/goods/save'
    return axios.post(url, {
      token,
      goodsTypeId,
      qq,
      email,
      price,
      goodsName,
      imgs,
      description
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 获取热门游戏
  getHotGame() {
    const url = 'api/index/hot-game-list'
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
}

export default SellManage