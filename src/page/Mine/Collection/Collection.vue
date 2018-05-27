<template>
  <div class="collection">
    <NavBar title="我的收藏"></NavBar>
    <GoodsList></GoodsList>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import GoodsList from 'components/GoodsList/GoodsList'

export default {
  data () {
    return {

    }
  },
  components: {
    NavBar,
    GoodsList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'
</style>
