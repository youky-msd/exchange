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
  },
  data () {
    return {

    }
  },
  components: {
    Layout
  },
  methods: {
    ...mapActions(['setUser'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
