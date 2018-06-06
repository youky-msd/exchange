<template>
  <div class="list">
    <ul>
      <router-link :to="{path: `/store/goods-detail/${item.id}`}" tag="li" class="list-item"
      v-for="(item, index) in list" :key="index">
        <img v-lazy="item.image" alt="">
        <div class="list-desc-1">
          <span class="name">{{item.name}}</span>
          <span class="money">¥: {{item.price}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    list: {
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

  .list
    ul
      display flex
      flex-wrap wrap
      justify-content space-between
      .list-item
        box-sizing border-box
        flex 0 0 48%
        padding 5px
        linear(180deg, #4c5779, #2e3859)
        border-radius 10px
        margin-bottom 13px
        img
          border-radius 10px
          width 100%
        .list-desc-1
          padding 10px 3px 3px
          display flex
          justify-content space-between
          .money
            color $color-text-money
            font-size $font-size-small-s
</style>
