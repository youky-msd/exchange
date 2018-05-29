<template>
  <div class="search">
    <div class="search-wrapper">
      <van-icon class="logo" name="search" />
      <!-- <span class="logo"></span> -->
      <form action="#" onsubmit="return false">
        <input v-model="value" type="search" class="search-input" placeholder="输入相关搜索关键词" @keyup.enter="search">
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      value: '' // 搜索关键字
    }
  },
  components: {

  },
  methods: {
    search() {
      this.$router.push({
        path: '/store',
        query: {
          search: this.value
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .search
    background-color #fff
    border-radius 15px
    .search-wrapper
      position relative
      box-sizing border-box
      height 32px
      border-radius 14px
      padding 5px 5px 5px 35px
      .logo
        position absolute
        top 5px
        left 5px
        width 25px
        bottom 0
        font-size 24px
        color #8b8a8a
        // bg('./search')
        // background-size 24px 23px
      form
        height 100%
        .search-input
          width 100%
          height 100%
          line-height normal
          font-size $font-size-medium
          color $color-text
</style>
