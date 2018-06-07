<template>
  <div class="slider" ref="sliderWrapper">
    <ul ref="slider">
      <router-link tag="li" to="/" class="slider-item"
      v-for="(item, index) in adList" :key="index" ref="sliderItem">
        <img :src="item.srcUrl" alt="" width="100%" height="100%">
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    adList: Array
  },
  mounted() {
    setTimeout(() => {
      this._initSlider()
    }, 100)
  },
  data () {
    return {
    }
  },
  components: {

  },
  methods: {
    _initSlider() {
      // slider width
      let picWidth = document.documentElement.clientWidth - 16 * 2
      let margin = 4
      let width = (picWidth + margin * 2) * this.adList.length + margin * 2
      let sliderItem = document.querySelectorAll('.slider-item')
      sliderItem.forEach(element => {
        element.style.width = picWidth + 'px'
        element.style.height = (181 / 692 * picWidth) + 'px'
      })
      this.$refs.slider.style.width = `${width}px`
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.sliderWrapper, {
            scrollX: true,
            click: true,
            startX: -picWidth - 1
            // eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .slider
    overflow hidden
    ul
      overflow hidden
      // width 100%
      // height 100px
      .slider-item
        position relative
        float left
        white-space: nowrap
        margin 0 4px
        border-radius 17px
        // height 100%
        &:first-child
          margin 0 4px 0 8px
        img
          position absolute
          width 100%
          height 100%
</style>
