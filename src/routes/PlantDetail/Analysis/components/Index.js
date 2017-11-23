import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, DatePicker, List } from 'antd-mobile'
import Header from '../../../../components/Header'
import AnalysisDayChart from './subComponents/AnalysisDayChart'
import MonthBarChart from './subComponents/MonthBarChart'
import YearBarChart from './subComponents/YearBarChart'
import SumBarChart from './subComponents/SumBarChart'
import './Index.scss'
const nowTimeStamp = Date.now()
const now = new Date(nowTimeStamp)
function formatDay (date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDay() + 1)}`
  console.log(`${dateStr}`)
  return `${dateStr}`
}
// 月份格式化
function formatMonth (date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}`
  console.log(`${dateStr}`)
  return `${dateStr}`
}
// 年格式化
function formatYear (date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n
  const dateStr = `${date.getFullYear()}`
  console.log(`${dateStr}`)
  return `${dateStr}`
}
class Analysis extends React.Component {
  state = {
    date: now,
    month: now,
    year:now
  }
  render () {
    const { query } = this.props.location
    // Tab
    const tabs = [
      { title: '日', sub: '1' },
      { title: '月', sub: '2' },
      { title: '年', sub: '3' },
      { title: '累计', sub: '4' }
    ]
    const options1=[{
      name: '南宁-曼芭',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(137,189,27)'
        }
      },
      data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
    }, {
      name: '桂林-曼芭',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,136,212)'
        }
      },
      data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
    }, {
      name: '南宁-甲米',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(219,50,51)'
        }
      },
      data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
    }]
    const options2=[{
      name: '包租费',
      type: 'bar',
      data: [20, 12, 31, 34, 31]
    }, {
      name: '装修费',
      type: 'bar',
      data: [10, 20, 5, 9, 3]
    }, {
      name: '保洁费',
      type: 'bar',
      data: [1, 1, 2, 3, 1]
    }, {
      name: '物业费',
      type: 'bar',
      data: [0.1, 2, 3, 1, 0.5]
    }]
    return (
      <div className='analysis'>
        <div className='detail_header'>
          <Header title='电站分析' />
        </div>
        <div className='analysis_tab'>
          <Tabs
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab) }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
          >
            <div className='tab_content'>
              <List className='date-picker-list' style={{ backgroundColor: 'white' }}>
                <DatePicker
                  mode='date'
                  title='选择日期'
                  format={(val) => `${formatDay(val)}`}
                  value={this.state.date}
                  onChange={date => this.setState({ date })}
                >
                  <List.Item arrow='horizontal' >日期</List.Item>
                </DatePicker>
              </List>
              <AnalysisDayChart options={options1} />
            </div>
            <div className='tab_content'>
              <List className='date-picker-list' style={{ backgroundColor: 'white' }}>
                <DatePicker
                  mode='month'
                  title='选择月份'
                  format={(val) => `${formatMonth(val)}`}
                  value={this.state.month}
                  onChange={month => this.setState({ month })}
                >
                  <List.Item arrow='horizontal'>月份</List.Item>
                </DatePicker>
              </List>
              <MonthBarChart options={options2} />
            </div>
            <div className='tab_content'>
              <List className='date-picker-list' style={{ backgroundColor: 'white' }}>
                <DatePicker
                  mode='year'
                  title='选择年份'
                  format={(val) => `${formatYear(val)}`}
                  value={this.state.year}
                  onChange={year => this.setState({ year })}
                >
                  <List.Item arrow='horizontal'>年份</List.Item>
                </DatePicker>
              </List>
              <YearBarChart options={options2} />
            </div>
            <div className='tab_content'>
              <p className='history_energy'>历年发电量</p>
              <SumBarChart options={options2} />
            </div>
          </Tabs>
        </div>
        <div className='analysis_table'>
          <table>
            <thead>
              <tr>
                <th>对比</th>
                <th>设备序列号</th>
                <th>设备编码</th>
                <th>采集器编码</th>
                <th>额定功率</th>
                <th>机型</th>
                <th>当日发电量</th>
                <th>总发电量</th>
                <th>更新时间</th>
                <th>链接状态</th>
              </tr>

            </thead>
          </table>
        </div>
      </div>
    )
  }
}
Analysis.propTypes = {
  location: PropTypes.object.isRequired
}

export default Analysis
