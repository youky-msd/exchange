import axios from './config'

class Index {
  // banner
  login(mobile, validCode) {
    const url = '/api/banner/banner-list'

    return axios.get(url, {
      params: {
        mobile,
        validCode
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Index
