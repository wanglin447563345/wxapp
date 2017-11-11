import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar, Button } from 'antd-mobile'
import ListItem from './ListItem/Index'
import POWER_STATION_EXAMPLE from './imgs/power_station_example.png'
import './Index.scss'
class List extends Component {
  state = {
    value: '',
    inputShow: false
  }
  render () {
    const listData = [
      {
        plant_id:1,
        plant_name:'电站1',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:2323,
        system_size:12323,
        total_energy:349390,
        todays_income:29089,
        total_income:9403204
      },
      {
        plant_id:2,
        plant_name:'电站2',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:3323,
        system_size:12323,
        total_energy:349390,
        todays_income:29089,
        total_income:9403204
      },
      {
        plant_id:3,
        plant_name:'电站3',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122196173&di=3489e30f21a2613f49bd8d169468144a&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140603%2F0038038330870090_b.jpg',
        power:4323,
        system_size:12323,
        total_energy:349390,
        todays_income:29089,
        total_income:9403204
      }
    ]
    return (
      <div className='list'>
        <div className='search'>
          <Button
            className={this.state.inputShow ? 'btnHidden' : 'btnShow'}
            type='default'
            onClick={this.InputShow}
          >搜索</Button>
          <SearchBar
            className={this.state.inputShow ? 'moveShow' : 'moveHidden'}
            value={this.state.value}
            placeholder='请输入搜索条件...'
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={this.InputHidden}
            showCancelButton
            onChange={this.onChange}
          />
          <div className='example'><img src={POWER_STATION_EXAMPLE} alt='' />示例电站</div>
        </div>
        <ListItem listData={listData} />
      </div>
    )
  }
  onChange= (value) => {
    this.setState({ value })
  };
  InputShow = () => {
    this.setState({
      inputShow:true
    })
  }
  InputHidden = () => {
    this.setState({
      inputShow: false,
      value:''
    })
  }
}

List.propTypes = {
}
export default List
