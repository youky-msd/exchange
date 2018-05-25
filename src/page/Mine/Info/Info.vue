<template>
  <div class="info">
    <NavBar title="消息中心"></NavBar>
    <Notice></Notice>
    <div class="tab-wrapper">
      <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    </div>
    <Scroll class="scroll">
      <div class="list">
        <ul>
          <li class="list-item" v-for="item in exchangeInfoList" :key="item.id">
            <div class="list-item-info-wrapper">
              <p class="text"><span class="text-desc">您在售的物品</span><span class="text-name">{{item.name}}</span></p>
              <p class="price"><span class="price-text">收入</span><span class="price-num">¥{{item.price}}</span></p>
            </div>
            <div class="list-item-info-wrapper">
              <p class="status">{{item.status}}</p>
              <p class="time">{{item.time}}</p>
            </div>
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

export default {
  data () {
    return {
      tabList: ['交易消息', '系统消息'], // tab 标题
      exchangeInfoList: [{ // 交易信息列表
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      },
      {
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00'
      }],
      systemInfoList: [] // 系统信息列表
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    Tab
  },
  methods: {
    toggleTab(index) {
      // 根据索引判断取哪个list
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .info
    .tab-wrapper
      position relative
      z-index 2
      padding 45px 0 10px
      public-box-shadow()
    .scroll
      fixed-all()
      top 147px
      .list
        ul
          padding 0 24px
          .list-item
            box-sizing border-box
            padding 10px
            height 74px
            display flex
            flex-direction column
            justify-content space-around
            border-bottom 1px solid $color-border
            .list-item-info-wrapper
              display flex
              justify-content space-between
              .text
                font-size $font-size-medium
                .text-desc
                  color $color-text
                .text-name
                  color $color-text-desc
              .price
                font-size $font-size-small
                .price-text
                  padding-right 5px
                  color $color-text-desc
                .price-num
                  color $color-text-money
              .status,
              .time
                font-size $font-size-mini
                color $color-text-little
</style>
