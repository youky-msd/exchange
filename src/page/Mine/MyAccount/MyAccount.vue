<template>
  <div class="my-account">
    <NavBar title="我的账户"></NavBar>
    <AccountInfo></AccountInfo>
    <div class="my-account-time-wrapper">
      <div class="tab-wrapper">
        <div class="tab-item left" :class="{active: isActive === 0}" @click="selectTab(0)">月</div>
        <div class="tab-item right" :class="{active: isActive === 1}" @click="selectTab(1)">周</div>
      </div>
      <div class="time-wrapper">
        <div class="time-item"><span class="tag"></span><span class="text">收入: 100DDM</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">支出: 100DDM</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">兑换: 100DDM</span></div>
        <div class="time-item"><span class="tag"></span><span class="text">充值: 100DDM</span></div>
      </div>
    </div>
    <div class="my-account-detail-wrapper">
      <p class="title">账单明细</p>
      <div class="my-account-containter">
        <div class="detail-item">
          <p class="time">时间</p>
          <div class="time-list-wrapper">
            <p class="tiem-list-item">2018-4-18 15:30</p>
            <p class="tiem-list-item">2018-4-18 15:30</p>
            <p class="tiem-list-item">2018-4-18 15:30</p>
            <p class="tiem-list-item">2018-4-18 15:30</p>
          </div>
        </div>
        <div class="detail-item">
          <p class="time">明细(DDM积分)</p>
          <div class="time-list-wrapper">
            <p class="tiem-list-item">充值成功: +22</p>
            <p class="tiem-list-item">充值成功: +22</p>
            <p class="tiem-list-item">充值成功: +22</p>
            <p class="tiem-list-item">充值成功: +22</p>
          </div>
        </div>
      </div>
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

export default {
  data () {
    return {
      isActive: 0
    }
  },
  components: {
    NavBar,
    AccountInfo
  },
  methods: {
    selectTab(key) {
      this.isActive = key
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
      .title
        text-align center
        line-height 40px
        font-size $font-size-large
        color #fff
      .my-account-containter
        display flex
        color $color-text-little
        .detail-item
          flex 1
          color $color-text-l
          .time,
          .time-list-wrapper
            text-align center
            font-size $font-size-large
          .time-list-wrapper
            font-size $font-size-small
            .tiem-list-item
              padding-bottom 6px
          .time
            line-height 30px
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
