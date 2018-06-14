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
  mounted() {
    this.backWrite()
  },
  data () {
    return {
      value: '' // 搜索关键字
    }
  },
  components: {

  },
  methods: {
    // 搜索
    search() {
      if (this.value) {
        this.$router.push({
          path: '/store',
          query: {
            search: this.value
          }
        })
      } else {
        this.$router.push({
          path: '/store'
        })
      }
    },
    // 回填
    backWrite() {
      console.log(this.$route.path)
      if (this.$route.query.search) {
        this.value = this.$route.query.search
      }
    }
  }
  // watch: {
  //   value(cul, old) {
  //     if (this.$route.path === '/store') {
  //       this.$emit('quickSearch', cul)
  //       console.log('变化', cul)
  //     }
  //   }
  // }
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
