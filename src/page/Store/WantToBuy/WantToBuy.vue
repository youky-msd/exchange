<template>
  <div class="want-to-buy">
    <NavBar title="发起求购"></NavBar>
    <GoodsDetailTitle :data="propertyDetail">
      <p class="name">{{propertyDetail.name}}</p>
      <p class="text">当前最低出售价: <span class="num">{{propertyDetail.lowPrice}}DDM</span></p>
      <p class="text">当前最高出售价: <span class="num">{{propertyDetail.highPrice}}DDM</span></p>
    </GoodsDetailTitle>
    <div class="form">
      <div class="input">
        <input type="number" v-model="formParams.purchasePrice" placeholder="请输入求购单价(必填)">
      </div>
      <div class="input">
        <input type="number" v-model="formParams.count" placeholder="请输入求购数量(必填)">
      </div>
      <div class="input">
        <input type="number" v-model="formParams.qq" placeholder="请输入您的交流qq(必填)">
      </div>
      <div class="input">
        <input type="email" v-model="formParams.email" placeholder="请输入您的交流邮箱(必填)">
      </div>
    </div>
    <div class="desc-wrapper">
      <p class="title">求购说明</p>
      <p class="desc">1.发布求购需要先付款,付款金额由平台保管</p>
      <p class="desc">2.出现商品供应者后,客服协助完成交易</p>
      <p class="desc">3.上架后如取消求购,金额将24小时返回账户</p>
    </div>
    <div class="buy-bottom-wrapper">
      <p class="price">应付: <span class="num">{{formParams.purchasePrice * formParams.count}} DDM积分</span></p>
      <div class="buy-btn" @click="purchaseOrder">支付</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import _tool from 'common/js/tool'
import NavBar from 'components/NavBar/NavBar'
import GoodsDetailTitle from 'page/Store/GoodsDetail/GoodsDetailTitle/GoodsDetailTitle'
import { mapActions } from 'vuex'
import Store from 'api/store'
let _store = new Store()

export default {
  mounted() {
    this.getPropertyDetail()
  },
  data () {
    return {
      propertyDetail: {}, // 道具详情
      formParams: { // 求购参数
        gameId: '', // 游戏ID
        typeId: '', // 道具ID
        name: '', // 求购商品名称
        purchasePrice: '', // 求购单价
        totalPrice: '', // 总价
        count: '', // 数量
        payment: 1, // 支付方式(余额)
        qq: '', // qq
        email: '' // email
      }
    }
  },
  components: {
    NavBar,
    GoodsDetailTitle
  },
  methods: {
    ...mapActions(['setBalance']),
    // 获取道具详情
    getPropertyDetail() {
      _store.getPropertyDetail(this.$route.params.goodsTypeId)
        .then(res => {
          this.propertyDetail = res.result
          console.log(this.propertyDetail)
          this.formParams.gameId = this.propertyDetail.gameId
          this.formParams.typeId = this.propertyDetail.id
          this.formParams.name = this.propertyDetail.name
        })
    },
    // 验证
    judge() {
      let fp = this.formParams
      if (!fp.purchasePrice && !fp.count && !fp.qq && !fp.email) {
        Toast.fail({
          duration: 1000,
          message: '请填写完整'
        })
        return false
      } else if (!_tool.qq(fp.qq)) {
        Toast.fail({
          duration: 1000,
          message: 'qq填写不正确'
        })
        return false
      } else if (!_tool.email(fp.email)) {
        Toast.fail({
          duration: 1000,
          message: '邮箱填写不正确'
        })
        return false
      } else {
        return true
      }
    },
    // 发布求购
    purchaseOrder() {
      if (this.judge()) {
        // 计算总价
        this.formParams.totalPrice = parseFloat(this.formParams.count) * parseFloat(this.formParams.purchasePrice)
        _store.purchaseOrder(this.formParams)
          .then(res => {
            if (res.code === 0) {
              Toast.success({
                duration: 1000,
                message: '求购成功'
              })
              this.setBalance()
              setTimeout(() => {
                this.$router.back()
              }, 500)
            }
          })
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .want-to-buy
    .goods-detail-title
      .name
        font-size $font-size-medium
        color #fff
      .text
        color $color-text-little
      .num
        color $color-text-money
    .form
      padding 13px
      .input
        margin-bottom 10px
        public-input()
    .desc-wrapper
      padding 0 13px
      color $color-text-desc
      .title
        font-size $font-size-medium
      .desc
        padding-top 10px
    .buy-bottom-wrapper
      position absolute
      box-sizing border-box
      width 100%
      padding 0 13px
      display flex
      justify-content space-between
      align-items center
      bottom 10px
      .price
        font-size $font-size-large
        color #fff
        .num
          color $color-text-money
      .buy-btn
        btn-linear(150px,40px,$font-size-large)
</style>
