<template>
  <div class="layout">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .layout
    // fixed-all()
    height 100%
    background-color $color-background
</style>
