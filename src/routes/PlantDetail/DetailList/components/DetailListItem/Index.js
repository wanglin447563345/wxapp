import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Toast, SwipeAction, List } from 'antd-mobile'

import POWER2 from '../../../../List/components/ListItem/imgs/power2.png'
import GENERTING_CAPACITY from '../../../../List/components/ListItem/imgs/total_generating_capacity.png'
import GENERTING2_CAPACITY from './imgs/generating2_capacity.png'

import './Index.scss'

const alert = Modal.alert

class DetailListItem extends React.Component {
  render () {
    const { ModuleListData } = this.props
    return (
      <List className='list_items'>
        {ModuleListData.map((item, key) => {
          return (
            <SwipeAction
              key={key}
              autoClose
              right={[
                {
                  text: '删除',
                  onPress: () => alert('删除', `确定删除逆变器:${item.module_name}`, [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                      text: '确定',
                      onPress: () => this.deleteModule(item.module_id)
                    }
                  ]),
                  style: { backgroundColor: '#f04134', color: 'white', width: '100px', fontSize: '20px' }
                }
              ]}
            >
              <List.Item key={item.module_id}>
                <div className='list_item_header'>
                  <p>
                    <span>{item.module_name}</span>
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
                      <img src={GENERTING2_CAPACITY} alt='' />
                      <span>当日电量(kWh)</span>
                      <span className='system_size'>{item.day_energy}</span>
                    </p>
                    <p>
                      <img src={GENERTING_CAPACITY} alt='' />
                      <span>累计电量(kWh)</span>
                      <span className='total_energy'>{item.total_energy}</span>
                    </p>
                    <div className='quality'>
                      <span>质保期限: </span>{item.time}
                    </div>
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
  deleteModule = () => {
    Toast.success('删除成功')
  }
}

DetailListItem.propTypes = {
  ModuleListData: PropTypes.array.isRequired
}

export default DetailListItem

