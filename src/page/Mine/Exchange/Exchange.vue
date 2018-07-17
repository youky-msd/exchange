<template>
  <div class="exchange">
    <NavBar title="DDM币兑换"></NavBar>
    <AccountInfo></AccountInfo>
    <div class="top-wrapper">
      <router-link class="link" to="/mine/log">兑换记录</router-link>
    </div>
    <div class="exchange-main-wrapper">
      <div class="exchange-input-wrapper">
        <div class="input-wrapper">
          <input type="number" v-model="chargeNum" placeholder="请输入DDM积分兑换数量" @keyup="calculator">
        </div>
        <div class="input-wrapper">
          <input type="number" v-model="DDM" placeholder="根据数量换算DDM数量" disabled>
        </div>
        <div class="exchange-desc">
          <div class="text">DDM地址</div>
          <router-link to="/mine/add-address" class="btn">添加DDM地址</router-link>
        </div>
      </div>
      <p class="desc">注: 1DDM积分等于一个DDM币</p>
      <div class="address-select-wrapper">
        <p class="title">DDM地址选择</p>
        <div class="address-select-list">
          <ul>
            <li class="address-select-item" v-for="(item, index) in addressList" :key="index"
            @click="selectAddress(item.cardWalletId)">
              <div class="text">{{item.ddmAddress}}</div>
              <van-icon name="checked" class="icon" :class="{selected: item.cardWalletId === currentSelectAddress}"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="exchange-btn-wrapper">
      <div class="all-desc">
        <span class="text">手续费: </span>
        <span class="num">{{serviceCharge}}</span>
      </div>
      <div class="btn" @click="withdrawApply">兑换</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import AccountInfo from 'page/Mine/MyAccount/AccountInfo/AccountInfo'
import { mapActions } from 'vuex'
import Exchange from 'api/mine/exchange'
const _exchange = new Exchange()

export default {
  mounted() {
    this.getAddressList()
    this.getChargeRate()
    this.getDDMRate()
  },
  data () {
    return {
      chargeNum: '', // 兑换金额
      currentSelectAddress: '', // 当前选择的地址ID
      addressList: [], // 地址列表
      serviceChargeRate: 0, // 手续费比例
      chargeDDMRate: 0, // 充值DDM比例
      serviceCharge: '', // 服务费
      DDM: '' // DDM
    }
  },
  computed: {

  },
  components: {
    NavBar,
    AccountInfo
  },
  methods: {
    ...mapActions(['setUser']),
    // 选择地址
    selectAddress(id) {
      this.currentSelectAddress = id
      console.log(this.currentSelectAddress)
    },
    // 地址列表
    getAddressList() {
      _exchange.getAddressList(2)
        .then(res => {
          console.log(res)
          this.addressList = res.result
        })
    },
    // 兑换(提现)
    withdrawApply() {
      let param = {
        amount: this.chargeNum,
        exchangeAmount: this.chargeNum / this.chargeDDMRate,
        actualAmount: this.DDM,
        charge: this.serviceCharge,
        channel: 2,
        cardId: this.currentSelectAddress
      }
      _exchange.withdrawApply(param)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1000,
              message: '提现成功'
            })
            this.setUser()
          }
        })
    },
    // 手续费比例
    getChargeRate() {
      _exchange.getChargeRate()
        .then(res => {
          this.serviceChargeRate = res.result.value
        })
    },
    // 充值DDM汇率
    getDDMRate() {
      _exchange.getDDMRate()
        .then(res => {
          this.chargeDDMRate = res.result.value
        })
    },
    // 总体计算
    calculator() {
      this.getServiceCharge()
      this.getChargeDDM()
    },
    // 换算手续费
    getServiceCharge() {
      this.serviceCharge = Math.round(this.chargeNum * this.serviceChargeRate * 100) / 100
    },
    // 换算DDM
    getChargeDDM() {
      this.DDM = Math.round((this.chargeNum - this.serviceCharge) / this.chargeDDMRate * 100) / 100
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .exchange
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
    .exchange-main-wrapper
      margin-top 10px
      box-linear()
      .exchange-input-wrapper
        padding 10px 13px
        .input-wrapper
          margin-bottom 10px
          public-input()
        .exchange-desc
          display flex
          align-items center
          font-size $font-size-medium-x
          .btn
            margin-left 10px
            btn(120px,24px,,$font-size-small,)
      .desc
        padding 15px 13px
      .address-select-wrapper
        padding 0 13px
        .title
          color $color-text-ll
          font-size $font-size-large
        .address-select-list
          padding-top 10px
          ul
            .address-select-item
              padding 0 5px
              display flex
              justify-content space-between
              align-items center
              line-height 40px
              font-size $font-size-medium
              border-bottom 1px solid $color-border
              font-size $font-size-large
              .text
                color $color-text-ll
                width 90%
                ellipsis()
              .icon
                font-size $font-size-v-v
                &.selected
                  color $color-selected
    .exchange-btn-wrapper
      position absolute
      width 100%
      bottom 0
      box-linear()
      padding 0 10px
      height 50px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      .text,
      .num
        font-size $font-size-medium
      .num
        color $color-text-money
      .btn
        btn-linear()
</style>
