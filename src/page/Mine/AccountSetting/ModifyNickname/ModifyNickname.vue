<template>
  <div class="modify-nickname">
    <NavBar title="修改昵称"></NavBar>
    <Notice></Notice>
    <div class="container">
      <div class="nickname-wrapper">
        <input type="text" v-model="nickName" placeholder="请输入新昵称">
      </div>
    </div>
    <div class="desc">
      昵称必须在4-14个字符以内,可以包含数字,中文
      (请勿带有辱骂,广告,诱导等违反法律法规的词汇,违者账号将做封禁处理)
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="modifyAvatar">确认修改</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import AccountSetting from 'api/mine/accountSetting'
const _accountSetting = new AccountSetting()
export default {
  data () {
    return {
      nickName: ''
    }
  },
  components: {
    NavBar,
    Notice
  },
  methods: {
    modifyAvatar() {
      _accountSetting.accountSettingAvatar(this.nickName)
        .then(res => {
          console.log(res)
          let user = JSON.parse(localStorage.user)
          user.nickName = this.nickName
          localStorage.user = JSON.stringify(user)
          Toast.success({
            duration: 1000,
            message: '修改成功!'
          })
          this.$router.back()
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .modify-nickname
    fix-all()
    .container
      padding 90px 13px 0
      .nickname-wrapper
        public-input()
    .desc
      padding 13px
      letter-spacing 1px
      line-height 16px
      color #fff
      font-size $font-size-medium
    .btn-wrapper
      position absolute
      box-sizing border-box
      width 100%
      bottom 20px
      padding 0 13px
      .btn
        btn-big()
</style>
