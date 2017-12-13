import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class AreaChart extends Component {
  componentWillReceiveProps (nextProps) {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('area')
    let myChart = echarts.init(chartId)
    if (this.props.options.powerData !== nextProps.options.powerData) {
      const AreaOption = {
        title : {},
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis : [
          {
            type : 'time',
            boundaryGap : false
          }
        ],
        grid: {
          left: '3%',
          right: '5%',
          top: '5%',
          bottom: '1%',
          containLabel: true
        },
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'功率',
            type:'line',
            smooth:true,
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)',
                areaStyle: {
                  type: 'default',
                  color: '#AA4CBA'
                }
              }
            },
            data: nextProps.options.powerData
          }
        ]
      }
      // 绘制图表
      myChart.setOption(AreaOption)
    }
  }
  render () {
    return (
      <div id='area' style={{ width: '98%', height: 164 }} />
    )
  }
}
AreaChart.propTypes = {
  options: PropTypes.object.isRequired
}

export default AreaChart
