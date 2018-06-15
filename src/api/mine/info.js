import axios from '../config'

class Info {
  // 获取消息列表
  getInfoList() {
    const url = '/api/message/message-list'
    return axios.get(url, {
      params: {
        token: localStorage.token || '9898962464'
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 删除消息
  deleteInfo(muid) {
    const url = '/api/message/delete-message'
    return axios.post(url, {
      token: localStorage.token || '9898962464',
      muid
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default Info
