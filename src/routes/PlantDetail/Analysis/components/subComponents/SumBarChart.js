import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class SumBarChart extends Component {
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('SumBarChart')
    let myChart = echarts.init(chartId)
    const options = {
      backgroundColor: '#FFFFFF',
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['包租费', '装修费', '保洁费', '物业费'],
        align: 'right',
        right: 10
      },
      grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        name: '日期',
        data: ['1号', '2号', '3号', '4号', '5号'],
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      yAxis: [{
        type: 'value',
        name: '发电量(kWh)',
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          formatter: '{value}'
        }
      }],
      series: this.props.options
    }
    // 绘制图表
    myChart.setOption(options)
  }
  render () {
    return (
      <div id='SumBarChart' style={{ width: '98%', height: 260 }} />
    )
  }
}
SumBarChart.propTypes = {
  options: PropTypes.array.isRequired
}

export default SumBarChart
