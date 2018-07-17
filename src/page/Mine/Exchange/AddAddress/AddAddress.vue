<template>
  <div class="add-address">
    <NavBar title="添加地址"></NavBar>
    <Notice></Notice>
    <div class="container">
      <div class="address-wrapper">
        <input type="text" v-model="address" placeholder="请输入地址">
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="addAddress">添加</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Exchange from 'api/mine/exchange'
const _exchange = new Exchange()

export default {
  data () {
    return {
      address: ''
    }
  },
  components: {
    NavBar,
    Notice
  },
  methods: {
    judge(str) {
      let reg = /^\w{42}$/
      return reg.test(str)
    },
    addAddress() {
      if (this.judge(this.address)) {
        _exchange.addAddress(2, this.address)
          .then(res => {
            if (res.code === 0) {
              Toast.success({
                duration: 1000,
                message: '添加地址成功'
              })
            }
            this.$router.back()
          })
      } else {
        Toast.fail({
          duration: 500,
          message: '地址输入有误'
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .add-address
    fix-all()
    .container
      padding 90px 13px 0
      .address-wrapper
        public-input()
    .desc
      padding 13px
      letter-spacing 1px
      line-height 16px
      color #fff
      font-size $font-size-medium
    .btn-wrapper
      position absolute
      box-sizing border-box
      width 100%
      bottom 20px
      padding 0 13px
      .btn
        btn-big()
</style>
