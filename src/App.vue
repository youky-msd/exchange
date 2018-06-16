<template>
  <div class="app">
    <Layout />
  </div>
</template>

<script type="text/ecmascript-6">
import Layout from 'components/Layout/Layout'
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.setUser()
    this.initWebpack()
  },
  data () {
    return {

    }
  },
  components: {
    Layout
  },
  methods: {
    ...mapActions(['setUser']),
    initWebpack() {
      // 初始化websocket
      const wsuri = 'ws://47.104.254.248:8080/api/message/message-count'
      this.websock = new WebSocket(wsuri)
      // 这里面的this都指向vue
      this.websock.onopen = this.websocketopen
      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
      this.websock.onerror = this.websocketerror
    },
    // 打开
    websocketopen() {
      console.log('WebSocket连接成功')
    },
    // 数据接收
    websocketonmessage(e) {
      console.log(e)
      this.productinfos = JSON.parse(e.data)
    },
    // 关闭
    websocketclose() {
      console.log('WebSocket关闭')
    },
    // 失败
    websocketerror() {
      console.log('WebSocket连接失败')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
