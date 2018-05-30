<template>
  <div class="goods-detail">
    <BuyWindow v-show="showBuyWindow" @cancel="cancelBuy"></BuyWindow>
    <AlertWindow class="alert-window" v-show="showSupplyWindow">
      <p class="title">供应提示</p>
      <div class="desc-wrapper">
        <p class="desc">请确认是否有此商品,并愿意出售给对方.如发现您无法供应此商品,将会有几率剥夺您的供应资格.</p>
        <p class="desc">请慎重选择</p>
      </div>
      <div class="btn-wrapper">
        <div class="btn" @click="cancelSupplyWindow">取消</div>
        <div class="btn do">供应</div>
      </div>
    </AlertWindow>
    <NavBar title="道具详情"></NavBar>
    <div class="info-wrapper">
      <InfoLink></InfoLink>
    </div>
    <div class="goods-details-title">
      <div class="img-wrapper">
        <img v-lazy="gameDetail.img" alt="">
        <div class="tag">精品</div>
      </div>
      <div class="details-wrapper">
        <p class="name">{{gameDetail.name}}</p>
        <p class="price">参考价格: <span class="num">¥ {{gameDetail.price}}</span></p>
        <p class="week-sell">本周出售: <span class="num">{{gameDetail.weekSell}}</span></p>
        <p class="all-sell">累计已售: <span class="num">{{gameDetail.allSell}}</span></p>
      </div>
    </div>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="(item, index) in sellList" :key="index">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.user}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="buy">购买</div>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in buyList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.user}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="supply">供应</div>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import AlertWindow from 'components/AlertWindow/AlertWindow'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Tab from 'components/Tab/Tab'
import InfoLink from 'page/Index/TopSearch/InfoLink/InfoLink'
import BuyWindow from 'page/Store/BuyWindow/BuyWindow'

export default {
  data () {
    return {
      currentIndex: 0, // 当前tab索引
      showBuyWindow: false, // 是否打开购买窗口
      showSupplyWindow: false, // 是否打开供应提示窗口
      tabList: ['出售', '求购', '成交记录', '价格走势'],
      gameDetail: { // 商品详情
        name: '魔域神兵',
        price: 43.33,
        weekSell: 13,
        allSell: 66,
        img: require('common/test/list.png')
      },
      sellList: [{
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      }],
      buyList: [{
        price: 666,
        user: '买我东西必出货',
        id: 44,
        img: require('common/test/list.png')
      },
      {
        price: 666,
        user: '买我东西必出货',
        id: 12,
        img: require('common/test/list.png')
      }]
    }
  },
  components: {
    NavBar,
    InfoLink,
    Tab,
    GoodsListItem,
    Scroll,
    BuyWindow,
    AlertWindow
  },
  methods: {
    // 购买
    buy() {
      this.showBuyWindow = true
    },
    // 取消购买,关闭窗口
    cancelBuy() {
      this.showBuyWindow = false
    },
    // 切换tab
    toggleTab(index) {
      this.currentIndex = index
    },
    // 供应按钮,弹出窗口
    supply() {
      this.showSupplyWindow = true
    },
    // 关闭供应窗口
    cancelSupplyWindow() {
      this.showSupplyWindow = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .goods-detail
    .info-wrapper
      position absolute
      z-index 2
      top 9px
      right 17px
      display flex
      width 39px
      height 32px
    .goods-details-title
      height 120px
      display flex
      padding 0 12px
      align-items center
      .img-wrapper
        position relative
        box-sizing border-box
        width 140px
        height 90px
        padding 5px
        border-radius 10px
        box-linear()
        img
          width 100%
          height 100%
        .tag
          position absolute
          z-index 2
          top 10px
          left 10px
          tag-fine()
      .details-wrapper
        box-sizing border-box
        padding 15px 0 15px 15px
        height 100%
        display flex
        flex-direction column
        justify-content space-around
        .name
          font-size $font-size-medium
          color #fff
        .price,
        .week-sell,
        .all-sell
          color $color-text-little
        .num
          color $color-text-money
    .scroll
      fixed-all()
      top 222px
</style>
