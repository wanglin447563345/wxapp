import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, DatePicker, List } from 'antd-mobile'
import enUs from 'antd-mobile/lib/date-picker/locale/en_US'
import Header from '../../../../components/Header'
const nowTimeStamp = Date.now()
const date = new Date(nowTimeStamp)
const month = new Date(nowTimeStamp)

class Analysis extends React.Component {
  state = {
    date: date,
    month: month
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
                  <List.Item arrow='horizontal' />
                </DatePicker>
              </List>
            </div>
            <div className='tab_content'>
              <List className='date-picker-list' style={{ backgroundColor: 'white' }}>
                <DatePicker
                  mode='month'
                  title='选择月份'
                  format='YY-MM'
                  value={this.state.month}
                  onChange={month => this.setState({ month })}
                >
                  <List.Item arrow='horizontal' />
                </DatePicker>
              </List>
            </div>
            <div className='tab_content'>
              <List className='date-picker-list' style={{ backgroundColor: 'white' }}>
                <DatePicker
                  mode='year'
                  title='选择年份'
                  value={this.state.year}
                  onChange={year => this.setState({ year })}
                >
                  <List.Item arrow='horizontal' />
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
