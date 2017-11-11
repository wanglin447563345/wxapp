import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd-mobile'
import Header from '../../../../components/Header'
import DashChart from '../../../../components/DashboardChart'
import Items from '../../../../components/Items'
import DayChart from '../../../../components/DayChart'
import MonthChart from '../../../../components/MonthChart'
import YearChart from '../../../../components/YearChart'
import SumChart from '../../../../components/SumChart'
import './Index.scss'

class DetailBasic extends React.Component {
  render () {
    const { query } = this.props.location
    const DashOptions = {
      data:[{ value: 50, name: '使用率' }]
    }
    const plant_name='电站1'

    const ItemData = {
      generating_capacity:83.0,
      cumulative_capacity:220.0,
      cumulative_profit:243.0,
      profit:3232.0
    }
    const AreaOption = {
      data: [
        { value:['2016/12/18 6:38:08', 80] },
        { value:['2016/12/18 16:18:18', 60] },
        { value:['2016/12/18 19:18:18', 90] }
      ]
    }
    const monthOptions = {
      time:['1号', '2号', '3号', '4号', '5号', '6号'],
      data:[51, 230, 32, 430, 343, 100]
    }
    const yearOptions = {
      time:['一月', '二月', '三月', '四月', '五月', '六月'],
      data:[532, 240, 346, 103, 130, 300]
    }
    const sumOptions = {
      time:['2017', '2018', '2019', '2020', '2021', '2025'],
      data:[542, 220, 336, 140, 102, 500]
    }
    // Tab
    const tabs = [
      { title: '日', sub: '1' },
      { title: '月', sub: '2' },
      { title: '年', sub: '3' },
      { title: '累计', sub: '4' }
    ]
    return (
      <div className='basic detail_basic'>
        <div className='detail_header'>
          <Header title={`${plant_name}概况`} />
        </div>
        <div className='dashChart detail_dash_chart'>
          <DashChart options={DashOptions} />
        </div>
        <div className='basic_items detail_basic_items'>
          <Items items_data={ItemData} />
        </div>
        <div className='myTab plant_basic_tab'>
          <Tabs
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab) }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
          >
            <div className='tab_content'>
              <DayChart options={AreaOption} />
            </div>
            <div className='tab_content'>
              <MonthChart options={monthOptions} />
            </div>
            <div className='tab_content'>
              <YearChart options={yearOptions} />
            </div>
            <div className='tab_content'>
              <SumChart options={sumOptions} />
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
DetailBasic.propTypes = {
  location: PropTypes.object.isRequired
}

export default DetailBasic
