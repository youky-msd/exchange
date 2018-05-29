<template>
  <div class="buy-manage">
    <NavBar title="购买管理"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <GoodsList :list="list" :status="listStatus" :isClick="isClick">
        <template slot-scope="slotProps" slot="publicBtn">
          <div class="btn" v-show="currentIndex === 0">取消购买</div>
        </template>
      </GoodsList>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import GoodsList from 'components/GoodsList/GoodsList'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'

export default {
  data () {
    return {
      currentIndex: 0, // 当前索引
      isClick: true, // 是否可以点击
      listStatus: '发起', // 列表的时间状态
      tabList: ['正在购买', '购买完成', '取消购买'], // tab列表
      list: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23',
        id: 3
      }]
    }
  },
  components: {
    NavBar,
    GoodsList,
    Scroll,
    Tab
  },
  methods: {
    toggleTab(index) {
      this.currentIndex = index
      if (index === 0) {
        this.isClick = true
      } else {
        this.isClick = false
      }
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
      .btn
        btn-linear()
        width 70px
</style>
