let tools = {
  // 手机号验证
  isPhone(str) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(str)) {
      return false
    } else {
      return true
    }
  }
}

export default tools