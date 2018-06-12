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
      user.balance = res.result.accountBalance
      user.lockAmount = res.result.lockAmount
      commit(types.SET_USER, user)
    })
}
export const setBalance = ({ commit }) => {
  _user.getBalanceLock()
    .then(res => {
      commit(types.SET_BALANCE, res.result.accountBalance)
    })
}
