import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { Carousel, Toast } from 'antd-mobile'
import WX from 'weixin-js-sdk'
import Service from '../../../services/Service'

import PLANT from './imgs/plant.png'
import ADD from './imgs/add.png'

import './Index.scss'

class Create extends Component {
  state = {
    wxConfig: ''
  }
  componentDidMount () {
  }
  render () {
    const createPlant = () => {
      WX.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          const moduleSn = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          Service.checkModuleSn({ module_sn: moduleSn }).then(data => {
            if (data.errno === 0) {
              if (data.data.user_id !== 0) {
                Toast.info('序列号已被占用')
              } else {
                browserHistory.push(`/wx/email?module_sn=${moduleSn}`)
              }
            } else {
              browserHistory.push(`/wx/create`)
              Toast.info(data.errmsg)
            }
          })
        }
      })
      WX.error(function (res) {
        Toast.info('失败')
      })
    }
    return (
      <div className='create'>
        <Carousel
          className='my-carousel'
          autoplay
          infinite
          speed={200}
          autoplayInterval={2000}
          resetAutoplay={false}
          selectedIndex={1}
          swipeSpeed={35}
          dotStyle={{ background: '#FFFFFF' }}
          dotActiveStyle={{ background: '#F98C24' }}
        >
          <div className='v-item'><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=890887832,1466328413&fm=200&gp=0.jpg" alt=""/></div>
          <div className='v-item'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510162110847&di=e345dface8d2cdb49a63ff370337730c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8694a4c27d1ed21b498c9adfa66eddc451da3f46.jpg" alt=""/></div>
          <div className='v-item'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510162152169&di=7eaf03dd42c1c97f1e9c41636ff7d78e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F908fa0ec08fa513de85801e7366d55fbb2fbd91d.jpg" alt=""/></div>
        </Carousel>
        <div className='create_item'>
          <img src={PLANT} alt='' /><span>示例电站</span>
        </div>
        <div className='create_item' onClick={createPlant}>
          <img src={ADD} alt='' /><span>扫码添加</span>
        </div>
      </div>
    )
  }
}

Create.propTypes = {
}
export default Create
