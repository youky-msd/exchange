<template>
  <div class="search">
    <div class="search-wrapper">
      <van-icon class="logo" name="search" />
      <!-- <span class="logo"></span> -->
      <input type="text" class="search-input" placeholder="输入相关搜索关键词">
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

  .search
    background-color #fff
    border-radius 15px
    .search-wrapper
      position relative
      box-sizing border-box
      height 32px
      border-radius 14px
      padding 5px 5px 5px 35px
      .logo
        position absolute
        top 5px
        left 5px
        width 25px
        bottom 0
        font-size 24px
        color #8b8a8a
        // bg('./search')
        // background-size 24px 23px
      .search-input
        width 100%
        height 100%
        line-height normal
        font-size $font-size-medium
        color $color-text
</style>
