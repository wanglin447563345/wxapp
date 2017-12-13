import React from 'react'
import { Button, WhiteSpace, Toast } from 'antd-mobile'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import './Index.scss'
import Services from '../../../services/Service'
import Util from '../../../util/Util'

function SelectImport (location) {
  const openId = location.location.query.openid
  const JumpLogin = () => {
    const formData = {
      openid : openId
    }
    Services.jumpLogin(formData).then(data => {
      if (data) {
        if (data.errno === 0) {
          const userInfo = {
            token:data.data.token,
            userId:data.data.user_id
          }
          Util.setCookie('user_info', JSON.stringify(userInfo))
          browserHistory.push(`/wx/create`)
        } else {
          Toast.fail('跳转失败')
        }
      } else {
        Toast.fail('服务器异常，请稍后再试')
      }
    })
  }
  return (
    <div className='import'>
      <div className='bg'>
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
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Button type='warning' onClick={() => { browserHistory.push(`/wx/login?openid=${openId}`) }}>绑定已有账号</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button type='primary' onClick={JumpLogin}> 跳过 </Button>
      </div>
    </div>
  )
}

SelectImport.propTypes = {
  location: PropTypes.object.isRequired
}
export default SelectImport
