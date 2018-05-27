<template>
  <div class="goods-list">
    <div class="list">
      <ul>
        <li class="list-item" v-for="(item, index) in list" :key="index">
          <div class="img">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="content">
            <p class="content-item"><span class="name">{{item.name}}</span></p>
            <p class="content-item"><span class="price">{{item.price}}</span></p>
            <p class="content-item"><span class="time">{{item.time}}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props: {
  //   list: {
  //     type: Array
  //   }
  // },
  data () {
    return {
      list: [{
        name: 'DOTA2',
        img: require('../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      },
      {
        name: 'DOTA2',
        img: require('../../common/test/list.png'),
        price: 123,
        time: '2018-1-12 18:23'
      }]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/index.styl'

  .goods-list
    padding 18px 10px
    .list
      ul
        .list-item
          box-sizing border-box
          padding 5px
          height 74px
          border-radius 10px
          box-linear()
          margin-bottom 10px
          display flex
          .img
            border-radius 10px
            height 100%
            width 100px
            img
              width 100%
              height 100%
</style>
