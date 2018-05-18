<template>
  <div class="index">
    <div class="top-bg"></div>
    <div class="container">
      <div class="search-wrapper">
        <Search class="search"></Search>
        <span class="info"></span>
      </div>
      <div class="top-banner">
        <img src="../../common/test/Banner.png" alt="" width="100%" height="100%">
      </div>
      <div class="nav-wrapper">
        <ul>
          <router-link to="" tag="li" class="nav-item">
            <img src="../../common/test/nav1.png" alt="">
            <p class="text">绝地求生</p>
          </router-link>
          <router-link to="" tag="li" class="nav-item">
            <img src="../../common/test/nav2.png" alt="">
            <p class="text">CS GO</p>
          </router-link>
          <router-link to="" tag="li" class="nav-item">
            <img src="../../common/test/nav3.png" alt="">
            <p class="text">H1N1</p>
          </router-link>
          <router-link to="" tag="li" class="nav-item">
            <img src="../../common/test/nav4.png" alt="">
            <p class="text">DOTA2</p>
          </router-link>
        </ul>
      </div>
      <Slider class="scroll-class"></Slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Search from 'components/Search/Search'
import Slider from 'page/Index/Slider/Slider'

export default {
  mounted() {

  },
  data () {
    return {

    }
  },
  components: {
    Search,
    Slider
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .index
    .top-bg
      position absolute
      top 0
      z-index 1
      width 100%
      height 160px
      border-bottom-left-radius 20px
      border-bottom-right-radius 20px
      bg('index-top-bg')
    .container
      position relative
      z-index 2
      .search-wrapper
        display flex
        position relative
        padding 15px 13px 0
        .search
          flex 9
        .info
          flex 1
          margin-left 5px
          bg('./info-white')
          background-size 25px 25px
      .top-banner
        padding 0 13px 0
        margin-top 20px
        height 164px
        border-radius 20px
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

</style>
