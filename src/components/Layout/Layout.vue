<template>
  <div class="layout">
    <router-view></router-view>
    <Nav />
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from 'components/Nav/Nav'

export default {
  data () {
    return {

    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .layout
    fixed-all()
    background-color $color-background
</style>
