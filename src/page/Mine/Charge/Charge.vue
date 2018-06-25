<template>
  <div class="charge">
    <NavBar title="充值"></NavBar>
    <AccountInfo></AccountInfo>
    <div class="top-wrapper">
      <router-link class="link" to="/mine/log">充值记录</router-link>
    </div>
    <div class="charge-input-wrapper">
      <div class="input-wrapper">
        <input type="number" v-model="amount" placeholder="请输入充值数量">
      </div>
    </div>
    <div class="select-charge-type-wrapper">
      <p class="title">请选择支付方式</p>
      <div class="select-type-wrapper-list">
        <ul>
          <li class="select-type-item" @click="selectChargeType(item.type)"
          v-for="(item, index) in chargeTypeList" :key="index">
            <van-icon name="checked" class="icon" :class="{selected: item.type === currentChargeType}"/>
            <span class="text">{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="charge-desc">注: 一元人民币等价一个DDM积分</p>
    <div class="btn-wrapper">
      <div class="btn" @click="charge">充值</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import AccountInfo from 'page/Mine/MyAccount/AccountInfo/AccountInfo'
import { mapActions } from 'vuex'
import Charge from 'api/mine/charge'
const _charge = new Charge()

export default {
  data () {
    return {
      amount: '', // 充值金额
      currentChargeType: 1, // 当前充值类型
      chargeTypeList: [{ // 充值类型列表
        text: '支付宝',
        type: 1
      },
      {
        text: '微信',
        type: 2
      }]
    }
  },
  components: {
    NavBar,
    AccountInfo
  },
  methods: {
    ...mapActions(['setUser']),
    // 选择充值类型
    selectChargeType(type) {
      this.currentChargeType = type
    },
    // 充值
    charge() {
      _charge.charge(this.amount, this.currentChargeType)
        .then(res => {
          if (this.amount) {
            if (this.currentChargeType === 1) {
              console.log(res)
              document.write(res)
            } else if (this.currentChargeType === 2) {
              // window.location.href = `${res.result}&redirect_url=${encodeURIComponent('http://ex.wan855.cn/api/payment/wechat-notify')}`
              window.location.href = res.result
            }
          }
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .charge
    .top-wrapper
      position absolute
      z-index 2
      top 13px
      right 17px
      font-size 24px
      color #fff
      .link
        display block
        padding 5px
        color #fff
        font-size $font-size-medium-x
    .charge-input-wrapper
      padding 10px 13px
      .input-wrapper
        public-input()
    .select-charge-type-wrapper
      padding 15px 13px
      .title
        font-size $font-size-large
        text-align center
        color #fff
      .select-type-wrapper-list
        padding 10px
        display flex
        flex-direction column
        .select-type-item
          display flex
          align-items center
          line-height 30px
          font-size $font-size-large
          .icon
            &.selected
              color $color-selected
          .text
            padding-left 10px
    .charge-desc
      padding 0 13px
      color $color-text-desc
    .btn-wrapper
      position absolute
      box-sizing border-box
      padding 0 13px
      bottom 10px
      width 100%
      .btn
        btn-big()
</style>
