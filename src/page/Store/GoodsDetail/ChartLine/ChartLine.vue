<template>
  <div class="line">
    <div class="line-wrapper">
      <canvas ref="myChart" id="myChart" width="400" height="260"></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import F2 from '@antv/f2'
import Store from 'api/store'
const _store = new Store()

export default {
  mounted() {
    this.getPropertyDetailStatistics()
  },
  props: {
    id: String
  },
  data () {
    return {
      data: [{

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
          tickCount: 6,
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: 'DDM积分'
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
    },
    // 获取道具详情-价格走势
    getPropertyDetailStatistics() {
      _store.getPropertyDetailStatistics(this.id)
        .then(res => {
          res.result.forEach(element => {
            this.data.push({
              tem: parseInt(element.avgPrice),
              time: element.time
            })
            this._initChartLine()
          })
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
