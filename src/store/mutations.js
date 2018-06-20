import * as types from './mutation-types'

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_BALANCE](state, balance) {
    state.user.balance = balance
  },
  [types.SET_INFO_NO](state, num) {
    state.infoNum = num
  }
}

export default mutations
