<template>
  <div class="buy-detail">
    <NavBar title="商品购买"></NavBar>
    <BuyWindow v-show="showBuyWindow" @cancel="cancelBuy"></BuyWindow>
    <div class="buy-detail-wrapper">
      <div class="title">{{goodsDetail.name}}</div>
      <div class="img">
        <img v-lazy="goodsDetail.img" alt="">
      </div>
      <p class="intergral">商品单价: {{goodsDetail.price}}DDM</p>
      <div class="desc-wrapper">
        <p class="desc-title">商品介绍</p>
        <div class="desc">
          {{goodsDetail.desc}}
        </div>
      </div>
    </div>
    <div class="buy-btn-wrapper">
      <div class="buy-btn" @click="buy">购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import BuyWindow from 'page/Store/BuyWindow/BuyWindow'

export default {
  data () {
    return {
      showBuyWindow: false, // 是否打开购买窗口
      goodsDetail: {
        name: '武则天皮肤',
        price: 122,
        img: require('../../../common/test/list.png'),
        desc: '商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍'
      }
    }
  },
  components: {
    NavBar,
    Scroll,
    BuyWindow
  },
  methods: {
    buy() {
      this.showBuyWindow = true
    },
    cancelBuy() {
      this.showBuyWindow = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .buy-detail
    .buy-detail-wrapper
      margin 0 13px
      .title
        font-size $font-size-v
        color #fff
        text-align center
        padding 50px 0 20px
      .img
        position relative
        padding-top 60%
        img
          position absolute
          top 0
          left 0
          width 100%
          height 100%
      .intergral
        padding 15px 0
        color $color-text-money
        font-size $font-size-medium
      .desc-wrapper
        .desc-title
          padding 10px 0
          font-size $font-size-medium-x
        .desc
          letter-spacing 2px
          line-height 20px
    .buy-btn-wrapper
      position absolute
      bottom 30px
      width 100%
      box-sizing border-box
      padding 0 13px
      .buy-btn
        btn-big()
</style>
