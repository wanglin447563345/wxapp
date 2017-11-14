import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Toast, SwipeAction, List } from 'antd-mobile'
import ALARM_MTRIANGLE from './imgs/alarm_mtriangle.png'
import ALARM_NUMBER from './imgs/alarm_number.png'
import LAARM_TIME from './imgs/alarm_time.png'
import ALARM_MALFUNCTION from './imgs/alarm_malfunction.png'

import './Index.scss'

const alert = Modal.alert

class WarnListItem extends React.Component {
  render () {
    const { WarnListData } = this.props
    return (
      <List className='list_items warn_list_item'>
        {WarnListData.map((item, key) => {
          return (
            <SwipeAction
              key={key}
              autoClose
              right={[
                {
                  text: '删除',
                  onPress: () => alert('删除', `确定删除逆变器`, [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                      text: '确定',
                      onPress: () => this.deleteWarn(item.module_id)
                    }
                  ]),
                  style: { backgroundColor: '#f04134', color: 'white', width: '100px', fontSize: '20px' }
                }
              ]}
            >
              <List.Item key={item.module_id}>
                <div className='list_item_header warn_list_item_header'>
                  <div className='warn_plant_name'>
                    <img src={ALARM_MTRIANGLE} alt='' />{item.plant_name}
                  </div>
                  <div className='plant_identifier'>
                    编号: {item.plant_identifier}
                  </div>
                </div>
                <div className='list_item_bottom warn_list_item_bottom'>
                  <div>
                    <p>
                      <img src={ALARM_NUMBER} alt='' />
                      <span className='warn_flex1'>逆变器编号</span>
                      <span className='warn_flex2'>{item.module_identifier}</span>
                    </p>
                    <p>
                      <img src={LAARM_TIME} alt='' />
                      <span className='warn_flex1'>发现时间内</span>
                      <span className='warn_flex2'>{item.found_time}</span>
                    </p>
                    <p>
                      <img src={ALARM_MALFUNCTION} alt='' />
                      <span className='warn_flex1'>故障描述</span>
                      <span className='warn_flex2'>{item.description}</span>
                    </p>
                  </div>
                  { (item.status === 1) ? <div className='warn_success'>处理</div> : <div className='warn_fail'>未处理</div>}
                </div>
              </List.Item>
            </SwipeAction>
          )
        })}
      </List>
    )
  }
  // 删除报警列表项
  deleteWarn = () => {
    Toast.success('删除成功')
  }
}

WarnListItem.propTypes = {
  WarnListData: PropTypes.array.isRequired
}

export default WarnListItem

