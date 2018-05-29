<template>
  <div class="quotation">
    <NavBar title="行情" :showBack="false"></NavBar>
    <Notice></Notice>
    <div class="quotation-title">
      <ul>
        <li>商品名称</li>
        <li>订购价</li>
        <li>涨跌幅</li>
      </ul>
    </div>
    <Scroll class="scroll" :isMain="true">
      <div class="quotation-list">
        <ul>
          <li class="quotation-item" v-for="(item, index) in list" :key="index">
            <div class="quotation-content name-wrapper">
              <span class="name">{{item.name}}</span>
              <span class="name-en">{{item.en}}</span>
            </div>
            <div class="quotation-content desc-wrapper">
              <span class="price">¥: {{item.price}}</span>
              <span class="number">数量: {{item.number}}</span>
            </div>
            <div class="quotation-content echarts">
              <trend
                :data="[0, 2, 5, 9, 0, 9, 1, 8, 2, 9, 0]"
                :stroke-width="5"
                :gradient="['#5bfc5c']"
                auto-draw
                smooth
                :height="72"
              >
              </trend>
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
import List from 'components/List/List'

export default {
  data () {
    return {
      lineData: {
        datasets: [
          {
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      list: [{
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      },
      {
        name: '绝地求生',
        en: 'JUEDIQIUSHENG',
        price: 122,
        number: 10
      }]
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    List
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .quotation
    fixed-all()
    .quotation-title
      position relative
      z-index 2
      padding-top 45px
      height 40px
      line-height 40px
      box-shadow: 0 10px 20px #272f4b
      ul
        display flex
        justify-content space-around
        li
          flex 1
          text-align center
    .scroll
      fixed-all()
      top 135px
      .quotation-list
        ul
          padding 0 13px
          .quotation-item
            height 72px
            border-radius 16px
            linear(,#4c5779,#2e3859)
            display flex
            margin-bottom 10px
            .quotation-content
              flex 1
              box-sizing border-box
              &.name-wrapper
                display flex
                flex-direction column
                justify-content space-around
                padding 15px 0 15px 15px
                .name
                  font-size $font-size-medium
                  color #fff
                .number
                  color $color-text-desc
              &.desc-wrapper
                display flex
                flex-direction column
                justify-content space-around
                text-align center
                padding 15px 0
                .price
                  color $color-text-money
</style>
