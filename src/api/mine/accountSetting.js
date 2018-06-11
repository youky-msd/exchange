import axios from '../config'
let token = localStorage.token

class AccountSetting {
  // 修改用户信息 - 头像
  accountSettingAvatar(id, avatar) {
    const url = '/api/user/update-user'
    return axios.get(url, {
      params: {
        token,
        id,
        avatar
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 修改用户信息 - 用户名
  accountSettingNickName(id, nickName) {
    const url = '/api/user/update-user'
    return axios.get(url, {
      params: {
        token,
        id,
        nickName
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default AccountSetting
