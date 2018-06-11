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
        <span class="btn">设置头像</span>
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
      <div class="logout">退出当前账号</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import { mapGetters } from 'vuex'

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
