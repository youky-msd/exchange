<template>
  <div class="goods-detail">
    <!-- 购买弹窗 -->
    <BuyWindow v-show="showBuyWindow" @cancel="cancelBuy"></BuyWindow>
    <!-- 供应提示弹窗 -->
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
    <!-- 底部供应按钮 -->
    <router-link tag="div" to="/store/want-to-buy" class="supply-bottom-btn-wrapper" v-show="currentIndex === 1">
      <div class="btn">供应</div>
    </router-link>
    <NavBar title="魔域神兵"></NavBar>
    <!-- 右上消息按钮 -->
    <div class="info-wrapper">
      <InfoLink></InfoLink>
    </div>
    <!-- 商品信息 -->
    <GoodsDetailTitle :data="propertyDetail">
      <p class="name">{{propertyDetail.name}}</p>
      <p class="price">参考价格: <span class="num">¥ {{propertyDetail.price}}</span></p>
      <p class="week-sell">本周出售: <span class="num">{{propertyDetail.weekSoldNum}}</span></p>
      <p class="all-sell">累计已售: <span class="num">{{propertyDetail.soldNum}}</span></p>
    </GoodsDetailTitle>
    <!-- Tab -->
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <!-- 列表 -->
    <Scroll class="scroll">
      <!-- 在售 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="(item, index) in sellList" :key="index">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.sellerNickName}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="buy">购买</div>
        </template>
      </GoodsListItem>
      <!-- 求购 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in buyList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.totalPrice}}</p>
          <p class="user desc">{{item.nickname}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="supply">供应</div>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 2"
      v-for="item in logList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.user}}</p>
        </template>
        <template slot="btn">
          <p class="status">{{item.status}}</p>
          <p class="time">{{item.time}}</p>
        </template>
      </GoodsListItem>
      <div class="line-wrapper" v-show="currentIndex === 3">
        <ChartLine></ChartLine>
      </div>
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
import GoodsDetailTitle from 'page/Store/GoodsDetail/GoodsDetailTitle/GoodsDetailTitle'
import ChartLine from 'page/Store/GoodsDetail/ChartLine/ChartLine'
import Store from 'api/store'
let _store = new Store()

export default {
  mounted() {
    this.getPropertyDetail()
    this.getPropertyDetailForSaleList()
    this.getPropertyDetailForBuyList()
    this.getPropertyDetailOrderRecordsList()
    this.getPropertyDetailStatistics()
  },
  data () {
    return {
      currentIndex: 0, // 当前tab索引
      showBuyWindow: false, // 是否打开购买窗口
      showSupplyWindow: false, // 是否打开供应提示窗口
      tabList: ['出售', '求购', '成交记录', '价格走势'],
      propertyDetail: {}, // 道具详情
      sellList: [], // 在售列表
      buyList: [],
      logList: []
    }
  },
  components: {
    NavBar,
    InfoLink,
    Tab,
    GoodsListItem,
    Scroll,
    BuyWindow,
    AlertWindow,
    GoodsDetailTitle,
    ChartLine
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
    },
    // 获取道具详情
    getPropertyDetail() {
      _store.getPropertyDetail(this.$route.params.goodsTypeId)
        .then(res => {
          this.propertyDetail = res.result
        })
    },
    // 获取道具详情-在售列表
    getPropertyDetailForSaleList() {
      _store.getPropertyDetailForSaleList(this.$route.params.goodsTypeId)
        .then(res => {
          console.log(res)
          this.sellList = res.result.goodsList
        })
    },
    // 获取道具详情-求购列表
    getPropertyDetailForBuyList() {
      _store.getPropertyDetailForBuyList(this.$route.params.goodsTypeId)
        .then(res => {
          console.log(res)
          this.buyList = res.result
        })
    },
    // 获取道具详情-成交记录
    getPropertyDetailOrderRecordsList() {
      _store.getPropertyDetailOrderRecordsList(this.$route.params.goodsTypeId)
        .then(res => {
          console.log(res)
          this.logList = res.result
        })
    },
    // 获取道具详情-价格走势
    getPropertyDetailStatistics() {
      _store.getPropertyDetailStatistics(this.$route.params.goodsTypeId)
        .then(res => {
          console.log(res)
        })
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
    .goods-detail-title
      .name
        font-size $font-size-medium
        color #fff
      .price,
      .week-sell,
      .all-sell
        color $color-text-little
      .num
        color $color-text-money
    .supply-bottom-btn-wrapper
      position fixed
      z-index 999
      bottom 20px
      width calc(100% - 26px)
      padding 0 13px
      .btn
        btn-big()
    .scroll
      fixed-all()
      top 222px
      .goods-list-item
        .status
          font-size $font-size-large
      .line-wrapper
        width 100%
</style>
