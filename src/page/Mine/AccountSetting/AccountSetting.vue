<template>
  <div class="account-setting">
    <NavBar title="账号设置"></NavBar>
    <Notice></Notice>
    <div class="user-info">
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="value">昵称:</span>
          <span class="value">{{user.nickName}}</span>
        </div>
        <router-link to="/mine/account-setting/modify-nickname" class="btn linear">修改昵称</router-link>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="value">头像</span>
        </div>
        <van-uploader :after-read="onRead">
          <span class="btn">设置头像</span>
        </van-uploader>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="value">接收推送通知</span>
        </div>
        <van-switch v-model="acceptSend" />
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="value">关于产品</span>
        </div>
        <router-link to="/mine/account-setting/about-product">
          <span class="btn">查看</span>
        </router-link>
      </div>
    </div>
    <div class="logout-wrapper">
      <div class="logout" @click="logout">退出当前账号</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import { mapGetters, mapActions } from 'vuex'
import User from 'api/user'
import AccountSetting from 'api/mine/accountSetting'
const _user = new User()
const _accountSetting = new AccountSetting()

export default {
  data () {
    return {
      acceptSend: true // 是否接受推送
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    NavBar,
    Notice
  },
  methods: {
    ...mapActions(['setUser']),
    // 退出登录
    logout() {
      _user.logout()
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 500,
              message: '已注销'
            })
            localStorage.removeItem('token')
            this.$router.push('/login')
          }
        })
    },
    // 头像设置
    onRead(file) {
      _user.uploadPhoto(file.content)
        .then(res => {
          if (res.code === 0) {
            return _accountSetting.accountSettingAvatar(this.user.userId, res.result)
          }
        }, error => {
          alert(error)
          alert(error.statusText)
        })
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 500,
              message: '头像修改成功'
            })
          }
          this.setUser()
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'
  .van-switch--on
    background-color $color-selected
  .account-setting
    .user-info
      box-sizing border-box
      padding 15px 0
      box()
      margin 60px 13px 0
      height 234px
      display flex
      flex-direction column
      justify-content space-around
      .user-info-item
        display flex
        justify-content space-between
        align-items center
        padding 0 17px
        font-size $font-size-medium
        .text
          color $color-text-little
        .value
          padding-left 5px
          color #fff
        .btn
          btn(80px, 28px, #5e698b, $font-size-small, #fff)
          &.linear
            linear()
    .logout-wrapper
      position fixed
      box-sizing border-box
      width 100%
      padding 0 13px
      bottom 20px
      .logout
        btn-big()
</style>
