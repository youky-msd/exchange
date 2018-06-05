<template>
  <div class="verification" :class="{sent: !NotSend}">
    <div v-show="NotSend" class="btn send" @click="sendVerificationCode">发送验证码</div>
    <div v-show="!NotSend" class="btn sent">{{this.num}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    mobile: {
      type: String
    }
  },
  data () {
    return {
      NotSend: true, // 是否点击了发送验证码
      num: 60 // 倒计时秒数
    }
  },
  components: {

  },
  methods: {
    sendVerificationCode() {
      if (this.mobile) {
        this.NotSend = false
        this.countDown()
      }
    },
    countDown() {
      setTimeout(() => {
        this.num--
        if (this.num !== 0) {
          // console.log(this.num)
          this.countDown()
        } else {
          this.NotSend = true
          this.num = 60
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .verification
    // padding 3px
    border($color-text-ll)
    border-radius 3px
    color $color-text-ll
    font-size $font-size-medium
    &.sent
      border($color-text-d)
    .btn
      text-align center
      line-height 26px
      &.sent
        color $color-text-d
</style>
