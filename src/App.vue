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
    this.setNoReadNum()
    setInterval(() => {
      this.setBalance()
    }, 3000)
  },
  data () {
    return {

    }
  },
  components: {
    Layout
  },
  methods: {
    ...mapActions(['setUser', 'setNoReadNum', 'setBalance'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    height 100%
</style>
