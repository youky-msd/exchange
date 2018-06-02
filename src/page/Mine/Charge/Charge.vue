<template>
  <div class="charge">
    <NavBar title="充值"></NavBar>
    <AccountInfo></AccountInfo>
    <div class="charge-input-wrapper">
      <div class="input-wrapper">
        <input type="number" placeholder="请输入充值数量">
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
      <div class="btn">充值</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import AccountInfo from 'page/Mine/MyAccount/AccountInfo/AccountInfo'

export default {
  data () {
    return {
      currentChargeType: 'alipay', // 当前充值类型
      chargeTypeList: [{ // 充值类型列表
        text: '支付宝',
        type: 'alipay'
      },
      {
        text: '微信',
        type: 'weixin'
      }]
    }
  },
  components: {
    NavBar,
    AccountInfo
  },
  methods: {
    selectChargeType(type) {
      this.currentChargeType = type
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .charge
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
