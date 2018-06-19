import * as types from './mutation-types'

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_BALANCE](state, balance) {
    state.user.balance = balance
  },
  [types.SET_INFO_NO](state, flag) {
    console.log(flag)
    if (!flag) {
      ++state.infoNum
      localStorage.infoNum = JSON.stringify(state.infoNum)
    } else {
      state.infoNum = 0
      localStorage.infoNum = JSON.stringify(state.infoNum)
    }
  }
}

export default mutations
