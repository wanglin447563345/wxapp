import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile'
import { browserHistory } from 'react-router'
import { createForm } from 'rc-form'
import Service from '../../../services/Service'
import Util from '../../../util/Util'
import './Index.scss'

import EMAIL_NOR from './imgs/email_nor.png'
import EMAIL_SEL from './imgs/email_sel.png'

class AgencyEmailForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailFocus: false
    }
  }
  render () {
    const { getFieldProps, getFieldValue } = this.props.form
    return (
      <div className='agency_email'>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <InputItem
          {...getFieldProps('agencyEmail', {
            initialValue: ''
          })}
          onFocus={() => this.emailFocus(true)}
          onBlur={() => this.emailFocus(false)}
          placeholder='请输入经销商邮箱'
        >
          {this.state.emailFocus ? <img src={EMAIL_SEL} alt='' /> : <img src={EMAIL_NOR} alt='' /> }
        </InputItem>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <div style={{ display:'flex', justifyContent:'center' }}>
          <Button
            type='primary'
            onClick={() => this.submitEmail(getFieldValue('agencyEmail'))}
            style={{ display:'inline-block', width: '120px' }}
          >确定</Button>
          <Button
            type='primary'
            onClick={this.jumpAddPlant}
            style={{ display:'inline-block', width: '120px', marginLeft: '15px' }}
          >跳过</Button>
        </div>
      </div>
    )
  }
  // 输入框获取时区焦点图标颜色
  emailFocus = (bool) => {
    this.setState({
      emailFocus: bool
    })
  }

  // 确定
  submitEmail = (emailValue) => {
    if (Util.checkName(emailValue)) {
      Service.checkAgencyEmail({ email: emailValue }).then(data => {
        if (data) {
          if (data.errno === 0) {
            const moduleSn = this.props.location.query.module_sn
            browserHistory.push(`/wx/add?module_sn=${moduleSn}&email=${emailValue}`)
          } else {
            Toast.info(data.errmsg)
          }
        } else {
          Toast.info('服务器异常,请稍后再试!!')
        }
      })
    } else {
      Toast.info('不合法邮箱')
    }
  }
  // 跳过
  jumpAddPlant = () => {
    const moduleSn = this.props.location.query.module_sn
    browserHistory.push(`/wx/add?module_sn=${moduleSn}`)
  }
}
// 用户名输入框获取到焦点时改变图标颜色
AgencyEmailForm.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}
const AgencyEmail = createForm()(AgencyEmailForm)

export default AgencyEmail
