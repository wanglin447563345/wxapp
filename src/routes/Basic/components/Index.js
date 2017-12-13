import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs, ActivityIndicator } from 'antd-mobile'
import Util from '../../../util/Util'
import DashboardChart from '../../../components/DashboardChart/Index'
import DayChart from '../../../components/DayChart/Index'
import MonthChart from '../../../components/MonthChart/Index'
import YearChart from '../../../components/YearChart/Index'
import SumChart from '../../../components/SumChart/Index'
import Items from '../../../components/Items/Index'
import './Index.scss'
class Basic extends Component {
  state={
    isPower:true
  }

  componentDidMount () {
    const userInfo = JSON.parse(Util.getCookie('user_info'))
    this.props.get_user_stat({ user_id: userInfo.userId })
    // 获取实时功率
    const d = new Date()
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    this.props.get_user_power_data({ date: date })
  }
  render () {
    // Tab
    const tabs = [
      { title: '日', sub: '1' },
      { title: '月', sub: '2' },
      { title: '年', sub: '3' },
      { title: '累计', sub: '4' }
    ]
    const { userStat, powerData, dayEnergy, monthEnergy, yearEnergy } = this.props.basic
    let DashOptions
    let ItemData
    if (userStat) {
      DashOptions = {
        power: userStat.power,
        system_size: userStat.system_size
      }
      ItemData = {
        generating_capacity:userStat.todays_energy,
        cumulative_capacity:userStat.total_energy,
        cumulative_profit:userStat.todays_income,
        profit:userStat.total_income
      }
    }
    return (
      <div className='basic'>
        <div className='dashChart'>
          <DashboardChart options={DashOptions} />
        </div>
        <div className='myTab'>
          {this.state.isPower ? <p>实时功率<span>(W)</span></p> : <p>发电量<span>(kWh)</span></p>}
          <Tabs
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => this.tabChange(tab, index)}
            onTabClick={(tab, index) => this.tabClick(tab, index)}
          >
            <div className='tab_content'>
              { powerData ? <DayChart options={{ powerData }} /> : <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin:'0 auto'
                }}>
                <ActivityIndicator text='加载中...' />
              </div>
              }
            </div>
            <div className='tab_content'>
              { dayEnergy ? <MonthChart options={dayEnergy} /> : <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin:'0 auto'
                }}>
                <ActivityIndicator text='加载中...' />
              </div>
              }
            </div>
            <div className='tab_content'>
              { monthEnergy ? <YearChart options={monthEnergy} /> : <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin:'0 auto'
                }}>
                <ActivityIndicator text='加载中...' />
              </div>
              }
            </div>
            <div className='tab_content'>
              { yearEnergy ? <SumChart options={yearEnergy} /> : <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin:'0 auto'
                }}>
                <ActivityIndicator text='加载中...' />
              </div>
              }
            </div>
          </Tabs>
        </div>
        <div className='basic_items'>
          <Items items_data={ItemData} />
        </div>
      </div>
    )
  }
  // tab切换
  tabClick=(a, b) => {
    if (b === 0) {
      this.setState({ isPower:true })
    } else {
      this.setState({ isPower:false })
    }
  }
  tabChange=(a, b) => {
    const d = new Date()
    switch (b) {
      case 0: this.props.get_user_power_data({ date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` })
        break
      case 1: this.props.get_user_day_energy({ month: `${d.getFullYear()}-${d.getMonth() + 1}` })
        break
      case 2: this.props.get_user_month_energy({ year: `${d.getFullYear()}` })
        break
      case 3: this.props.get_user_year_energy()
        break
    }
  }
}

Basic.propTypes = {
  basic: PropTypes.object.isRequired,
  get_user_stat: PropTypes.func.isRequired,
  get_user_power_data: PropTypes.func.isRequired,
  get_user_day_energy: PropTypes.func.isRequired,
  get_user_month_energy: PropTypes.func.isRequired,
  get_user_year_energy: PropTypes.func.isRequired
}
export default Basic
