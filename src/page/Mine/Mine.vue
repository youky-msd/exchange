<template>
    <div class="mine">
      <Scroll :isMain="true">
        <NavBar title="个人中心" :showBack="false"></NavBar>
        <router-link tag="div" to="/mine/account-setting" class="mine-nav">
          <div class="avatar">
            <img :src="user.avatar" v-show="user.avatar" alt="">
            <img src="../../common/test/avatar.png" v-show="!user.avatar" alt="">
          </div>
          <div class="user-info">
            <div class="user-name">{{user.nickName}}</div>
            <!-- <div class="user-id">2018523</div> -->
          </div>
          <div class="arrow-wrapper">
            <van-icon class="arrow" name="arrow" />
          </div>
        </router-link>
        <div class="mine-nav-shadow"></div>
        <router-link to="/mine/my-account" tag="div" class="user-money">
          <div class="money-icon"></div>
          <div class="user-money-num">
            <p class="money-text">我的钱包</p>
            <p class="money-num" v-if="user.balance">{{user.balance}}DDM</p>
          </div>
          <router-link to="/mine/charge" class="user-money-btn">充值</router-link>
        </router-link>
        <div class="user-operation">
          <ul>
            <router-link to="/mine/info" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon info"></div>
                <div class="text">消息中心</div>
              </div>
            </router-link>
            <router-link to="/mine/collection" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon collection"></div>
                <div class="text">我的收藏</div>
              </div>
            </router-link>
            <router-link to="/mine/my-buy" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon my-buy"></div>
                <div class="text">我的求购</div>
              </div>
            </router-link>
            <!-- <router-link to="/mine/account-setting" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon account-setting"></div>
                <div class="text">账号设置</div>
                <div class="status">ENTER</div>
              </div>
            </router-link> -->
            <router-link to="/mine/sell-manage" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon exchange"></div>
                <div class="text">出售管理</div>
              </div>
            </router-link>
            <router-link to="/mine/buy-manage" tag="li" class="user-operation-item">
              <div class="user-operation-item-wrapper">
                <div class="icon exchange"></div>
                <div class="text">购买管理</div>
              </div>
            </router-link>
            <router-link to="/mine/help" tag="li" class="user-operation-item no-border-bottom">
              <div class="user-operation-item-wrapper">
                <div class="icon help"></div>
                <div class="text">帮助中心</div>
              </div>
            </router-link>
            <router-link to="/mine/question" tag="li" class="user-operation-item no-border-bottom">
              <div class="user-operation-item-wrapper">
                <div class="icon question"></div>
                <div class="text">联系客服</div>
              </div>
            </router-link>
            <li class="user-operation-item no-border-bottom">
              <div class="user-operation-item-wrapper no-order">
              </div>
            </li>
            <li class="user-operation-item no-border-bottom">
              <div class="user-operation-item-wrapper no-order">
              </div>
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Scroll from 'components/Scroll/Scroll'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    Scroll
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .mine
    fixed-all()
    .scroll
      fixed-all()
      .mine-nav
        position relative
        z-index 5
        height 100px
        linear()
        border-bottom-left-radius 18px
        border-bottom-right-radius 18px
        display flex
        padding 0 17px
        justify-content space-between
        align-items center
        .avatar
          flex-shrink 0
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          img
            width 100%
            height 100%
        .user-info
          flex-grow 1
          flex-shrink 1
          box-sizing border-box
          height 100%
          margin 0 20px
          display flex
          flex-direction column
          align-items center
          justify-content center
          .user-name
            display block
            width 200px
            font-size $font-size-v-v
            color #fff
            ellipsis()
          .user-id
            font-size $font-size-small-s
            color #fff
        .arrow-wrapper
          width 28px
          flex 0 0 28px
          display flex
          font-size 28px
          color #fff
          flex-direction row-reverse
      .mine-nav-shadow
        position relative
        z-index 2
        top -10px
        height 20px
        border-bottom-left-radius 18px
        border-bottom-right-radius 18px
        background-color rgba(255,255,255,.2)
        margin 0 17px
        &:after
          content ' '
          display block
          position absolute
          z-index 1
          box-sizing border-box
          height 10px
          left 17px
          right 17px
          bottom -10px
          border-bottom-left-radius 18px
          border-bottom-right-radius 18px
          background-color rgba(255,255,255,.1)
      .user-money
        display flex
        justify-content space-around
        align-items center
        height 85px
        margin 16px 13px 0
        border-radius 10px
        box-shadow 0 0 20px $color-background-d
        .money-icon
          width 50px
          height 50px
          border-radius 50%
          box-shadow 0 0 20px #5e63f0
          bg('./mine-money')
        .user-money-num
          .money-text
            color #fff
            font-size $font-size-medium
            padding-bottom 7px
          .money-num
            font-size $font-size-large
            color $color-text-money
        .user-money-btn
          btn-linear()
      .user-operation
        margin-top 15px
        ul
          padding 5px 13px 0
          display flex
          flex-wrap wrap
          .user-operation-item
            margin-bottom 10px
            flex 1
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            height 90px
            min-width 90px
            padding-bottom 10px
            border-bottom 1px solid $color-border
            @media screen and (max-width: 420px)
              min-width 110px
            @media screen and (max-width: 360px)
              min-width 90px
            &.no-border-bottom
              border-bottom none
            .user-operation-item-wrapper
              width 100%
              height 100%
              display flex
              flex-direction column
              justify-content space-around
              align-items center
              border-right 1px solid $color-border
              &.no-order
                border-right none
              .icon
                width 42px
                height 42px
                &.info
                  bg('./info')
                &.collection
                  bg('./collection')
                &.my-buy
                  bg('./my-buy')
                &.account-setting
                  bg('./account-setting')
                &.exchange
                  bg('./exchange')
                &.help
                  bg('./help')
                &.question
                  bg('./question')
                &.system-setting
                  bg('./system-setting')
              .text
                font-size $font-size-small
                color $color-text-desc
              .status
                btn()
</style>
