<template>
  <div class="scroll" ref="scroll">
    <div class="scroll-group" :class="{'is-main': isMain}" ref="scrollGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    isMain: {
      default: false,
      type: Boolean
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 100)
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .scroll
    overflow hidden
    .scroll-group
      background-color $color-background
      padding-bottom 10px
      &.is-main
        padding-bottom 60px
</style>
