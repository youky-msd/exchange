<template>
  <div class="goods-detail">
    <!-- 出售详情 -->
    <GoodsBuy v-show="ShowSellDetail" @closeSellDetail="closeSellDetail"
     :detail="sellSelect" :balance="user.balance"></GoodsBuy>
    <!-- 购买弹窗 -->
    <BuyWindow :show="showBuyWindow" @cancel="cancelBuy" @buyDone="buyDone"
    :goodsId="selectGoods.goodsId" :sellPrice="selectGoods.sellPrice"></BuyWindow>
    <!-- 供应提示弹窗 -->
    <AlertWindow class="supply-alert-window" :show="showSupplyWindow">
      <p class="title">供应求购</p>
      <div class="buying-detail">
        <p class="desc">供应可得: <span class="price">{{buyingDetail.realIncome}}DDM积分</span></p>
        <p class="desc">共{{buyingDetail.count}}件 手续费: {{buyingDetail.commission}}DDM积分</p>
      </div>
      <div class="desc-wrapper">
        <p class="desc">您已经选择了为求购者供应此商品，点击“供应”后，系统将把求购者信息发送到您的消息中心，请注意查收，请在72小时之内完成交易。如有问题，请随时联系客服。</p>
      </div>
      <div class="btn-wrapper">
        <div class="btn" @click="cancelSupplyWindow">取消</div>
        <div class="btn do" @click="supply">供应</div>
      </div>
    </AlertWindow>
    <!-- 底部供应按钮 -->
    <router-link tag="div" :to="{path: `/store/want-to-buy/${$route.params.goodsTypeId}`}" class="supply-bottom-btn-wrapper" v-show="currentIndex === 1">
      <div class="btn">发起求购</div>
    </router-link>
    <NavBar :title="propertyDetail.name"></NavBar>
    <!-- 右上消息按钮 -->
    <div class="info-wrapper">
      <InfoLink></InfoLink>
    </div>
    <!-- 商品信息 -->
    <GoodsDetailTitle :data="propertyDetail">
      <p class="name">{{propertyDetail.name}}</p>
      <p class="price">参考价格: <span class="num">{{propertyDetail.price}}DDM积分</span></p>
      <p class="week-sell">本周出售: <span class="num">{{propertyDetail.weekSoldNum}}</span></p>
      <p class="all-sell">累计已售: <span class="num">{{propertyDetail.soldNum}}</span></p>
    </GoodsDetailTitle>
    <!-- Tab -->
    <Tab :tabList="tabList" @toggleTab="toggleTab" :parentIndex="currentIndex"></Tab>
    <!-- 列表 -->
    <Scroll class="scroll" :data="currentScrollData" :pullup="pullup" @scrollToEnd="scrollToEnd">
      <!-- 在售 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="(item, index) in sellList" :key="index" :isLink="true" @openDetail="openDetail(item)">
        <template slot="content">
          <p class="price">{{item.price}}DDM积分</p>
          <p class="user desc">{{item.sellerNickName}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="openBuyWindow(item)">购买</div>
        </template>
      </GoodsListItem>
      <!-- 求购 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in buyList" :key="item.id" :showAvatar="true">
        <template slot="content">
          <p class="price">{{item.totalPrice}}DDM积分 求购数量{{item.count}}件</p>
          <p class="user desc">{{item.nickname}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="openSupplyWindow(item.id, item.orderId)">供应</div>
        </template>
      </GoodsListItem>
      <!-- 成交记录 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 2"
      v-for="item in logList" :key="item.id" :showAvatar="true">
        <template slot="content">
          <p class="price">{{item.price}}DDM积分</p>
          <p class="user desc">{{item.nickname}}</p>
        </template>
        <template slot="btn">
          <p class="status">{{item.status}}</p>
          <p class="time">{{getTime(item.finishTime)}}</p>
        </template>
      </GoodsListItem>
      <!-- 价格走势 -->
      <div class="line-wrapper" v-show="currentIndex === 3">
        <ChartLine :id="$route.params.goodsTypeId"></ChartLine>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import AlertWindow from 'components/AlertWindow/AlertWindow'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Tab from 'components/Tab/Tab'
import InfoLink from 'page/Index/TopSearch/InfoLink/InfoLink'
import BuyWindow from 'page/Store/BuyWindow/BuyWindow'
import GoodsDetailTitle from 'page/Store/GoodsDetail/GoodsDetailTitle/GoodsDetailTitle'
import ChartLine from 'page/Store/GoodsDetail/ChartLine/ChartLine'
import GoodsBuy from 'page/Store/GoodsBuy/GoodsBuy'
import tool from 'common/js/tool.js'
import Store from 'api/store'
import { mapGetters } from 'vuex'
const _store = new Store()

export default {
  mounted() {
    this.getPropertyDetail()
    this.getPropertyDetailForSaleList()
    this.getPropertyDetailForBuyList()
    this.getPropertyDetailOrderRecordsList()
  },
  data () {
    return {
      currentIndex: parseInt(this.$route.query.index) ? parseInt(this.$route.query.index) : 0, // 当前tab索引
      showBuyWindow: false, // 是否打开购买窗口
      showSupplyWindow: false, // 是否打开供应提示窗口
      ShowSellDetail: false, // 是否打开出售详情
      tabList: ['出售', '求购', '成交记录', '价格走势'],
      propertyDetail: {}, // 道具详情
      sellList: [], // 在售列表
      buyList: [], // 求购列表
      logList: [], // 日志记录列表
      sellSelect: {}, // 当前点击的在售商品
      selectGoods: { // 选择的商品价格
        goodsId: '',
        sellPrice: 0
      },
      chartLineList: [], // 走势
      supplyId: '', // 供应ID
      buyingDetail: {}, // 正在求购详情
      pullup: true,
      currentScrollData: [], // 需要当前scroll传递的scroll data
      sellListPageNum: 0,
      buyListPageNum: 0,
      logListPageNum: 0
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
    ChartLine,
    GoodsBuy
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    // 打开在售详情
    openDetail(item) {
      this.sellSelect = item
      this.sellSelect.name = this.propertyDetail.name
      this.ShowSellDetail = true
      // console.log(this.sellSelect)
    },
    // 打开购买窗口
    openBuyWindow(goods) {
      this.showBuyWindow = true
      this.selectGoods.goodsId = goods.id
      this.selectGoods.sellPrice = goods.price
    },
    // 取消购买,关闭窗口
    cancelBuy() {
      this.showBuyWindow = false
    },
    // 购买完成后回调
    buyDone() {
      this.cancelBuy()
      // 更新
      this.getPropertyDetailForSaleList()
    },
    // 切换tab
    toggleTab(index) {
      this.currentIndex = index
      if (index === 0) {
        this.currentScrollData = this.sellList
      } else if (index === 1) {
        this.currentScrollData = this.buyList
      } else if (index === 2) {
        this.currentScrollData = this.logList
      }
    },
    // 上拉加载方法
    scrollToEnd() {
      if (this.currentIndex === 0) {
        this.getPropertyDetailForSaleList()
      } else if (this.currentIndex === 1) {
        this.getPropertyDetailForBuyList()
      } else if (this.currentIndex === 2) {
        this.getPropertyDetailOrderRecordsList()
      }
    },
    // 供应按钮,弹出窗口
    openSupplyWindow(id, orderId) {
      this.showSupplyWindow = true
      this.supplyId = id
      this.getBuyingDetail(orderId)
    },
    // 供应
    supply() {
      _store.supply(this.supplyId)
        .then(res => {
          this.cancelSupplyWindow()
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '供应成功'
            })
            this.buyList = []
            this.buyListPageNum = 0
            this.getPropertyDetailForBuyList()
          }
        })
    },
    // 关闭供应窗口
    cancelSupplyWindow() {
      this.showSupplyWindow = false
    },
    // 关闭出售详情页面
    closeSellDetail() {
      this.ShowSellDetail = false
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
      _store.getPropertyDetailForSaleList(this.$route.params.goodsTypeId, ++this.sellListPageNum)
        .then(res => {
          const goodsList = res.result.goodsList
          if (goodsList instanceof Array && goodsList.length === 0) {
            --this.sellListPageNum
          }
          this.sellList = this.sellList.concat(goodsList)
        })
    },
    // 获取道具详情-求购列表
    getPropertyDetailForBuyList() {
      _store.getPropertyDetailForBuyList(this.$route.params.goodsTypeId, ++this.buyListPageNum)
        .then(res => {
          const purchaseList = res.result.purchaseList
          if (purchaseList instanceof Array && purchaseList.length === 0) {
            --this.buyListPageNum
          }
          if (purchaseList instanceof Array && purchaseList.length > 0) {
            this.buyList = this.buyList.concat(purchaseList)
          }
        })
    },
    // 获取道具详情-成交记录
    getPropertyDetailOrderRecordsList() {
      _store.getPropertyDetailOrderRecordsList(this.$route.params.goodsTypeId, ++this.logListPageNum)
        .then(res => {
          if (res.result instanceof Array && res.result.length === 0) {
            --this.logListPageNum
          }
          if (res.result instanceof Array) {
            this.logList = this.logList.concat(res.result)
          }
        })
    },
    // 处理时间
    getTime(timestamp) {
      return tool.timestampToTime(timestamp)
    },
    // 获取正在求购详情
    getBuyingDetail(orderId) {
      _store.getBuyingDetail(orderId)
        .then(res => {
          this.buyingDetail = res.result
          console.log(this.buyingDetail)
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
      z-index 9
      bottom 20px
      width calc(100% - 26px)
      padding 0 13px
      .btn
        btn-big()
    .supply-alert-window
      .buying-detail
        padding-top 10px
        font-size $font-size-medium-x
        .desc
          line-height 26px
          .price
            color $color-text-money
      .title
        color #fff
        text-align center
        font-size $font-size-large-x
      .desc-wrapper
        padding-top 20px
        line-height 20px
        color $color-text-desc
        font-size $font-size-medium
        .desc
          text-indent 2em
      .btn-wrapper
        position absolute
        width calc(100% - 50px)
        bottom 20px
        display flex
        justify-content space-between
        .btn
          btn(120px,38px,#5e698b,$font-size-large,#fff)
          &.do
            background-color #4a4aa3
    .scroll
      fixed-all()
      top 222px
      .goods-list-item
        .status
          font-size $font-size-large
        .time
          font-size $font-size-small-s
      .line-wrapper
        width 100%
</style>
