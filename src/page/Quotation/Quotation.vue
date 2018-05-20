<template>
  <div class="quotation">
    <NavBar title="行情"></NavBar>
    <Notice></Notice>
    <div class="quotation-title">
      <ul>
        <li>商品名称</li>
        <li>订购价</li>
        <li>涨跌幅</li>
      </ul>
    </div>
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
      padding-top 45px
      height 40px
      line-height 40px
      ul
        display flex
        justify-content space-around
        li
          flex 1
          text-align center
</style>
