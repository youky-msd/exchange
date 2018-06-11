<template>
  <div class="buy-window">
    <div class="buy-wrapper">
      <div class="buy-main">
        <div class="title">
          <div class="img">
            <img src="../../../common/img/buy.png" alt="">
          </div>
          <p class="title">确认支付</p>
        </div>
        <p class="intergral">{{sellPrice}}DDM</p>
        <p class="account">账户余额: {{balance}}</p>
        <div class="btn-wrapper">
          <div class="cancel" @click="cancel">取消</div>
          <div class="buy" @click="buy">购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import Store from 'api/store'
const _store = new Store()

export default {
  props: {
    balance: Number, // 余额
    goodsId: String, // 商品ID
    sellPrice: Number // 支付金额
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    // 取消窗口
    cancel() {
      this.$emit('cancel')
    },
    // 购买
    buy() {
      _store.buy(this.goodsId, this.sellPrice)
        .then(res => {
          Toast.success({
            duration: 1000,
            message: '购买成功'
          })
          this.$emit('buyDone')
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .buy-window
    position fixed
    z-index 999
    top 0
    left 0
    right 0
    bottom 0
    backdrop-filter blur(5px)
    background-color rgba(0,0,0,.5)
    .buy-wrapper
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
      .buy-main
        box-sizing border-box
        box-linear()
        height 100%
        border-radius 20px
        padding 25px
        .title
          display flex
          align-items center
          .img
            width 48px
            height 48px
            border-radius 50%
            img
              width 100%
              height 100%
          .title
            padding-left 18px
            color #fff
            font-size $font-size-v
        .intergral
          padding 25px 0
          text-align center
          font-size 35px
          color $color-text-money
        .account
          color $color-text-desc
          border-top 1px solid $color-text-l
          border-bottom 1px solid $color-text-l
          padding 15px
          font-size $font-size-medium
        .btn-wrapper
          display flex
          margin-top 30px
          justify-content space-between
          .cancel
            btn(100px,38px,#5e698b,$font-size-large,#fff)
          .buy
            btn(100px,38px,#4a4aa3,$font-size-large,#fff)
</style>
