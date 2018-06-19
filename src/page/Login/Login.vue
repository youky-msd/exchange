<template>
  <div class="login">
    <NavBar title="登录" :showBack="false"></NavBar>
    <div class="container">
      <div class="logo-wrapper">
        <img src="../../common/img/logo.png" alt="">
      </div>
      <div class="input-container">
        <p class="label">手机账号</p>
        <div class="input-wrapper">
          <input type="number" v-model="mobile">
        </div>
      </div>
      <div class="input-container">
        <p class="label">验证码</p>
        <div class="input-wrapper verification">
          <input type="text" v-model="verificationCode" @keyup.enter="login">
          <div class="verification-wrapper" @click="sendVerification">
            <Verification class="verification" :mobile="mobile"></Verification>
          </div>
        </div>
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Verification from 'page/Login/verification/verification'
import { Toast } from 'vant'
import User from 'api/user'
import { mapActions } from 'vuex'
const _user = new User()

export default {
  data () {
    return {
      mobile: '', // 手机号
      verificationCode: '' // 验证码
    }
  },
  components: {
    NavBar,
    Verification
  },
  methods: {
    ...mapActions(['setUser']),
    // 登录
    login() {
      _user.login(this.mobile, this.verificationCode)
        .then(res => {
          localStorage.token = res.result.token
          Toast.success({
            duration: 1000,
            message: '登录成功'
          })
          this.$router.push('/')
          this.setUser()
        })
    },
    // 发送验证码
    sendVerification() {
      if (this.mobile) {
        _user.sendVerification(this.mobile)
          .then(res => {
            // to do...
          })
      } else {
        Toast.fail('请输入手机号')
      }
    }
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
        display flex
        align-items center
        public-input()
        &.verification
          padding 7px 12px
        .verification-wrapper
          flex-basis 100px
    .btn
      margin-top 20px
      btn-big()
</style>
