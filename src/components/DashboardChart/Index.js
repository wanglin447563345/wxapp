import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CAPACITY from '../imgs/capacity.png'
import POWER from '../imgs/power.png'
import './Index.scss'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入仪表盘图
import 'echarts/lib/chart/gauge'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class DashboardChart extends Component {
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    const option = {
      tooltip : {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        show : true,
        feature : {
          mark : { show: true },
          restore : { show: true },
          saveAsImage : { show: true }
        }
      },
      series : [
        {
          name:'容量使用率',
          type:'gauge',
          splitNumber: 5,       // 分割段数，默认为5
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[0.35, '#25E47A'], [0.65, '#FFEB3B'], [0.9, '#FDC02F'], [1, '#EF6C00']],
              width: 8
            }
          },
          axisTick: {            // 坐标轴小标记
            splitNumber: 10,   // 每份split细分多少段
            length :12,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            length :14,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer : {
            width : 5
          },
          title : {
            show : true,
            offsetCenter: [0, 60],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              color: '#FFEE58',
              fontSize: 14
            }
          },
          detail : {
            formatter:'{value}%',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: 18
            }
          },
          data:[{ value: 30, name: '使用率' }]
        }
      ]
    }
    let timeTicket
    clearInterval(timeTicket)
    timeTicket = setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      myChart.setOption(option, true)
    }, 2000)
  }
  render () {
    return (
      <div className='myDash'>
        <div className='dashData'>
          <img src={POWER} alt='' />
          <p>当前功率(kW)</p>
          <span>2121</span>
        </div>
        <div id='main' style={{ width: 155, height: 155 }} />
        <div className='dashData'>
          <img src={CAPACITY} alt='' />
          <p>装机容量(kW)</p>
          <span>2121</span>
        </div>
      </div>
    )
  }
}
DashboardChart.propTypes = {
  options: PropTypes.object.isRequired
}

export default DashboardChart
