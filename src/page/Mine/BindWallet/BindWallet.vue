<template>
  <div class="bind-wallet">
    <NavBar title="绑定DDM钱包"></NavBar>
    <p class="description">用DDM币充值需要先绑定您的DDM钱包</p>
    <div class="container">
      <div class="input-container">
        <p class="label">手机账号</p>
        <div class="input-wrapper">
          <input type="number" v-model="mobile">
        </div>
      </div>
      <div class="input-container">
        <p class="label">验证码</p>
        <div class="input-wrapper verification">
          <input type="text" v-model="verificationCode" @keyup.enter="bind">
          <div class="verification-wrapper" @click="sendVerification">
            <Verification class="verification" :mobile="mobile"></Verification>
          </div>
        </div>
      </div>
      <div class="btn" @click="bind">绑定</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Verification from 'page/Login/verification/verification'
import { Toast } from 'vant'
import Exchange from 'api/play77/exchange'
const _exchange = new Exchange()

export default {
  data () {
    return {
      mobile: '', // 手机号
      verificationCode: '' // 验证码
    }
  },
  methods: {
    // 绑定
    bind() {
      _exchange.bind(this.mobile, this.verificationCode)
        .then(res => {
          localStorage.token = res.result.token
          Toast.success({
            duration: 1000,
            message: '绑定成功'
          })
        })
    },
    // 发送验证码
    sendVerification() {
      if (this.mobile) {
        _exchange.sendVerification(this.mobile)
          .then(res => {
            // to do...
          })
      } else {
        Toast.fail('请输入手机号')
      }
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

  .bind-wallet
    .description
      line-height 100px
      text-align center
      font-size $font-size-large
    .container
      padding 50px 13px 0
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
