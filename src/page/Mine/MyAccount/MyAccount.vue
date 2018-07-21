<template>
  <div class="my-account">
    <NavBar title="我的账户"></NavBar>
    <AccountInfo></AccountInfo>
    <div class="my-account-time-wrapper">
      <div class="tab-wrapper">
        <div class="tab-item left" :class="{active: isActive === 0}" @click="selectTab(0)">月</div>
        <div class="tab-item right" :class="{active: isActive === 1}" @click="selectTab(1)">周</div>
      </div>
      <div class="time-wrapper" v-show="isActive === 0">
        <div class="time-item"><span class="tag"></span><span class="text">收入: {{monthAccount.income}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">支出: {{monthAccount.expend}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">提现: {{monthAccount.withdraw}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">充值: {{monthAccount.recharge}}</span></div>
      </div>
      <div class="time-wrapper" v-show="isActive === 1">
        <div class="time-item"><span class="tag"></span><span class="text">收入: {{weekAccount.income}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">支出: {{weekAccount.expend}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">提现: {{weekAccount.withdraw}}</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">充值: {{weekAccount.recharge}}</span></div>
      </div>
    </div>
    <div class="my-account-detail-wrapper list">
      <p class="title">账单明细</p>
      <div class="my-account-containter">
        <div class="detail-item">来源</div>
        <div class="detail-item">积分</div>
        <div class="detail-item">时间</div>
      </div>
      <Scroll class="scroll">
        <div class="my-account-containter" :class="{freeze: item.freezeStatus === 0}"
         v-for="(item, index) in accountDetailList" :key="index">
          <div class="detail-item">{{remark(item.remark)}}</div>
          <div class="detail-item">{{item.status === 1 ? '+' : '-'}}{{item.billAmount}}</div>
          <div class="detail-item">{{getTime(item.createTime)}}</div>
        </div>
      </Scroll>
    </div>
    <div class="btn-wrapper">
      <router-link to="/mine/exchange" class="btn left">兑换</router-link>
      <router-link to="/mine/charge" class="btn right">充值</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import AccountInfo from 'page/Mine/MyAccount/AccountInfo/AccountInfo'
import tool from 'common/js/tool'
import Scroll from 'components/Scroll/Scroll'
import MyAccount from 'api/mine/myAccount'
const _myAccount = new MyAccount()

export default {
  mounted() {
    this.getAccountDetailList()
    this.getMonthWeekStatistics()
  },
  data () {
    return {
      isActive: 0,
      accountDetailList: [], // 账单明细列表
      monthAccount: {}, // 月统计
      weekAccount: {}, // 周统计
      remarkList: [
        '充值',
        '兑换人民币',
        '兑换人民币失败',
        '兑换DDM币',
        '兑换DDM币失败',
        '供应商品',
        '供应商品失败',
        '出售商品',
        '出售商品失败',
        '购买商品',
        '购买商品失败',
        '求购商品',
        '求购商品失败'
      ]
    }
  },
  components: {
    NavBar,
    AccountInfo,
    Scroll
  },
  methods: {
    // 选择 日 / 月
    selectTab(key) {
      this.isActive = key
    },
    // 获取账单明细
    getAccountDetailList() {
      _myAccount.getAccountDetailList()
        .then(res => {
          this.accountDetailList = res.result
        })
    },
    // 时间戳处理
    getTime(timestamp) {
      return tool.timestampToTimeHM(timestamp)
    },
    // 当月 / 周收支统计
    getMonthWeekStatistics() {
      _myAccount.getMonthWeekStatistics()
        .then(res => {
          console.log(res)
          this.monthAccount = res.result.currentMonthAccount
          this.weekAccount = res.result.currentWeekAccount
        })
    },
    remark(remark) {
      return this.remarkList[remark - 1]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .my-account
    .my-account-time-wrapper
      margin-top 10px
      height 180px
      box-linear()
      .tab-wrapper
        padding-top 10px
        display flex
        justify-content center
        .tab-item
          font-size $font-size-large
          width 40px
          height 28px
          line-height 28px
          color #fff
          background-color $color-text-d
          text-align center
          border($color-text-ll)
          &.left
            border-top-left-radius 5px
            border-bottom-left-radius 5px
            border-right-width 0
          &.right
            border-top-right-radius 5px
            border-bottom-right-radius 5px
          &.active
            background-color $color-btn-bg
      .time-wrapper
        padding 20px 30px
        .time-item
          line-height 24px
          display flex
          align-items center
          .tag
            display block
            width 12px
            height 12px
            background-color $color-selected
            border-radius 4px
          .text
            padding-left 10px
            display block
            color $color-text
            font-size $font-size-large
    .my-account-detail-wrapper
      margin-top 10px
      height 190px
      box-linear()
      &.list
        fixed-all()
        top 310px
        bottom 60px
        height auto
        .scroll
          fixed-all()
          top 60px
          bottom 0
      .title
        text-align center
        line-height 40px
        font-size $font-size-large
        color #fff
      .my-account-containter
        display flex
        color $color-text-little
        &.freeze
          .detail-item
            color $color-sub-theme
        .detail-item
          flex 2
          color $color-text-l
          font-size $font-size-small
          line-height 20px
          text-align center
          &.small
            flex 1
    .btn-wrapper
      position absolute
      box-sizing border-box
      bottom 10px
      width 100%
      display flex
      padding 0 10px
      .btn
        flex 1
        btn-linear(,36px,)
        &.right
          margin-left 5px
        &.left
          margin-right 5px
</style>
