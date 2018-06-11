<template>
  <div class="quotation">
    <NavBar title="行情" :showBack="false">
    </NavBar>
    <div class="info-wrapper">
      <InfoLink></InfoLink>
    </div>
    <Notice></Notice>
    <div class="quotation-title">
      <ul>
        <li>商品名称</li>
        <li>平均价</li>
        <li>跌涨幅</li>
      </ul>
    </div>
    <Scroll class="scroll" :isMain="true">
      <div class="quotation-list">
        <ul>
          <li class="quotation-item" v-for="(item, index) in list" :key="index">
            <div class="quotation-content name-wrapper">
              <span class="name">{{item.goodsName}}</span>
              <span class="name-en"> </span>
            </div>
            <div class="quotation-content desc-wrapper">
              <span class="price">¥: {{item.avgPrice}}</span>
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
import InfoLink from 'page/Index/TopSearch/InfoLink/InfoLink'
import Quoatation from 'api/quotation'
const _quotation = new Quoatation()

export default {
  mounted() {
    this.loadQuotationList()
  },
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
      list: []
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    List,
    InfoLink
  },
  methods: {
    loadQuotationList() {
      _quotation.getQuotationList()
        .then(res => {
          console.log(res)
          this.list = res.result
        })
    }
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
    .info-wrapper
      position absolute
      z-index 2
      top 9px
      right 17px
      display flex
      width 39px
      height 32px
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
