import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, ActivityIndicator } from 'antd-mobile'
import { browserHistory } from 'react-router'
import Header from '../../../../components/Header'
import DashChart from '../../../../components/DashboardChart'
import Items from '../../../../components/Items'
import DayChart from '../../../../components/DayChart'
import MonthChart from '../../../../components/MonthChart'
import YearChart from '../../../../components/YearChart'
import SumChart from '../../../../components/SumChart'
import DETAIL_EDIT from './imgs/detail_edit.png'
import './Index.scss'

class DetailBasic extends React.Component {
  componentDidMount () {
    const { query } = this.props.location
    this.props.get_plant_info({ plant_id: query.plant_id })
    // 获取实时功率数据
    const d = new Date()
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    const formData = {
      date: date,
      plant_id: this.props.location.query.plant_id
    }
    this.props.get_plant_power_data(formData)
  }
  render () {
    // Tab
    const tabs = [
      { title: '日', sub: '1' },
      { title: '月', sub: '2' },
      { title: '年', sub: '3' },
      { title: '累计', sub: '4' }
    ]
    const { plantInfo, powerData, dayEnergy, monthEnergy, yearEnergy } = this.props.detailBasic
    let DashOptions
    let ItemData
    if (plantInfo) {
      DashOptions = {
        power: plantInfo.power,
        system_size: plantInfo.system_size
      }
      ItemData = {
        generating_capacity:plantInfo.todays_energy,
        cumulative_capacity:plantInfo.total_energy,
        cumulative_profit:plantInfo.todays_income,
        profit:plantInfo.total_income
      }
    }
    return (
      <div className='basic detail_basic'>
        <div className='detail_header'>
          <Header title={`${plantInfo.plant_name}概况`} />
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
            onChange={(tab, index) => this.tabChange(tab, index)}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
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
      </div>
    )
  }
  tabChange=(a, b) => {
    const { plant_id } = this.props.location.query
    const d = new Date()
    switch (b) {
      case 0: {
        const formData = {
          date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
          plant_id: plant_id
        }
        this.props.get_plant_power_data(formData)
      }
        break
      case 1: {
        const formData = {
          month: `${d.getFullYear()}-${d.getMonth() + 1}`,
          plant_id: plant_id
        }
        this.props.get_plant_day_energy(formData)
      }
        break
      case 2: {
        const formData = {
          year: `${d.getFullYear()}`,
          plant_id: plant_id
        }
        this.props.get_plant_month_energy(formData)
      }
        break
      case 3: {
        const formData = {
          plant_id: plant_id
        }
        this.props.get_plant_year_energy(formData)
      }
        break
    }
  }
}
DetailBasic.propTypes = {
  location: PropTypes.object.isRequired,
  detailBasic: PropTypes.object.isRequired,
  get_plant_info: PropTypes.func.isRequired,
  get_plant_power_data: PropTypes.func.isRequired,
  get_plant_day_energy: PropTypes.func.isRequired,
  get_plant_month_energy: PropTypes.func.isRequired,
  get_plant_year_energy: PropTypes.func.isRequired
}

export default DetailBasic
