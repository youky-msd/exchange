<template>
  <div class="goods-detail-title">
    <div class="goods-detail-title-wrapper">
      <div class="img-wrapper">
        <img v-lazy="data.img" alt="">
        <div class="tag">精品</div>
      </div>
      <div class="details-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    data: {
      type: Object
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
  .goods-detail-title
    .goods-detail-title-wrapper
      height 120px
      display flex
      padding 0 12px
      align-items center
      .img-wrapper
        position relative
        box-sizing border-box
        width 140px
        height 90px
        padding 5px
        border-radius 10px
        box-linear()
        img
          width 100%
          height 100%
        .tag
          position absolute
          z-index 2
          top 10px
          left 10px
          tag-fine()
      .details-wrapper
        box-sizing border-box
        padding 15px 0 15px 15px
        height 100%
        display flex
        flex-direction column
        justify-content space-around
</style>
