<template>
  <div class="tab">
    <ul>
      <li v-for="(item, index) in tabList" :key="index"
       @click="selectTab(index)" :class="{active: currentIndex === index}">
        {{item}}
        <div class="active-line"></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    tabList: {
      type: Array
    },
    parentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentIndex: this.parentIndex
    }
  },
  methods: {
    // 切换tab
    selectTab(index) {
      // class
      this.currentIndex = index
      // 传递索引
      this.$emit('toggleTab', index)
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
      padding 0 30px
      height 100%
      justify-content space-around
      li
        box-sizing border-box
        color $color-text-desc
        position relative
        flex 0 0 70px
        text-align center
        height 42px
        line-height 42px
        font-size $font-size-medium
        &.active
          color #fff
          .active-line
            linear()
            width 100%
        .active-line
          position absolute
          left 0
          bottom 0
          height 2px
          transition all 0.5s
          width 0
</style>
