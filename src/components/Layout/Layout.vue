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
      testAlert() {
        setTimeout(() => {
          alert('页面基本完成,剩余一些小细节对接接口再进行调整,有什么问题跟我说- -..')
        }, 1000)
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .layout
    fixed-all()
    background-color $color-background
</style>
