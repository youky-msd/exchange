<template>
  <div class="layout">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  mounted() {
    // this.testAlert()
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .layout
    fixed-all()
    background-color $color-background
</style>
