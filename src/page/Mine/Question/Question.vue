<template>
  <div class="service">
    <NavBar title="联系客服"></NavBar>
    <Notice></Notice>
    <div class="container">
      <p class="text">联系电话: 12345678910</p>
      <p class="text">客服QQ: 741024920</p>
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

  .service
    .container
      padding-top 60px
      .text
        padding 10px 13px
        color #fff
        font-size $font-size-medium-x
</style>
