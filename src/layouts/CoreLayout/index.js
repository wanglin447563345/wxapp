import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../components/Footer'
import { Toast } from 'antd-mobile'
import { browserHistory } from 'react-router'
import Service from '../../services/Service'
import WX from 'weixin-js-sdk'
import './Index.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: true,
      wxConfig:{}
    }
  }
  render () {
    const { location, children } = this.props
    return (
      <div className='wrap'>
        <div className='core-layout__viewport'>
          {children}
        </div>
        {this.state.isShow ? <Footer location={location} createPlant={this.createPlant} /> : null }
      </div>
    )
  }
  componentDidMount () {
    const Url = location.href
    Service.getWxParams({ url: Url }).then(data => {
      if (data) {
        if (data.errno === 0) {
          const wxObj = data.data
          WX.config({
            // debug:true,
            appId: wxObj.appId,
            timestamp: wxObj.timestamp,
            nonceStr: wxObj.nonceStr,
            signature: wxObj.signature,
            jsApiList: ['scanQRCode', 'getLocation', 'chooseImage', 'getLocalImgData', 'uploadImage']
          })
        } else {
          Toast.info(data.errmsg)
        }
      } else {
        Toast.info('服务器异常，请稍后再试！！')
      }
    })
    const { pathname } = this.props.location
    if (pathname === '/wx/' || pathname === '/wx/list' || pathname === '/wx/help' || pathname === '/wx/user') {
      this.setState({
        isShow: true
      })
    } else {
      this.setState({
        isShow: false
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { pathname } = this.props.location
    const nextPath = nextProps.location.pathname
    if (pathname !== nextPath) {
      if (nextPath === '/wx/' || nextPath === '/wx/list' || nextPath === '/wx/help' || nextPath === '/wx/user') {
        this.setState({
          isShow: true
        })
      } else {
        this.setState({
          isShow: false
        })
      }
    }
  }
  createPlant = () => {
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
      Toast.info('异常！刷新重试')
      console.log(res)
    })
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default CoreLayout
