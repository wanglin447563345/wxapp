import React from 'react'
import PropTypes from 'prop-types'
import WX from 'weixin-js-sdk'
import Header from '../../../../components/Header'
import { createForm } from 'rc-form'
import Service from '../../../../services/Service'
import { List, InputItem, Picker, Modal, Toast, TextareaItem } from 'antd-mobile'
import './Index.scss'
const alert = Modal.alert
const currency = [
  { value: 0, label: 'RMB' },
  { value: 1, label: '€' },
  { value: 2, label: 'A$' }
]
const time_zoom = [
  { value: 0, label: '8' }
]
class EditForm extends React.Component {
  state = {
    initCurrency:'',
    Editing:false,
    basisInfo: '',
    areaData: '',
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    imgInfo: {}
  };

  // 更改图片
  changeImg = () => {
    WX.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        WX.uploadImage({
          localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: res => {
            let serverId = res.serverId // 返回图片的服务器端ID
          }
        })
        WX.getLocalImgData({ // 注意ios上localIdb当作img标签的src属性无法显示图片， 要通过这个方法转成base64才可以
          localId: localIds[0], // 图片的localID
          success: function (res) {
            let localData = res.localData // localData是图片的base64数据，可以用img标签显示
            this.setState({ imgInfo: { url: localData } })
          }
        })
      }
    })
  }

  // 获取省数据
  getProvince = async (params) => {
    let dataChildren = await this.getCity({ parent_id: this.state.asyncValue[1] })
    Service.getLocationList(params).then(data => {
      if (data.errno === 0) {
        const provinceData = []
        for (let i = 0; i < data.data.length; i++) {
          const item = {
            value: data.data[i].location_id,
            label: data.data[i].location_name
          }
          provinceData.push(item)
        }
        for (let i = 0; i < provinceData.length; i++) {
          if (provinceData[i].value === this.state.asyncValue[1]) {
            provinceData[i].children = dataChildren
          }
        }
        this.setState({
          areaData: [
          { value: 48, label: '中国', children:provinceData }
          ],
          cols: 3
        })
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
  // 获取城市数据
  getCity = (params) => {
    return new Promise((resolve, reject) => {
      Service.getLocationList(params).then(data => {
        let cityData = []
        if (data.errno === 0) {
          for (let i = 0; i < data.data.length; i++) {
            const item = {
              value: data.data[i].location_id,
              label: data.data[i].location_name
            }
            cityData.push(item)
          }
          resolve(cityData)
        } else {
          reject(data.errmsg)
        }
      })
    })
  }
  // 异步加载城市数据
  onPickerChange = async (val) => {
    let dataChildren = await this.getCity({ parent_id: val[1] })
    const data = this.state.areaData[0].children
    const valData = val
    for (let i = 0; i < data.length; i++) {
      delete data[i].children
      if (data[i].value === val[1]) {
        let cityData = dataChildren
        data[i].children = cityData
        if (valData.length < 3) {
          valData.push(cityData[0].value)
        }
      }
    }
    this.setState({
      areaData: [{ value: 48, label: '中国', children:data }],
      asyncValue: valData
    })
  }

  // 获取电站基本信息
  getBasisInfo = (params) => {
    Service.getPlantInfo(params).then(data => {
      if (data.errno === 0) {
        this.setState({
          basisInfo:data.data,
          areaData: [{
            value: data.data.country_id,
            label: data.data.country,
            children: [{
              value: data.data.province_id,
              label: data.data.province,
              children:[{
                value: data.data.city_id,
                label: data.data.city
              }]
            }]
          }],
          asyncValue: [data.data.country_id, data.data.province_id, data.data.city_id],
          imgInfo: {
            url: `/assets/attachment${data.data.url}`,
            id: data.data.attachment_id
          }
        })
        for (let i = 0; i < currency.length; i++) {
          if (data.data.currency === currency[i].label) {
            this.setState({ initCurrency:currency[i].value })
          }
        }
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
  componentDidMount () {
    const { query } = this.props.location
    this.getBasisInfo({ plant_id: query.plant_id })
  }
  render () {
    const { getFieldProps, getFieldsValue } = this.props.form
    const { basisInfo, initCurrency, areaData, asyncValue, Editing, imgInfo } = this.state
    return (
      <div className='edit'>
        <div style={{ height: '100%', overflow: 'auto' }}>
          <div className='detail_header'>
            <Header title={`${basisInfo.plant_name}详情`} />
          </div>
          <div className='edit_avatar'>
            {Editing ? <div onClick={() => alert('修改', '确定保存修改内容吗？', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确定', onPress: () => this.EditSubmit(getFieldsValue()) }
            ])}>完成</div> : <div onClick={() => this.setState({ Editing:true })}>编辑</div>}
            <p>
              <img src={imgInfo.url} alt='' />
            </p>
            <span onClick={this.changeImg}>上传/修改</span>
          </div>
          <div className='edit_info'>
            <List>
              <p>电站信息</p>
              <InputItem
                {...getFieldProps('plant_name', {
                  initialValue: basisInfo.plant_name
                })}
                clear
                placeholder='输入电站名称'
                editable={Editing}
              >电站名称</InputItem>
              <InputItem
                {...getFieldProps('system_size', {
                  initialValue: basisInfo.system_size
                })}
                placeholder='装机容量'
                extra='kW'
                type='number'
                clear
                editable={Editing}
                moneyKeyboardAlign='left'
              >装机容量</InputItem>
              <div className='price'>
                <InputItem
                  {...getFieldProps('feed_in_tariff', {
                    initialValue: basisInfo.feed_in_tariff,
                    rules: [
                      {
                        required: true
                      }
                    ]
                  })}
                  placeholder='请输入电价'
                  type='number'
                  editable={Editing}
                >补助电价：
                </InputItem>
                <Picker
                  data={currency}
                  cols='1'
                  {...getFieldProps('currency', {
                    initialValue: [initCurrency],
                    rules: [
                      {
                        required: true
                      }
                    ]
                  })}
                  disabled={!Editing}
                >
                  <List.Item arrow='down' />
                </Picker>
              </div>
              <p>地理位置</p>
              <Picker
                data={time_zoom}
                cols={1}
                disabled={!Editing}
                {...getFieldProps('time_zone', {
                  initialValue: [time_zoom[0].value]
                })}
                className='forss'>
                <List.Item arrow='horizontal'>时区</List.Item>
              </Picker>
              <Picker
                data={areaData}
                cols={this.state.cols}
                {...getFieldProps('area', {
                  initialValue: asyncValue
                })}
                onPickerChange={this.onPickerChange}
                onOk={v => this.setState({ asyncValue: v })}
                onChange={v => this.setState({ asyncValue: v })}
                disabled={!Editing}
              >
                <List.Item
                  arrow='horizontal'
                  onClick={Editing ? () => this.getProvince({ parent_id: 48 }) : null}
                >
                  国省市
                </List.Item>
              </Picker>
              <TextareaItem
                {...getFieldProps('address', {
                  initialValue: basisInfo.address
                })}
                title='详细地址'
                autoHeight
                editable={Editing}
                labelNumber={5}
              />
            </List>
          </div>
        </div>
      </div>
    )
  }
  EditSubmit = (params) => {
    console.log(params)
    const formData = {
      plant_id: this.props.location.query.plant_id,
      plant_name: params.plant_name,
      system_size: params.system_size,
      time_zone: time_zoom[params.time_zoom],
      feed_in_tariff: params.feed_in_tariff,
      currency: currency[params.currency].label,
      country_id: params.area[0],
      province_id: params.area[1],
      city_id: params.area[2],
      address: params.address
    }
    Service.editPlantInfo(formData).then(data => {
      if (data.errno === 0) {
        Toast.success('修改保存成功')
        this.setState({ Editing:false })
      } else {
        Toast.fail(data.errmsg)
      }
    })
  }
}
EditForm.propTypes = {
  location: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}
const DetailEdit = createForm()(EditForm)
export default DetailEdit
