<template>
  <div class="account-setting">
    <NavBar title="账号设置"></NavBar>
    <Notice></Notice>
    <div class="user-info">
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">昵称:</span>
          <span class="value">{{userInfo.nickname}}</span>
        </div>
        <router-link to="/mine/account-setting/modify-nickname" class="btn linear">修改昵称</router-link>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">Steam:</span>
          <span class="value">{{userInfo.steamId}}</span>
        </div>
        <span class="btn">解绑</span>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">公开Steam库存资料</span>
          <!-- <span class="value"></span> -->
        </div>
        <span class="btn">前往公开</span>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">Steam交易链接:</span>
          <span class="value">获取交易链接</span>
        </div>
        <span class="btn">保存链接</span>
      </div>
    </div>
    <div class="description">
      <p class="text">说明</p>
      <p class="text">1. 公开资料存在延迟</p>
      <p class="text">2. 如有疑问,可查看<span class="help">帮助</span></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'

export default {
  data () {
    return {
      userInfo: {
        nickname: 'Greentea',
        steamId: '23094230979847509348'
      }
    }
  },
  components: {
    NavBar,
    Notice
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

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
    .description
      box-sizing border-box
      box()
      height 105px
      margin 16px 13px 0
      display flex
      flex-direction column
      justify-content space-around
      padding 10px 18px
      .text
        color $color-text
        .help
          color #fff
</style>
