import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import './Index.scss'

import ARROW_L from '../imgs/arrow_l.png'

function Header (props) {
  return (
    <div className='header'>
      <span onClick={() => browserHistory.push('/wx/list')}><img src={ARROW_L} alt='' />返回列表</span>
      <p>{ props.title }</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
