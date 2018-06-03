<template>
  <div class="bottom-btn">
    <div class="btn">{{text}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String
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

  .bottom-btn
    position absolute
    box-sizing border-box
    padding 0 13px
    bottom 10px
    width 100%
    .btn
      btn-big()
</style>
