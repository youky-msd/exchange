import * as types from './mutation-types'
import User from 'api/user'
const _user = new User()
let user = {}

export const setUser = ({ commit }) => {
  _user.getUserInfo()
    .then(res => {
      user = res.result
      return _user.getBalanceLock()
    })
    .then(res => {
      if (res.result.accountBalance) {
        user.balance = res.result.accountBalance
      }
      if (res.result.lockAmount) {
        user.lockAmount = res.result.lockAmount
      }
      commit(types.SET_USER, user)

      initWebpack(commit) // websocket
    })
}
export const setBalance = ({ commit }) => {
  _user.getBalanceLock()
    .then(res => {
      commit(types.SET_BALANCE, res.result.accountBalance)
    })
}

function initWebpack(commit) {
  console.log('执行websocket')
  // 初始化websocket
  const wsuri = `ws://47.104.254.248:38888?token=${localStorage.token}`
  let websock = new WebSocket(wsuri)

  websock.onopen = websocketopen
  websock.onmessage = function(e) {
    console.log(e)
    commit(types.SET_INFO_NO)
  }
  websock.onclose = websocketclose
  websock.onerror = websocketerror
}
// 打开
function websocketopen() {
  console.log('WebSocket连接成功')
}
// 数据接收
// function websocketonmessage(e) {
//   console.log(e)
//   this.setInfoNo()
//   this.productinfos = JSON.parse(e.data)
// }
// 关闭
function websocketclose() {
  console.log('WebSocket关闭')
}
// 失败
function websocketerror() {
  console.log('WebSocket连接失败')
}
