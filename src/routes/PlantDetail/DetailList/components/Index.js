import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar, Toast } from 'antd-mobile'
import DetailListItem from './DetailListItem'
import Header from '../../../../components/Header'
import ADD_NOR from './imgs/add_nor.png'
import Service from '../../../../services/Service'
import WX from 'weixin-js-sdk'
import './Index.scss'

class DetailList extends React.Component {
  state = {
    value: ''
  }
  componentDidMount () {
    const { query } = this.props.location
    this.props.get_detail_list({ plant_id: query.plant_id })
  }
  render () {
    console.log(this.props.detailList.detailList)
    let detailListData
    if (this.props.detailList.detailList) {
      detailListData = this.props.detailList.detailList
    }
    const createModule = () => {
      WX.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: (res) => {
          const moduleSn = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          const formData = {
            module_sn: moduleSn,
            plant_id: this.props.location.query.plant_id
          }
          Service.addModule(formData).then(data => {
            if (data.errno === 0) {
              const { query } = this.props.location
              this.props.get_detail_list({ plant_id: query.plant_id })
              Toast.info('添加成功')
            } else {
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
          <div className='add_module' onClick={createModule}><img src={ADD_NOR} alt='' /><br />添加逆变器</div>
        </div>
        <DetailListItem detailListData={detailListData} deleteModule={this.deleteModule} />
      </div>
    )
  }
  onChange= (value) => {
    this.setState({ value })
  };
  // 删除模块
  deleteModule = (params) => {
    Service.deleteMdule(params).then(data => {
      if (data.errno === 0) {
        Toast.success('删除成功')
        this.props.get_detail_list()
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
}
DetailList.propTypes = {
  location: PropTypes.object.isRequired,
  detailList: PropTypes.object.isRequired,
  get_detail_list:PropTypes.func.isRequired
}

export default DetailList
