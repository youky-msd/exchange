<template>
  <div class="buy-detail">
    <NavBar title="账号设置"></NavBar>
    <Notice></Notice>
    <div class="user-info">
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">求购商品:</span>
          <span class="value">{{goodsInfo.goodsName}}</span>
        </div>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">游戏名称:</span>
          <span class="value">{{goodsInfo.gameName}}</span>
        </div>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">订单编号:</span>
          <span class="value">{{goodsInfo.order}}</span>
        </div>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">求购单价:</span>
          <span class="value">{{goodsInfo.price}}</span>
        </div>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">求购数量:</span>
          <span class="value">{{goodsInfo.num}}</span>
        </div>
      </div>
      <div class="user-info-item">
        <div class="user-info-wrapper">
          <span class="text">求购总价:</span>
          <span class="value">{{goodsInfo.allPrice}}</span>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">取消求购</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'

export default {
  data () {
    return {
      goodsInfo: {
        goodsName: '屠龙宝刀',
        gameName: '征途',
        order: 109478093234809,
        price: 123,
        num: 2,
        allPrice: 246
      }
    }
  },
  components: {
    NavBar,
    Notice
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .buy-detail
    .user-info
      box-sizing border-box
      padding 15px 0
      box()
      margin 60px 13px 0
      height 234px
      display flex
      flex-direction column
      justify-content space-around
      .user-info-item
        display flex
        justify-content space-between
        align-items center
        padding 0 17px
        font-size $font-size-medium
        .text
          color $color-text-little
        .value
          padding-left 5px
          color #fff
    .btn-wrapper
      padding 13px
      .btn
        btn-linear(100%,50px,$font-size-large)
</style>
