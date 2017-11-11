import React from 'react'
import PropTypes from 'prop-types'
import './Index.scss'

import GENERATING_CAPACITY from '../imgs/generating_capacity.png'
import CUMULATIVE_CAPACITY from '../imgs/cumulative_capacity.png'
import CUMULATIVE_PROFIT from '../imgs/cumulative_profit.png'
import PROFIT from '../imgs/profit.png'

function Items (props) {
  const { items_data } = props
  return (
    <div className='items_wrap'>
      <div className='items'>
        <div className='item'>
          <p><img src={GENERATING_CAPACITY} alt='' /></p>
          <p>当日发电量(kWh)<br /><span className='purple'>{items_data.generating_capacity}</span></p>
        </div>
        <div className='item'>
          <p><img src={CUMULATIVE_CAPACITY} alt='' /></p>
          <p>累计发电量(kWh)<br /><span className='green'>{items_data.cumulative_capacity}</span></p>
        </div>
      </div>
      <div className='items'>
        <div className='item'>
          <p><img src={CUMULATIVE_PROFIT} alt='' /></p>
          <p>当前收益(￥)<br /><span className='orange'>{items_data.cumulative_profit}</span></p>
        </div>
        <div className='item'>
          <p><img src={PROFIT} alt='' /></p>
          <p>累计收益(￥)<br /><span className='red'>{items_data.profit}</span></p>
        </div>
      </div>
    </div>
  )
}

Items.propTypes = {
  items_data: PropTypes.object.isRequired
}
export default Items
