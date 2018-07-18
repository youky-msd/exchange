<template>
  <FadeAnimate :show="show">
    <div class="alert-window">
      <div class="alert-wrapper">
        <div class="alert-main">
          <slot></slot>
        </div>
      </div>
    </div>
  </FadeAnimate>
</template>

<script type="text/ecmascript-6">
import FadeAnimate from 'components/FadeAnimate/FadeAnimate'
export default {
  props: {
    show: Boolean
  },
  data () {
    return {

    }
  },
  components: {
    FadeAnimate
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .alert-window
    position fixed
    z-index 999
    top 0
    left 0
    right 0
    bottom 0
    backdrop-filter blur(5px)
    background-color rgba(0,0,0,.5)
    .alert-wrapper
      box-sizing border-box
      position fixed
      padding 0 40px
      width 100%
      top 50%
      left 50%
      margin-left -50%
      margin-top -150px
      height 300px
      @media screen and (max-width: 400px) {
        padding 0 20px
      }
      .alert-main
        position relative
        box-sizing border-box
        box-linear()
        height 100%
        border-radius 20px
        padding 25px
</style>
