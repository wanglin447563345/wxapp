import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Toast, SwipeAction,ActivityIndicator, List } from 'antd-mobile'

import POWER2 from '../../../../List/components/ListItem/imgs/power2.png'
import GENERTING_CAPACITY from '../../../../List/components/ListItem/imgs/total_generating_capacity.png'
import GENERTING2_CAPACITY from './imgs/generating2_capacity.png'

import './Index.scss'

const alert = Modal.alert

// 信号强度组件
const Signal = (props) => {
  let ranks = Number.parseInt((props.point))
  if (ranks <= 0) {
    return <div className='signal'>
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  } else if (ranks <= 20) {
    return <div className='signal'>
      <span style={{ backgroundColor:'#F1522C' }} />
      <span />
      <span />
      <span />
      <span />
    </div>
  } else if (ranks <= 40) {
    return <div className='signal'>
      <span style={{ backgroundColor:'#F1522C' }} />
      <span style={{ backgroundColor:'#F1522C' }} />
      <span />
      <span />
      <span />
    </div>
  } else if (ranks <= 60) {
    return <div className='signal'>
      <span style={{ backgroundColor:'#FEC93E' }} />
      <span style={{ backgroundColor:'#FEC93E' }} />
      <span style={{ backgroundColor:'#FEC93E' }} />
      <span />
      <span />
    </div>
  } else if (ranks <= 80) {
    return <div className='signal'>
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span />
    </div>
  } else {
    return <div className='signal'>
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
      <span style={{ backgroundColor:'#4DD7A5' }} />
    </div>
  }
}

class DetailListItem extends React.Component {
  render () {
    const { detailListData } = this.props
    return (
      detailListData ? <List className='list_items'>
        {detailListData.map((item, key) => {
          return (
            <SwipeAction
              key={key}
              autoClose
              right={[
                {
                  text: '删除',
                  onPress: () => alert('删除', `确定删除逆变器:${item.device_name}`, [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                      text: '确定',
                      onPress: () => this.props.deleteModule({ module_id: item.module_id })
                    }
                  ]),
                  style: { backgroundColor: '#f04134', color: 'white', width: '100px', fontSize: '20px' }
                }
              ]}
            >
              <List.Item key={item.module_id}>
                <div className='list_item_header'>
                  <p>
                    <span>{item.device_name}</span>
                  </p>
                  <Signal point={item.point} />
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
                      <span className='system_size'>{item.todays_energy}</span>
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
      </List> : <ActivityIndicator animating />
    )
  }
}
Signal.propTypes = {
  point: PropTypes.number.isRequired
}
DetailListItem.propTypes = {
}

export default DetailListItem

