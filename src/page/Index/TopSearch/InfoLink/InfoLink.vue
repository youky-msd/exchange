<template>
  <div class="info-link">
    <span class="num" v-show="infoNum > 0">{{infoNum}}</span>
    <span class="info" @click="clear()"></span>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['infoNum'])
  },
  methods: {
    ...mapMutations({
      setInfoNo: 'SET_INFO_NO'
    }),
    clear() {
      this.$router.push('/mine/info')
      this.setInfoNo(true)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .info-link
    position relative
    flex 1
    margin-left 5px
    .num
      position absolute
      font-size $font-size-small
      color #fff
      top 0
      right 0
      padding 3px 4px
      background-color red
      border-radius 5px
    .info
      display inline-block
      width 100%
      height 100%
      bg('./info-white')
      background-size 25px 25px
</style>
