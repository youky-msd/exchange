<template>
  <div class="verification">
    <div v-show="NotSend" class="send" @click="sendVerificationCode">发送验证码</div>
    <div v-show="!NotSend" class="sent">{{this.num}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
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
      this.NotSend = false
      this.countDown()
    },
    countDown() {
      setTimeout(() => {
        this.num--
        if (this.num !== 0) {
          console.log(this.num)
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

</style>
