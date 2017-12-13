import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import EDIT from './imgs/edit.png'
import EMAIL_NOR from './imgs/email_nor.png'
import EMAIL_SEL from './imgs/email_sel.png'
import PHONE_NOR from './imgs/phone_nor.png'
import PHONE_SEL from './imgs/phone_sel.png'
import Service from '../../../services/Service'
import Util from '../../../util/Util'
import './Index.scss'
const alert = Modal.alert

class EditFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit:false
    }
  }
  componentDidMount () {
    this.props.get_user_info()
  }
  render () {
    const { getFieldProps } = this.props.form
    const { userInfo } = this.props.user
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
            <div><span>用户名</span><p>{userInfo ? userInfo.user_name : null}</p></div>
          </div>
        </div>
        <div className='user_info'>
          <List >
            <WhiteSpace />
            <WhiteSpace />
            <InputItem
              {...getFieldProps('user_email', {
                initialValue: userInfo ? userInfo.email : null,
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
                initialValue: userInfo ? userInfo.mobile : null,
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
    const formObj = this.props.form.getFieldsValue()
    const formData = {
      user_id: 519029,
      email: formObj.user_email,
      mobile:formObj.user_phone
    }
    let checkResult
    if (formObj.user_phone) {
      checkResult = (Util.checkEmail(formObj.user_email) && Util.checkPhone(Util.replaceBlank(formObj.user_phone)))
    } else {
      checkResult = Util.checkEmail(formObj.user_email)
    }
    if (checkResult) {
      Service.updateUserInfo(formData).then(data => {
        if (data.errno === 0) {
          this.props.get_user_info()
          Toast.success('修改成功')
          this.setState({
            isEdit:false
          })
        } else {
          Toast.fail(data.errmsg)
        }
      })
    } else {
      Toast.info('邮箱或手机号不合法')
    }
  }
}

EditFrom.propTypes = {
  form: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  get_user_info: PropTypes.func.isRequired
}
const User = createForm()(EditFrom)
export default User
