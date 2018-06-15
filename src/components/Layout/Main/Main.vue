<template>
  <div class="Main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Nav />
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from 'components/Nav/Nav'

export default {
  data () {
    return {

    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
