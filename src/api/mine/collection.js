import axios from '../config'

class Collection {
  // 获取收藏列表
  getCollectionList() {
    const url = '/api/collect/list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
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
      token: localStorage.token || '9898962464',
      collectId
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Collection
