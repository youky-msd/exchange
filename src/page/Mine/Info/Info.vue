<template>
  <div class="info">
    <AlertWindow :show="showDetail">
      <div class="alert-detail">
        <div class="title">{{currentInfoDetail.title}}</div>
        <div class="detail">{{currentInfoDetail.content}}</div>
        <div class="btn" @click="ok">确定</div>
      </div>
    </AlertWindow>
    <NavBar title="消息中心"></NavBar>
    <Notice></Notice>
    <div class="edit-wrapper">
      <van-icon name="edit" @click="openEdit()" v-show="!isShowEdit"/>
      <van-icon name="completed" @click="cancelEdit()" v-show="isShowEdit"/>
      <van-icon name="delete" @click="deleteInfo()" v-show="isShowEdit"/>
    </div>
    <!-- <div class="tab-wrapper">
      <Tab :tabList="tabList" @toggleTab="toggleTab"></Tab>
    </div> -->
    <Scroll class="scroll">
      <div class="list">
        <ul>
          <li class="list-item" v-for="item in infoList"
           :key="item.id" @click="addSelectOrDetail(item)">
            <div class="select-wrapper" v-show="isShowEdit">
              <van-icon name="checked" class="icon" :class="{selected: item.selected}"/>
            </div>
            <div class="list-item-info-wrapper">
              <p class="text"><span class="text-desc">{{item.title}}</span><span class="dot" v-show="item.status === 0">●</span></p>
              <p class="status">{{item.content}}</p>
            </div>
            <div class="list-item-info-wrapper right">
              <p class="time">{{getTime(item.createTime)}}</p>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import Notice from 'components/Notice/Notice'
import Scroll from 'components/Scroll/Scroll'
import AlertWindow from 'components/AlertWindow/AlertWindow'
import Tab from 'components/Tab/Tab'
import tool from 'common/js/tool'
import Info from 'api/mine/info'
const _info = new Info()

export default {
  mounted() {
    this.getInfoList()
  },
  data () {
    return {
      isShowEdit: false, // 是否打开编辑
      selectList: [], // 选中的列表
      // tabList: ['交易消息', '系统消息'], // tab 标题
      infoList: [], // 交易信息列表
      showDetail: false, // 是否显示消息详情
      currentInfoDetail: {} // 当前消息
    }
  },
  components: {
    NavBar,
    Notice,
    Scroll,
    Tab,
    AlertWindow
  },
  methods: {
    toggleTab(index) {
      // 根据索引判断取哪个list
    },
    hasSelect(id) {
      this.selectList.some((item, index) => {
        if (item === id) {
          console.log(item, id)
          return true
        }
      })
    },
    // 关闭详情窗口
    ok() {
      this.showDetail = false
    },
    // 多重操作
    addSelectOrDetail(selectList) {
      if (this.isShowEdit) {
        // 编辑操作
        this.addSelect(selectList)
      } else {
        // 查看详情操作
        this.showDetail = true
        this.currentInfoDetail = selectList
        this.changeInfoStatus(selectList.id)
        this.getInfoList()
      }
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
        this.infoList = Object.assign({}, this.infoList, {})
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
        this.infoList = Object.assign({}, this.infoList, {})
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
    getInfoList() {
      _info.getInfoList()
        .then(res => {
          this.infoList = res.result
          this.infoList.forEach(item => {
            item.selected = false
          })
          console.log(this.infoList)
          console.log(res)
        })
    },
    deleteInfo() {
      // 处理删除ID
      let deleteStr = this.selectList.join(',')
      _info.deleteInfo(deleteStr)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 500,
              message: '删除成功'
            })
            this.getInfoList()
            this.selectList = []
          }
        })
    },
    // 改变消息状态
    changeInfoStatus(id) {
      _info.changeInfoStatus(id)
        .then(res => {

        })
    },
    // 时间戳处理
    getTime(timestamp) {
      return tool.timestampToTime(timestamp)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .info
    // position relative
    .alert-detail
      position relative
      height 100%
      .title
        padding-bottom 10px
      .detail
        line-height 20px
      .btn
        position absolute
        btn-big()
        bottom 0
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
      top 86px
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
            .list-item-info-wrapper
              width 70%
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
                .dot
                  color red
                  padding-left 5px
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
                ellipsis()
</style>
