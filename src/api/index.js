import axios from './config'

class Index {
  // banner
  getBanner() {
    const url = '/api/banner/banner-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 获取广告列表
  getAd() {
    const url = '/api/advertisement/advertisement-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
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
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Index
