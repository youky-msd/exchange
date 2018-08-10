<template>
  <div class="info-link" @click="clear()">
    <span class="num" v-show="infoNum > 0">{{infoNum}}</span>
    <van-icon name="chat" class="info"/>
    <!-- <span class="info" @click="clear()"></span> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import Info from 'api/mine/info'
const _info = new Info()

export default {
  mounted() {
    // this.interval()
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['infoNum'])
  },
  methods: {
    // ...mapMutations({
    //   setInfoNo: 'SET_INFO_NO'
    // }),
    clear() {
      this.$router.push('/mine/info')
      // this.setInfoNo(true)
    },
    // 获取未读数量 轮询操作
    interval() {
      this.getNoReadNum()
      setInterval(() => {
        this.getNoReadNum()
      }, 5000)
    },
    getNoReadNum() {
      _info.getNoReadNum()
        .then(res => {
          this.infoNum = res.result
        })
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
      top -5px
      right -2px
      padding 3px 4px
      background-color red
      border-radius 5px
      z-index 5
    .info
      position relative
      z-index 2
      font-size 28px
      color #fff
      padding-left 5px
      // display inline-block
      // width 100%
      // height 100%
      // bg('./info-white')
      // background-size 25px 25px
</style>
