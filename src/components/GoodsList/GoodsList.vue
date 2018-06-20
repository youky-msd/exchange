<template>
  <div class="goods-list">
    <div class="list">
      <ul>
        <li class="list-item" v-for="(item, index) in list" :key="index" @click="checkDetail(item.id)">
          <div class="list-item-wrapper">
            <div class="img">
              <img v-lazy="item.img" alt="">
            </div>
            <div class="content">
              <p class="content-item"><span class="name">{{item.name}}</span></p>
              <p class="content-item"><span class="price">{{item.price}}DDM积分</span></p>
              <p class="content-item" v-if="item.order"><span class="time">{{item.order}}</span></p>
              <p class="content-item"><span class="time">{{status}}{{item.time}}</span></p>
            </div>
            <slot name="publicBtn" :item="item"></slot>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    status: {
      default: '下架时间: ',
      type: String
    },
    list: {
      type: Array
    },
    isClick: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    checkDetail(id) {
      if (this.isClick) {
        console.log(id)
        this.$router.push({
          path: `/mine/my-buy/buy-detail/${id}`
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .goods-list
    padding 10px
    .list
      ul
        .list-item
          .list-item-wrapper
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
              border-radius 10px
              height 100%
              flex 0 0 100px
              img
                width 100%
                height 100%
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
              .time
                font-size $font-size-small-s
</style>
