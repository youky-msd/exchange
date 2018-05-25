<template>
  <div class="nav-bar">
    <div class="icon-wrapper" @click="back"><van-icon name="arrow-left" /></div>
    <span class="name">{{title}}</span>
    <div class="icon-wrapper search"><van-icon name="search" /></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .nav-bar
    box-sizing border-box
    height 50px
    font-size 22px
    display flex
    padding 0 17px
    bg('./nav-bg')
    justify-content space-between
    align-items center
    .icon-wrapper,
    .name
      flex 1
      height 24px
      color #fff
    .icon-wrapper
      &.search
        display flex
        flex-direction row-reverse
    .name
      text-align center
</style>
