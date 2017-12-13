
import React from 'react'
import { ActivityIndicator } from 'antd-mobile'
import { browserHistory } from 'react-router'
import Util from '../../../util/Util'

function Jump (location) {
  const Type = location.location.query.type
  if (Type === '1') {
    const openId = location.location.query.openid
    browserHistory.push(`/wx/import?openid=${openId}`)
  } else {
    const plantNum = location.location.query.plant_num
    const userToken = location.location.query.token
    const userId = location.location.query.user_id
    const UserInfo = {
      token:userToken,
      userId:userId
    }
    Util.setCookie('user_info', JSON.stringify(UserInfo))
    if (plantNum === '0') {
      browserHistory.push(`/wx/create`)
    } else {
      browserHistory.push(`/wx/`)
    }
  }
  return (
    <div className='container'>
      <ActivityIndicator toast text='正在跳转...' />
    </div>
  )
}

export default Jump
