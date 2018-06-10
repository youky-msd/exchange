<template>
  <div class="nav-bar">
    <div v-show="showBack" class="icon-wrapper" @click="back"><van-icon name="arrow-left" /></div>
    <div v-show="!showBack" class="icon-wrapper"></div>
    <span class="name">{{title}}</span>
    <div v-show="showSearch" class="icon-wrapper right"><van-icon name="search" /></div>
    <div v-show="!showSearch" class="icon-wrapper right"></div>
    <!-- <div v-show="!showSearch" class="icon-wrapper right"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String
    },
    showSearch: {
      default: false,
      type: Boolean
    },
    showBack: {
      default: true,
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
    bg('../../common/img/nav-bg')
    justify-content center
    align-items center
    .icon-wrapper,
    .name
      flex 1
      height 24px
      color #fff
    .name
      flex 6
    .icon-wrapper
      &.right
        display flex
        flex-direction row-reverse
    .name
      text-align center
</style>
