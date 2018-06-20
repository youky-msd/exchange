<template>
  <div class="collection">
    <NavBar title="我的求购"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <!-- <GoodsList :list="list" :status="listStatus" :isClick="isClick"></GoodsList> -->
      <!-- 正在求购 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="item in buylist" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.goodName}}</p>
          <p class="price">{{item.price}}DDM积分</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="cancelBuy(item.id)">取消求购</div>
        </template>
        <!-- <template slot="bottom">
          <p class="bottom">简介: {{item.description}}</p>
        </template> -->
      </GoodsListItem>
      <!-- 交易中 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in exchangingList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.goodName}}</p>
          <p class="price">{{item.price}}DDM积分</p>
        </template>
        <!-- <template slot="bottom">
          <p class="bottom">简介: {{item.description}}</p>
        </template> -->
      </GoodsListItem>
      <!-- 已完成 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 2"
      v-for="item in doneList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.goodName}}</p>
          <p class="price">{{item.price}}DDM积分</p>
        </template>
        <!-- <template slot="bottom">
          <p class="bottom">简介: {{item.description}}</p>
        </template> -->
      </GoodsListItem>
      <!-- 已取消 -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 3"
      v-for="item in cancelList" :key="item.id">
        <template slot="top">
          <div class="top">
            <p>{{getTime(item.createTime)}}</p>
            <p>订单号: {{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="user desc">{{item.goodName}}</p>
          <p class="price">{{item.price}}DDM积分</p>
        </template>
        <!-- <template slot="bottom">
          <p class="bottom">简介: {{item.description}}</p>
        </template> -->
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import tool from 'common/js/tool'
import MyBuy from 'api/mine/myBuy'
const _myBuy = new MyBuy()

export default {
  mounted() {
    this.getBuyList()
    this.getExchangingList()
    this.getDoneList()
    this.getCancelList()
  },
  data () {
    return {
      currentIndex: 0,
      isClick: true, // 是否可以点击
      listStatus: '发起', // 列表的时间状态
      tabList: ['正在求购', '交易中', '已完成', '已取消'], // tab列表
      buylist: [],
      exchangingList: [],
      doneList: [],
      cancelList: []
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
    // 正在求购列表
    getBuyList() {
      _myBuy.getWantToBuyList(1)
        .then(res => {
          this.buylist = res.result
        })
    },
    // 交易中列表
    getExchangingList() {
      _myBuy.getWantToBuyList(2)
        .then(res => {
          this.exchangingList = res.result
        })
    },
    // 已完成列表
    getDoneList() {
      _myBuy.getWantToBuyList(3)
        .then(res => {
          this.doneList = res.result
        })
    },
    // 已取消列表
    getCancelList() {
      _myBuy.getWantToBuyList(4)
        .then(res => {
          this.cancelList = res.result
        })
    },
    // 取消求购
    cancelBuy(orderNo) {
      _myBuy.cancelBuy(orderNo)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '已取消求购'
            })
            this.getBuyList()
          }
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

  .collection
    .scroll
      padding-top 10px
      fixed-all()
      top 92px
      .top
        display flex
        justify-content space-between
        line-height 16px
      .bottom
        line-height 16px
      .btn
        padding 0 5px
</style>
