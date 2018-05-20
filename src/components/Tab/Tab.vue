<template>
  <div class="tab">
    <ul>
      <li v-for="(item, index) in tabList" :key="index">
        {{item}} {{index}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    tabList: {
      type: Array
    }
  },
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

  .tab
    height 42px
    ul
      display flex
      padding 0 20px
      height 100%
      li
        flex 1
        text-align center
        line-height 42px
</style>
