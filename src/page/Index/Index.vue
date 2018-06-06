<template>
  <div class="index">
    <Scroll class="scroll" :isMain="true">
      <div class="top-bg"></div>
      <div class="container">
        <TopSearch></TopSearch>
        <div class="top-swipe">
          <van-swipe class="swipt-wrapper" :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in imageList" :key="index">
              <img v-lazy="item.srcUrl" width="100%" height="100%"/>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="nav-wrapper">
          <ul>
            <router-link :to="{path: '/store'}" tag="li" class="nav-item">
              <img src="../../common/test/nav1.png" alt="">
              <p class="text">绝地求生</p>
            </router-link>
          </ul>
        </div>
        <Slider class="scroll-class" :adList="adList"></Slider>
        <div class="list-wrapper">
          <div class="list-title">
            <span class="text">热门商品</span>
            <router-link to="/store" tag="span" class="more">更多...</router-link>
          </div>
          <List></List>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import TopSearch from 'page/Index/TopSearch/TopSearch'
import Slider from 'page/Index/slider/slider'
import Scroll from 'components/Scroll/Scroll'
import List from 'components/List/List'
import Index from 'api/index'
let _index = new Index()
export default {
  mounted() {
    this.getBanner()
    this.getAd()
    this.getHotGame()
  },
  data () {
    return {
      imageList: [], // banner列表
      adList: [], // 广告列表
      HotGameList: [] // 热门游戏列表
    }
  },
  components: {
    TopSearch,
    Slider,
    Scroll,
    List
  },
  methods: {
    // 获取Banner
    getBanner() {
      _index.getBanner()
        .then(res => {
          // console.log(res)
          this.imageList = res.result
        })
    },
    // 获取广告
    getAd() {
      _index.getAd()
        .then(res => {
          // console.log(res)
          this.adList = res.result
        })
    },
    // 获取热门游戏
    getHotGame() {
      _index.getHotGame()
        .then(res => {
          // console.log(res)
          this.HotGameList = res.result
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .index
    .scroll
      fixed-all()
      .top-bg
        position absolute
        top 0
        z-index 1
        width 100%
        height 160px
        border-bottom-left-radius 20px
        border-bottom-right-radius 20px
        bg('./index-top-bg')
      .container
        position relative
        z-index 2
        .top-swipe
          margin 20px 13px 0
          height 164px
          border-radius 20px
          overflow hidden
          .swipt-wrapper
            overflow hidden
            height 100%
        .nav-wrapper
          padding 22px 13px 18px
          ul
            display flex
            padding 0 15px
            justify-content space-between
            .nav-item
              width 64px
              img
                width 64px
                height 64px
                border-radius 32px
              .text
                font-size $font-size-small
                color $color-text
                text-align center
                padding-top 16px
        .scroll-class
          width 100%
        .list-wrapper
          padding 0 13px
          .list-title
            padding 20px 0 10px
            display flex
            justify-content space-between
            .text
              font-size $font-size-medium
              color #fff
              letter-spacing 1px
            .more
              font-size $font-size-small
              color $color-text-little
</style>
