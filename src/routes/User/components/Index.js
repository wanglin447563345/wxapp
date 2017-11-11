import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import EDIT from './imgs/edit.png'
import EMAIL_NOR from './imgs/email_nor.png'
import EMAIL_SEL from './imgs/email_sel.png'
import PHONE_NOR from './imgs/phone_nor.png'
import PHONE_SEL from './imgs/phone_sel.png'
import './Index.scss'
const alert = Modal.alert

class EditFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit:false
    }
  }
  render () {
    const { getFieldProps } = this.props.form
    return (
      <div className='user'>
        <div className='user_header'>
          <div className='user_edit' onClick={this.isEdit} >
            编辑 <img src={EDIT} alt='' />
          </div>
          <div className='user_avatar'>
            <p className='avatar'>
              <img src='http://img5.imgtn.bdimg.com/it/u=3551563550,2594280103&fm=27&gp=0.jpg' alt='' />
            </p>
            <div><span>用户名</span><p>王林</p></div>
          </div>
        </div>
        <div className='user_info'>
          <List >
            <WhiteSpace />
            <WhiteSpace />
            <InputItem
              {...getFieldProps('useremail', {
                initialValue: '',
                rules: [
                  {
                    required: true
                  }
                ]
              })}
              type='email'
              placeholder='请输入邮箱'
              editable={this.state.isEdit}
            >
              {this.state.isEdit ? <img src={EMAIL_SEL} alt='' /> : <img src={EMAIL_NOR} alt='' /> }
            </InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem
              {...getFieldProps('user_phone', {
                initialValue: '',
                rules: [
                  {
                    required: true
                  }
                ]
              })}
              type='phone'
              placeholder='请输入手机号'
              editable={this.state.isEdit}
            >
              {this.state.isEdit ? <img src={PHONE_SEL} alt='' style={{ width:14 }} /> : <img src={PHONE_NOR} alt='' style={{ width:14 }} /> }
            </InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
            <Button type='primary' disabled={!this.state.isEdit} onClick={() => alert('提示', '是否保存修改?', [
              { text: '否', onPress: () => console.log('cancel') },
              {
                text: '是',
                onPress: () => this.editComplete()
              }
            ])}
            >完成</Button>
          </List>
        </div>
      </div>
    )
  }
  isEdit= () => {
    this.setState({
      isEdit:true
    })
  }
  editComplete= () => {
    Toast.success('修改保存成功')
    this.setState({
      isEdit:false
    })
  }
}

EditFrom.propTypes = {
  form: PropTypes.object.isRequired
}
const User = createForm()(EditFrom)
export default User
