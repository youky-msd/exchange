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
        <div class="input-wrapper">
          <p class="btn">请选择游戏</p>
        </div>
      </div>
      <div class="up-input-item-wrapper">
        <div class="text-wrapper">
          <span class="tag">*</span>
          <span class="text">商品名称:</span>
        </div>
        <div class="input-wrapper">
          <p class="btn">请选择游戏</p>
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
    <van-popup v-model="isShowSelectGame" position="bottom" :overlay="false">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import ConfirmUp from 'page/Mine/SellManage/Up/ConfirmUp/ConfirmUp'

export default {
  data () {
    return {
      showWindow: false
    }
  },
  components: {
    NavBar,
    ConfirmUp
  },
  methods: {
    openWindow() {
      this.showWindow = true
    },
    closeWindow() {
      this.showWindow = false
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
