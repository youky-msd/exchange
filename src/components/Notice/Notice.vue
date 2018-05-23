<template>
  <div class="notice">
    <p>信息公告: 我们将会收取1%作为平台支持</p>
    <div class="btn-wrapper">
      <van-icon name="close" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .notice
    position absolute
    top 50px
    width 100%
    height 36px
    line-height 36px
    color $color-text-desc
    linear(,#5762ed,#915fe6)
    border-bottom-right-radius 18px
    border-bottom-left-radius 18px
    text-align center
    font-size $font-size-medium
    .btn-wrapper
      position absolute
      right 24px
      top 0
      margin-top 3px
      font-size 18px
      color #d7d6d6
</style>
