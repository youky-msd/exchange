<template>
  <div class="layout">
    <keep-alive>
      <SlideLeftAnimate>
        <router-view></router-view>
      </SlideLeftAnimate>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import SlideLeftAnimate from 'components/SlideLeftAnimate/SlideLeftAnimate'
export default {
  data () {
    return {
    }
  },
  components: {
    SlideLeftAnimate
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
