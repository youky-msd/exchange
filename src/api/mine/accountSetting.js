import axios from '../config'
let token = localStorage.token

class AccountSetting {
  // 修改用户信息 - 头像
  accountSettingAvatar(avatar) {
    const url = '/api/financeaccount/balance-lock'
    return axios.get(url, {
      params: {
        token,
        id: JSON.parse(localStorage.user).id,
        avatar
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
  // 修改用户信息 - 头像
  accountSettingNickName(nickName) {
    const url = '/api/financeaccount/balance-lock'
    return axios.get(url, {
      params: {
        token,
        id: JSON.parse(localStorage.user).id,
        nickName
      }
    })
      .then(res => {
        return Promise.resolve(res.data)
      })
  }
}

export default AccountSetting
