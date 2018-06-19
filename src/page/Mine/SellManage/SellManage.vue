<template>
  <div class="sell-manage">
    <NavBar title="出售管理"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <div class="up-wrapper">
      <router-link class="link" to="/mine/up">上架</router-link>
    </div>
    <Scroll class="scroll">
      <!-- 在售 -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in sellList" :key="item.id" v-show="currentIndex === 0">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{getTime(item.createTime)}}</p>
            <p class="order">{{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user desc">{{item.goodsPrice}}DDM积分 * {{item.sellCnt}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click="down(item.goodsId)">下架</div>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
      <!-- 交易中 -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in exchangingList" :key="item.id" v-show="currentIndex === 1">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{getTime(item.createTime)}}</p>
            <p class="order">{{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user desc">{{item.goodsPrice}}DDM积分 * {{item.sellCnt}}</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
      <!-- 已售 -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in hasSellList" :key="item.id" v-show="currentIndex === 2">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{getTime(item.createTime)}}</p>
            <p class="order">{{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user desc">{{item.goodsPrice}}DDM积分 * {{item.sellCnt}}</p>
        </template>
        <template slot="bottom">
          <div class="desc-wrapper">
            <p class="desc-item">简介: {{item.goodsDesc}}</p>
            <p class="desc-item">商品上架时间: {{getTime(item.createTime)}}</p>
            <p class="desc-item">商品出售时间: {{getTime(item.sellTime)}}</p>
            <p class="desc-item">商品出售价格: {{item.goodsPrice}}</p>
            <p class="desc-item">商品出售价格: {{item.goodsPrice}}</p>
            <p class="desc-item">商品出售服务费: {{item.charge}}</p>
            <p class="desc-item">商品实际收入: {{item.actPrice}}</p>
          </div>
        </template>
      </GoodsListItem>
      <!-- 已下架 -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in downList" :key="item.id" v-show="currentIndex === 3">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{getTime(item.createTime)}}</p>
            <p class="order">{{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user desc">{{item.goodsPrice}}DDM积分 * {{item.sellCnt}}</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
      <!-- 已取消 -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in cancelList" :key="item.id" v-show="currentIndex === 4">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{getTime(item.createTime)}}</p>
            <p class="order">{{item.orderNo}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user desc">{{item.goodsPrice}}DDM积分 * {{item.sellCnt}}</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.goodsDesc}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import tool from 'common/js/tool'
import SellManage from 'api/mine/sellManage'
const _sellManage = new SellManage()

export default {
  mounted() {
    this.getSellList()
    this.getExchangingList()
    this.getHasSellList()
    this.getDownList()
    this.getCancelList()
  },
  data () {
    return {
      currentIndex: 0,
      listStatus: '下架时间: ', // 列表的时间状态
      tabList: ['在售', '交易中', '已售', '已下架', '已取消'], // tab列表
      sellList: [], // 在售列表
      exchangingList: [], // 交易中列表
      hasSellList: [], // 已售列表
      downList: [], // 已下架列表
      cancelList: [] // 已取消列表
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
    // 在售列表
    getSellList() {
      _sellManage.getGoodsManageList(1)
        .then(res => {
          this.sellList = res.result
        })
    },
    // 交易中列表
    getExchangingList() {
      _sellManage.getSellManageLogList(1)
        .then(res => {
          this.exchangingList = res.result
        })
    },
    // 已售订单列表
    getHasSellList() {
      _sellManage.getSellManageLogList(2)
        .then(res => {
          this.hasSellList = res.result
        })
    },
    // 已下架列表
    getDownList() {
      _sellManage.getGoodsManageList(2)
        .then(res => {
          this.downList = res.result
        })
    },
    // 取消订单列表
    getCancelList() {
      _sellManage.getSellManageLogList(3)
        .then(res => {
          this.cancelList = res.result
        })
    },
    // 下架
    down(id) {
      _sellManage.goodsDown(id)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '下架成功'
            })
            this.getSellList()
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

  .sell-manage
    .up-wrapper
      position absolute
      z-index 2
      top 13px
      right 17px
      font-size 24px
      color #fff
      .link
        display block
        padding 5px
        color #fff
        font-size $font-size-medium-x
    .scroll
      fixed-all()
      top 92px
      padding-top 10px
      .top-wrapper
        line-height 20px
        display flex
        justify-content space-between
      .desc
        line-height 20px
      .btn
        btn-linear()
      .desc-wrapper
        padding-top 5px
        .desc-item
          line-height 16px
</style>
