import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { Modal, Toast, SwipeAction, List } from 'antd-mobile'
import POWERSTATION from './imgs/power2_station.png'
import DELETE from './imgs/delete.png'
import POWER2 from './imgs/power2.png'
import CAPACITY from './imgs/capacity.png'
import TOTALGENERATINGCAPACITY from './imgs/total_generating_capacity.png'
import INCOME from './imgs/income.png'
import TOTALINCOME from './imgs/total_income.png'
import './Index.scss'

const alert = Modal.alert

class ListItem extends React.Component {
  render () {
    const { listData } = this.props
    return (
      <List className='list_items'>
        {listData.map((item, key) => {
          return (
            <SwipeAction
              key={key}
              autoClose
              right={[
                {
                  text: '删除',
                  onPress: () => alert('删除', `确定删除电站:${item.plant_name}`, [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                      text: '确定',
                      onPress: () => this.deletePlant(item.plant_id)
                    }
                  ]),
                  style: { backgroundColor: '#f04134', color: 'white', width: '100px', fontSize: '20px' }
                }
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <List.Item onClick={() => this.skipPlantBasic(item.plant_id)} key={item.plant_id}>
                <div className='list_item_header'>
                  <p>
                    <img src={POWERSTATION} alt='' />
                    <span>{item.plant_name}</span>
                  </p>
                </div>
                <div className='list_item_bottom'>
                  <div className='img'>
                    <img src={item.url} alt='' />
                  </div>
                  <div>
                    <p>
                      <img src={POWER2} alt='' />
                      <span>当前功率(kW)</span>
                      <span className='power'>{item.power}</span>
                    </p>
                    <p>
                      <img src={CAPACITY} alt='' />
                      <span>装机容量(kWh)</span>
                      <span className='system_size'>{item.system_size}</span>
                    </p>
                    <p>
                      <img src={TOTALGENERATINGCAPACITY} alt='' />
                      <span>总发电量(kWh)</span>
                      <span className='total_energy'>{item.total_energy}</span>
                    </p>
                    <p>
                      <img src={INCOME} alt='' />
                      <span>当日收益(¥)</span>
                      <span className='todays_income'>{item.todays_income}</span>
                    </p>
                    <p>
                      <img src={TOTALINCOME} alt='' />
                      <span>总收益(¥)</span>
                      <span className='total_income'>{item.total_income}</span>
                    </p>
                  </div>
                </div>
              </List.Item>
            </SwipeAction>
          )
        })}
      </List>
    )
  }
  // 删除电站
  deletePlant = () => {
    Toast.success('删除成功')
  }
  // 跳转电站详情
  skipPlantBasic = (id) => {
    browserHistory.push(`/wx/detail/basic?plant_id=${id}`)
  }
}

ListItem.propTypes = {
  listData: PropTypes.array.isRequired
}

export default ListItem

