<template>
  <div class="up">
    <ConfirmUp @close="closeWindow" v-show="showWindow"></ConfirmUp>
    <NavBar title="上架"></NavBar>
    <div class="up-form-wrapper">
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">游戏名称:</span>
        </div>
        <div class="input-wrapper" @click="openSelectGameList">
          <p class="btn">{{gameName}}</p>
        </div>
      </div>
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">商品名称:</span>
        </div>
        <div class="input-wrapper" @click="openSelectGoodsList">
          <p class="btn">请选择道具</p>
        </div>
      </div>
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">交流QQ:</span>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="请输入您的QQ号码">
        </div>
      </div>
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">交流邮箱:</span>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="请输入您的电子邮箱">
        </div>
      </div>
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">商品售价:</span>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="请输入出售价格">
        </div>
      </div>
      <div class="up-input-item-desc-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">商品介绍:</span>
        </div>
        <div class="input-wrapper">
          <textarea></textarea>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click="openWindow">上架</div>
    </div>
    <van-popup v-model="isShowSelectGame" position="bottom" :overlay="true">
      <van-picker title="选择游戏" :columns="gameList" @change="onChangeGame" />
    </van-popup>
    <van-popup v-model="isShowSelectGoods" position="bottom" :overlay="true">
      <van-picker title="选择道具" :columns="goodsList" @change="onChangeGoods" />
    </van-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import ConfirmUp from 'page/Mine/SellManage/Up/ConfirmUp/ConfirmUp'
import SellManage from 'api/mine/sellManage'
let _sellManage = new SellManage()
export default {
  mounted() {
    this.getGameList()
  },
  data () {
    return {
      showWindow: false, // 是否显示确认窗口
      isShowSelectGame: false, // 是否显示选择游戏窗口
      isShowSelectGoods: false, // 是否显示商品列表
      gameList: [], // 游戏列表
      goodsList: [], // 道具列表
      gameName: '请选择游戏', // 游戏名称
      formParam: {
        bizId: '', // 游戏ID
        goodsTypeId: '', // 道具ID
        qq: '', // 交流QQ
        email: '', // 邮箱
        price: '', // 商品价格
        goodsName: '', // 商品名称
        imgs: '', // 图片地址
        description: '' // 商品介绍
      }
    }
  },
  components: {
    NavBar,
    ConfirmUp
  },
  methods: {
    // 打开确认窗口
    openWindow() {
      this.showWindow = true
    },
    // 关闭确认窗口
    closeWindow() {
      this.showWindow = false
    },
    // 打开游戏列表
    openSelectGameList() {
      this.isShowSelectGame = true
    },
    // 打开道具列表
    openSelectGoodsList() {
      if (this.formParam.bizId) {
        this.getGameForGoods()
      } else {
        Toast({
          duration: 1000,
          message: `无可选择的道具`
        })
      }
    },
    // 获取游戏
    getGameList() {
      _sellManage.getGameList()
        .then(res => {
          res.result.forEach(element => {
            element.text = element.gameName
          })
          this.gameList = res.result
        })
    },
    // 选择游戏后
    onChangeGame(picker, values) {
      // 选择ID
      this.formParam.bizId = values.gameId
      // 关闭窗口
      this.isShowSelectGame = false
      // 显示游戏名称
      this.gameName = values.gameName
      // 成功提示
      Toast.success({
        duration: 1000,
        message: `已选择${this.gameName}`
      })
      // 获取道具
      this.getGameForGoods()
    },
    // 选择道具后
    onChangeGoods() {

    },
    // 获取道具
    getGameForGoods() {
      _sellManage.getGameForGoods(this.formParam.bizId)
        .then(res => {
          // 继续选择道具
          if (res.result.length > 0) {
            this.isShowSelectGoods = true
          } else {
            Toast({
              duration: 1000,
              message: `无可选择的道具`
            })
          }
          console.log(res)
          // res.result.forEach(element => {

          // })
          // this.goodsList = res.result
          //
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .up
    .up-form-wrapper
      padding 15px 13px
      .up-input-item-desc-wrapper
        display flex
        flex-direction column
        align-items flex-start
        .text-wrapper
          color #fff
          font-size $font-size-medium-x
        .input-wrapper
          public-input()
          margin-top 10px
          width 100%
          height 100px
          textarea
            background-color transparent
            border transparent
            color #fff
            font-size $font-size-medium-x
            width 100%
            height 100%
            line-height 16px
      .up-input-item-wrapper
        display flex
        align-items center
        padding-bottom 10px
        .text-wrapper
          flex 1
          color #fff
          font-size $font-size-medium-x
        .input-wrapper
          flex 3
          public-input()
          height 42px
          display flex
          align-items center
          // justify-content center
          .btn
            font-size $font-size-medium-x
    .btn-wrapper
      btn-bottom()
      .btn
        btn-big()
</style>
