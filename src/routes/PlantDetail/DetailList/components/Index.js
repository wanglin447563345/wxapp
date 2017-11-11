import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'antd-mobile'
import DetailListItem from './DetailListItem'
import Header from '../../../../components/Header'
import ADD_NOR from './imgs/add_nor.png'
import './Index.scss'

class DetailList extends React.Component {
  state = {
    value: ''
  }
  render () {
    const { query } = this.props.location
    const ModuleListData = [
      {
        module_id:1,
        module_name:'模块1',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:2323,
        day_energy:32123,
        total_energy:349390,
        time:'2014/01/15-2017/03/12'
      },
      {
        module_id:2,
        module_name:'模块2',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:2323,
        day_energy:32123,
        total_energy:349390,
        time:'2010/01/15-2017/03/12'
      },
      {
        module_id:3,
        module_name:'模块3',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:2323,
        day_energy:32123,
        total_energy:349390,
        time:'2016/01/15-2017/03/12'
      }
    ]
    return (
      <div className='list module_list'>
        <div className='detail_header'>
          <Header title='模块列表' />
        </div>
        <div className='search module_search'>
          <SearchBar
            value={this.state.value}
            placeholder='请输入搜索条件...'
            onSubmit={value => console.log(value, 'onSubmit')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={this.InputHidden}
            onChange={this.onChange}
          />
          <div className='add_module'><img src={ADD_NOR} alt='' /><br />添加逆变器</div>
        </div>
        <DetailListItem ModuleListData={ModuleListData} />
      </div>
    )
  }
  onChange= (value) => {
    this.setState({ value })
  };
}
DetailList.propTypes = {
  location: PropTypes.object.isRequired
}

export default DetailList
