<template>
  <div class="line">
    <div class="line-wrapper">
      <canvas ref="myChart" id="myChart" width="400" height="260"></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import F2 from '@antv/f2'

export default {
  props: {
    list: Array
  },
  mounted() {
    setTimeout(() => {
      this._initChartLine()
    }, 1000)
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    _initChartLine() {
      let chart = new F2.Chart({
        id: 'myChart',
        width: window.innerWidth,
        height: window.innerWidth > window.innerHeight ? window.innerHeight - 54 : window.innerWidth * 0.707,
        pixelRatio: window.devicePixelRatio
      })

      let defs = {
        time: {
          type: 'timeCat',
          mask: 'MM/DD',
          tickCount: 6,
          range: [0, 1]
        },
        price: {
          tickCount: 5,
          min: 0,
          alias: '¥'
        }
      }
      chart.source(this.list, defs)
      chart.axis('time', {
        label: function label(text, index, total) {
          let textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.tooltip({
        showCrosshairs: true
      })
      chart.line().position('time*price').shape('smooth')
      chart.area().position('time*price').shape('smooth')
      chart.point().position('time*price').shape('smooth').style({
        stroke: 'red',
        lineWidth: 2
      })
      chart.render()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
