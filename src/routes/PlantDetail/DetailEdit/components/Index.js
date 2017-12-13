import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../../components/Header'
import { createForm } from 'rc-form'
import { district, provinceLite as province } from 'antd-mobile-demo-data'
import { List, InputItem, Picker, Modal, Toast } from 'antd-mobile'
import arrayTreeFilter from 'array-tree-filter'
import './Index.scss'
const alert = Modal.alert

class EditForm extends React.Component {
  state = {
    Editing:false,
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
    visible: false
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: province
      })
    }, 120)
  };
  getSel () {
    const value = this.state.pickerValue
    if (!value) {
      return ''
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level])
    return treeChildren.map(v => v.label).join(',')
  }
  render () {
    const { query } = this.props.location
    const plant_name='电站1'
    const { getFieldProps } = this.props.form;
    return (
      <div className='edit'>
        <div style={{ height: '100%', overflow: 'auto' }}>
          <div className='detail_header'>
            <Header title={`${plant_name}详情`} />
          </div>
          <div className='edit_avatar'>
            {this.state.Editing ? <div onClick={() => alert('修改', '确定保存修改内容吗？', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确定', onPress: () => this.EditSubmit() }
            ])}>完成</div> : <div onClick={() => this.setState({ Editing:true })}>编辑</div>}
            <p>
              <img src='http://imgsrc.baidu.com/imgad/pic/item/500fd9f9d72a6059dc3098232334349b033bbae3.jpg' alt='' />
            </p>
            <span>上传/修改</span>
          </div>
          <div className='edit_info'>
            <List>
              <p>电站信息</p>
              <InputItem
                {...getFieldProps('plant_name')}
                clear
                placeholder='输入电站名称'
                editable={this.state.Editing}
              >电站名称</InputItem>
              <InputItem
                {...getFieldProps('system_size')}
                placeholder='装机容量'
                type='number'
                clear
                editable={this.state.Editing}
                moneyKeyboardAlign='left'
              >装机容量</InputItem>
              <InputItem
                {...getFieldProps('price')}
                placeholder='单位电价'
                type='number'
                clear
                editable={this.state.Editing}
                moneyKeyboardAlign='left'
              >单位电价</InputItem>
              <p>地理位置</p>
              <Picker
                data={district}
                cols={1}
                disabled={!this.state.Editing}
                {...getFieldProps('district1')}
                className="forss">
                <List.Item arrow="horizontal">时区</List.Item>
              </Picker>
              <Picker
                data={district}
                cols={1}
                disabled={!this.state.Editing}
                {...getFieldProps('district2')}
                className="forss">
                <List.Item arrow="horizontal">国家</List.Item>
              </Picker>
              <Picker
                visible={this.state.visible}
                data={district}
                value={this.state.pickerValue}
                disabled={!this.state.Editing}
                onChange={v => this.setState({ pickerValue: v })}
                onOk={() => this.setState({ visible: false })}
                onDismiss={() => this.setState({ visible: false })}
              >
                <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })} arrow='horizontal'>
                  地区
                </List.Item>
              </Picker>
            </List>
          </div>
        </div>
      </div>
    )
  }
  EditSubmit = () => {
    Toast.success('修改保存成功')
    this.setState({ Editing:false })
  }
}
EditForm.propTypes = {
  location: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}
const DetailEdit = createForm()(EditForm)
export default DetailEdit
