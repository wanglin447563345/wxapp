import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, DatePicker, List } from 'antd-mobile'
import enUs from 'antd-mobile/lib/date-picker/locale/en_US'
import Header from '../../../../components/Header'
import AnalysisDayChart from './subComponents/AnalysisDayChart'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
const nowTimeStamp = Date.now()
const now = new Date(nowTimeStamp)
// 月份格式化
function formatMonth (date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
  console.log(`${dateStr}`)
  return `${dateStr}`;
}
// 年格式化
function formatYear (date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}`;
  console.log(`${dateStr}`)
  return `${dateStr}`;
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
    const options=[{
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
                  value={this.state.date}
                  onChange={date => this.setState({ date })}
                >
                  <List.Item arrow='horizontal' >日期</List.Item>
                </DatePicker>
              </List>
              <AnalysisDayChart options={options} />
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
            </div>
            <div className='tab_content'>
              累计
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
Analysis.propTypes = {
  location: PropTypes.object.isRequired
}

export default Analysis
