<template>
  <div class="buy-manage">
    <NavBar title="购买管理"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="item in buyingList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.gameName}}</p>
          <p class="user desc">{{item.goodsName}}</p>
          <p class="price">¥ {{item.orderPrice}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="openSupplyWindow(item.id)">取消购买</div>
        </template>
        <template slot="bottom">
          <p class="bottom">简介: {{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in buyDoneList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.gameName}}</p>
          <p class="user desc">{{item.goodsName}}</p>
          <p class="price">¥ {{item.orderPrice}}</p>
        </template>
        <template slot="bottom">
          <p class="bottom">简介: {{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 2"
      v-for="item in buyCancelList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.gameName}}</p>
          <p class="user desc">{{item.goodsName}}</p>
          <p class="price">¥ {{item.orderPrice}}</p>
        </template>
        <template slot="bottom">
          <p class="bottom">简介: {{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import tool from 'common/js/tool'
import BuyManage from 'api/mine/buyManage'
const _buyManage = new BuyManage()

export default {
  mounted() {
    this.getBuyingList()
    this.getBuyDoneList()
    this.getBuyCancelList()
  },
  data () {
    return {
      currentIndex: 0, // 当前索引
      isClick: true, // 是否可以点击
      listStatus: '发起', // 列表的时间状态
      tabList: ['正在购买', '购买完成', '取消购买'], // tab列表
      buyingList: [], // 正在购买
      buyDoneList: [], // 购买完成
      buyCancelList: [] // 取消购买
    }
  },
  components: {
    NavBar,
    GoodsListItem,
    Scroll,
    Tab
  },
  methods: {
    // 切换tab
    toggleTab(index) {
      this.currentIndex = index
    },
    // 正在购买列表
    getBuyingList() {
      _buyManage.buyLogList(1)
        .then(res => {
          this.buyingList = res.result
        })
    },
    // 购买完成列表
    getBuyDoneList() {
      _buyManage.buyLogList(2)
        .then(res => {
          this.buyDoneList = res.result
        })
    },
    // 取消购买列表
    getBuyCancelList() {
      _buyManage.buyLogList(3)
        .then(res => {
          this.buyCancelList = res.result
        })
    },
    // 时间戳处理
    getTime(timestamp) {
      return tool.timestampToTimeHM(timestamp)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .buy-manage
    .scroll
      fixed-all()
      top 92px
      padding-top 10px
      .goods-list-item
        .top
          display flex
          justify-content space-between
          line-height 16px
        .bottom
          line-height 16px
        .btn
          btn-linear()
          width 70px
</style>
