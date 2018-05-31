<template>
  <div class="want-to-buy">
    <NavBar title="发起求购"></NavBar>
    <GoodsDetailTitle :data="goodsDetail">
      <p class="name">{{goodsDetail.name}}</p>
      <p class="text">当前最低出售价: <span class="num">{{goodsDetail.min}}DDM</span></p>
      <p class="text">当前最高出售价: <span class="num">{{goodsDetail.max}}DDM</span></p>
    </GoodsDetailTitle>
    <div class="form">
      <div class="input">
        <input type="number" placeholder="请输入求购单价(必填)">
      </div>
      <div class="input">
        <input type="number" placeholder="请输入求购数量(必填)">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入您的交流qq(必填)">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入您的交流邮箱(必填)">
      </div>
    </div>
    <div class="desc-wrapper">
      <p class="title">求购说明</p>
      <p class="desc">1.发布求购需要先付款,付款金额由平台包管</p>
      <p class="desc">2.出现商品供应者后,客服协助完成交易</p>
      <p class="desc">3.上架后如取消求购,金额将24小时返回账户</p>
    </div>
    <div class="buy-bottom-wrapper">
      <p class="price">应付: <span class="num">DDM积分</span></p>
      <div class="buy-btn">支付</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import GoodsDetailTitle from 'page/Store/GoodsDetail/GoodsDetailTitle/GoodsDetailTitle'

export default {
  data () {
    return {
      goodsDetail: { // 商品详情
        name: '魔域神兵',
        price: 43.33,
        min: 13,
        max: 66,
        img: require('common/test/list.png')
      },
      num: 1
    }
  },
  components: {
    NavBar,
    GoodsDetailTitle
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .want-to-buy
    .goods-detail-title
      .name
        font-size $font-size-medium
        color #fff
      .text
        color $color-text-little
      .num
        color $color-text-money
    .form
      padding 13px
      .input
        margin-bottom 10px
        public-input()
    .desc-wrapper
      padding 0 13px
      color $color-text-desc
      .title
        font-size $font-size-medium
      .desc
        padding-top 10px
    .buy-bottom-wrapper
      position fixed
      box-sizing border-box
      width 100%
      padding 0 13px
      display flex
      justify-content space-between
      align-items center
      bottom 10px
      .price
        font-size $font-size-large
        color #fff
        .num
          color $color-text-money
      .buy-btn
        btn-linear(150px,40px,$font-size-large)
</style>
