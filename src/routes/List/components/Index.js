import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar, Button, Toast } from 'antd-mobile'
import ListItem from './ListItem/Index'
import POWER_STATION_EXAMPLE from './imgs/power_station_example.png'
import Service from '../../../services/Service'
import './Index.scss'

class List extends Component {
  state = {
    value: '',
    inputShow: false
  }
  componentDidMount () {
    this.props.get_plant_list()
  }
  render () {
    let listData
    if (this.props.plantList.plantList.data) {
      listData = this.props.plantList.plantList.data
    }

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
            onSubmit={value => console.log(value, 'subMit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={this.InputHidden}
            showCancelButton
            onChange={this.onChange}
          />
          <div className='example'><img src={POWER_STATION_EXAMPLE} alt='' />示例电站</div>
        </div>
        <ListItem listData={listData} deletePlant={this.deletePlant} />
      </div>
    )
  }
  // 索搜电站
  onChange= (value) => {
    this.setState({ value })
    this.props.get_plant_list({ plant_name: value })
  };
  // 展开搜索框
  InputShow = () => {
    this.setState({
      inputShow:true
    })
  }
  // 隐藏搜索框
  InputHidden = () => {
    this.setState({
      inputShow: false,
      value:''
    })
  }
  // 删除电站
  deletePlant = (params) => {
    Service.deletePlant(params).then(data => {
      if (data.errno === 0) {
        Toast.success('删除成功')
        this.props.get_plant_list()
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
}

List.propTypes = {
}
export default List
