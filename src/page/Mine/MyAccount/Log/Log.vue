<template>
  <div class="log">
    <NavBar title="记录"></NavBar>
    <Notice></Notice>
    <div class="edit-wrapper">
      <!-- <van-icon name="edit" @click="openEdit()" v-show="!isShowEdit"/> -->
      <!-- <van-icon name="completed" @click="cancelEdit()" v-show="isShowEdit"/> -->
      <!-- <van-icon name="delete" @click="deleteSelected()" v-show="isShowEdit"/> -->
    </div>
    <div class="tab-wrapper">
      <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    </div>
    <Scroll class="scroll">
      <div class="list" v-show="currentSelectIndex === 0">
        <ul>
          <li class="list-item" v-for="item in chargeLogList"
           :key="item.id" @click="addSelect(item)">
            <div class="select-wrapper" v-show="isShowEdit">
              <van-icon name="checked" class="icon" :class="{selected: item.selected}"/>
            </div>
            <div class="list-item-log-wrapper">
              <p class="text"><span class="text-desc">充值渠道</span><span class="text-name">{{item.channelName}}</span></p>
              <p class="time">充值金额 {{item.exgAmount}}</p>
            </div>
            <div class="list-item-log-wrapper right">
              <p class="status">{{getTime(item.createTime)}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list" v-show="currentSelectIndex === 1">
        <ul>
          <li class="list-item" v-for="item in widthdrawLogList"
           :key="item.id" @click="addSelect(item)">
            <div class="select-wrapper" v-show="isShowEdit">
              <van-icon name="checked" class="icon" :class="{selected: item.selected}"/>
            </div>
            <div class="list-item-log-wrapper">
              <p class="text"><span class="text-desc">兑换方式</span><span class="text-name"> {{item.type === 2 ? 'DDM':'银行卡'}}</span></p>
              <p class="time">兑换实际金额 {{item.exchangeAmount}}</p>
            </div>
            <div class="list-item-log-wrapper right">
              <p class="status">{{getTime(item.createTime)}}</p>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Scroll from 'components/Scroll/Scroll'
import tool from 'common/js/tool.js'
import Tab from 'components/Tab/Tab'
import Charge from 'api/mine/charge'
const _charge = new Charge()

export default {
  mounted() {
    this.getChargeLogList()
    this.getWithdrawLogList()
  },
  data () {
    return {
      currentSelectIndex: 0, // 当前索引
      isShowEdit: false, // 是否打开编辑
      selectList: [], // 选中的列表
      tabList: ['充值记录', '兑换记录'], // tab 标题
      chargeLogList: [{ // 充值记录列表
        name: '光明骑士',
        price: 88.4,
        status: '已出售',
        time: '2018-5-20 18:00',
        id: 1,
        selected: false
      }],
      widthdrawLogList: [] // 兑换列表
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    Tab
  },
  methods: {
    toggleTab(index) {
      // 根据索引判断取哪个list
      this.currentSelectIndex = index
    },
    hasSelect(id) {
      this.selectList.some((item, index) => {
        if (item === id) {
          console.log(item, id)
          return true
        }
      })
    },
    // 选中操作
    addSelect(selectList) {
      // 没有被选中
      if (!selectList.selected) {
        // 判断选中的元素没有与当前选中的id相同,则为true
        let flag = this.selectList.every((item, index) => {
          // console.log('没有选中时')
          // console.log(this.selectList)
          if (item !== selectList.id) {
            return true
          }
        })
        // 添加至列表
        if (flag) {
          this.selectList.push(selectList.id)
        }
        // console.log('变为选中')
        // console.log(this.selectList)
        selectList.selected = true
      } else {
        // 已选中
        this.selectList = this.selectList.filter((item, index) => {
          // console.log('选中时')
          // console.log(this.selectList)
          if (item !== selectList.id) {
            return true
          }
        })
        selectList.selected = false
        // console.log('变为未选中')
        // console.log(this.selectList)
      }
      console.log(this.selectList)
    },
    // 打开编辑
    openEdit() {
      this.isShowEdit = true
    },
    // 取消编辑
    cancelEdit() {
      this.isShowEdit = false
    },
    // 充值记录
    getChargeLogList() {
      _charge.chargeLog()
        .then(res => {
          this.chargeLogList = res.result
          console.log(res)
        })
    },
    // 兑换记录
    getWithdrawLogList() {
      _charge.withdrawLog()
        .then(res => {
          this.widthdrawLogList = res.result
          console.log(res)
        })
    },
    // 处理时间
    getTime(timestamp) {
      return tool.timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .log
    // position relative
    .edit-wrapper
      position absolute
      z-index 2
      top 13px
      right 17px
      font-size 24px
      color #fff
    .tab-wrapper
      position relative
      z-index 2
      padding 45px 0 10px
      public-box-shadow()
    .scroll
      fixed-all()
      top 155px
      .list
        ul
          padding 0 13px
          .list-item
            display flex
            box-sizing border-box
            justify-content space-between
            padding 10px 0
            height 74px
            display flex
            border-bottom 1px solid $color-border
            .select-wrapper
              flex-basis 50px
              display flex
              justify-content center
              align-items center
              .icon
                font-size 20px
                &.selected
                  color $color-selected
            .list-item-log-wrapper
              flex 3
              display flex
              justify-content space-between
              flex-direction column
              &.right
                flex 2
                justify-content flex-end
                text-align right
              .text
                font-size $font-size-medium
                .text-desc
                  color $color-text
                .text-name
                  color $color-text-desc
              .price
                font-size $font-size-small
                .price-text
                  padding-right 5px
                  color $color-text-desc
                .price-num
                  color $color-text-money
              .status,
              .time
                font-size $font-size-mini
                color $color-text-little
</style>
