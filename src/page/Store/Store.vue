<template>
  <div class="store">
    <TopSearch class="search"></TopSearch>
    <Notice></Notice>
    <div class="list-wrapper-top">
      <div class="list-title">
        <p class="text">综合排序</p>
        <div class="filter-select">
          <div class="select-only" @click="onlyBuyList">
            <span class="select-only-icon"><van-icon class="icon" name="success" v-show="isOnlyBuyList"/></span>
            <span class="select-only-text">只看求购</span>
          </div>
        </div>
      </div>
    </div>
    <Scroll class="scroll" :isMain="true">
      <List :list="list"></List>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Scroll from 'components/Scroll/Scroll'
import List from 'components/List/List'
import TopSearch from 'page/Index/TopSearch/TopSearch'
import Store from 'api/store'
let _store = new Store()

export default {
  mounted() {
    this.getGoodsList()
  },
  data () {
    return {
      isOnlyBuyList: false, // 只看求购
      list: [] // 商品列表
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    List,
    TopSearch
  },
  methods: {
    // 获取商品列表
    getGoodsList() {
      _store.getGoodsList()
        .then(res => {
          this.list = res.result
        })
    },
    // 获取求购列表
    getAllBuyList() {
      _store.getAllBuyList(1)
        .then(res => {
          this.list = res.result
        })
    },
    // 只看求购
    onlyBuyList() {
      this.isOnlyBuyList = !this.isOnlyBuyList
      if (!this.isOnlyBuyList) {
        this.getGoodsList()
      } else {
        this.getAllBuyList()
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .store
    fixed-all()
    .search
      height 50px
      bg('../../common/img/nav-bg')
    .list-wrapper-top
      position relative
      padding 50px 13px 0
      box-shadow 0 20px 20px $color-background
      z-index 2
      .list-title
        padding 0 3px 10px
        background-color $color-background
        display flex
        justify-content space-between
        align-items center
        .text
          font-size $font-size-large
          color #fff
        .filter-select
          display flex
          color $color-text-desc
          .select-only
            display flex
            align-items center
            .select-only-icon
              display block
              width 12px
              height 12px
              background-color #fff
              .icon
                font-size $font-size-small-s
            .select-only-text
              padding-left 4px
          .filter-btn
            display flex
            align-items center
            .icon
              color #fff
              font-size $font-size-small
              padding-left 4px
            .text
              padding-left 4px
              font-size $font-size-small
              color $color-text-desc
    .scroll
      fixed-all()
      top 126px
      padding 10px 13px 0

</style>
