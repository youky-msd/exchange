import * as types from './mutation-types'
import User from 'api/user'
const _user = new User()

export const setUser = ({
  commit
}) => {
  _user.getUserInfo()
    .then(res => {
      // console.log(res)
      commit(types.SET_USER, res.result)
    })
}
