import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../../components/Header'
import INVERTER from './imgs/inverter.png'
import POWER from '../../../List/components/ListItem/imgs/power2.png'
import './Index.scss'

class PlantMap extends React.Component {
  render () {
    const plant_info = {
      plant_name:'电站一',
      address: '上海市嘉定区南翔镇',
      power: '232.00',
      url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=890502818,3462696577&fm=27&gp=0.jpg'
    }
    return (
      <div className='map'>
        <div className='detail_header'>
          <Header title='电站地图' />
        </div>
        <div className='map_content'>
          <div id='map_plant' />
          <div className='map_item'>
            <p className='module_img'><img src={plant_info.url} alt='' /></p>
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
  initMap= () => {
    let BMap = window.BMap
    let map = new BMap.Map('map_plant') // 创建Map实例
    map.centerAndZoom(new BMap.Point(121.4, 31.2), 11) // 初始化地图,设    置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
    map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    let marker = new BMap.Marker(121.440784, 31.224952)  // 创建标注
    map.addOverlay(marker)               // 将标注添加到地图中
  }
  componentDidMount () {
    this.initMap()
  }
}

PlantMap.propTypes = {
}

export default PlantMap
