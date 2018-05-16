<template>
  <div class="nav">
    <ul>
      <router-link class="nav-item" tag="li" to="/index">
        <span class="img index"></span>
        <span class="text">首页</span>
      </router-link>
      <router-link class="nav-item" tag="li" to="/store">
        <span class="img store"></span>
        <span class="text">商城</span>
      </router-link>
      <router-link class="nav-item" tag="li" to="/quotation">
        <span class="img quotation"></span>
        <span class="text">行情</span>
      </router-link>
      <router-link class="nav-item" tag="li" to="/mine">
        <span class="img mine"></span>
        <span class="text">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .nav
    position absolute
    bottom 0
    width 100%
    ul
      display flex
      padding-bottom 24px
      .nav-item
        flex 1
        display flex
        flex-direction column
        align-items center
        &.active
          .img
            &.index
              bg('index-hover')
            &.store
              bg('store-hover')
            &.quotation
              bg('quotation-hover')
            &.mine
              bg('mine-hover')
          .text
            color $color-text-hover
        .img
          display block
          width 30px
          height 30px
          margin-bottom 9px
          &.index
            bg('index')
          &.store
            bg('store')
          &.quotation
            bg('quotation')
          &.mine
            bg('mine')
        .text
          text-align center
</style>
