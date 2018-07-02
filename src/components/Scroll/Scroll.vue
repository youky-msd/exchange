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
    },
    data: {
      type: Array
    },
    /* 是否派发滚动到底部的事件,用于上拉加载 */
    pullup: {
      type: Boolean,
      default: false
    },
    /* 是否派发顶部下拉的事件,用于下拉刷新 */
    pulldown: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
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
          probeType: 1,
          click: true
        })
      }
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.scroll && this.scroll.refresh()
      }, 20)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .scroll
    overflow hidden
    .scroll-group
      // background-color $color-background
      padding-bottom 10px
      &.is-main
        padding-bottom 60px
</style>
