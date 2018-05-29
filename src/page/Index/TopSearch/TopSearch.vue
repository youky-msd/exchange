<template>
  <div class="search">
    <div class="search-wrapper">
      <Search class="search"></Search>
      <InfoLink></InfoLink>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Search from 'components/Search/Search'
import InfoLink from 'page/Index/TopSearch/InfoLink/InfoLink'
export default {
  data () {
    return {

    }
  },
  components: {
    Search,
    InfoLink
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .search-wrapper
    box-sizing border-box
    display flex
    position relative
    padding 15px 13px 0
    .search
      flex 9
</style>
