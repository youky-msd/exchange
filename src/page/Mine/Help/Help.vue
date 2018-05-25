<template>
  <div class="help">
    <NavBar title="帮助中心"></NavBar>
    <Notice></Notice>
    <div class="help-main">
      <p class="title">帮助中心</p>
      <p class="title-en">HELP CENTER</p>
      <div class="search-wrapper">
        <Search></Search>
      </div>
      <div class="hot-search">
        <ul>
          <li>搜索热词:</li>
          <li v-for="(item, index) in hotSearchList" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="tab-wrapper">
      <Tab :tabList="tabList"></Tab>
    </div>
    <Scroll class="scroll">
      <div class="article-list">
        <ul>
          <li class="article-list-item" v-for="(item, index) in list" :key="index">
            <p class="title">{{item.title}}</p>
            <p class="icon"><van-icon name="arrow" /></p>
          </li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import Search from 'components/Search/Search'

export default {
  data () {
    return {
      isTop: false, // 是否滚动到顶部
      hotSearchList: ['订单异常', '如何交易', '如何冻结账户'], // tab列表
      tabList: ['新手帮助', '我是卖家', '我是买家', '常见问题'], // 热门搜索
      list: [{ // for循环数组
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      },
      {
        title: '如何交易'
      }],
      noviceHelpList: [], // 新手帮助
      sellerList: [], // 卖家
      buyerList: [], // 买家
      usuallyQuestionList: [] // 常见问题
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    Tab,
    Search
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .help
    .help-main
      box-sizing border-box
      height 200px
      padding 50px 13px 0
      .title
        text-align center
        color #fff
        font-size $font-size-v
        padding-bottom 10px
      .title-en
        text-align center
        color #fff
        font-size $font-size-mini
        padding-bottom 18px
    .hot-search
      ul
        display flex
        justify-content center
        color #fff
        font-size $font-size-small-s
        padding 18px 0 26px
        li
          padding 0 5px
    .tab-wrapper
      shadow()
      &.tab-fixed
        position fixed
        z-index 4
        top 50px
        width 100%
    .scroll
      fixed-all()
      top 292px
      .article-list
        ul
          padding 0 20px
          .article-list-item
            display flex
            height 50px
            line-height 50px
            padding 0 10px
            border-bottom 1px solid $color-border
            color #fff
            font-size $font-size-medium
            justify-content space-between
</style>
