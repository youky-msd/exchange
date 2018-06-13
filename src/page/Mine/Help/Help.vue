<template>
  <div class="help">
    <NavBar title="帮助中心"></NavBar>
    <!-- <Notice></Notice> -->
    <div class="article-list">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="如何出售商品" name="1">
          <p class="item">1.点击进入我的->我的出售->上架</p>
          <p class="item">2.填写商品上架相关资料</p>
          <p class="item">3.完成上架，上架信息可在出售管理->在售中查看或下架</p>
          <p class="item">4.上架商品被购买后会有通知卖家与买家线下交易。</p>
          <p class="item">5.72小时订单自动完成,销售款到账。</p>
        </van-collapse-item>
        <van-collapse-item title="如何购买商品" name="2">
          <p class="item">1.购买前，请确保积分充足，点击我的->我的账户->充值，可看到可用积分。</p>
          <p class="item">2.在商城内挑选心仪的，点击购买，购买付款后系统通知进行交易。</p>
          <p class="item">3.买家添加卖家QQ号码进行交易沟通，需在72小时内完成交易。</p>
          <p class="item">4.72小时内未收到道具可联系客服进行投诉处理，如取消订单，购买款将退还至买家账户。</p>
        </van-collapse-item>
        <van-collapse-item title="如何求购" name="3">
          <p class="item">1.购买前，请确保余额充足，点击我的->我的账户->充值，可看到余额和进行充值操作</p>
          <p class="item">2.在商城内挑选需要求购的道具，在道具详情页面可发起求购操作。</p>
          <p class="item">3.在弹出的求购页面，输入单价与数量，系统会计算您需要支付的积分，该积分会暂时锁定。</p>
          <p class="item">4.在未供应情况下，可随时取消求购订单。取消后，锁定积分会退回到我的账户中</p>
          <p class="item">5.可在我的->我的账户中查看当前锁定积分情况。</p>
        </van-collapse-item>
        <van-collapse-item title="如何充值" name="4">
          <p class="item">1.点击我的->我的账户->充值，可看到余额并进行充值操作</p>
          <p class="item">2.充值金额会等价转换成DDM积分，一个DDM积分等于一元。</p>
        </van-collapse-item>
        <van-collapse-item title="如何兑换" name="5">
          <p class="item">1.点击我的->我的账户->兑换，可进兑换值操作</p>
          <p class="item">2.一个DDM积分等于一元，可提DDMtoken</p>
          <p class="item">3.兑换24小时内到账。</p>
        </van-collapse-item>
        <van-collapse-item title="锁定积分是什么" name="6">
          <p class="item">1.求购发起后会锁定求购积分，保证供应者出现后交易正常进行。</p>
          <p class="item">2.交易72小时内会锁定交易积分，保证买卖双方交易安全。</p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Scroll from 'components/Scroll/Scroll'
import Tab from 'components/Tab/Tab'
import Search from 'components/Search/Search'

export default {
  data () {
    return {
      activeNames: ['1'],
      isTop: false, // 是否滚动到顶部
      hotSearchList: ['订单异常', '如何交易', '如何冻结账户'], // tab列表
      tabList: ['新手帮助', '我是卖家', '我是买家', '常见问题'], // 热门搜索
      list: [],
      noviceHelpList: [], // 新手帮助
      sellerList: [], // 卖家
      buyerList: [], // 买家
      usuallyQuestionList: [] // 常见问题
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    Tab,
    Search
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .help
    .help-main
      box-sizing border-box
      height 200px
      padding 50px 13px 0
      .title
        text-align center
        color #fff
        font-size $font-size-v
        padding-bottom 10px
      .title-en
        text-align center
        color #fff
        font-size $font-size-mini
        padding-bottom 18px
    .hot-search
      ul
        display flex
        justify-content center
        color #fff
        font-size $font-size-small-s
        padding 18px 0 26px
        li
          padding 0 5px
    .tab-wrapper
      shadow()
      &.tab-fixed
        position fixed
        z-index 4
        top 50px
        width 100%
    .article-list
      .item
        line-height 20px
</style>
