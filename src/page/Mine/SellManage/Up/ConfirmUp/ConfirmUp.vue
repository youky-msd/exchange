<template>
  <div class="confirm-up">
    <div class="close-btn" @click="closeWindow">
      <van-icon name="close" class="btn"/>
    </div>
    <div class="confirm-up-window">
      <p class="title">请最后确认上架信息</p>
      <div class="confirm-content-wrapper">
        <div class="confirm-content-item">
          <span class="text">游戏名称:</span>
          <span class="content">{{formData.gameName}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">商品名称:</span>
          <span class="content">{{formData.goodsName}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">交流QQ:</span>
          <span class="content">{{formData.qq}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">交流邮箱:</span>
          <span class="content">{{formData.email}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">商品售价:</span>
          <span class="content">{{formData.price}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">手续费:</span>
          <span class="content">{{serviceCharge}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">最终收益:</span>
          <span class="content">{{finallyGet}}</span>
        </div>
        <div class="confirm-content-item">
          <span class="text">商品介绍:</span>
          <span class="content">{{formData.description}}</span>
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btn" @click="submit">确认上架</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import SellManage from 'api/mine/sellManage'
import Exchange from 'api/mine/exchange'
const _sellManage = new SellManage()
const _exchange = new Exchange()

export default {
  props: {
    formData: Object
  },
  mounted() {
    this.getChargeRate()
  },
  data () {
    return {
      // serviceCharge: 0,
      // finallyGet: 0,
      chargeRate: 0
    }
  },
  computed: {
    finallyGet() {
      return (this.formData.price - this.formData.price * this.chargeRate).toString()
    },
    serviceCharge() {
      return (this.formData.price * this.chargeRate).toString()
    }
  },
  components: {

  },
  methods: {
    // 关闭窗口
    closeWindow() {
      this.$emit('close')
    },
    // 提交
    submit() {
      _sellManage.up(this.formData)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '上架成功'
            })
            this.$emit('close')
            this.$router.back()
          }
        })
    },
    // 获取佣金比例
    getChargeRate() {
      _exchange.getServiceRate()
        .then(res => {
          this.chargeRate = res.result.value
          // this.serviceCharge = this.formData.price * this.chargeRate
          // this.finallyGet = this.formData.price - this.formData.price * this.chargeRate
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .confirm-up
    position absolute
    z-index 999
    top 0
    left 0
    right 0
    bottom 0
    backdrop-filter blur(5px)
    background-color rgba(0,0,0,.5)
    .close-btn
      position absolute
      top 50px
      right 30px
      .btn
        font-size 30px
        color #fff
    .confirm-up-window
      position absolute
      z-index 1000
      top 50%
      left 50%
      transform translate(-50%,-50%)
      width 90%
      .title
        color #fff
        font-size $font-size-large
        padding 15px 0
        text-align center
      .confirm-content-wrapper
        .confirm-content-item
          font-size $font-size-medium-x
          color #fff
          padding-bottom 10px
          display flex
          justify-content center
          .text
            flex 1
            display block
            text-align center
          .content
            flex 1
            text-align center
            // padding-left 20px
    .btn-wrapper
      padding-top 80px
      .btn
        btn-big()

</style>
