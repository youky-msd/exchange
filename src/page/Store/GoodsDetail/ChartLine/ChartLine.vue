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
  mounted() {
    setTimeout(() => {
      this._initChartLine()
    }, 20)
  },
  data () {
    return {
      data: [{
        time: '2016-08-08 00:00:00',
        tem: 10
      }, {
        time: '2016-08-08 00:10:00',
        tem: 22
      }, {
        time: '2016-08-08 00:30:00',
        tem: 20
      }, {
        time: '2016-08-09 00:35:00',
        tem: 26
      }, {
        time: '2016-08-09 01:00:00',
        tem: 20
      }, {
        time: '2016-08-09 01:20:00',
        tem: 26
      }, {
        time: '2016-08-10 01:40:00',
        tem: 28
      }, {
        time: '2016-08-10 02:00:00',
        tem: 20
      }, {
        time: '2016-08-10 02:20:00',
        tem: 18
      }]
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
          tickCount: 10,
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: '¥'
        }
      }
      chart.source(this.data, defs)
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
      chart.line().position('time*tem').shape('smooth')
      chart.area().position('time*tem').shape('smooth')
      chart.point().position('time*tem').shape('smooth').style({
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
