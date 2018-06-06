<template>
  <div class="slider" ref="sliderWrapper">
    <ul ref="slider" :style="allWidth">
      <router-link tag="li" to="/" class="slider-item" :style="listStyle"
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
      listStyle: {
        width: localStorage.listWidth || '',
        height: localStorage.listHeight || ''
      },
      allWidth: {
        width: localStorage.allWidth || ''
      }
    }
  },
  components: {

  },
  methods: {
    _initSlider() {
      // 存储数量
      localStorage.listNum = this.adList.length
      // slider width
      let picWidth = document.documentElement.clientWidth - 16 * 2
      let margin = 4
      let width = (picWidth + margin * 2) * this.adList.length + margin * 2

      if (!localStorage.listWidth) {
        this.listStyle.width = picWidth + 'px'
        this.listStyle.height = (181 / 692 * picWidth) + 'px'
        localStorage.listWidth = picWidth + 'px'
        localStorage.listHeight = (181 / 692 * picWidth) + 'px'
      }

      if (!localStorage.allWidth) {
        this.allWidth.width = `${width}px`
        localStorage.allWidth = `${width}px`
      } else if (parseInt(this.adList.length) !== parseInt(localStorage.listNum)) {
        this.allWidth.width = `${width}px`
        localStorage.allWidth = `${width}px`
      }
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.sliderWrapper, {
            scrollX: true,
            click: true
            // startX: -picWidth - 1
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
