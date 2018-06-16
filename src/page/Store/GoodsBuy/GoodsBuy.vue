<template>
  <div class="buy-detail">
    <NavBar title="商品购买" :otherFun="true" @publicGo="close"></NavBar>
    <div class="collection" @click="collection">收藏</div>
    <BuyWindow v-show="showBuyWindow" @cancel="cancelBuy" @buyDone="buyDone"
    :balance="balance" :goodsId="detail.id" :sellPrice="detail.price"></BuyWindow>
    <div class="buy-detail-wrapper">
      <div class="title">{{detail.name}}</div>
      <div class="img">
        <img v-lazy="detail.image" alt="">
      </div>
      <p class="intergral">商品单价: {{detail.price}}DDM</p>
      <div class="desc-wrapper">
        <p class="desc-title">商品介绍</p>
        <div class="desc">
          {{detail.description}}
        </div>
      </div>
    </div>
    <div class="buy-btn-wrapper">
      <div class="buy-btn" @click="buy">购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import BuyWindow from 'page/Store/BuyWindow/BuyWindow'
import Store from 'api/store'
const _store = new Store()

export default {
  props: {
    detail: Object,
    balance: Number
  },
  data () {
    return {
      showBuyWindow: false // 是否打开购买窗口
    }
  },
  components: {
    NavBar,
    Scroll,
    BuyWindow
  },
  methods: {
    // 打开购买窗口
    buy() {
      this.showBuyWindow = true
      console.log(this.detail)
    },
    // 取消购买
    cancelBuy() {
      this.showBuyWindow = false
    },
    // 关闭当前页面
    close() {
      this.$emit('closeSellDetail')
    },
    // 购买完成
    buyDone() {
      this.showBuyWindow = false
    },
    // 收藏
    collection() {
      _store.collection(this.detail.id)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '收藏成功'
            })
          }
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .buy-detail
    fixed-all()
    z-index 10
    background-color $color-background
    .collection
      position absolute
      padding 18px
      font-size $font-size-medium-x
      color #fff
      top 0
      right 0
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
