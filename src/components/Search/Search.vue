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
    .search-wrapper
      position relative
      height 28px
      border-radius 14px
      .logo
        display inline-block
        width 25px
        height 24px
      .search-input
        position absolute
        top 0
        left 30px
        right 0
        bottom 0
</style>
