<template>
  <div class="collection">
    <NavBar title="我的收藏"></NavBar>
    <div class="edit-wrapper">
      <van-icon name="edit" @click="openEdit()" v-show="!isShowEdit"/>
      <van-icon name="completed" @click="cancelEdit()" v-show="isShowEdit"/>
      <van-icon name="delete" @click="deleteCollection()" v-show="isShowEdit"/>
    </div>
    <Scroll class="scroll">
      <!-- <GoodsList :list="list"></GoodsList> -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="(item, index) in list" :key="index">
        <template slot="top">
          <p class="time">{{getTime(item.collectTime)}}</p>
        </template>
        <template slot="content">
          <p class="name">{{item.gameName}}</p>
          <p class="name">{{item.goodsName}}</p>
          <p class="user price">¥ {{item.price}}</p>
        </template>
        <template slot="btn">
          <div class="icon-wrapper" v-show="isShowEdit" @click="addSelect(item)">
            <van-icon name="checked" class="icon" :class="{selected: item.selected}"/>
          </div>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.description}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import NavBar from 'components/NavBar/NavBar'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Scroll from 'components/Scroll/Scroll'
import tool from 'common/js/tool'
import Collection from 'api/mine/collection'
const _collection = new Collection()

export default {
  mounted() {
    this.getCollectionList()
  },
  data () {
    return {
      isShowEdit: false, // 是否打开编辑
      selectList: [], // 选中的列表
      list: [] // 收藏列表
    }
  },
  components: {
    NavBar,
    // GoodsList,
    GoodsListItem,
    Scroll
  },
  methods: {
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
        this.list = Object.assign({}, this.list, {})
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
        this.list = Object.assign({}, this.list, {})
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
    // 获取收藏列表
    getCollectionList() {
      _collection.getCollectionList()
        .then(res => {
          this.list = res.result
          this.list.forEach(item => {
            item.selected = false
          })
        })
    },
    deleteCollection() {
      let deleteStr = this.selectList.join(',')
      _collection.deleteCollection(deleteStr)
        .then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 500,
              message: res.message
            })
            this.getCollectionList()
            this.selectList = []
          }
        })
    },
    // 时间戳处理
    getTime(timestamp) {
      return tool.timestampToTimeHM(timestamp)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .collection
    .edit-wrapper
      position absolute
      z-index 2
      top 13px
      right 17px
      font-size 24px
      color #fff
    .scroll
      fixed-all()
      top 50px
      padding-top 10px
      .goods-list-item
        .time
          line-height 20px
        .name
          font-size $font-size-medium-x
        .desc
          line-height 20px
        .icon
          font-size 20px
          &.selected
            color $color-selected
        .price
          color $color-text-money
</style>
