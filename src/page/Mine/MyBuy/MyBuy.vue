<template>
  <div class="collection">
    <NavBar title="我的求购"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <!-- <GoodsList :list="list" :status="listStatus" :isClick="isClick"></GoodsList> -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="item in buylist" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.desc}}</p>
        </template>
        <template slot="btn">
          <div class="btn" @click.stop="cancel">取消求购</div>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 1"
      v-for="item in exchangingList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 2"
      v-for="item in doneList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 3"
      v-for="item in cancelList" :key="item.id">
        <template slot="content">
          <p class="price">¥ {{item.price}}</p>
          <p class="user desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
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
          console.log(res)
        })
    },
    // 交易中列表
    getExchangingList() {
      _myBuy.getWantToBuyList(2)
        .then(res => {
          console.log(res)
        })
    },
    // 已完成列表
    getDoneList() {
      _myBuy.getWantToBuyList(3)
        .then(res => {
          console.log(res)
        })
    },
    // 已取消列表
    getCancelList() {
      _myBuy.getWantToBuyList(4)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .collection
    .scroll
      fixed-all()
      top 92px
</style>
