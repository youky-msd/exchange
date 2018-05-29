<template>
  <div class="goods-detail">
    <NavBar title="道具详情"></NavBar>
    <div class="info-wrapper">
      <InfoLink></InfoLink>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import InfoLink from 'page/Index/TopSearch/InfoLink/InfoLink'

export default {
  data () {
    return {

    }
  },
  components: {
    NavBar,
    InfoLink
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .goods-detail
    .info-wrapper
      position absolute
      z-index 2
      top 9px
      right 17px
      display flex
      width 39px
      height 32px
</style>
