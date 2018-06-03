<template>
  <div class="sell-manage">
    <NavBar title="出售管理"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <div class="up-wrapper">
      <router-link class="link" to="/mine/up">上架</router-link>
    </div>
    <Scroll class="scroll">
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in list" :key="item.id" v-show="currentIndex === 0">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{item.time}}</p>
            <p class="order">{{item.order}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="btn">
          <div class="btn">下架</div>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in exchangingList" :key="item.id" v-show="currentIndex === 1">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{item.time}}</p>
            <p class="order">{{item.order}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in hasSellList" :key="item.id" v-show="currentIndex === 2">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{item.time}}</p>
            <p class="order">{{item.order}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="bottom">
          <div class="desc-wrapper">
            <p class="desc-item">简介: {{item.desc}}</p>
            <p class="desc-item">商品上架时间: {{item.upTime}}</p>
            <p class="desc-item">商品出售时间: {{item.sellTime}}</p>
            <p class="desc-item">商品上架价格: {{item.upPrice}}</p>
            <p class="desc-item">商品出售服务费: {{item.sellServicePrice}}</p>
            <p class="desc-item">商品实际收入: {{item.profit}}</p>
          </div>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in downList" :key="item.id" v-show="currentIndex === 3">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{item.time}}</p>
            <p class="order">{{item.order}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="item in cancelList" :key="item.id" v-show="currentIndex === 4">
        <template slot="top">
          <div class="top-wrapper">
            <p class="time">{{item.time}}</p>
            <p class="order">{{item.order}}</p>
          </div>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
// import GoodsList from 'components/GoodsList/GoodsList'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'

export default {
  data () {
    return {
      currentIndex: 0,
      listStatus: '下架时间: ', // 列表的时间状态
      tabList: ['在售', '交易中', '已售', '已下架', '已取消'], // tab列表
      list: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 1,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 2,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 3,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 4,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 5,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      }],
      exchangingList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 6,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      }],
      hasSellList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 7,
        desc: '嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        upTime: '2018-6-2',
        sellTime: '2018-6-3',
        upPrice: 100,
        sellServicePrice: 10,
        profit: 90
      }],
      downList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 8,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      }],
      cancelList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        order: 465783512315,
        time: '2018-1-12 18:23',
        id: 9,
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿'
      }]
    }
  },
  components: {
    NavBar,
    // GoodsList,
    GoodsListItem,
    Scroll,
    Tab
  },
  methods: {
    toggleTab(index) {
      this.currentIndex = index
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
