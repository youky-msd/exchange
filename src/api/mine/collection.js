import axios from '../config'
let token = localStorage.token

class Collection {
  // 获取收藏列表
  getCollectionList() {
    const url = '/api/collect/list'
    return axios.get(url, {
      params: {
        token
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 删除收藏
  deleteCollection(collectId) {
    const url = '/api/collect/delete'
    return axios.post(url, {
      token,
      collectId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Collection
