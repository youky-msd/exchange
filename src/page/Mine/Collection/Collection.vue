<template>
  <div class="collection">
    <NavBar title="我的收藏"></NavBar>
    <div class="edit-wrapper">
      <van-icon name="edit" @click="openEdit()" v-show="!isShowEdit"/>
      <van-icon name="completed" @click="cancelEdit()" v-show="isShowEdit"/>
      <van-icon name="delete" @click="deleteSelected()" v-show="isShowEdit"/>
    </div>
    <Scroll class="scroll">
      <!-- <GoodsList :list="list"></GoodsList> -->
      <GoodsListItem class="goods-list-item" :detail="item"
      v-for="(item, index) in list" :key="index">
        <template slot="top">
          <p class="time">{{item.time}}</p>
        </template>
        <template slot="content">
          <p class="name">{{item.name}}</p>
          <p class="user desc">{{item.score}}DDM积分*1</p>
        </template>
        <template slot="btn">
          <div class="icon-wrapper" v-show="isShowEdit" @click="addSelect(item)">
            <van-icon name="checked" class="icon" :class="{selected: item.selected}"/>
          </div>
        </template>
        <template slot="bottom">
          <p class="desc">{{item.desc}}</p>
        </template>
      </GoodsListItem>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/NavBar/NavBar'
// import GoodsList from 'components/GoodsList/GoodsList'
import GoodsListItem from 'components/GoodsListItem/GoodsListItem'
import Scroll from 'components/Scroll/Scroll'

export default {
  data () {
    return {
      isShowEdit: false, // 是否打开编辑
      selectList: [], // 选中的列表
      list: [{
        name: 'DOTA2',
        id: '1',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '2',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '3',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '4',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '5',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '1',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '6',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '7',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '8',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      },
      {
        name: 'DOTA2',
        id: '9',
        img: require('../../../common/test/list.png'),
        price: 123,
        score: 100,
        time: '2018-1-12 18:23',
        desc: '简介: 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿',
        selected: false
      }]
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
          console.log('没有选中时')
          console.log(this.selectList)
          if (item !== selectList.id) {
            return true
          }
        })
        // 添加至列表
        if (flag) {
          this.selectList.push(selectList.id)
        }
        console.log('变为选中')
        console.log(this.selectList)
        selectList.selected = true
      } else {
        // 已选中
        this.selectList = this.selectList.filter((item, index) => {
          console.log('选中时')
          console.log(this.selectList)
          if (item !== selectList.id) {
            return true
          }
        })
        selectList.selected = false
        console.log('变为未选中')
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
</style>
