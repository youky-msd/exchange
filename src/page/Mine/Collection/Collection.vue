<template>
  <div class="collection">
    <NavBar title="我的收藏"></NavBar>
    <Scroll class="scroll">
      <GoodsList :list="list"></GoodsList>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import GoodsList from 'components/GoodsList/GoodsList'
import Scroll from 'components/Scroll/Scroll'

export default {
  data () {
    return {
      list: [{
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      }]
    }
  },
  components: {
    NavBar,
    GoodsList,
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .collection
    .scroll
      fixed-all()
      top 50px
</style>
