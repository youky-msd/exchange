<template>
  <div class="layout">
    <router-view></router-view>
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
          alert('2018.5.30.增加了道具详情,商品购买,购买弹窗,求购弹窗等.')
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
