import React from 'react'
import PropTypes from 'prop-types'
import { Toast } from 'antd-mobile'
import Service from '../../../../services/Service'
import Header from '../../../../components/Header'
import INVERTER from './imgs/inverter.png'
import MAP_INVERER from './imgs/map_inverter.png'
import POWER from '../../../List/components/ListItem/imgs/power2.png'
import './Index.scss'

class PlantMap extends React.Component {
  state={
    mapInfo:{}
  }
  render () {
    const { mapInfo } = this.state
    const plant_info = {
      plant_name:mapInfo.plant_name,
      address: mapInfo.province + mapInfo.city + mapInfo.address,
      power: mapInfo.power,
      url:mapInfo.url
    }
    return (
      <div className='map'>
        <div className='detail_header'>
          <Header title='电站地图' />
        </div>
        <div className='map_content'>
          <div id='map_plant' />
          <div className='map_item'>
            <p className='module_img'><img src={`/assets/attachment${plant_info.url}`} alt='' /></p>
            <div>
              <p><img src={INVERTER} alt='' />{plant_info.plant_name}</p>
              <p>{plant_info.address}</p>
              <p>
                <img src={POWER} alt='' />
                <span>当前功率</span>
                <span>{plant_info.power}kW</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.initMap()
    const { query } = this.props.location
    this.getMapInfo({ plant_id: query.plant_id })
  }
  componentWillUpdate (nextProps, nextState) {
    if (this.state.mapInfo !== nextState.mapInfo) {
      this.initMap(nextState.mapInfo.plant_longitude, nextState.mapInfo.plant_latitude)
    }
  }
  // 初始化地图
  initMap= (lng, lat) => {
    let BMap = window.BMap
    let map = new BMap.Map('map_plant') // 创建Map实例
    map.centerAndZoom(new BMap.Point(lng, lat), 11) // 初始化地图,设    置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    let pt = new BMap.Point(lng, lat)
    let myIcon = new BMap.Icon(MAP_INVERER, new BMap.Size(66, 85))
    let marker2 = new BMap.Marker(pt, { icon:myIcon }) // 创建标注
    map.addOverlay(marker2)             // 将标注添加到地图中
  }
  // 获取地图信息
  getMapInfo = (params) => {
    Service.getPlantInfo(params).then(data => {
      if (data.errno === 0) {
        this.setState({ mapInfo: data.data })
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
}

PlantMap.propTypes = {
  location: PropTypes.object.isRequired
}

export default PlantMap
