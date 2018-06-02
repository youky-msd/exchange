<template>
  <div class="add-address">
    <NavBar title="添加地址"></NavBar>
    <Notice></Notice>
    <div class="container">
      <div class="address-wrapper">
        <input type="text" v-model="address" placeholder="请输入地址">
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">添加</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'

export default {
  data () {
    return {
      address: ''
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

  .add-address
    fix-all()
    .container
      padding 90px 13px 0
      .address-wrapper
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
