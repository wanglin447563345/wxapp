import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class AnalysisDayChart extends Component {
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('analysis_day_chart')
    let myChart = echarts.init(chartId)

    const analysisDayOption = {
      backgroundColor: '#FFFFFF',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        show:true,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['南宁-曼芭', '桂林-曼芭', '南宁-甲米'],
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
        }
      },
      grid: {
        left: '12%',
        right: '12%',
        bottom: '15%',
        top: '18%'
      },
      xAxis: [{
        type: 'category',
        name: '时间',
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: [{
        type: 'value',
        name: '功率(W)',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#dbdbdb'
          }
        }
      }],
      series: this.props.options
    }
    // 绘制图表
    myChart.setOption(analysisDayOption)
  }
  render () {
    return (
      <div id='analysis_day_chart' style={{ width: '98%', height: 260 }} />
    )
  }
}
AnalysisDayChart.propTypes = {
  options: PropTypes.array.isRequired
}

export default AnalysisDayChart
