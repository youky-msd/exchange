<template>
  <div class="goods-list-item">
    <div class="list-item-wrapper">
      <div class="top">
        <slot name="top"></slot>
      </div>
      <div class="list-item-container">
        <div class="img" @click="link()" v-show="!showAvatar">
          <img v-lazy="detail.image" alt="">
          <div class="tag">精品</div>
        </div>
        <div class="avatar" v-show="showAvatar">
          <img v-lazy="detail.avatar" alt="">
        </div>
        <div class="content" @click="link()">
          <slot name="content"></slot>
        </div>
        <div class="content content-right">
          <slot name="btn"></slot>
        </div>
      </div>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    detail: {
      type: Object
    },
    isLink: {
      default: false,
      type: Boolean
    },
    showAvatar: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  components: {

  },
  methods: {
    link() {
      if (this.isLink) {
        this.$emit('openDetail')
      }
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
      box-linear()
      padding 5px
      margin-bottom 10px
      border-radius 10px
      .list-item-container
        height 74px
        display flex
        align-items center
        justify-content space-between
        .avatar,
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
        .avatar
          flex 0 0 74px
          overflow hidden
          box-sizing border-box
          padding 10px
          border-radius 50%
          img
            border-radius 50%
        .content
          flex 2
          padding-left 15px
          display flex
          flex-direction column
          justify-content space-around
          height 100%
          &.content-right
            flex 1
            align-items flex-end
            padding-right 10px
          .name
            font-size $font-size-medium
            color #fff
          .price
            color $color-text-money
          .desc
            color $color-text-desc
        .btn
          btn-linear()
</style>
