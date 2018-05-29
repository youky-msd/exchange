<template>
  <div class="info-link">
    <router-link to="/mine/info" tag="span" class="info"></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
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

  .info-link
    flex 1
    margin-left 5px
    .info
      display inline-block
      width 100%
      height 100%
      bg('./info-white')
      background-size 25px 25px
</style>
