import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class MonthChart extends Component {
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('MonthChart')
    let myChart = echarts.init(chartId)
    // 绘制图表
    myChart.setOption({
      title: {},
      tooltip: {},
      xAxis: {
        data: this.props.options.time
      },
      grid: {
        left: '3%',
        right: '4%',
        top: '3%',
        bottom: '1%',
        containLabel: true
      },
      yAxis: {},
      series: [{
        name: '发电量',
        type: 'bar',
        itemStyle: {
          normal: {
            type: 'default',
            color: '#1BACC0',
            label : {
              show : true,
              textStyle : {
                fontSize : '12',
                fontFamily : '微软雅黑',
                fontWeight : 'bold'
              }
            }
          }
        },
        data: this.props.options.data
      }]
    })
  }
  render () {
    return (
      <div id='MonthChart' style={{ width: '98%', height: 164 }} />
    )
  }
}
MonthChart.propTypes = {
  options: PropTypes.object.isRequired
}

export default MonthChart
