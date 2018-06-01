<template>
  <div class="about-product">
    <NavBar title="关于产品" :showBack="false"></NavBar>
    <Notice></Notice>
    <div class="about-product-wrapper">
      <div class="logo-wrapper">
        <img src="../../../../common/img/logo.png" alt="">
      </div>
      <p class="edition">版本号: V1.0.0</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'

export default {
  data () {
    return {

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

  .about-product
    fixed-all()
    .about-product-wrapper
      fixed-all()
      top 86px
      display flex
      flex-direction column
      align-items center
      .logo-wrapper
        margin-top 50px
        width 100px
        height 100px
        img
          width 100%
          height 100%
      .edition
        padding-top 50px
        color #fff
        font-size $font-size-medium-x
</style>
