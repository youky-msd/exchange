<template>
  <div class="collection">
    <NavBar title="我的求购"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <!-- <GoodsList :list="list" :status="listStatus" :isClick="isClick"></GoodsList> -->
      <GoodsListItem class="goods-list-item" :detail="item" v-show="currentIndex === 0"
      v-for="item in list" :key="item.id">
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
// import GoodsList from 'components/GoodsList/GoodsList'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'

export default {
  data () {
    return {
      currentIndex: 0,
      isClick: true, // 是否可以点击
      listStatus: '发起', // 列表的时间状态
      tabList: ['正在求购', '交易中', '已完成', '已取消'], // tab列表
      list: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 1,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 2,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 4,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 5,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 6,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 7,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 8,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 9,
        desc: '描述描述描述描述描述描述描述'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 10,
        desc: '描述描述描述描述描述描述描述'
      }],
      exchangingList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 100,
        desc: '描述描述描述描述描述描述描述'
      }],
      doneList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 101,
        desc: '描述描述描述描述描述描述描述'
      }],
      cancelList: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 102,
        desc: '描述描述描述描述描述描述描述'
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
      if (index === 0) {
        this.isClick = true
      } else {
        this.isClick = false
      }
      this.currentIndex = index
    },
    cancel() {
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
