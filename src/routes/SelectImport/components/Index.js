import React, { Component } from 'react'
import { Button, WhiteSpace } from 'antd-mobile'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import './Index.scss'

class SelectImport extends Component {
  render () {
    return (
      <div className='import'>
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
        <Button type='warning' onClick={() => { browserHistory.push('/login') }}>绑定已有账号</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button type='primary' onClick={() => { browserHistory.push('/create') }}> 跳过 </Button>
      </div>
    )
  }
}

SelectImport.propTypes = {
}
export default SelectImport
