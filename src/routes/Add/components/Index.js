import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, InputItem, WhiteSpace, Picker, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { browserHistory } from 'react-router'
import WX from 'weixin-js-sdk'
import Service from '../../../services/Service'

import './Index.scss'
class AddForm extends Component {
  state={
    currency:[
      {
        value: 0,
        label: 'RMB'
      },
      {
        value: 1,
        label: '€'
      },
      {
        value: 2,
        label: 'A$'
      }
    ],
    lat:'',
    lng:'',
    country:'中国',
    country_id:'48',
    province:'',
    province_id:'',
    city:'',
    city_id:'',
    address:''
  }
  componentDidMount () {
    WX.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success:  (res) => {
        this.setState({
          lat:res.latitude,
          lng:res.longitude
        })
        // 获取省市区地址
        this.getAddress(res.longitude, res.latitude)
      },
      cancel: (res) => {
        alert('用户拒绝授权获取地理位置')
      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
  componentWillUpdate (nextProps, nextState) {
    if (this.state.province !== nextState.province) { // 确保定位获取到省份
      this.getProvinceId({ parent_id: this.state.country_id })
    }
  }
  // 获取省市区地址
  getAddress = (lng, lat) => {
    let BMap = window.BMap
    let geoc = new BMap.Geocoder()
    let point = new BMap.Point(lng, lat)
    geoc.getLocation(point, (rs) => {
      let addComp = rs.addressComponents
      if (addComp.province === '上海市' ||
        addComp.province === '北京市' ||
        addComp.province === '天津市' ||
        addComp.province === '重庆市') {
        this.setState({
          province:addComp.city.replace('市', ''),
          city:addComp.district,
          address:addComp.street + addComp.streetNumber
        })
      } else {
        this.setState({
          province:addComp.province.replace('省', ''),
          city:addComp.city,
          address:addComp.district + addComp.street + addComp.streetNumber
        })
      }
    })
  }
  // 获取省id
  getProvinceId = (params) => {
    Service.getLocationList(params).then(data => {
      if (data.errno === 0) {
        for (let i = 0; i < data.data.length; i++) {
          if (this.state.province) {
            if (this.state.province === data.data[i].location_name) {
              this.setState({ province_id:data.data[i].location_id })
              this.getCityId({ parent_id: this.state.province_id })
            }
          }
        }
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
  // 获取市id
  getCityId = (params) => {
    Service.getLocationList(params).then(data => {
      for (let i = 0; i < data.data.length; i++) {
        if (this.state.city) {
          if (this.state.city === data.data[i].location_name) {
            this.setState({ city_id:data.data[i].location_id })
          }
        }
      }
    })
  }

  render () {
    const { getFieldProps } = this.props.form
    return (
      <div className='add'>
        <span
          onClick={() => { browserHistory.push('/wx/list') }}
          style={{
            position:'absolute',
            left:0,
            display:'inline-block',
            padding:'16px 16px 16px 4px',
            color: '#fff',
            fontSize:18
          }}> 《 返回列表</span>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
            {...getFieldProps('plant_name', {
              initialValue: '',
              rules: [
                {
                  required: true
                }
              ]
            })}
            placeholder='请输入电站名称'
          >电站名称：
          </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
          {...getFieldProps('system_size', {
            initialValue: '',
            rules: [
              {
                required: true
              }
            ]
          })}
          type='number'
          placeholder='请输入装机容量'
        >装机容量：
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <div className='price'>
          <InputItem
              {...getFieldProps('feed_in_teriff', {
                initialValue: '',
                rules: [
                  {
                    required: true
                  }
                ]
              })}
              placeholder='请输入电价'
              type='number'
            >补助电价：
            </InputItem>
          <Picker
              data={this.state.currency}
              cols='1'
              {...getFieldProps('currency', {
                initialValue: [this.state.currency[0].value],
                rules: [
                  {
                    required: true
                  }
                ]
              })}
            >
              <List.Item arrow='down' />
            </Picker>
        </div>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Button type='primary' onClick={this.createPlant}>提交</Button>
      </div>
    )
  }

  createPlant = () => {
    const { getFieldsValue } = this.props.form
    const formObj = getFieldsValue()
    formObj['module_sn'] = this.props.location.query.module_sn
    formObj['plant_latitude'] = this.state.lat
    formObj['plant_longitude'] = this.state.lng
    formObj['country_id'] = this.state.country_id
    formObj['province_id'] = this.state.province_id
    formObj['city_id'] = this.state.city_id
    formObj['address'] = this.state.address
    this.props.create_plant(formObj)
  }
}

AddForm.propTypes = {
  location: PropTypes.object.isRequired,
  create_plant: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
}

const Add = createForm()(AddForm)
export default Add
