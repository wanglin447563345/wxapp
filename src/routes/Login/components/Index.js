import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import md5 from 'md5'
import Services from '../../../services/Service'
import Util from '../../../util/Util'

import ACCOUNT_NOR from './imgs/account_nor.png'
import ACCOUNT_SEL from './imgs/account_sel.png'
import BG_PIC from './imgs/bg_pic.png'
import PASSWORD_NOR from './imgs/password_nor.png'
import PASSWORD_SEL from './imgs/password_sel.png'
import PASSWORD_ON from './imgs/password_on.png'
import PASSWORD_OFF from './imgs/password_off.png'

import './Index.scss'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nameFocus: false,
      passFocus: false,
      visible:false
    }
  }

  render () {
    const { getFieldProps } = this.props.form
    return (
      <div className='login'>
        <div className='login_header'>
          <img src={BG_PIC} alt='' />
        </div>
        <div className='login_bottom'>
          <List>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem
              {...getFieldProps('userName', {
                initialValue: '',
                rules: [
                  {
                    required: true
                  }
                ]
              })}
              onFocus={() => this.nameFocus(true)}
              onBlur={() => this.nameFocus(false)}
              placeholder='请输入手机或邮箱'
              autoFocus
            >
              {this.state.nameFocus ? <img src={ACCOUNT_SEL} alt='' /> : <img src={ACCOUNT_NOR} alt='' /> }
            </InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem
              {...getFieldProps('password', {
                initialValue: '',
                rules: [
                  {
                    required: true
                  }
                ]
              })}
              type={this.state.visible ? 'text' : 'password'}
              placeholder='请输入密码'
              onFocus={() => this.passFocus(true)}
              onBlur={() => this.passFocus(false)}
            >
              {this.state.passFocus ? <img src={PASSWORD_SEL} alt='' /> : <img src={PASSWORD_NOR} alt='' /> }
              <img src={this.state.visible ? PASSWORD_ON : PASSWORD_OFF} alt='' onClick={this.isVisible} />
            </InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
            <Button type='primary' onClick={this.bindingLogin}>绑定</Button>
          </List>
        </div>
      </div>
    )
  }
  // 用户名输入框获取到焦点时改变图标颜色
  nameFocus= (bool) => {
    this.setState({
      nameFocus: bool
    })
  }
  // 密码输入框获取到焦点时改变图标颜色
  passFocus= (bool) => {
    this.setState({
      passFocus: bool
    })
  }
  // 改变密码是否可见
  isVisible=() => {
    let nowVisible = this.state.visible
    this.setState({
      visible:!nowVisible
    })
  }

  // 绑定登录
  bindingLogin= () => {
    const openId = this.props.location.query.openid
    const formObj = this.props.form.getFieldsValue()
    const userName = formObj.userName
    const password = formObj.password
    if (userName && password) {
      const formData = {
        openid: openId,
        user_name: Util.replaceBlank(userName),
        password: md5(password)
      }
      Services.bindingLogin(formData).then(data => {
        if (data) {
          if (data.errno === 0) {
            const userInfo = {
              token:data.data.token,
              userId: data.data.user_id
            }
            Util.setCookie('user_info', JSON.stringify(userInfo))
            if (data.data.plant_num) {
              browserHistory.push('/wx/')
            } else {
              browserHistory.push('/wx/create')
            }
          } else {
            Toast.info(data.errmsg)
          }
        } else {
          Toast.info('服务器异常，请稍后再试！')
        }
      })
    } else {
      Toast.info('用户名和密码不能为空')
    }
  }
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}
const Login = createForm()(LoginForm)

export default Login
