import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'
import WarnListItem from './WarnListItem'
import Header from '../../../../components/Header'
import './Index.scss'

class Warn extends React.Component {

  render () {
    const { query } = this.props.location
    const WarnListData = [
      {
        plant_name:'电站一',
        plant_identifier:'W001',
        module_id:1,
        module_identifier:'IV2CFD456A',
        found_time:'2017.02.03 17:21:03',
        status:1,
        description:'直流电压异常升高'
      },
      {
        plant_name:'电站一',
        plant_identifier:'W001',
        module_id:2,
        module_identifier:'IV2CFD456B',
        status:0,
        found_time:'2017.02.03 17:21:03',
        description:'是多久啊领导'
      },
      {
        plant_name:'电站一',
        plant_identifier:'W001',
        module_id:3,
        module_identifier:'IV2CFD456C',
        status:1,
        found_time:'2017.02.03 17:21:03',
        description:'放假啦是多少啦打开'
      }
    ]
    return (
      <div className='list warn_list'>
        <div className='detail_header'>
          <Header title='模块列表' />
        </div>
        <div className='cue'>
          上次查看时间2017/10/02/12:32:02
        </div>
        <WarnListItem WarnListData={WarnListData} />
      </div>
    )
  }
}
Warn.propTypes = {
  location: PropTypes.object.isRequired
}

export default Warn
