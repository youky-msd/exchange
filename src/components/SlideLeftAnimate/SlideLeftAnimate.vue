<template>
  <div class="alide-animation">
    <transition name="slide" mode="out-in">
      <slot></slot>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter,
.slide-leave-to
  transform translateX(100%)
  opacity 0
.slide-enter-active
.slide-leave-active
  transition all .2s
</style>
