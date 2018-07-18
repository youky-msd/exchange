<template>
  <div class="fade-animate">
    <transition name="fade">
      <slot v-if="show"></slot>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    show: Boolean
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.fade-enter,
.fade-leave-to
  opacity 0

.fade-enter-active,
.fade-leave-active
  transition opacity .5s
</style>
