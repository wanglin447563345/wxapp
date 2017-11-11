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
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    const chartId = document.getElementById('area')
    let myChart = echarts.init(chartId)
    const AreaOption = {
      title : {},
      tooltip : {
        trigger: 'axis'
      },
      toolbox: {
        show : true,
        feature : {
          mark : { show: true },
          dataView : { show: true, readOnly: false },
          magicType : { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore : { show: true },
          saveAsImage : { show: true }
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'time',
          boundaryGap : false
        }
      ],
      grid: {
        left: '3%',
        right: '4%',
        top: '4%',
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
          name:'发电量',
          type:'line',
          smooth:true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default',
                color: '#AA4CBA'
              }
            }
          },
          data: this.props.options.data
        }
      ]
    }
    // 绘制图表
    myChart.setOption(AreaOption)
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
