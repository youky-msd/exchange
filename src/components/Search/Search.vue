<template>
  <div class="search">
    <div class="search-wrapper">
      <span class="logo"></span>
      <input type="text" class="search-input">
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
      height 28px
      border-radius 14px
      padding 5px 5px 5px 35px
      .logo
        position absolute
        top 0
        left 5px
        width 25px
        bottom 0
        bg('./search')
        background-size 24px 23px
      .search-input
        width 100%
        height 100%
        font-size $font-size-medium
        color $color-text
</style>
