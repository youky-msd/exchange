<template>
  <div class="index">
    <div class="top-bg"></div>
    <div class="container">
      <div class="search-wrapper">
        <Search></Search>
        <span class="info"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Search from 'components/Search/Search'

export default {
  data () {
    return {

    }
  },
  components: {
    Search
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .index
    .top-bg
      position absolute
      top 0
      z-index 1
      width 100%
      height 160px
      border-bottom-left-radius 20px
      border-bottom-right-radius 20px
      bg('index-top-bg')
    .container
      position relative
      z-index 2
      .search-wrapper
        position relative
        padding 10px 13px 0

</style>
