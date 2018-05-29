<template>
  <div class="login">
    <NavBar title="登录"></NavBar>
    <!-- <div class="container">
      <div class="logo-wrapper">
        <img src="../../common/img/logo.png" alt="">
      </div>
      <div class="input-container">
        <p class="label">手机账号</p>
        <div class="input-wrapper">
          <input type="text">
        </div>
      </div>
      <div class="input-container">
        <p class="label">验证码</p>
        <div class="input-wrapper">
          <input type="text">
        </div>
      </div>
      <div class="btn">登录</div>
    </div> -->
    <Verification></Verification>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Verification from 'page/Login/Verification/Verification'

export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    Verification
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/index.styl'
.login
  // fix-all()
  .container
    fixed-all()
    top 50px
    bottom 95px
    padding 0 13px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .logo-wrapper
      width 100px
      height 100px
      margin-bottom 30px
      img
        width 100%
        height 100%
    .input-container
      width 100%
      .label
        padding 10px 0
        font-size $font-size-large-x
        color #fff
      .input-wrapper
        public-input()
    .btn
      margin-top 20px
      btn-big()
</style>
