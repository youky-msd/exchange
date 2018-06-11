let tools = {
  // 手机号验证
  isPhone(str) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(str)) {
      return false
    } else {
      return true
    }
  },
  // 时间处理
  timestampToTime(timestamp) {
    let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() + ' '
    // let h = date.getHours() + ':'
    // let m = date.getMinutes() + ':'
    // let s = date.getSeconds()
    // return Y + M + D + h + m + s
    return Y + M + D
  },
  // 时间处理(包括时分)
  timestampToTimeHM(timestamp) {
    let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() + ' '
    let h = date.getHours() + ':'
    let m = date.getMinutes()
    // let s = date.getSeconds()
    return Y + M + D + h + m
  }
}

export default tools
