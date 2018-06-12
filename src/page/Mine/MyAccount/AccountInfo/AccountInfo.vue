<template>
  <div class="account-info">
    <div class="my-account-wrapper">
      <div class="my-account-container">
        <p class="num">{{user.balance}}</p>
        <p class="desc">DDM</p>
      </div>
      <div class="my-account-container">
        <p class="num">{{user.lockAmount}}</p>
        <p class="desc">锁定DDM</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .account-info
    .my-account-wrapper
        box-linear()
        display flex
        .my-account-container
          flex 1
          height 70px
          box-sizing border-box
          padding 10px 0
          display flex
          flex-direction column
          justify-content space-around
          .num,
          .desc
            font-size $font-size-large
            color $color-text-money
            text-align center
          .desc
            color $color-text-little
</style>
