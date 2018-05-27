<template>
  <div class="collection">
    <NavBar title="我的求购"></NavBar>
    <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    <Scroll class="scroll">
      <GoodsList :list="list" :status="listStatus" :isClick="isClick"></GoodsList>
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
      isClick: true, // 是否可以点击
      listStatus: '发起', // 列表的时间状态
      tabList: ['正在求购', '交易中', '已完成', '已取消'], // tab列表
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

  .collection
    .scroll
      fixed-all()
      top 92px
</style>
