import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class SumChart extends Component {
  componentWillReceiveProps (nextProps) {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('SumChart')
    let myChart = echarts.init(chartId)
    if (this.props.options !== nextProps.options) {
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          data: nextProps.options.time
        },
        grid: {
          left: '3%',
          right: '5%',
          top: '5%',
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
              color: '#F1522C',
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
          data: nextProps.options.data
        }]
      })
    }
  }
  render () {
    return (
      <div id='SumChart' style={{ width: '98%', height: 164 }} />
    )
  }
}
SumChart.propTypes = {
  options: PropTypes.object.isRequired
}

export default SumChart
