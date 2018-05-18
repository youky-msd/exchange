<template>
  <div class="slider" ref="sliderWrapper">
    <ul ref="slider">
      <router-link tag="li" to="/" class="slider-item"
      v-for="(item, index) in list" :key="index" ref="sliderItem">
        <img src="../../../common/test/ad.png" alt="" width="100%" height="100%">
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  mounted() {
    setTimeout(() => {
      this._initSlider()
    }, 20)
  },
  data () {
    return {
      list: [{
        name: 1
      },
      {
        name: 1
      },
      {
        name: 1
      },
      {
        name: 1
      }]
    }
  },
  components: {

  },
  methods: {
    _initSlider() {
      // slider width
      let picWidth = document.documentElement.clientWidth - 16 * 2
      let margin = 4
      let width = (picWidth + margin * 2) * this.list.length + margin * 2

      let sliderItem = document.querySelectorAll('.slider-item')
      sliderItem.forEach(element => {
        element.style.width = picWidth + 'px'
        element.style.height = (181 / 692 * picWidth) + 'px'
      })

      // this.$refs.sliderItem.forEach(item => {
      //   // slider item width
      //   item.style.width = picWidth + 'px'
      //   // slider item height
      //   let picHeight = 181 / 692 * picWidth
      //   item.style.height = (181 / 692 * picWidth) + 'px'
      // })

      this.$refs.slider.style.width = `${width}px`
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.sliderWrapper, {
            scrollX: true,
            click: true,
            startX: -picWidth + 4
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
      width 100%
      .slider-item
        position relative
        float left
        white-space: nowrap
        margin 0 4px
        border-radius 17px
        &:first-child
          margin 0 4px 0 8px
        img
          position absolute
          width 100%
          height 100%
</style>
