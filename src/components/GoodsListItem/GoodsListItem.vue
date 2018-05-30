<template>
  <div class="goods-list-item" @click="link(detail.id)">
    <div class="list-item-wrapper">
      <div class="img">
        <img v-lazy="detail.img" alt="">
        <div class="tag">精品</div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    detail: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  components: {

  },
  methods: {
    link(id) {
      this.$router.push('/store/goods-buy')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .goods-list-item
    .list-item-wrapper
      margin 0 13px
      box-sizing border-box
      padding 5px
      height 74px
      border-radius 10px
      box-linear()
      margin-bottom 10px
      display flex
      align-items center
      justify-content space-between
      .img
        position relative
        border-radius 10px
        height 100%
        flex 0 0 100px
        img
          width 100%
          height 100%
        .tag
          position absolute
          z-index 2
          top 5px
          left 5px
          tag-fine()
      .content
        flex 1
        padding-left 15px
        display flex
        flex-direction column
        justify-content space-around
        height 100%
        .name
          font-size $font-size-medium
          color #fff
        .price
          color $color-text-money
        .desc
          color $color-text-desc
      .btn
        btn-linear()
        margin-right 5px
</style>
