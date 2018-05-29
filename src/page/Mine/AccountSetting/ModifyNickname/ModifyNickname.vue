<template>
  <div class="modify-nickname">
    <NavBar title="修改昵称"></NavBar>
    <Notice></Notice>
    <div class="container">
      <div class="nickname-wrapper">
        <input type="text" v-model="nickname" placeholder="请输入新昵称">
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">确认修改</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'

export default {
  data () {
    return {
      nickname: ''
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

  .modify-nickname
    fix-all()
    .container
      padding 90px 13px 0
      .nickname-wrapper
        public-input()
    .btn-wrapper
      position absolute
      box-sizing border-box
      width 100%
      bottom 115px
      padding 0 13px
      .btn
        btn-big()
</style>
